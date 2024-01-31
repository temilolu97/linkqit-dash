import { Button, Card } from 'flowbite-react'
import React from 'react'
import usa from '../assets/usa 2.png'
import nigeria from '../assets/nigeria.png'
import arrow from '../assets/arrow-swap.png'
import canada from '../assets/canada 3.png'
import uk from '../assets/uk 2.png'
import {BiArrowBack} from 'react-icons/bi'
import { Link } from 'react-router-dom'
const SwapRate = () => {
  return (
    <>
        <Card className='mb-4'>
            <div className='flex items-center'>
                <Link to="/swap"><BiArrowBack/></Link>
                <h4 className='font-bold mr-auto ml-4'> Change swap rate</h4>
            </div>
        </Card>
        <Card>
        {/* <div className='flex'>
            <div className='flex gap-6 '>
                <div>
                    <p className='mb-2'>US DOLLARS</p>
                    <div className='flex bg-gray-200 p-4  items-center'>
                        <img src={usa}/>
                        <p className='text-center'>USD 1</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img src={arrow}/>
                </div>
                <div>
                    <p className='mb-2'>NAIRA</p>
                    <div className='flex bg-gray-200 p-4 justify-center items-center'>
                        <img src={nigeria}/>
                        <p>NGN 460.50</p>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
        <div className='flex'>
            <div className='flex gap-6 '>
                <div>
                    <p className='mb-2'>US DOLLARS</p>
                    <div className='flex bg-gray-200 p-4  items-center'>
                        <img src={usa}/>
                        <p className='text-center'>USD 1</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img src={arrow}/>
                </div>
                <div>
                    <p className='mb-2'>CANADIAN DOLLARS</p>
                    <div className='flex bg-gray-200 p-4 justify-center items-center'>
                        <img src={canada}/>
                        <p>NGN 460.50</p>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div> */}
        <div className='flex items-center'>
            <div className='flex flex-row gap-4'>
                <div>
                    <p className='mb-2'>US DOLLARS</p>
                    <div class="relative mx-auto w-96">
                        <img src={usa} alt="Flag" class="absolute top-1/2 transform -translate-y-1/2 left-2 w-14 h-auto"/>
                        <input type="text" placeholder="Amount" class="w-full pl-12 h-20 pr-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"/>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img src={arrow}/>
                </div>
                <div className='flex flex-col'>
                    <p className='mb-2'>POUNDS STERLING</p>
                    <div class="relative mx-auto w-96">
                        <img src={uk} alt="Flag" class="absolute top-1/2 transform -translate-y-1/2 left-2 w-14 h-auto"/>
                        <input type="text" placeholder="Amount" class="w-full h-20 pl-12 pr-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"/>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-20'>
            <Button className='rounded-none ml-auto' color='blue'>SAVE</Button>
        </div>
    </Card>
    </>

  )
}

export default SwapRate