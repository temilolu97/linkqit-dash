import { Button, Card, Pagination, Spinner, Table, Tabs, TextInput} from 'flowbite-react';
import React, { useEffect, useRef, useState } from 'react';
import { HiSearch, HiFilter } from 'react-icons/hi';
import apiRequest from '../helpers/HttpRequestHelper';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Transactions = () => {
  let {setTransactionsCount, transactionsCount} = useAuth()
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  //const [activeTab, setActiveTab] = useState('All Transactions'); 
  const tabsRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(true);

  const onPageChange = (page) => setCurrentPage(page);
  const startIndex = (currentPage - 1) * 10;
  let filteredTransactions;
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
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        setLoading(true)
        let token = localStorage.getItem("token");
        let response = await apiRequest("get", "/transactions/all", null, { "Authorization": `Bearer ${token}` });
        console.log(response.data);
        setTransactions(response.data);
        setTransactionsCount(response.data.length)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching transactions:", error);
        setLoading(false)
      }
    };
    fetchTransactions();
  }, [currentPage]);

  const paginatedTransactions = transactions.slice((currentPage - 1) * 10, currentPage * 10);

  const filterTransactions = (type) => {
    setActiveTab(type);
  };

  // Filter transactions based on active tab
  filteredTransactions = activeTab === 0 ? transactions :activeTab ===1? 
  transactions.filter(transaction =>transaction.transactionReference.startsWith('LQT-PAYOUT')): activeTab ===2 ? transactions.filter(transaction =>transaction.transactionReference.startsWith('LQT-BILLS')) : activeTab === 3 ? transactions.filter(transaction =>transaction.transactionReference.startsWith('LQT-AIRTIME')) : transactions;

  transactionsCount = filteredTransactions.length
  const totalAmount = filteredTransactions.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);
  console.log(transactionsCount);
  return (
    <div className='w-full'>
      <div className=' mb-4 w-full'>
        {/* <p className='font-bold text-lg'>Welcome {user.firstName} {user.lastName}</p> */}
        <p className='text-lg font-bold text-left'>Transactions</p>
      </div>
      <Card className='flex  md:flex-row justify-between'>
        <div className='flex gap-4'>
          <Card>
            <p>Total Transaction Value</p>
            <h3 className='text-lg font-bold'>NGN {totalAmount.toFixed(2)} </h3>
          </Card>
          <Card>
            <p>Transactions Count</p>
            <p className='text-lg font-bold'>{transactionsCount}</p>
          </Card>
        </div>
       
      </Card>
      <Card className='mt-10'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <TextInput icon={HiSearch} className='w-full md:w-60' placeholder="Search..." />
          <TextInput icon={HiFilter} value="Filter" className=' md:mt-0 md:w-40' disabled />
        </div>
        <div className>
          <div className='ml-auto mt-4 md:mt-0'>
            <Tabs ref={tabsRef} onActiveTabChange={(tab) => setActiveTab(tab)}>
              <Tabs.Item title="All Transactions" onClick={() =>{ tabsRef.current?.setActiveTab(0); filterTransactions('All Transactions')} }/>
              <Tabs.Item title="Transfers" onClick={() =>{ tabsRef.current?.setActiveTab(1); filterTransactions('Transfers')}} />
              <Tabs.Item title="Bills" onClick={() => { tabsRef.current?.setActiveTab(2); filterTransactions('Bills')}} />
              <Tabs.Item title="Airtime" onClick={() => { tabsRef.current?.setActiveTab(1); filterTransactions('Airtime')}} />
            </Tabs>
          </div>
          {loading ? (
            <Spinner size="xl"/>
          ): (
          <Table>
            <Table.Head className='normal-case'>
              <Table.HeadCell>S/N</Table.HeadCell>
              <Table.HeadCell>Time</Table.HeadCell>
              <Table.HeadCell>Date</Table.HeadCell>
              <Table.HeadCell>Transaction ID</Table.HeadCell>
              <Table.HeadCell>Customer</Table.HeadCell>
              <Table.HeadCell>Payment Type</Table.HeadCell>
              <Table.HeadCell>Amount</Table.HeadCell>
              <Table.HeadCell>Status</Table.HeadCell>
            </Table.Head>
            {filteredTransactions.length ==0 ?(
              <p>No available record at this time</p>
            ):(
            <Table.Body className='divide-y'>
              {filteredTransactions.slice((currentPage - 1) * 10, currentPage * 10).map((transaction,index) => (
                <Table.Row key={transaction.transactionId}>
                  <Table.Cell>{startIndex + index+1}</Table.Cell>
                  <Table.Cell>{formatTime(transaction.dateCreated)}</Table.Cell>
                  <Table.Cell>{formatDate(transaction.dateCreated)}</Table.Cell>
                  <Table.Cell>{transaction.transactionReference}</Table.Cell>
                  <Table.Cell>Francis Ifeanyi</Table.Cell>
                  <Table.Cell>{transaction.productName}</Table.Cell>
                  <Table.Cell>{transaction.currency} {transaction.amount}</Table.Cell>
                  <Table.Cell>
                    <div className={`rounded-lg p-2 flex items-center justify-center h-full ${transaction.status.toLowerCase() === "completed" || transaction.status.toLowerCase() === "successful" ? 'bg-green-300' : 'bg-red-400'}`}>
                      {transaction.status}
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <Link to={`${transaction.transactionReference}`} state={transaction}>
                      <Button size="xs" outline gradientDuoTone="purpleToBlue">View Details</Button>
                    </Link>
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
    </div>
  );
}

export default Transactions;
