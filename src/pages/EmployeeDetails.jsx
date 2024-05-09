import { Button, Card } from 'flowbite-react'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { FaUserCircle } from 'react-icons/fa'
import { Link, useLocation, useParams } from 'react-router-dom'

const EmployeeDetails = () => {
    const {id} = useParams
    const {state} = useLocation()
    console.log(state);
  return (
    <>
        <Card>
            <div className='flex items-center'>
                <Link to="/management"><BiArrowBack/></Link>
                <h4 className='font-bold mr-auto ml-4'> {state.employeeData.firstName} {state.employeeData.lastName}</h4>
            </div>
        </Card>
        <Card className='mt-10'>
            <div className='flex'>
                <div className='flex flex-col items-center'>
                    <div className="w-32 h-32 bg-orange-300 rounded-full overflow-hidden flex items-center justify-center">
                        {/* Use the FaUserCircle icon as a placeholder */}
                        <FaUserCircle className="text-gray-500 w-16 h-16" />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="fileInput" className="cursor-pointer  text-orange-400 p-2 rounded">
                            Upload Profile Picture
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            className="hidden"
                            // onChange={handleFileChange}
                            accept="image/*" // Specify the accepted file types, e.g., images
                        />

                    </div>
                    <div className='w-64 mt-8'>
                        <div>
                            <p className='font-thin text-md text-left'>Full name</p>
                            <p className='font-bold text-md text-left'>{state.employeeData.firstName} {state.employeeData.lastName}</p>
                            <hr className="my-2 border-t border-gray-300" />
                        </div>
                        <div>
                            <p className='font-thin text-md text-left'>Role</p>
                            <p className='font-bold text-md text-left'>{state.role}</p>
                            <hr className="my-2 border-t border-gray-300" />
                        </div>
                        <div>
                            <p className='font-thin text-md text-left'>Phone number</p>
                            <p className='font-bold text-md text-left'>{state.employeeData.mobileNumber}</p>
                            <hr className="my-2 border-t border-gray-300" />
                        </div>
                        <div>
                            <p className='font-thin text-md text-left'>Email address</p>
                            <p className='font-bold text-md text-left'>{state.employeeData.emailAddress}</p>
                            <hr className="my-2 border-t border-gray-300" />
                        </div>
                        <div>
                            <p className='font-thin text-md text-left'>Gender</p>
                            <p className='font-bold text-md text-left'>{state.employeeData.gender}</p>
                        </div>
                    </div>
                </div>
                <div className='ml-auto'>
                    <Button outline className='rounded-none' color='gray'>EDIT PROFILE</Button>
                </div>
            </div>
        </Card>
    </>
  )
}

export default EmployeeDetails