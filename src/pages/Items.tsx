import { columns } from "@/features/items/components/columns"
import { DataTable } from "@/features/items/components/data-table"
import { useFetchItems } from "@/features/items/hooks/useFetchItems"

const Items = () => {
    const {data,isLoading} = useFetchItems()
  return (
    <div>
        {!isLoading&&<DataTable columns={columns} data={data!} />}
    </div>
  )
}

export default Items