import { Avatar, Button, Card, Dropdown, DropdownItem, Label, Select, TabItem, Table, Tabs, TextInput } from 'flowbite-react'
import React from 'react'
import { FaEllipsisH } from 'react-icons/fa'
import { HiFilter } from 'react-icons/hi'
import {useLocation} from 'react-router-dom'
const UserTransactions = () => {
  const {state} = useLocation()
  console.log(state);
  return (
    <>
        <Card>
        <div>
            <div className=''>
            <Tabs style='underline'>
            <Tabs.Item title="Transactions">
            <div className="flex">
              <div className="flex-grow">
                <Table>
                  <Table.Head>
                    <Table.HeadCell>Date</Table.HeadCell>
                    <Table.HeadCell>Time</Table.HeadCell>
                    <Table.HeadCell>Transaction ID</Table.HeadCell>
                    <Table.HeadCell>Payment Type</Table.HeadCell>
                    <Table.HeadCell>Status</Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell>17/02/2024</Table.Cell>
                      <Table.Cell>2.20pm</Table.Cell>
                      <Table.Cell>LQT11223344</Table.Cell>
                      <Table.Cell>Bills Payment</Table.Cell>
                      <Table.Cell>
                        <div className="rounded-xl bg-green-300 p-2 flex items-center justify-center h-full">
                          Success
                        </div>
                      </Table.Cell>
                      <Table.Cell>
                        <div className="font-medium text-black-600 hover:underline dark:text-cyan-500">
                          <Dropdown label={<FaEllipsisH />} arrowIcon={false} inline outline className='border-none' placement='bottom'>
                            <DropdownItem>View Details</DropdownItem>
                            <DropdownItem>Deactivate User</DropdownItem>
                          </Dropdown>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
              <div className="ml-4">
                <Button color="gray">
                  <HiFilter />Filter by
                </Button>
              </div>
            </div>
          </Tabs.Item>
                <Tabs.Item title="KYC" className='flex-grow'>
                    <div className='flex justify-between'>
                        <div className=''>
                            <div >
                                <div className='text-left py-3'>
                                    <p className='text-sm font-thin'>Status</p>
                                    <div className='flex justify-center items-center rounded bg-yellow-300 h-6'>
                                        UNVERIFIED
                                    </div>
                                    
                                </div>
                                <div className='text-left py-3 border-b'>
                                    <p className='text-sm font-thin'>Bank Name</p>
                                    <div className=''>
                                        GT Bank
                                    </div>
                                    
                                </div>
                                <div className='text-left py-3 border-b'>
                                    <p className='text-sm font-thin'>Bank Account Number</p>
                                    <div className=''>
                                        0011223344
                                    </div>
                                    
                                </div>
                                <div className='text-left py-3 border-b'>
                                    <p className='text-sm font-thin'>Bank Account Number</p>
                                    <div className=''>
                                        0011223344
                                    </div>
                                </div>
                                <div className='text-left py-3 border-b'>
                                <p className='text-sm font-thin'>BVN</p>
                                <div className=''>
                                    00112233448
                                </div>
                                
                                </div>
                                <div className='text-left py-3 border-b'>
                                    <p className='text-sm font-thin'>Photo of user</p>
                                    <div className=''>
                                        00112233448
                                    </div>
                                    
                                </div>
                                <div className='text-left py-3'> 
                                    <p className='text-sm font-thin'>Valid document</p>
                                    <div className=''>
                                        International Passport
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className='text-left w-56'>
                            <div className='mb-4'>
                                <Label className='mb-4'  htmlFor='status' value='STATUS'/>
                                <Select className='rounded-none'>
                                    <option>Pending</option>
                                    <option>Approved</option>
                                    <option>Rejected</option>
                                </Select>
                            </div>

                            <Button className='rounded-none w-56' color='blue'>SUBMIT</Button>
                        </div>
                    </div>
                </Tabs.Item>
                <Tabs.Item title="Profile">
                  <div className='flex justify-between'>
                    <div class="flex justify-start items-center mb-10">
                      <div class="mb-10 ml-6">
                        <Avatar rounded/>
                        <p className='text-orange-400 font-bold'>Tap to change photo</p>
                      </div>
                    </div>
                    <div>
                      <Button className='rounded-none border text-blue-400' color='white'>EDIT PROFILE</Button>
                    </div>
                </div>

                  <div className='grid grid-cols-2'>                          
                      <div className='text-left'>
                        
                        <div className='mb-4'>
                          <p className='text-sm font-thin'>Customer Id</p>
                          <p>{state.username}</p>
                        </div>
                        <div className='mb-4'>
                          <p className='text-sm font-thin'>Customer full name</p>
                          <p>{state.firstName} {state.lastName}</p>
                        </div>
                        <div className='mb-4'>
                          <p className='text-sm font-thin'>Phone number</p>
                          <p>{state.mobileNumber}</p>
                        </div>
                        <div className='mb-4'>
                          <p className='text-sm font-thin'>Email address</p>
                          <p>{state.emailAddress}</p>
                        </div>
                        <div className='mb-4'>
                          <p className='text-sm font-thin'>Gender</p>
                          <p>{state.gender}</p>
                        </div>
                      </div>
                      <div className='text-left'>
                        <div className='mb-4'>
                          <p className='text-sm font-thin'>Date of birth</p>
                          <p>{state.dateOfBirth}</p>
                        </div>
                        <div className='mb-4'>
                          <p className='text-sm font-thin'>Home address</p>
                          <p>Lagos</p>
                        </div>
                        <div className='mb-4'>
                          <p className='text-sm font-thin'>State</p>
                          <p>Lagos</p>
                        </div>
                        <div className='mb-4'>
                          <p className='text-sm font-thin'>Country</p>
                          <p>Nigeria</p>
                        </div>
                      </div>
                    </div>
                </Tabs.Item>
            </Tabs>
            </div>
            
        </div>
        
        </Card>
    </>
  )
}

export default UserTransactions