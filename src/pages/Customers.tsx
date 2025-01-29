import { columns } from '@/features/customers/components/columns'
import { DataTable } from '@/features/customers/components/data-table'
import { customers } from '@/features/customers/lib/fake-customers'

const Customers = () => {
  return (
    <div className='w-full p-4'>
        <DataTable columns={columns} data={customers} />
    </div>
  )
}

export default Customers