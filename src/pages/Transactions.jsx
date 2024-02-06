import { Button, Card, Pagination, Table, Tabs, TextInput } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import {HiSearch, HiFilter} from 'react-icons/hi'
import apiRequest from '../helpers/HttpRequestHelper'

const Transactions = () => {
  const [transactions, setTransactions] = useState([])
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);

  let pages = Math.ceil(transactions.length/20)
  console.log(pages);
  useEffect(()=>{
    const fetchTransactions =async () =>{
      let token = localStorage.getItem("token")
      console.log(token);
      let response = await apiRequest("get","/transactions/all",null,{"Authorization":`Bearer ${token}`})
      setTransactions(response.data)
      console.log(response.data)
    }
    fetchTransactions()
  }, [currentPage, 10])

  const paginatedTransactions = transactions.slice(
    (currentPage - 1) * 10,
    currentPage * 10
  );
  return (
    <>
      <Card className='flex'>
        <div className='flex justify-between'>
          <div>
            <p>Total transfer Value</p>
            <h3 className='text-lg font-bold'>NGN 0.00</h3>
          </div>
          <div>
            <Tabs>
              <Tabs.Item title="Transfers"></Tabs.Item>
              <Tabs.Item title="Bills"></Tabs.Item>
              <Tabs.Item title="Airtime"></Tabs.Item>
              <Tabs.Item title="Swap"></Tabs.Item>
            </Tabs>
          </div>
        </div>
        
      </Card>
      <Card className='mt-10'>
        <div className='flex justify-between'>
          <TextInput icon={HiSearch} className='w-60'/>
          <TextInput icon={HiFilter} value="Filter" className='w-40' disabled/>
        </div>
        <div className='overflow-x-auto'>
            <Table>
              <Table.Head>
                <Table.HeadCell>Time</Table.HeadCell>
                <Table.HeadCell>Date</Table.HeadCell>
                <Table.HeadCell>Transaction ID</Table.HeadCell>
                <Table.HeadCell>Customer</Table.HeadCell>
                <Table.HeadCell>Payment Type</Table.HeadCell>
                <Table.HeadCell>Amount</Table.HeadCell>
                <Table.HeadCell>Status</Table.HeadCell>
              </Table.Head>
              <Table.Body className='divide-y'>
                {paginatedTransactions.map(transaction=>(
                  <Table.Row>
                  <Table.Cell>2.20pm</Table.Cell>
                  <Table.Cell>17/03/22</Table.Cell>
                  <Table.Cell>{transaction.transactionReference}</Table.Cell>
                  <Table.Cell>Francis Ifeanyi</Table.Cell>
                  <Table.Cell>{transaction.productName}</Table.Cell>
                  <Table.Cell>{transaction.currency} {transaction.amount}</Table.Cell>
                  <Table.Cell>
                    {transaction.status.toLowerCase() =="completed" || transaction.status.toLowerCase() =="successful" ? 
                    <div class="rounded-lg bg-green-300 p-2 flex items-center justify-center h-full">
                      {transaction.status}
                    </div>:
                    <div class="rounded-lg bg-red-400 p-2 flex items-center justify-center h-full">
                      {transaction.status}
                    </div>
                    }
                  </Table.Cell>
                  <Table.Cell>
                    {/* <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                      ...
                    </a> */}
                    <Button size="xs" outline gradientDuoTone="purpleToBlue">View Details</Button>
                  </Table.Cell>
                </Table.Row>
                ))}
              </Table.Body>
            </Table>
            <div className='"flex overflow-x-auto sm:justify-center'>
              <Pagination  currentPage={currentPage} totalPages={pages}  onPageChange={onPageChange} showIcons/>
            </div>
        </div>
      </Card>
    </>
  )
}

export default Transactions