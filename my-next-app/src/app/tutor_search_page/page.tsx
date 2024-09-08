"use client";

import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import { LatLngBounds } from "leaflet";

// Dynamically import the MapContainer, TileLayer, Marker, and Popup
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

export default function TutorSearchPage() {
  const [data, setData] = useState<any[]>([]);
  const [locations, setLocations] = useState<Record<string, [number, number]>>(
    {}
  );
  const mapRef = useRef<any>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_DJANGO_API_URL}`
        );
        if (!response.ok) throw new Error("Network response was not okay");
        const result = await response.json();
        setData(result);
        await geocodeLocations(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (Object.keys(locations).length > 0 && mapRef.current) {
      // Calculate bounds
      const bounds = new LatLngBounds(Object.values(locations));
      // Fit map to bounds
      mapRef.current.fitBounds(bounds);
    }
  }, [locations]);

  const geocodeLocations = async (tutors: any[]) => {
    const geocodePromises = tutors.map(async (tutor) => {
      if (tutor.location && !locations[tutor.location]) {
        try {
          const response = await axios.get(
            "https://nominatim.openstreetmap.org/search",
            {
              params: {
                q: tutor.location,
                format: "json",
                limit: 1,
              },
            }
          );
          const location = response.data[0];
          if (location) {
            setLocations((prev) => ({
              ...prev,
              [tutor.location]: [
                parseFloat(location.lat),
                parseFloat(location.lon),
              ],
            }));
          }
        } catch (error) {
          console.error(`Error geocoding location "${tutor.location}":`, error);
        }
      }
    });
    await Promise.all(geocodePromises);
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftContainer}>
        {data.map((tutor) => (
          <div key={tutor.name} style={styles.tutorCard}>
            <h2>{tutor.name}</h2>
            <p>Location: {tutor.location}</p>
            <p>Subjects: {tutor.subjects}</p>
            <p>Rating: {tutor.rating}</p>
            {tutor.profile_pics && (
              <img
                src={tutor.profile_pics}
                alt={`${tutor.name}'s profile`}
                style={styles.profileImage}
              />
            )}
          </div>
        ))}
      </div>
      <div style={styles.rightContainer}></div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh", // Full height of the viewport
  },
  leftContainer: {
    width: "50%",
    padding: "20px",
    overflowY: "scroll", // Allow scrolling if content overflows
  },
  rightContainer: {
    width: "50%",
  },
  map: {
    width: "100%",
    height: "100%", // Full height of the container
  },
  tutorCard: {
    marginBottom: "20px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  profileImage: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    marginTop: "10px",
  },
};
