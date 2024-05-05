import { Button, Card, Dropdown, DropdownItem, Pagination, Spinner, Table, Tabs, TextInput } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import {HiSearch, HiFilter} from 'react-icons/hi'
import apiRequest from '../helpers/HttpRequestHelper'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { FaEllipsisH } from 'react-icons/fa'
const Convert = () => {
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('')

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
    transaction.transactionReference.startsWith('LQT-CONVERT')  && transaction.transactionReference.toLowerCase().includes(searchQuery.toLowerCase())
  );
  let pages = Math.ceil(filteredTransactions.length/20)

  console.log(filteredTransactions);
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * 10,
    currentPage * 10
  );

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
      <title>Convert</title>
    </Helmet>
    <div className=' mb-4 w-full'>
      {/* <p className='font-bold text-lg'>Welcome {user.firstName} {user.lastName}</p> */}
      <p className='text-lg font-bold text-left'>Convert</p>
    </div>
    <Card className='mt-10'>
    <div className='flex justify-between'>
      <TextInput icon={HiSearch} placeholder='Search by Transaction Reference' className='w-60' value={searchQuery} onChange={handleSearchChange}/>
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
                <Table.Cell>{formatTime(transaction.dateCreated)}</Table.Cell>
                <Table.Cell>{formatDate(transaction.dateCreated)}</Table.Cell>
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
                  <Dropdown label={<FaEllipsisH/>} arrowIcon={false} inline outline className='border-none' placement='bottom'>
                        <DropdownItem><Link to={`${transaction.transactionReference}`} state={transaction}>View Details</Link></DropdownItem>
                    </Dropdown>

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