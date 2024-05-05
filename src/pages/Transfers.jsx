import { Button, Card, Dropdown, DropdownItem, Pagination, Spinner, Table, TextInput } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { FaEllipsisH } from 'react-icons/fa'
import { HiSearch,HiFilter } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import apiRequest from '../helpers/HttpRequestHelper'
import { Helmet } from 'react-helmet'

const Transfers = () => {
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('')


  const onPageChange = (page) => setCurrentPage(page);
  const startIndex = (currentPage - 1) * 10;


  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        setLoading(true)
        let token = localStorage.getItem("token");
        let response = await apiRequest("get", "/transactions/all", null, { "Authorization": `Bearer ${token}` });
        setTransactions(response.data);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching transactions:", error);
        setLoading(false)
      }
    };
    fetchTransactions();
  }, [currentPage]);

  const filteredTransactions = transactions.filter(transaction =>transaction.transactionReference.startsWith('LQT-PAYOUT') 
  && transaction.transactionReference.toLowerCase().includes(searchQuery.toLowerCase()));
  const paginatedTransactions = filteredTransactions.slice((currentPage - 1) * 10, currentPage * 10);
  console.log(filteredTransactions);
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes();
    const ampm = date.getHours() >= 12 ? 'pm' : 'am';
    return `${hours}.${minutes}${ampm}`;
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear().toString().slice(-2);
    return `${day}/${month}/${year}`;
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };
  return (
    <>
    <Helmet>
      <title>Transfers</title>
    </Helmet>
    <div className=' mb-4 w-full'>
      {/* <p className='font-bold text-lg'>Welcome {user.firstName} {user.lastName}</p> */}
      <p className='text-lg font-bold text-left'>Transfers</p>
    </div>
    <Card className='mt-10'>
        <div className='flex justify-between'>
          <TextInput icon={HiSearch} className='w-60' value={searchQuery} onChange={handleSearchChange}/>
          <Button color="gray" className='w-40'>
            <HiFilter/>Filter
          </Button>
        </div>
        <div className='overflow-x-auto'>
          {loading ? <Spinner size="xl"/> : (
            <Table>
              <Table.Head className='normal-case'>
                <Table.HeadCell>S/N</Table.HeadCell>
                <Table.HeadCell>Time</Table.HeadCell>
                <Table.HeadCell>Date</Table.HeadCell>
                <Table.HeadCell>Transaction ID</Table.HeadCell>
                <Table.HeadCell>Customer</Table.HeadCell>
                <Table.HeadCell>Transfer Type</Table.HeadCell>
                <Table.HeadCell>Amount</Table.HeadCell>
                <Table.HeadCell>Status</Table.HeadCell>
              </Table.Head>
              {paginatedTransactions.length == 0 ? (
                  <p>No record available at the moment</p>
                ):
                (
              <Table.Body className='divide-y'>
                {paginatedTransactions.map((transaction,index)=>(
                  <Table.Row>
                  <Table.Cell>{startIndex +index +1}</Table.Cell>
                  <Table.Cell>{formatTime(transaction.dateCreated)}</Table.Cell>
                  <Table.Cell>{formatDate(transaction.dateCreated)}</Table.Cell>
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
              )}
            </Table>
            )}
            <div className='flex justify-center'>
              <Pagination currentPage={currentPage} totalPages={Math.ceil(filteredTransactions.length / 10)} onPageChange={onPageChange} showIcons />
            </div>
        </div>
      </Card>
    </>
  )
}

export default Transfers