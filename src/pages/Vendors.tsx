import { columns } from '@/features/vendors/components/columns'
import { DataTable } from '@/features/vendors/components/data-table'
import { vendors } from '@/features/vendors/lib/fake-vendors'

const Vendors = () => {
  return (
    <div className='w-full p-4'>
        <DataTable columns={columns} data={vendors} />
    </div>
  )
}

export default Vendors