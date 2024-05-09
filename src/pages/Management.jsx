import { Card, Table, Tabs, TextInput,Checkbox, Button, Spinner } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import {HiSearch, HiFilter} from 'react-icons/hi'
import { Link } from 'react-router-dom'
import apiRequest from '../helpers/HttpRequestHelper'

const Management = () => {
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)
  const [roles, setRoles] = useState([])
  useEffect(()=>{
    const fetchEmployees =async () =>{
      setLoading(true)
      let token = localStorage.getItem("token")
      let response = await apiRequest("get","/management/employees",null,{"Authorization":`Bearer ${token}`})
      setEmployees(response.data)
      setLoading(false)
      console.log(response.data)
    }
    const fetchRoles = async () =>{
      setLoading(true)
      let token = localStorage.getItem("token")
      console.log(token);
      let response = await apiRequest("get","/management/roles",null,{"Authorization":`Bearer ${token}`})
      setRoles(response.data)
      setLoading(false)
      console.log(response.data)
      }
  
    fetchEmployees()
    fetchRoles()
  }, [])

 
  return (
    <>
    <Helmet>
      <title>Management</title>
    </Helmet>
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
            { 
              loading ? <Spinner /> :(
              employees.map(employee=> {
               const getRoleById = (roleId) =>{
                let data = roles.find(role => role.id == roleId)
                return data ? data.role : "Role not found";

              }
              let role = getRoleById(employee.roleId)
              return(<Table.Row>
                <Table.Cell>
                  <Checkbox/>
                </Table.Cell>
                <Table.Cell>{employee.firstName} {employee.lastName}</Table.Cell>
                <Table.Cell>{employee.emailAddress}</Table.Cell>
                <Table.Cell>{role}</Table.Cell>
                <Table.Cell>
                  {employee.isEmailVerified ?
                  <div class="rounded-lg bg-blue-300 p-2 flex items-center justify-center h-full">
                    VERIFIED
                  </div>: <div class="rounded-lg bg-orange-300 p-2 flex items-center justify-center h-full">
                    UNVERIFIED
                  </div>}

                </Table.Cell>
                <Table.Cell>
                  <Link to={`employees/${employee.id}`} state= {{
                      employeeData: employee,
                      role:role 
                    }}
                   className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    View details
                  </Link>
                </Table.Cell>
              </Table.Row>
            )}))}
          </Table.Body>
        </Table>
    </div>
  </Card>
  </>
  )
}

export default Management