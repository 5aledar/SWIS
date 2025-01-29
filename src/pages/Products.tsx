import { columns } from '@/features/products/components/columns'
import { DataTable } from '@/features/products/components/data-table'
import { products } from '@/features/products/lib/fake-products'

const Products = () => {
  return (
    <div className='w-full p-4'>
        <DataTable  columns={columns} data={products}/>
    </div>
  )
}

export default Products