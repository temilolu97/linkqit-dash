import { Card, Table, Tabs, TextInput,Checkbox, Button, Dropdown, Pagination } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import {HiSearch, HiFilter} from 'react-icons/hi'
import {FaEllipsisH} from 'react-icons/fa'
import apiRequest from '../helpers/HttpRequestHelper'
const Users = () => {
  const [users, setUsers] = useState([])
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);

  let pages = Math.ceil(users.length/20)

  useEffect(()=>{
    const fetchUsers = async()=>{
      let token = localStorage.getItem("token")
      let response = await apiRequest("get","/customers/all",null,{"Authorization":`Bearer ${token}`})
      setUsers(response.data)
      console.log(response.data)
    }
    fetchUsers()
   },[])

   const paginatedUsers = users.slice(
    (currentPage - 1) * 10,
    currentPage * 10
  );
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
            <Table.HeadCell>Email verified</Table.HeadCell>
          </Table.Head>
          <Table.Body className='divide-y'>
            {paginatedUsers.map(user=>(
              <Table.Row>
                <Table.Cell>{user.username}</Table.Cell>
                <Table.Cell>{user.firstName} {user.lastName}</Table.Cell>
                <Table.Cell>{user.emailAddress}</Table.Cell>
                <Table.Cell>
                  {user.isEmailVerified ?<div class="rounded-lg bg-blue-300 p-2 flex items-center justify-center h-full">
                  Verified
                </div>:
                  <div class="rounded-lg bg-orange-300 p-2 flex items-center justify-center h-full">
                    Unverified
                  </div>
                }

                </Table.Cell>
                <Table.Cell>
                  <div className="font-medium text-black-600 hover:underline dark:text-cyan-500">
                      <FaEllipsisH/>
                  </div>
                </Table.Cell>
            </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <div className='"flex overflow-x-auto sm:justify-center'>
          <Pagination  currentPage={currentPage} totalPages={pages}  onPageChange={onPageChange} showIcons/>
        </div>
    </div>
  </Card>
  )
}

export default Users