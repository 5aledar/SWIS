import { ModeToggle } from "./mode-toggle";
import { SidebarTrigger } from "./ui/sidebar";


const Navbar = () => {
  return (
    <div className="w-full  h-[40px] border-b-[1px] px-4 border-b-[#E5E5E5] dark:border-b-[#262626] bg-[#FAFAFA] dark:bg-[#18181B] flex justify-between items-center">
      <SidebarTrigger />
      <div className="flex gap-2 items-center">
      
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
