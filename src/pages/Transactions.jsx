import { Button, Card, Table, Tabs, TextInput } from 'flowbite-react'
import React from 'react'
import {HiSearch, HiFilter} from 'react-icons/hi'

const Transactions = () => {
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
                <Table.Row>
                  <Table.Cell>2.20pm</Table.Cell>
                  <Table.Cell>17/03/22</Table.Cell>
                  <Table.Cell>LQ478488485</Table.Cell>
                  <Table.Cell>Francis Ifeanyi</Table.Cell>
                  <Table.Cell>Bills</Table.Cell>
                  <Table.Cell>NGN 14,000</Table.Cell>
                  <Table.Cell>
                    <div class="rounded-lg bg-green-300 p-2 flex items-center justify-center h-full">
                      Success
                    </div>

                  </Table.Cell>
                  <Table.Cell>
                    {/* <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                      ...
                    </a> */}
                    <Button size="xs" outline gradientDuoTone="purpleToBlue">View Details</Button>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>2.20pm</Table.Cell>
                  <Table.Cell>17/03/22</Table.Cell>
                  <Table.Cell>LQ478488485</Table.Cell>
                  <Table.Cell>Francis Ifeanyi</Table.Cell>
                  <Table.Cell>Bills</Table.Cell>
                  <Table.Cell>USD 14,000</Table.Cell>
                  <Table.Cell>
                    <div class="rounded-lg bg-red-400 p-2 flex items-center justify-center h-full">
                      Failed
                    </div>

                  </Table.Cell>
                  <Table.Cell>
                    {/* <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                      ...
                    </a> */}
                    <Button size="xs" outline gradientDuoTone="purpleToBlue">View Details</Button>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>2.20pm</Table.Cell>
                  <Table.Cell>17/03/22</Table.Cell>
                  <Table.Cell>LQ478488485</Table.Cell>
                  <Table.Cell>Francis Ifeanyi</Table.Cell>
                  <Table.Cell>Bills</Table.Cell>
                  <Table.Cell>CAD 14,000</Table.Cell>
                  <Table.Cell>
                    <div class="rounded-lg bg-yellow-300 p-2 flex items-center justify-center h-full ">
                      Pending
                    </div>

                  </Table.Cell>
                  <Table.Cell>
                    <Button size="xs" outline gradientDuoTone="purpleToBlue">View Details</Button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
        </div>
      </Card>
    </>
  )
}

export default Transactions