import { Card, Table, Tabs } from 'flowbite-react'
import React from 'react'

const Overview = () => {
  let data
  return (
    <>
    <div className='columns-3'>
      <Card className='max-w-sm'>
        <div>
          <p>Transaction Value</p>
          <p className='font-bold text-lg'>$420,000</p>
        </div>
      
      </Card>
      <Card className='max-w-sm'>
        <div>
            <p>Swap Value</p>
            <p className='font-bold text-lg'>$420,000</p>
        </div>
      </Card>
      <Card className='max-w-sm'>
        <div>
          <p>No of customers</p>
          <p className='font-bold text-lg'>0</p>
        </div>
      </Card>
    </div>
    <div className='mt-20'>
      <Card>
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
      </Card>
    </div>
    <div className='mt-20'>
      <Card>
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
                  <div class="rounded-lg bg-green-300 p-2 flex items-center justify-center h-full">
                    Success
                  </div>

                </Table.Cell>
                <Table.Cell>
                  <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>2.20pm</Table.Cell>
                <Table.Cell>17/03/22</Table.Cell>
                <Table.Cell>LQ478488485</Table.Cell>
                <Table.Cell>Francis Ifeanyi</Table.Cell>
                <Table.Cell>Bills</Table.Cell>
                <Table.Cell>Transfer</Table.Cell>
                <Table.Cell>
                  <div class="rounded-lg bg-red-400 p-2 flex items-center justify-center h-full">
                    Failed
                  </div>

                </Table.Cell>
                <Table.Cell>
                  <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>2.20pm</Table.Cell>
                <Table.Cell>17/03/22</Table.Cell>
                <Table.Cell>LQ478488485</Table.Cell>
                <Table.Cell>Francis Ifeanyi</Table.Cell>
                <Table.Cell>Bills</Table.Cell>
                <Table.Cell>Transfer</Table.Cell>
                <Table.Cell>
                  <div class="rounded-lg bg-yellow-300 p-2 flex items-center justify-center h-full ">
                    Pending
                  </div>

                </Table.Cell>
                <Table.Cell>
                  <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </Card>
    </div>
    </>
  )
}

export default Overview