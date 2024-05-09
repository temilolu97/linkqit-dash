import { Button, Card, Checkbox, Table, TextInput } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { HiFilter, HiSearch } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import apiRequest from '../helpers/HttpRequestHelper'

const ManageRoles = () => {
  const [roles, setRoles] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    const fetchRoles =async () =>{
      setLoading(true)
      let token = localStorage.getItem("token")
      console.log(token);
      let response = await apiRequest("get","/management/roles",null,{"Authorization":`Bearer ${token}`})
      setRoles(response.data)
      setLoading(false)
      console.log(response.data)
    }
    fetchRoles()
  }, [])
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
            {roles.map(role => (
              <Table.Row>
                <Table.Cell>
                  <Checkbox/>
                </Table.Cell>
                <Table.Cell>{role.role}</Table.Cell>
                <Table.Cell>{role.roleDescription}</Table.Cell>
              </Table.Row>
            ))}
          
          </Table.Body>
        </Table>
    </div>
  </Card>
    </>
  )
}

export default ManageRoles