import { columns } from "@/features/branches/components/columns";
import { DataTable } from "@/features/branches/components/data-table";
import { useFetchBranches } from "@/features/branches/hooks/useFetchBranches";
import { Branch } from "@/features/branches/lib/types";


const Branches = () => {
  return (
    <div className="w-full p-4">
  <DataTable<Branch, any> columns={columns} />
    </div>
  );
};

export default Branches;
