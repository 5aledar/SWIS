import { columns } from "@/features/payment/components/columns"
import { DataTable } from "@/features/payment/components/data-table"
import { data } from "@/features/payment/lib/fake-payment"

const Paayments = () => {
  return (
        <div className="w-full p-4">
          <DataTable columns={columns} data={data} />
        </div>
  )
}

export default Paayments