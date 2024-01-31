import { Card, Table, Tabs, TextInput,Checkbox, Button, Dropdown } from 'flowbite-react'
import React, { useState } from 'react'
import {HiSearch, HiFilter} from 'react-icons/hi'
import {FaEllipsisH} from 'react-icons/fa'
const Users = () => {
    const [toggle, setToggle] = useState(false)
    const handleToggler = (toggleValue) =>{
        setToggle(toggleValue)
    }
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
            <Table.HeadCell>Customer ID</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
          </Table.Head>
          <Table.Body className='divide-y'>
            <Table.Row>
              <Table.Cell>#2345678</Table.Cell>
              <Table.Cell>Francis Ifeanyi</Table.Cell>
              <Table.Cell>francisifeanyi@gmail.com</Table.Cell>
              <Table.Cell>
                <div class="rounded-lg bg-orange-300 p-2 flex items-center justify-center h-full">
                  Unverified
                </div>

              </Table.Cell>
              <Table.Cell>
                <div className="font-medium text-black-600 hover:underline dark:text-cyan-500">
                    <FaEllipsisH/>
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>#2345678</Table.Cell>
              <Table.Cell>Francis Ifeanyi</Table.Cell>
              <Table.Cell>francisifeanyi@gmail.com</Table.Cell>
              <Table.Cell>
                <div class="rounded-lg bg-blue-300 p-2 flex items-center justify-center h-full">
                  Verified
                </div>

              </Table.Cell>
              <Table.Cell>
                <div className="font-medium text-black-600 hover:underline dark:text-cyan-500">
                    <FaEllipsisH/>
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>#2345678</Table.Cell>
              <Table.Cell>Francis Ifeanyi</Table.Cell>
              <Table.Cell>francisifeanyi@gmail.com</Table.Cell>
              <Table.Cell>
                <div class="rounded-lg bg-orange-300 p-2 flex items-center justify-center h-full">
                  Unverified
                </div>

              </Table.Cell>
              <Table.Cell>
                <div className="font-medium text-black-600 hover:underline dark:text-cyan-500">
                    <FaEllipsisH/>
                </div>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
    </div>
  </Card>
  )
}

export default Users