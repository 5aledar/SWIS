import { columns } from "@/features/orders/components/columns"
import { DataTable } from "@/features/orders/components/data-table"
import { fakeCarts } from "@/features/orders/lib/fake-carts"

const Orders = () => {
  return (
    <div className="w-full p-4">
      <DataTable columns={columns} data={fakeCarts}/>
    </div>
  )
}

export default Orders