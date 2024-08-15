import Divider from '@modules/common/components/divider'
import React from 'react'
import Link from 'next/link'

const MahaPrasadamSanJose = () => {
  return (
    <div className="h-auto my-4 md:my-0 flex-1 p-2 md:pl-4 col-span-1 bg-teal-50">
    <h1 className="text-xl md:text-2xl md:mt-2 font-semibold text-center text-sky-950">
      Starting From August 17th 2024 
    </h1>
   
    <Divider />
    <h4 className="text-center font-cormorant font-semibold text-xl text-red-950 mb-1">
      Om Sree Mathre Namaha Om Gum Ganapathaye Namaha
    </h4>
    <div className="font-semibold text-center underline text-blue-950">
      Nithya Maha Prasadam
    </div>
    <div className='text-center font-opensans mb-3 mt-1'>
        <p className='text-center'>@</p>
    <p>Sri Lakshmi Ganapathi Temple</p>
    <p>Vaidica Vidhya Ganapathi Center Inc, San Jose</p>
    <p>32 Rancho Drive Ste B San Jose CA 95111</p>
    
    </div>
    <p className='font-semibold text-center underline text-blue-950 mb-2'>Nithya (Daily) Maha Prasadam /anna Dhanam / Priti Bhoj</p>

    <div className='text-center font-opensans mb-3 mt-1'>
    <p>Jai Jagadeesha Hare Aarati And Maha Prasadam served</p>
    <h6>Weekdays from 4:00 PM to 8:00 PM</h6>
    
    <h6>Weekends from 12:00 PM to 8:00 PM</h6>
    
    <p>All Are Welcome To Participate With Family Friends And Get Blessings </p>
    </div>

    <div className='text-center font-opensans mb-3 mt-1'>
    <div className="font-semibold text-center underline text-blue-950">
    Please Support This Maha Kainkaryam

    </div>
    <p>Sponsors Welcome</p>
    <p>Weekdays - $501.00
    </p>
    <p>Weekends - $1001.00</p>
    <Link
    className='underline text-blue-950 text-xl'
    target='_blank'
    href="https://paybee.io/quickpay.html?handle=vvgc#donationConfirm">Click here to donate</Link>
    </div>

    <div className='text-center font-opensans mb-3 mt-1 flex flex-col'>
    <div className="font-semibold underline text-blue-950">For further details please contact</div>
    <a href="tel:4087243577"> Pandit Siva Sankar Hemmanur 4087243577</a>
    <a href="tel:9252097637"> Pandit Ganesh Shasthry 9252097637</a>
    <a href="tel:4082263600">San Jose Temple  Number 4082263600</a>
    <p className='font-cormorant font-semibold text-xl text-red-950 mx-2'>Subham Bhuyath Mangalani Bhavanthu Loka Samastha Sukino Bhavanthu </p>
    </div>
  </div>
  )
}

export default MahaPrasadamSanJose