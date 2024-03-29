import { Card } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import arrow from '../assets/arrow-swap.png'
import { Link, useLocation, useParams } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import apiRequest from '../helpers/HttpRequestHelper'

const ConversionDetails = ({props}) => {
    const [users, setUsers] = useState([])
    const {state} = useLocation()
    console.log(state);
    useEffect(() => {
        const fetchUsers = async()=>{
            let token = localStorage.getItem("token")
            let response = await apiRequest("get","/customers/all",null,{"Authorization":`Bearer ${token}`})
            setUsers(response.data)
            console.log(response.data)
          }
          fetchUsers()
    }, []);

    let user = users.find(i => i.id == state.customerId);

    
  return (
    <>
        <Card className='mb-6'>
            <div className='flex items-center'>
                <Link to="/convert"><BiArrowBack/></Link>
                <h4 className='font-bold mr-auto ml-4'> {state.transactionReference}</h4>
            </div>
        </Card>
        <Card>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                <li className='py-3'>
                    <div className='flex gap-6'>
                        <div>
                            <p>From</p>
                            <h2 className='font-bold text-xl'>{state.currency} {state.amount}</h2>
                        </div>
                        <div>
                            <img src={arrow}/>
                        </div>
                        <div>
                            <p>To</p>
                            <h2 className='font-bold text-xl'>{state.foreignCurrency} {state.foreignAmount}</h2>
                        </div>
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
                            <p className='font-bold text-left'>Currency Conversion</p>
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

export default ConversionDetails