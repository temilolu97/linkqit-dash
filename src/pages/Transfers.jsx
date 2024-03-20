import { Button, Card, Dropdown, DropdownItem, Pagination, Table, TextInput } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { FaEllipsisH } from 'react-icons/fa'
import { HiSearch,HiFilter } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import apiRequest from '../helpers/HttpRequestHelper'

const Transfers = () => {
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        let token = localStorage.getItem("token");
        let response = await apiRequest("get", "/transactions/all", null, { "Authorization": `Bearer ${token}` });
        console.log(response.data);
        setTransactions(response.data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };
    fetchTransactions();
  }, [currentPage]);

  const filteredTransactions = transactions.filter(transaction =>transaction.transactionReference.startsWith('LQT-PAYOUT'));
  const paginatedTransactions = filteredTransactions.slice((currentPage - 1) * 10, currentPage * 10);
  console.log(filteredTransactions);
  return (
    <Card className='mt-10'>
        <div className='flex justify-between'>
          <TextInput icon={HiSearch} className='w-60'/>
          <Button color="gray" className='w-40'>
            <HiFilter/>Filter
          </Button>
        </div>
        <div className='overflow-x-auto'>
            <Table>
              <Table.Head>
                <Table.HeadCell>Time</Table.HeadCell>
                <Table.HeadCell>Date</Table.HeadCell>
                <Table.HeadCell>Transaction ID</Table.HeadCell>
                <Table.HeadCell>Customer</Table.HeadCell>
                <Table.HeadCell>Transfer Type</Table.HeadCell>
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
                  <Table.Cell>Local</Table.Cell>
                  <Table.Cell>{transaction.currency} {transaction.amount}</Table.Cell>
                  <Table.Cell>
                    <div className={`rounded-lg p-2 flex items-center justify-center h-full ${transaction.status.toLowerCase() === "completed" || transaction.status.toLowerCase() === "successful" ? 'bg-green-300' : 'bg-red-400'}`}>
                      {transaction.status}
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    {/* <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                      ...
                    </a> */}
                    <Dropdown label={<FaEllipsisH/>} arrowIcon={false} inline outline className='border-none' placement='bottom'>
                        <DropdownItem><Link to={`${transaction.transactionReference}`} state={transaction}>View Details</Link></DropdownItem>
                    </Dropdown>
                  </Table.Cell>
                </Table.Row>  
                ))}
              
              </Table.Body>
            </Table>
            <div className='flex justify-center'>
              <Pagination currentPage={currentPage} totalPages={Math.ceil(filteredTransactions.length / 10)} onPageChange={onPageChange} showIcons />
            </div>
        </div>
      </Card>
  )
}

export default Transfers