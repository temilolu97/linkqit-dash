import { Card, Table, Tabs } from 'flowbite-react'
import React, { useContext } from 'react'
import { Line } from 'react-chartjs-2'
import { useNavigate } from 'react-router-dom'
import 'chart.js/auto';
import { useAuth } from '../contexts/AuthContext';

const Overview = () => {
  let user = JSON.parse(localStorage.getItem("user"))
  let {transactionsCount} = useAuth()
  console.log(transactionsCount);

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
    ],
  };

  return (
    <>
    <Card className=' mb-4 w-full'>
      <p className='font-bold text-lg'>Welcome {user.firstName} {user.lastName}</p>
    </Card>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      <Card className='max-w-full'>
        <div>
          <p>Transaction Value</p>
          <p className='font-bold text-lg'>$420,000</p>
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
        <div className='flex'>
          <p className='font-bold text-lg'>Analytics</p>
          <div className='ml-auto'>
            <Tabs>
              <Tabs.Item title="Today">Today</Tabs.Item>
              <Tabs.Item title="Week">Week</Tabs.Item>
              <Tabs.Item title="Month">Month</Tabs.Item>
              <Tabs.Item title="Year">Year</Tabs.Item>
            </Tabs>
          </div>
        </div>
        <div className='overflow-x-auto'>
            <div className=''>
              <Line data={data}/>
            </div>
        </div>
      </Card>
    </div>
    <div className='mt-20'>
      <Card className='w-full'>
        <div className='flex'>
          <p className='font-bold text-lg'>Recent Activity</p>
          <div className='ml-auto'>
            <Tabs>
              <Tabs.Item title="Today"></Tabs.Item>
              <Tabs.Item title="Week"></Tabs.Item>
              <Tabs.Item title="Month"></Tabs.Item>
              <Tabs.Item title="Year"></Tabs.Item>
            </Tabs>
          </div>
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
              <Table.Row>
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
                <Table.Cell>
                  <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Edit
                  </a>
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
