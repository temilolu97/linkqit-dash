import { Card, Table, Tabs } from 'flowbite-react'
import React, { useContext, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { useNavigate } from 'react-router-dom'
import 'chart.js/auto';
import { useAuth } from '../contexts/AuthContext';
import AnalyticsChart from '../components/AnalyticsChart';
import { Helmet } from 'react-helmet';

const Overview = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  let user = JSON.parse(localStorage.getItem("user"))
  let {transactionsCount, transactions} = useAuth()
  let totalAmount
  if(transactions){
    totalAmount = transactions.reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0);
  }
  else{
    totalAmount= 0;
  }

  const navigate= useNavigate()
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May','June','July','August','September','October','November','December'],
    datasets: [
      {
        label: 'Monthly inflows',
        data: [65, 59, 80, 81, 56,32,68,56,83,67,57,60],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
      {
        label: 'Monthly inflows',
        data: [12, 99, 78, 33, 45,32,78,50,33,34,68,69],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,194,194,0.4)',
      },
      
    ],
  };

  return (
    <>
    <Helmet>
      <title>Overview</title>
    </Helmet>
    <div className=' mb-4 w-full'>
      {/* <p className='font-bold text-lg'>Welcome {user.firstName} {user.lastName}</p> */}
      <p className='text-lg font-bold text-left'>Overview</p>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      <Card className='max-w-full'>
        <div>
          <p>Transaction Value</p>
          <p className='font-bold text-lg'>${totalAmount}</p>
        </div>
      </Card>
      <Card className='max-w-full'>
        <div>
            <p>Total Transactions</p>
            <p className='font-bold text-lg'>{transactionsCount}</p>
        </div>
      </Card>
      <Card className='max-w-full'>
        <div>
          <p>No of customers</p>
          <p className='font-bold text-lg'>0</p>
        </div>
      </Card>
    </div>
    <div className='mt-20'>
      <Card className='w-full'>
        
        {/* <div className='overflow-x-auto'>
            <div className=''>
              <Line data={data}/>
            </div>
        </div> */}
        <AnalyticsChart/>
      </Card>
    </div>
    <div className='mt-20'>
      <Card className='w-full'>
        <div className='flex'>
          <p className='font-bold text-lg'>Recent Activity</p>
        </div>
        <div>
          <Tabs>
              <Tabs.Item title="All transactions"></Tabs.Item>
              <Tabs.Item title="Transfers"></Tabs.Item>
              <Tabs.Item title="Convert"></Tabs.Item>
              <Tabs.Item title="Bills"></Tabs.Item>
          </Tabs>
        </div>
        <div className='overflow-x-auto'>
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
            <Table.Body className='divide-y'>
              <Table.Row>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>2.20pm</Table.Cell>
                <Table.Cell>17/03/22</Table.Cell>
                <Table.Cell>LQ478488485</Table.Cell>
                <Table.Cell>Francis Ifeanyi</Table.Cell>
                <Table.Cell>Bills</Table.Cell>
                <Table.Cell>Transfer</Table.Cell>
                <Table.Cell>
                  <div className="rounded-lg bg-green-300 p-2 flex items-center justify-center h-full">
                    Success
                  </div>
                </Table.Cell>
              </Table.Row>
              {/* More table rows here */}
            </Table.Body>
          </Table>
        </div>
      </Card>
    </div>
    </>
  )
}

export default Overview
