import { Card } from 'flowbite-react'
import React from 'react'
import arrow from '../assets/arrow-swap.png'
import { Link, useParams } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'

const TransferDetails = () => {
    const {id} = useParams()
  return (
    <>
    <Card className='mb-6'>
        <div className='flex items-center'>
            <Link to="/transfers"><BiArrowBack/></Link>
            <h4 className='font-bold mr-auto ml-4'> #{id}</h4>
        </div>
    </Card>
    <Card>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className='py-3'>
                <div className='flex gap-6'>
                    <div>
                        <p className='text-sm text-left'>Amount</p>
                        <h2 className='font-bold text-xl'>NGN 14,000</h2>
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
                        <p className='text-sm text-left'>Payment type</p>
                        <p className='font-bold text-left'>Bills</p>
                    </div>
                    <div className='ml-auto'>
                        <p className='text-sm text-right'>Transaction ID</p>
                        <p>{id}</p>
                    </div>
                </div>    
            </li>
            <li className='py-3'>
                <div className='flex'>
                    <div>
                        <p className='text-sm text-left'>Transaction type</p>
                        <p className='font-bold text-left'>Debit</p>
                    </div>
                    <div className='ml-auto'>
                        <p className='text-sm text-right'>Date</p>
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
                        <p className='text-sm text-left'>Beneficiary</p>
                        <p className="text-lg font-bold">Francis Ifeanyi</p>
                    </div>
                    <div className='ml-auto'>
                        <p className='text-sm text-right'>Account Number</p>
                        <p className="text-lg font-bold">00012221234</p>
                    </div>
                </div>    
            </li>
            <li className='py-3'>
                <div className='flex'>
                    <div>
                        <p className='text-sm text-left'>Bank</p>
                        <p className="text-lg font-bold">Guaranty Trust Bank</p>
                    </div>
                </div>    
            </li>
        </ul>
    </Card>
</>
  )
}

export default TransferDetails