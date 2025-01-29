import { columns } from "@/features/branches/components/columns";
import { DataTable } from "@/features/branches/components/data-table";
import { useFetchBranches } from "@/features/branches/hooks/useFetchBranches";


const Branches = () => {
  const { data, isLoading } = useFetchBranches();
  return (
    <div className="w-full p-4">
      {!isLoading && <DataTable columns={columns} data={data!} />}
    </div>
  );
};

export default Branches;
