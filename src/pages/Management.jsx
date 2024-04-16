import { Card, Table, Tabs, TextInput,Checkbox, Button } from 'flowbite-react'
import React from 'react'
import {HiSearch, HiFilter} from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Management = () => {
  return (
    <>
    <div className=' mb-4 w-full'>
      {/* <p className='font-bold text-lg'>Welcome {user.firstName} {user.lastName}</p> */}
      <p className='text-lg font-bold text-left'>Management</p>
    </div>
    <Card className='mt-10'>
    <div className='flex justify-between'>
      <TextInput icon={HiSearch} className='w-60'/>
      <div className='flex gap-2'>
        <Button color="gray" className='w-40'>
            <HiFilter/>Filter
        </Button>
        <Link to="/manage-roles"><Button className='rounded-none' color='gray'>MANAGE ROLES</Button></Link>
        <Link to="/add-employee"><Button className='rounded-none' color='blue'>ADD NEW EMPLOYEE</Button></Link>
      </div>
    </div>
    <div className='overflow-x-auto'>
        <Table>
          <Table.Head className='normal-case'>
            <Table.HeadCell></Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Role</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
          </Table.Head>
          <Table.Body className='divide-y'>
            <Table.Row>
              <Table.Cell>
                <Checkbox/>
              </Table.Cell>
              <Table.Cell>Francis Ifeanyi</Table.Cell>
              <Table.Cell>francisifeanyi@gmail.com</Table.Cell>
              <Table.Cell>Manager</Table.Cell>
              <Table.Cell>
                <div class="rounded-lg bg-blue-300 p-2 flex items-center justify-center h-full">
                  VERIFIED
                </div>

              </Table.Cell>
              <Table.Cell>
                <Link to="/employees/1" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  View details
                </Link>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Checkbox/>
              </Table.Cell>
              <Table.Cell>Francis Ifeanyi</Table.Cell>
              <Table.Cell>francisifeanyi@gmail.com</Table.Cell>
              <Table.Cell>Sales Rep</Table.Cell>
              <Table.Cell>
                <div class="rounded-lg bg-orange-300 p-2 flex items-center justify-center h-full">
                  UNVERIFIED
                </div>

              </Table.Cell>
              <Table.Cell>
                <Link to="/employees/2" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  View details
                </Link>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Checkbox/>
              </Table.Cell>
              <Table.Cell>Francis Ifeanyi</Table.Cell>
              <Table.Cell>francisifeanyi@gmail.com</Table.Cell>
              <Table.Cell>Mid Level Engineer</Table.Cell>
              <Table.Cell>
                <div class="rounded-lg bg-blue-300 p-2 flex items-center justify-center h-full">
                  VERIFIED
                </div>

              </Table.Cell>
              <Table.Cell>
                <Link to="/employees/3" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  View details
                </Link>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
    </div>
  </Card>
  </>
  )
}

export default Management