import { Button, Card, Checkbox, Table, TextInput } from 'flowbite-react'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { HiFilter, HiSearch } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const ManageRoles = () => {
  return (
    <>
        <Card>
            <div className='flex items-center'>
                <Link to="/management"><BiArrowBack/></Link>
                <h4 className='font-bold mr-auto ml-4'> Manage roles</h4>
            </div>
        </Card>
        <Card className='mt-10'>
    <div className='flex justify-between'>
      <TextInput icon={HiSearch} className='w-60'/>
      <div className='flex gap-2'>
        <Button color="gray" className='w-40'>
            <HiFilter/>Filter
        </Button>
        <Link to="/add-role"><Button className='rounded-none' color='blue'>ADD ROLE</Button></Link>
      </div>
    </div>
    <div className='overflow-x-auto'>
        <Table>
          <Table.Head>
            <Table.HeadCell></Table.HeadCell>
            <Table.HeadCell>Role Name</Table.HeadCell>
            <Table.HeadCell>Description</Table.HeadCell>
          </Table.Head>
          <Table.Body className='divide-y'>
            <Table.Row>
              <Table.Cell>
                <Checkbox/>
              </Table.Cell>
              <Table.Cell>Admin</Table.Cell>
              <Table.Cell>This role grants permission to everything on the dashboard</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Checkbox/>
              </Table.Cell>
              <Table.Cell>Sales</Table.Cell>
              <Table.Cell>This role grants permission to everything sales</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Checkbox/>
              </Table.Cell>
              <Table.Cell>Tech</Table.Cell>
              <Table.Cell>This role grants permission to everything tech</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
    </div>
  </Card>
    </>
  )
}

export default ManageRoles