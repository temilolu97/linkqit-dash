import React, { useState } from 'react'
import {Button, Card} from 'flowbite-react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import apiRequest from '../helpers/HttpRequestHelper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const RateUpdate = () => {
    const {state} = useLocation()
    const [newRate, setNewRate] = useState(state.rate.rateAmount)
    const navigate = useNavigate()

    const updateRate = async ()=>{
        let token = localStorage.getItem("token")
        let response = await apiRequest("post","/rates/update",{
            rateId: state.rate.id,
            newAmount: newRate
        }, {"Authorization":`Bearer ${token}`});
        if(response.statusCode == "00"){
            toast.success(response.message,{
                onClose: () => {
                  navigate(-1);
                }
            })

        }
        else{
            toast.info(response.message)
        }
    }
  return (
    <>
        <Card className='mb-6'>
            <div className='flex items-center'>
                <Link to="/convert/rates"><BiArrowBack/></Link>
                <h4 className='font-bold mr-auto ml-4'> Update {state.rate.fromCurrency} to {state.rate.toCurrency} exchange rate</h4>
            </div>
        </Card>
        <div>
            <Card>
            <div className='flex items-center'>
         
                    <div className='flex flex-row gap-4'>
                        <div>
                            <p className='mb-2'>{state.rate.fromCurrency}</p>
                            <div class="relative mx-auto w-96">
                                <img src={state.fromFlag} alt="Flag" class="absolute top-1/2 transform -translate-y-1/2 left-2 w-14 h-auto"/>
                                <input type="text" value="1"  class="w-full pl-12 h-20 pr-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"/>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            {/* <img src={arrow}/> */}
                        </div>
                        <div className='flex flex-col'>
                            <p className='mb-2'>{state.rate.toCurrency}</p>
                            <div class="relative mx-auto w-96 flex items-center justify-center">
                                <img src={state.toFlag} alt="Flag" class="absolute top-1/2 transform -translate-y-1/2 left-2 w-14 h-auto"/>
                                <input type="number" value={newRate} onChange={(e)=>setNewRate(e.target.value)} class="w-full h-20 pl-12 pr-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"/>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className='mt'>
                    <Button className='rounded-none ml-auto' color='blue' onClick={()=>{updateRate()}}>SAVE</Button>
                    <ToastContainer/>
                </div>
            </Card>
        </div>
    </>
  )
}

export default RateUpdate