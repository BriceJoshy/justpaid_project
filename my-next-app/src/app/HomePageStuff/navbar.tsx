import "/src/app/globals.css";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { MenuIcon } from "lucide-react";

export default function NavBar() {
  return (
    <div className="navbar flex justify-between items-center p-5  max-w-[1440px] mx-auto ">
      <div className="logostuff flex items-center ml-0">
        <div>
          <Drawer>
            <DrawerTrigger>
              <MenuIcon className="menu-icon md:hidden m-6"></MenuIcon>
            </DrawerTrigger>
            <DrawerContent className="flex flex-col justify-center items-center h-full pt-6 bg-[#e5e7eb]">
              <div className="logoname bg-[url('/images/logo.svg')] bg-left bg-no-repeat bg-contain h-10 w-[50px] mt-10"></div>
              <p className="font-poppins text-2xl text-gray-800 font-extrabold  tracking-widest">
                Skilly
              </p>
              <DrawerHeader className="mb-4">
                <DrawerTitle className="text-center text-xl font-bold">
                  Welcome Back!
                </DrawerTitle>
              </DrawerHeader>

              <div className="w-[300px] mb-4 h-[40px]">
                <button className="w-full py-3  hover:bg-[#020617]  bg-[black] text-white font-bold rounded">
                  Sign In
                </button>
              </div>

              <div className="w-[300px] mb-4 h-[40px]">
                <button className="w-full py-3 border border-black text-gray-700 font-bold rounded mt-2">
                  Log In
                </button>
              </div>
              <p className="text-center text-gray-500 mt-7">
                Interested in{" "}
                <a href="#" className="text-black underline">
                  listing your services?
                </a>
              </p>
              <DrawerFooter className="bg-[#1e293b] h-[290px] w-full text-gray-400 ">
                <ul className="space-y-4 tracking-widest">
                  <li className="text-white font-semibold line">Skilly</li>
                  <li>About us</li>
                  <li>Careers</li>
                </ul>
                <ul className="space-y-4 tracking-widest mt-7">
                  <li className="text-white font-semibold line">Contact</li>
                  <li>1233@gmail.com</li>
                  <li>(91)-623-844-3655</li>
                </ul>
              </DrawerFooter>
              <DrawerClose asChild>
                <button className="absolute top-4 right-4 w-10 h-10  flex items-center justify-center text-lg font-bold focus:outline-none  space-x-2 p-2 hover:bg-gray-200 rounded">
                  <span className="sr-only">Close</span>
                  &times;
                </button>
              </DrawerClose>
            </DrawerContent>
          </Drawer>
        </div>
        <div className="logoname bg-[url('/images/logo.svg')] bg-left bg-no-repeat bg-contain h-10 w-[50px]"></div>
        <p className="font-poppins text-2xl text-gray-800 font-extrabold  tracking-widest">
          Skilly
        </p>
      </div>

      <div className="navbar-stuff flex items-center space-x-4 gap-4">
        <Dialog>
          <DialogTrigger className="text-base leading-[26px] tracking-normal normal-case h-12 font-medium flex items-center space-x-2 hover:bg-gray-200 p-2 rounded">
            <span>Browse</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </DialogTrigger>
          <DialogContent className="browse w-full max-w-7xl h-[500px] max-h-screen p-6 overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-3xl font-poppins">
                Discover the best tutors
              </DialogTitle>
              <DialogDescription className="text-1xl font-poppins">
                Find Your Ideal Tutor by Subject Specialty
              </DialogDescription>
              <hr className="border-t-1 border-gray-600 my-4" />
              <div className="">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16 font-semibold">
                  <div className="p-2 border-b border-gray-300">
                    Mathematics
                  </div>
                  <div className="p-2 border-b border-gray-300">Science</div>
                  <div className="p-2 border-b border-gray-300">Languages</div>
                  <div className="p-2 border-b border-gray-300">Music</div>
                  <div className="p-2 border-b border-gray-300">Art</div>
                  <div className="p-2 border-b border-gray-300">
                    Computer Programming
                  </div>
                  <div className="p-2 border-b border-gray-300">
                    Test Preparation
                  </div>
                  <div className="p-2 border-b border-gray-300">
                    Foreign Languages
                  </div>
                  <div className="p-2 border-b border-gray-300">Writing</div>
                  <div className="p-2 border-b border-gray-300">History</div>
                  <div className="p-2 border-b border-gray-300">Economics</div>
                  <div className="p-2 border-b border-gray-300">Physics</div>
                  <div className="p-2 border-b border-gray-300">Chemistry</div>
                  <div className="p-2 border-b border-gray-300">Biology</div>
                </div>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <div className="text-base leading-[26px] tracking-normal normal-case h-12 font-medium flex items-center space-x-2 p-2 hover:bg-gray-200 rounded">
          List your tutoring services
        </div>
        <div className="Login-Button text-base leading-[26px] tracking-normal normal-case h-12 font-medium flex items-center space-x-2 p-2 hover:bg-gray-200 rounded">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-1 outline-none focus:outline-none active:outline-none">
              <span>Log in</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuItem className="font-semibold text-1xl hover:bg-transparent hover:text-black focus:outline-none focus:bg-transparent">
                Students
              </DropdownMenuItem>
              <DropdownMenuItem className="pl-4">Log in</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="font-semibold text-1xl hover:bg-transparent hover:text-black focus:outline-none focus:bg-transparent">
                Tutors
              </DropdownMenuItem>
              <DropdownMenuItem className="pl-4">Log in</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="text-base leading-[26px] tracking-normal normal-case h-12 font-medium flex items-center space-x-2 p-2 hover:bg-[#334155] rounded bg-black text-white">
          Sign up
        </div>
      </div>
    </div>
  );
}
