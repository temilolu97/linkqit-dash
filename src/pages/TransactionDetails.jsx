import { Card } from 'flowbite-react'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'
import arrow from '../assets/arrow-swap.png'


const TransactionDetails = () => {
    const {state} = useLocation()
    console.log(state);
  return (
    <>
        <Card className='mb-6'>
            <div className='flex items-center'>
                <Link to="/transactions"><BiArrowBack/></Link>
                <h4 className='font-bold mr-auto ml-4'> {state.transactionReference}</h4>
            </div>
        </Card>
        <Card>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                <li className='py-3'>
                    <div className='flex gap-6'>
                        <div>
                            <p className='text-left'>Amount</p>
                            <h2 className='font-bold text-xl'>{state.currency} {state.amount}</h2>
                        </div>
                        {/* <div>
                            <img src={arrow}/>
                        </div>
                        <div>
                            <p>To</p>
                            <h2 className='font-bold text-xl'>{state.foreignCurrency} {state.foreignAmount}</h2>
                        </div> */}
                        <div className='ml-auto'>
                            <p className='text-right'>Status</p>
                            <div className="bg-green-200 p-2 text- rounded-full flex items-center">
                                <div className="bg-green-500 h-2 w-2 rounded-full mr-2"></div>
                                <p>{state.status}</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li className='py-3'>
                    <div className='flex'>
                        <div>
                            <p className='text-left'>Payment type</p>
                            <p className='font-bold text-left'>{state.transactionReference.startsWith("LQT-CONVERT") ?"Currency conversion": state.transactionReference.startsWith("LQT-BILL") ? "Bill Payment" :state.transactionReference.startsWith("LQT-AIRTIME")?"Airtime Payment":state.transactionReference.startsWith("LQT-FUND")?"Balance Funding":"Transfer"}</p>
                        </div>
                        <div className='ml-auto'>
                            <p className='text-right'>Transaction ID</p>
                            <p>{state.transactionReference}</p>
                        </div>
                    </div>    
                </li>
                <li className='py-3'>
                    <div className='flex'>
                        <div>
                            <p className='text-left'>Transaction type</p>
                            <p className='font-bold text-left'>{state.direction == "C"? "Credit" : "Debit"}</p>
                        </div>
                        <div className='ml-auto'>
                            <p className='text-right'>Date</p>
                            <p className='text-right'>TUE, 23rd AUG,2023 11:53PM</p>
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
                            <p className='text-sm text-left'>Customer</p>
                            <p className="text-lg font-bold text-left">Ifeanyu</p>
                        </div>
                        <div className='ml-auto'>
                            <p className='text-sm text-right'>User ID</p>
                            <p className='text-lg'>#{state.customerId}</p>
                        </div>
                    </div>    
                </li>
                <li className='py-3'>
                    <div className='flex'>
                        <div>
                            <p className='text-sm text-left'>Email Address</p>
                            <p className="text-lg font-bold text-left">testemail@gmail.com</p>
                        </div>
                        <div className='ml-auto'>
                            <p className='text-sm text-right'>To</p>
                            <p className='text-lg text-right'>Seun Adebayo</p>
                        </div>
                    </div>    
                </li>
            </ul>
        </Card>
    </>
  )
}

export default TransactionDetails