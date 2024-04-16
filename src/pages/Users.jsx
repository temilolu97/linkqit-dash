import { Card, Table, Tabs, TextInput,Checkbox, Button, Dropdown, Pagination, DropdownItem, Spinner } from 'flowbite-react'
import React, { useEffect, useRef, useState } from 'react'
import {HiSearch, HiFilter} from 'react-icons/hi'
import {FaEllipsisH} from 'react-icons/fa'
import apiRequest from '../helpers/HttpRequestHelper'
import { Link } from 'react-router-dom'
const Users = () => {
  const [users, setUsers] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true)
 // const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  

  const onPageChange = (page) => setCurrentPage(page);

  let pages = Math.ceil(users.length/20)
  const startIndex = (currentPage - 1) * 10;


  useEffect(()=>{
    const fetchUsers = async()=>{
      setLoading(true)
      let token = localStorage.getItem("token")
      let response = await apiRequest("get","/customers/all",null,{"Authorization":`Bearer ${token}`})
      setUsers(response.data)
      setLoading(false)
      console.log(response.data)
    }
    fetchUsers()
   },[])

   const paginatedUsers = users.slice(
    (currentPage - 1) * 10,
    currentPage * 10
  );


  return (
    <>
    <div className=' mb-4 w-full'>
      {/* <p className='font-bold text-lg'>Welcome {user.firstName} {user.lastName}</p> */}
      <p className='text-lg font-bold text-left'>User</p>
    </div>
    <Card className='mt-10'>
    <div className='flex justify-between'>
      <TextInput icon={HiSearch} className='w-60'/>
      <Button color="gray" className='w-40'>
        <HiFilter/>Filter
      </Button>
    </div>
    <div className='overflow-x-auto'>
        <Table>
          <Table.Head className='normal-case'>
            <Table.HeadCell>S/N</Table.HeadCell>
            <Table.HeadCell>Customer ID</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Email verified</Table.HeadCell>
          </Table.Head>
          {loading? <Spinner size="xl"/> :(

          
          <Table.Body className='divide-y'>
            {paginatedUsers.map((user,index)=>(
              <Table.Row>
                <Table.Cell>{startIndex + index+1}</Table.Cell>
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
                      <Dropdown label={<FaEllipsisH/>} arrowIcon={false} inline outline className='border-none' placement='bottom'>
                        <Link to={`/users/transactions/${user.id}`} state={user}><DropdownItem>View Details</DropdownItem></Link>
                        <DropdownItem>Deactivate User</DropdownItem>
                      </Dropdown>
                  </div>
                  
                </Table.Cell>
            </Table.Row>
            ))}
          </Table.Body>
          )}
        </Table>

        <div className='flex justify-center'>
          <Pagination  currentPage={currentPage} totalPages={pages}  onPageChange={onPageChange} showIcons/>
        </div>
    </div>
  </Card>
  </>
  )
}

export default Users