import { Button, Card, Pagination, Spinner, Table, Tabs, TextInput } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import {HiSearch, HiFilter} from 'react-icons/hi'
import apiRequest from '../helpers/HttpRequestHelper'
import { Link } from 'react-router-dom'
const Convert = () => {
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);

  useEffect(()=>{
    const fetchTransactions =async () =>{
      setLoading(true);
      let token = localStorage.getItem("token")
      console.log(token);
      let response = await apiRequest("get","/transactions/all",null,{"Authorization":`Bearer ${token}`})
      setTransactions(response.data)
      setLoading(false);
      console.log(response.data)
    }
    fetchTransactions()
  }, [currentPage, 10])

  const filteredTransactions = transactions.filter(transaction => 
    transaction.transactionReference.startsWith('LQT-CONVERT')
  );
  let pages = Math.ceil(filteredTransactions.length/20)

  console.log(filteredTransactions);
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * 10,
    currentPage * 10
  );
  return (
    <>
    <div className=' mb-4 w-full'>
      {/* <p className='font-bold text-lg'>Welcome {user.firstName} {user.lastName}</p> */}
      <p className='text-lg font-bold text-left'>Convert</p>
    </div>
    <Card className='mt-10'>
    <div className='flex justify-between'>
      <TextInput icon={HiSearch} className='w-60'/>
      <div className='flex gap-2'>
        <TextInput icon={HiFilter} value="Filter" className='w-40' disabled/>
        <Link to="/convert/rates"><Button className='rounded-none' color='blue'>CHANGE EXCHANGE RATE</Button></Link>
      </div>
    </div>
    <div className='overflow-x-auto'>
      {loading ? (
        <Spinner size="xl"/>
      ):(
        <Table>
          <Table.Head className='normal-case'>
            <Table.HeadCell>S/N</Table.HeadCell>
            <Table.HeadCell>Time</Table.HeadCell>
            <Table.HeadCell>Date</Table.HeadCell>
            <Table.HeadCell>Transaction ID</Table.HeadCell>
            <Table.HeadCell>Customer ID</Table.HeadCell>
            <Table.HeadCell>From</Table.HeadCell>
            <Table.HeadCell>To</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
          </Table.Head>
          <Table.Body className='divide-y'>
            {paginatedTransactions.map((transaction,index) =>(
              <Table.Row>
                <Table.Cell>{index+1}</Table.Cell>
                <Table.Cell>2.20pm</Table.Cell>
                <Table.Cell>17/03/22</Table.Cell>
                <Table.Cell>{transaction.transactionReference}</Table.Cell>
                <Table.Cell>{transaction.customerId}</Table.Cell>
                <Table.Cell>{transaction.currency} {transaction.amount}</Table.Cell>
                <Table.Cell>{transaction.foreignCurrency} {transaction.foreignAmount}</Table.Cell>
                <Table.Cell>
                  <div class="rounded-lg bg-green-300 p-2 flex items-center justify-center h-full">
                    Success
                  </div>

                </Table.Cell>
                <Table.Cell>
                  {/* <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    ...
                  </a> */}
                  <Link to={`${transaction.transactionReference}`} state={transaction}>
                    <Button size="xs" outline gradientDuoTone="purpleToBlue">View Details</Button>
                  </Link>
                </Table.Cell>
              </Table.Row>
            ))}

          </Table.Body>
        </Table>)}
        <div className='flex overflow-x-auto sm:justify-center'>
          <Pagination  currentPage={currentPage} totalPages={pages}  onPageChange={onPageChange} showIcons/>
        </div>
    </div>
  </Card>
  </>
  )
}

export default Convert