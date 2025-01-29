import { columns } from "@/features/users/components/columns";
import { DataTable } from "@/features/users/components/data-table";
import { useFetchUsers } from "@/features/users/hooks/useFetchUsers";
import React from "react";

const Users = () => {
  const { data, error, isLoading } = useFetchUsers();
  console.log(data);
  
  return (
    <div className="w-full p-4">
     {!isLoading && <DataTable columns={columns} data={data!} />}
    </div>
  );
};

export default Users;
