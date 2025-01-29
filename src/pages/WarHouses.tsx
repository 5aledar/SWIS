import { DataTable } from "@/features/warehouses/components/data-table";
import { columns } from "@/features/warehouses/components/columns";
import { useFetchHouses } from "@/features/warehouses/hooks/useFetchHouses";
import { WarehouseData } from "@/features/warehouses/lib/types";

const WarHouses = () => {
  const { data , isLoading } = useFetchHouses();
  
  

  return (
    <div className="w-full p-4">
    {!isLoading &&  <DataTable columns={columns} data={data} />}
    </div>
  );
};

export default WarHouses;
