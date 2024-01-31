import { Button, Card, Table, Tabs, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import {HiSearch, HiFilter} from 'react-icons/hi'
const Convert = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };
  return (
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
            <Table.HeadCell>From</Table.HeadCell>
            <Table.HeadCell>To</Table.HeadCell>
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
              <Table.Cell>NGN 14,000</Table.Cell>
              <Table.Cell>USD 10</Table.Cell>
              <Table.Cell>
                <div class="rounded-lg bg-red-400 p-2 flex items-center justify-center h-full">
                  Failed
                </div>

              </Table.Cell>
              <Table.Cell>
                <Button size="xs" outline gradientDuoTone="purpleToBlue">View Details</Button>
                {/* {isDropdownVisible && (
                    <div className='absolute mt-2 '>
                    <div className='bg-white rounded-md shadow-lg p-2'>
                        <p>Hello</p>
                    </div>
                    </div>
                )} */}
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
                {/* <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  ...
                </a> */}
                <Button size="xs" outline gradientDuoTone="purpleToBlue">View Details</Button>

              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
    </div>
  </Card>
  )
}

export default Convert