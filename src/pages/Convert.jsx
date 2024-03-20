import { Button, Card, Pagination, Table, Tabs, TextInput } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import {HiSearch, HiFilter} from 'react-icons/hi'
import apiRequest from '../helpers/HttpRequestHelper'
import { Link } from 'react-router-dom'
const Convert = () => {
  const [transactions, setTransactions] = useState([])

  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);

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
    <Card className='mt-10'>
    <div className='flex justify-between'>
      <TextInput icon={HiSearch} className='w-60'/>
      <div className='flex gap-2'>
        <TextInput icon={HiFilter} value="Filter" className='w-40' disabled/>
        <Link to="/convert/rates"><Button className='rounded-none' color='blue'>CHANGE EXCHANGE RATE</Button></Link>
      </div>
    </div>
    <div className='overflow-x-auto'>
        <Table>
          <Table.Head>
            <Table.HeadCell>Time</Table.HeadCell>
            <Table.HeadCell>Date</Table.HeadCell>
            <Table.HeadCell>Transaction ID</Table.HeadCell>
            <Table.HeadCell>Customer ID</Table.HeadCell>
            <Table.HeadCell>From</Table.HeadCell>
            <Table.HeadCell>To</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
          </Table.Head>
          <Table.Body className='divide-y'>
            {paginatedTransactions.map(transaction =>(
              <Table.Row>
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

            <Table.Row>
              <Table.Cell>2.20pm</Table.Cell>
              <Table.Cell>17/03/22</Table.Cell>
              <Table.Cell>LQ478488485</Table.Cell>
              <Table.Cell>Francis Ifeanyi</Table.Cell>
              <Table.Cell>NGN 14,000</Table.Cell>
              <Table.Cell>USD 10</Table.Cell>
              <Table.Cell>
                <div class="rounded-lg bg-red-400 p-2 flex items-center justify-center h-full">
                  Failed
                </div>

              </Table.Cell>
              <Table.Cell>
                <Button size="xs" outline gradientDuoTone="purpleToBlue">View Details</Button>
                {/* {isDropdownVisible && (
                    <div className='absolute mt-2 '>
                    <div className='bg-white rounded-md shadow-lg p-2'>
                        <p>Hello</p>
                    </div>
                    </div>
                )} */}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>2.20pm</Table.Cell>
              <Table.Cell>17/03/22</Table.Cell>
              <Table.Cell>LQ478488485</Table.Cell>
              <Table.Cell>Francis Ifeanyi</Table.Cell>
              <Table.Cell>NGN 14,000</Table.Cell>
              <Table.Cell>USD 10</Table.Cell>
              <Table.Cell>
                <div class="rounded-lg bg-yellow-300 p-2 flex items-center justify-center h-full ">
                  Pending
                </div>

              </Table.Cell>
              <Table.Cell>
                {/* <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  ...
                </a> */}
                <Button size="xs" outline gradientDuoTone="purpleToBlue">View Details</Button>

              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <div className='"flex overflow-x-auto sm:justify-center'>
          <Pagination  currentPage={currentPage} totalPages={pages}  onPageChange={onPageChange} showIcons/>
        </div>
    </div>
  </Card>
  )
}

export default Convert