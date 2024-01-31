import { Button, Card, Table, TextInput } from 'flowbite-react'
import React from 'react'
import { HiSearch,HiFilter } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Transfers = () => {
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
                    <Link to="/transfers/1234"><Button gradientMonochrome="lime" size="xs">View details</Button></Link>
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
                    <Link to="/transfers/1234"><Button gradientMonochrome="lime" size="xs">View details</Button></Link>                    
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
                  <Link to="/transfers/1234"><Button gradientMonochrome="lime" size="xs">View details</Button></Link>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
        </div>
      </Card>
  )
}

export default Transfers