import { Button, Card, Checkbox, TextInput, Textarea } from 'flowbite-react'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const AddRole = () => {
  return (
    <>
        <Card>
            <div className='flex items-center'>
                <Link to="/manage-roles"><BiArrowBack/></Link>
                <h4 className='font-bold mr-auto ml-4'> Add new role</h4>
            </div>
        </Card>
        <Card className='mt-10'>
            <div className='flex'>
                <div className='mr-auto'>
                    <div>
                        <p className='text-left font-bold'>ROLE NAME</p>
                        <TextInput className='w-64' placeholder='Name your role'/>
                    </div>
                    <div>
                        <p className='text-left mt-4 font-bold'>PERMISSION</p>
                        <Textarea rows={4} placeholder='Describe your permission'/>
                    </div>
                </div>
                <div className='text-left'>
                    <p className='text-lg font-bold'>Permissions</p>
                    <div className='mt-4'>
                        <h4 className='mb-4'>Transactions</h4>
                        <div className='flex items-center'>
                            <Checkbox/> <h4 className='ml-2 text-sm'>Can view transactions</h4>
                        </div>
                        <div className='flex items-center'>
                            <Checkbox/> <h4 className='ml-2 text-sm'>Can edit transactions</h4>
                        </div>
                        <div className='flex items-center'>
                            <Checkbox/> <h4 className='ml-2 text-sm'>Can manage funds and disputes</h4>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <h4 className='mb-4'>Customers</h4>
                        <div className='flex items-center'>
                            <Checkbox/> <h4 className='ml-2 text-sm'>Can view transactions</h4>
                        </div>
                        <div className='flex items-center'>
                            <Checkbox/> <h4 className='ml-2 text-sm'>Can edit transactions</h4>
                        </div>
                        <div className='flex items-center'>
                            <Checkbox/> <h4 className='ml-2 text-sm'>Can manage funds and disputes</h4>
                        </div>
                    </div>

                    <div className='mt-4'>
                        <h4 className='mb-4'>Payouts</h4>
                        <div className='flex items-center'>
                            <Checkbox/> <h4 className='ml-2 text-sm'>Can view payouts</h4>
                        </div>
                        <div className='flex items-center'>
                            <Checkbox/> <h4 className='ml-2 text-sm'>Can export payouts</h4>
                        </div>
                    </div>

                    <div className='mt-4'>
                        <h4 className='mb-4'>Transfers</h4>
                        <div className='flex items-center'>
                            <Checkbox/> <h4 className='ml-2 text-sm'>Can view transfers</h4>
                        </div>
                        <div className='flex items-center'>
                            <Checkbox/> <h4 className='ml-2 text-sm'>Can export transfers</h4>
                        </div>
                    </div>
                    <Button className='mt-10 rounded-none' color='blue'>CREATE ROLE</Button>
                </div>
            </div>
        </Card>
    </>
  )
}

export default AddRole