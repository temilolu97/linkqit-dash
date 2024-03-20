import { Button, Card, Label, Select, TextInput } from 'flowbite-react'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const AddEmployee = () => {
  return (
    <>
        <Card>
            <div className='flex items-center'>
                <Link to="/management"><BiArrowBack/></Link>
                <h4 className='font-bold mr-auto ml-4'> Add Employee</h4>
            </div>
        </Card>
        <Card className='mt-10'>
            <div className='flex'>
                <div>
                    <div className='w-80'>
                        <div className="mb-2 block text-left">
                            <Label htmlFor="employeeName" value="EMPLOYEE NAME" />
                        </div>
                        <TextInput id="employeeName"/>
                    </div>
                    <div>
                        <div className="mb-2 block text-left">
                            <Label htmlFor="phoneNumber" value="PHONE NUMBER" />
                        </div>
                        <TextInput id="phoneNumber"/>
                    </div>
                    <div className="max-w-md">
                        <div className="mb-2 block text-left">
                            <Label htmlFor="gender" value="GENDER" />
                        </div>
                        <Select id="gender" required>
                            <option>Male</option>
                            <option>Female</option>
                        </Select>
                    </div>
                </div>
                <div className='ml-auto'>
                    <div className='w-80'>
                        <div className="mb-2 block text-left">
                            <Label htmlFor="email" value="EMAIL ADDRESS" />
                        </div>
                        <TextInput id="email"/>
                    </div>
                    <div className='w-80'>
                        <div className="mb-2 block text-left">
                            <Label htmlFor="role" value="ROLE" />
                        </div>
                        <TextInput id="role"/>
                    </div>
                    <div className='w-80'>
                        <div className="mb-2 block text-left">
                            <Label htmlFor="password" value="CREATE PASSWORD" />
                        </div>
                        <TextInput type='password' id="password"/>
                    </div>
                    <Button className='mt-10 ml-auto rounded-none' color='blue'>ADD EMPLOYEE</Button>
                </div>
            </div>
        </Card>
    </>
  )
}

export default AddEmployee