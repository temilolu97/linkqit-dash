import { Card } from 'flowbite-react'
import React from 'react'
import arrow from '../assets/arrow-swap.png'
import { Link, useParams } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'

const ConversionDetails = () => {
    const {details} = useParams()
  return (
    <>
        <Card className='mb-6'>
            <div className='flex items-center'>
                <Link to="/convert"><BiArrowBack/></Link>
                <h4 className='font-bold mr-auto ml-4'> #{details}</h4>
            </div>
        </Card>
        <Card>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                <li className='py-3'>
                    <div className='flex gap-6'>
                        <div>
                            <p>From</p>
                            <h2 className='font-bold text-xl'>NGN 14,000</h2>
                        </div>
                        <div>
                            <img src={arrow}/>
                        </div>
                        <div>
                            <p>To</p>
                            <h2 className='font-bold text-xl'>USD 10.00</h2>
                        </div>
                        <div className='ml-auto'>
                            <p>Status</p>
                            <div className="bg-green-200 p-2 text- rounded-full flex items-center">
                                <div className="bg-green-500 h-2 w-2 rounded-full mr-2"></div>
                                <p>Success</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li className='py-3'>
                    <div className='flex'>
                        <div>
                            <p>Payment type</p>
                            <p className='font-bold'>Bills</p>
                        </div>
                        <div className='ml-auto'>
                            <p>Transaction ID</p>
                            <p>{details}</p>
                        </div>
                    </div>    
                </li>
                <li className='py-3'>
                    <div className='flex'>
                        <div>
                            <p>Transaction type</p>
                            <p className='font-bold'>Credit</p>
                        </div>
                        <div className='ml-auto'>
                            <p>Date</p>
                            <p>TUE, 23rd AUG,2023 11:53PM</p>
                        </div>
                    </div>    
                </li>
            </ul>
        </Card>
        <Card className='mt-6'>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                <li className='py-3'>
                    <div className='flex'>
                        <div>
                            <p className='text-sm'>Customer</p>
                            <p className="text-lg font-bold">Ifeanyi Ifeanyi</p>
                        </div>
                        <div className='ml-auto'>
                            <p className='text-sm'>User ID</p>
                            <p className='text-lg'>#12345</p>
                        </div>
                    </div>    
                </li>
                <li className='py-3'>
                    <div className='flex'>
                        <div>
                            <p className='text-sm'>Email Address</p>
                            <p className="text-lg font-bold">Ifeanyi Ifeanyi</p>
                        </div>
                        <div className='ml-auto'>
                            <p className='text-sm'>To</p>
                            <p className='text-lg'>Seun Adebayo</p>
                        </div>
                    </div>    
                </li>
            </ul>
        </Card>
    </>
  )
}

export default ConversionDetails