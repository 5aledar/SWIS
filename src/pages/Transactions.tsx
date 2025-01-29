import { columns } from '@/features/transactions/components/columns'
import { DataTable } from '@/features/transactions/components/data-table'
import { useFetchTransactions } from '@/features/transactions/hooks/useFetchTransactions'
const Transactions = () => {
    const {data , isLoading} = useFetchTransactions()
  return (
    <div className='w-full p-4'>
     {!isLoading &&   <DataTable columns={columns}  data={data!}/>}
    </div>
  )
}

export default Transactions