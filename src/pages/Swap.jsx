import { Button, Card, Table, Tabs, TextInput } from 'flowbite-react'
import React from 'react'
import {HiSearch, HiFilter} from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Swap = () => {
  return (
    <Card className='mt-10'>
    <div className='flex justify-between'>
      <TextInput icon={HiSearch} className='w-60'/>
      <div className='flex gap-2'>
        <Button color="gray" className='w-40'>
            <HiFilter/>Filter
        </Button>
        <Link to="/swap/rates"><Button className='rounded-none' color='blue'>CHANGE SWAP RATE</Button></Link>
      </div>
    </div>
    <div className='overflow-x-auto'>
        <Table>
          <Table.Head>
            <Table.HeadCell>Time</Table.HeadCell>
            <Table.HeadCell>Date</Table.HeadCell>
            <Table.HeadCell>Transaction ID</Table.HeadCell>
            <Table.HeadCell>Customer</Table.HeadCell>
            <Table.HeadCell>Receive</Table.HeadCell>
            <Table.HeadCell>Pay</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
          </Table.Head>
          <Table.Body className='divide-y'>
            <Table.Row>
              <Table.Cell>2.20pm</Table.Cell>
              <Table.Cell>17/03/22</Table.Cell>
              <Table.Cell>LQ478488485</Table.Cell>
              <Table.Cell>Francis Ifeanyi</Table.Cell>
              <Table.Cell>NGN 14,000</Table.Cell>
              <Table.Cell>USD 10</Table.Cell>
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
              <Table.Cell>GBP 100</Table.Cell>
              <Table.Cell>NGN 80,000</Table.Cell>
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
              <Table.Cell>NGN 14,000</Table.Cell>
              <Table.Cell>USD 10</Table.Cell>
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
  )
}

export default Swap