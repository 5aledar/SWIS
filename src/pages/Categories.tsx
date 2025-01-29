import { columns } from '@/features/categories/components/columns'
import { DataTable } from '@/features/categories/components/data-table'
import { fakeCategories } from '@/features/categories/lib/fake-categories'

const Categories = () => {
  return (
    <div className='w-full p-4'>
        <DataTable columns={columns} data={fakeCategories}/>
    </div>
  )
}

export default Categories