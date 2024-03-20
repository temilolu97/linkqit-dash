import { Button, Card } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import usa from '../assets/usa 2.png'
import nigeria from '../assets/nigeria.png'
import arrow from '../assets/arrow-swap.png'
import canada from '../assets/canada 3.png'
import uk from '../assets/uk 2.png'
import {BiArrowBack} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import apiRequest from '../helpers/HttpRequestHelper'
const ExchangeRate = () => {
    const [ rates, setRates] = useState([])
    const [newRate, setNewRate] = useState()
    const [flag, setFlag] = useState()
    const currencyNames = {
        USD: {
            name:'US DOLLARS',
            flag:usa
        },
        NGN: {
            name:'NAIRA',
            flag:nigeria
        },
        GBP: {
            name:'POUNDS STERLING',
            flag:uk
        },
        CAD: {
            name:'US DOLLARS',
            flag:canada
        },
        EUR: {
            name:'EUROS',
            flag:uk
        },
        // Add more currencies as needed
      };
    const getCurrencyName = (currencyCode) => {
        return currencyNames[currencyCode] || 'UNKNOWN CURRENCY';
    };  
    getCurrencyName("USD")    
    useEffect(()=>{
        const fetchRates =async () =>{
            let token = localStorage.getItem("token")
            console.log(token);
            let response = await apiRequest("get","/rates/all",null,{"Authorization":`Bearer ${token}`})
            setRates(response.data)
            console.log(response.data)
          }
          fetchRates()
    },[])
  return (
    <>
        <Card className='mb-4'>
            <div className='flex items-center'>
                <Link to="/swap"><BiArrowBack/></Link>
                <h4 className='font-bold mr-auto ml-4'> Change exchange rate</h4>
            </div>
        </Card>
        <Card>
        {rates.map((rate,index) =>{
            let fromCurrency = getCurrencyName(rate.fromCurrency).name
            let fromFlag = getCurrencyName(rate.fromCurrency).flag
            let toCurrency = getCurrencyName(rate.toCurrency).name
            let toFlag = getCurrencyName(rate.toCurrency).flag
         return( 
        <div key={index} className='flex items-center'>
         
            <div className='flex flex-row gap-4'>
                <div>
                    <p className='mb-2'>{fromCurrency}</p>
                    <div class="relative mx-auto w-96">
                        <img src={fromFlag} alt="Flag" class="absolute top-1/2 transform -translate-y-1/2 left-2 w-14 h-auto"/>
                        <input type="text" value={`1 ${rate.fromCurrency}`}  class="w-full pl-12 h-20 pr-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"/>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img src={arrow}/>
                </div>
                <div className='flex flex-col'>
                    <p className='mb-2'>{toCurrency}</p>
                    <div class="relative mx-auto w-96">
                        <img src={toFlag} alt="Flag" class="absolute top-1/2 transform -translate-y-1/2 left-2 w-14 h-auto"/>
                        <input type="text" value={`${rate.rateAmount} ${rate.toCurrency}`} onChange={(e)=>setNewRate(e.target.value)} class="w-full h-20 pl-12 pr-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"/>
                    </div>
                </div>
            </div>
        </div>
)})}

        <div className='mt-20'>
            <Button className='rounded-none ml-auto' color='blue'>SAVE</Button>
        </div>
    </Card>
    </>

  )
}

export default ExchangeRate