import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/Navbar";
import {
  HomeIcon,
  Warehouse,
  User,
  GitBranch,
  Package,
  SwitchCamera
} from "lucide-react";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  const items = [
    {
      title: "Home",
      url: "/",
      icon: HomeIcon,
    },
    {
      title: "Warehouses",
      url: "/warehouses",
      icon: Warehouse
    },
    {
      title:'Users',
      url:'/users',
      icon:User
    },
    {
      title:'Branches',
      url:'/branches',
      icon:GitBranch
    },
    {
      title:'Items',
      url:'/items',
      icon:Package
    },
    {
      title: 'Transactions',
      url: '/transactions',
      icon: SwitchCamera
    }
  ];
  return (
    <div className="w-full flex">
      <div className="w-fit">
        <AppSidebar items={items} />
      </div>
      <div className="w-full">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
