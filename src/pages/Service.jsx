import { Button, Card, Dropdown, DropdownItem, Table, Tabs, TextInput } from 'flowbite-react'
import React from 'react'
import { Helmet } from 'react-helmet'
import { FaEllipsisH } from 'react-icons/fa'
import {HiSearch, HiFilter} from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Service = () => {
  return (
    <>
    <Helmet>
      <title>Service</title>
    </Helmet>
    <div className=' mb-4 w-full'>
      {/* <p className='font-bold text-lg'>Welcome {user.firstName} {user.lastName}</p> */}
      <p className='text-lg font-bold text-left'>Services</p>
    </div>
    <Card className='mt-10'>
        <div className='flex justify-between'>
          <TextInput icon={HiSearch} className='w-60'/>
          <TextInput icon={HiFilter} value="Filter" className='w-40' disabled/>
        </div>
        <div className='overflow-x-auto'>
            <Table>
              <Table.Head className='normal-case'>
                <Table.HeadCell>S/N</Table.HeadCell>
                <Table.HeadCell>Time</Table.HeadCell>
                <Table.HeadCell>Date</Table.HeadCell>
                <Table.HeadCell>Transaction ID</Table.HeadCell>
                <Table.HeadCell>Customer</Table.HeadCell>
                <Table.HeadCell>Service Type</Table.HeadCell>
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
                  <Table.Cell>NGN 14,000</Table.Cell>
                  <Table.Cell>
                    <div class="rounded-lg bg-green-300 p-2 flex items-center justify-center h-full">
                      Success
                    </div>

                  </Table.Cell>
                  <Table.Cell>
                    <Dropdown label={<FaEllipsisH/>} arrowIcon={false} inline outline className='border-none' placement='bottom'>
                      <DropdownItem>View Details</DropdownItem>
                    </Dropdown>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>2</Table.Cell>
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
                    <Dropdown label={<FaEllipsisH/>} arrowIcon={false} inline outline className='border-none' placement='bottom'>
                        <DropdownItem>View Details</DropdownItem>
                    </Dropdown>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>3</Table.Cell>
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
                    {/* <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                      ...
                    </a> */}
                    <Dropdown label={<FaEllipsisH/>} arrowIcon={false} inline outline className='border-none' placement='bottom'>
                        <DropdownItem>View Details</DropdownItem>
                      </Dropdown>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
        </div>
      </Card>
      </>
  )
}

export default Service