"use client"
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/app/state";
import { Archive, Circle, CircleDollarSign, ClipboardCheck, Icon, Layout, LucideIcon, Menu, SlidersHorizontal, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


interface sidebarLinksProps {
  href:string,
  icon:LucideIcon,
  label:string,
  isCollapsed:boolean
}


 const SideBarLinks = ({href,icon:Icon,label,isCollapsed}: sidebarLinksProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || ( pathname === '/' && href === '/dashboard')
  return(
    <Link href={href}>
      <div className={`cursor-pointer flex items-center ${
        isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
      }   
      hover-text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
        isActive ? "bg-blue-200" : ""}`}>

        <Icon className="w-6 h-6 !text-gray-700"/>
        <span className={` ${isCollapsed ? "hidden" : "block"} font-medium text-gray-700`}>{label}</span>

      </div>

    </Link>
  )
}

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSideBarisCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed)

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSideBarisCollapsed))
  }

  const sideBarClassnames = `fixed flex flex-col
   ${isSideBarisCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
   } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;
  return (
    <div className={sideBarClassnames}>
        {/* header */}
      <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${isSideBarisCollapsed ? "px-5" : "px-8"}`}>
        <div>Logo</div>
        <h1 className={` ${isSideBarisCollapsed ? "hidden" : "block"} font-extrabold text-2xl`}>HexaGrow</h1>
        <button onClick={toggleSidebar} className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100">
        <Menu className="w-4 h-4"/>
        </button>
      </div>

      {/*links*/}

      <div className="flex-grow mt-8">
        <SideBarLinks label="Dashboard"
        icon={Layout}
        href="/dashboard"
        isCollapsed={isSideBarisCollapsed}
         /> 

        <SideBarLinks label="Inventory"
        icon={Archive}
        href="/inventory"
        isCollapsed={isSideBarisCollapsed}
         />

        <SideBarLinks label="Products"
        icon={ClipboardCheck}
        href="/products"
        isCollapsed={isSideBarisCollapsed}
         /> 

        <SideBarLinks label="Users"
        icon={User}
        href="/users"
        isCollapsed={isSideBarisCollapsed}
         />

        <SideBarLinks label="Settings"
        icon={SlidersHorizontal}
        href="/settings"
        isCollapsed={isSideBarisCollapsed}
         />

        <SideBarLinks label="Expenses"
        icon={CircleDollarSign}
        href="/expenses"
        isCollapsed={isSideBarisCollapsed}
         />
      
      </div>

      {/* footer */}
      <div className={`${isSideBarisCollapsed ? "hidden" : "block"} mb-10`}>
        <p className="text-center text-xs text-gray-500">&copy; 2024 HexaGrow</p>
      </div>
    </div>
  );
};

export default Sidebar;
