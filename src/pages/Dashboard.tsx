import { Outlet } from "react-router-dom";
const Dashboard =  () => {
 
   
  return (
    <div className="w-full p-4">
      <Outlet />
    </div>
  );
};

export default Dashboard;
