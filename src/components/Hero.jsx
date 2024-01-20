import React from 'react'
import Carousel from './Carousel'
import Carousel1 from './Carousel1'
import Carousel2 from './Carousel2'
import underline from '../assets/Vector 37.svg'
import Table from './Table'
const Hero = () => {
    return (
        <div className='bg-custom-color'>
            <div className="relative font-serif mt-10" >
                <p className="border-2  rounded-2xl bg-custom-color-1 border-custom-color-1 w-64 mx-auto flex justify-center items-center text-white font-serif xl:text-base md:text-xs">
                    This is an invite only page ...
                </p>
            </div>
            <div className='xl:text-lg md:text-base hidden md:flex justify-center flex-col items-center  mt-10 font-medium font-serif'>
                <p> This is for all Ecom Owners who want to set up their store on Shopify</p>

            </div>
            <div className='  md:hidden flex justify-center flex-col items-center  mt-10 font-medium font-serif'>
                <p> This is for all Ecom Owners who want </p>
                <p> to set up their store on Shopify</p>

            </div>
            <div className='xl:text-4xl md:text-base hidden md:flex justify-center flex-col items-center  mt-10 font-semibold font-sans'>
                <p> Our Tested and Proven DEVORT Framework can help you to </p>
                <p> build your <span className='italic underline'>High Performing</span>  Ecom Store on Shopify </p>
            </div>
            <div className='  flex md:hidden justify-center flex-col items-center  mt-10 font-semibold font-sans'>
                <p> Our Tested and Proven DEVORT </p> 
                <p>Framework can help you to </p>
                <p> build your <span className='italic underline'>High Performing</span> </p>
                <p>  Ecom Store on Shopify </p>
            </div>
            <div className='xl:text-2xl md:text-base hidden md:flex justify-center flex-col items-center  mt-10 font-serif'>
                <p>Also Maximizes <span className='font-semibold'>Conversions, Mobile Page Experience, Website Loading Speed </span>  and helps</p>
                <p>in <span className='underline italic font-semibold'>reducing Abandoned Cart</span>  and <span className='underline italic font-semibold'>Customer Acquisition Cost</span> </p>
            </div>
            <div className=' md:hidden flex justify-center flex-col items-center  mt-10 font-serif'>
                <p>Also Maximizes <span className='font-semibold'>Conversions, Mobile Page </span></p>
                <p><span>Experience, Website Loading Speed </span>  and </p>
                <p>helps in <span className='underline italic font-semibold'>reducing Abandoned Cart</span>  and </p>
                <p> <span className='underline italic font-semibold'>Customer Acquisition Cost</span> </p>
            </div>
            <div className='xl:text-lg md:text-base hidden md:flex justify-center flex-col items-center  mt-10 font-medium font-serif'>
                <p>( Successfully Delivered Shopify Stores to numerous clients using DEVORT Framework )</p>
            </div>
            <div className=' md:hidden flex justify-center flex-col items-center  mt-10 font-medium font-serif'>
                <p>( Successfully Delivered Shopify Stores to </p>
                <p> numerous clients using DEVORT Framework )</p>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-6 font-serif '>
                <div className='border-2   border-custom-color-1 text-black flex justify-center text-center m-9  rounded-md flex-col relative w-72 h-36 bg-[#D2B48C] shadow-xl'>

                    <div>
                        <p className='font-bold text-2xl mb-2'>Quick Setup</p>
                    </div>
                    <div className='font-medium text-sm '>
                        <p className='text-base'>Store setup within</p>
                        <p>7-21 Days</p>
                    </div>
                </div>
                <div className='border-2   border-custom-color-1 text-black flex justify-center text-center m-9  rounded-md flex-col relative w-72 h-36 bg-[#D2B48C] shadow-xl'>

                    <div className='font-bold text-2xl mb-2'>
                        <p>Custom Coding</p>
                    </div>
                    <div className='font-medium text-sm'>
                        <p>Tailoring the store to</p>
                        <p>specific requirements.</p>
                    </div>
                </div>
                <div className='border-2   border-custom-color-1 text-black flex justify-center text-center m-9  rounded-md flex-col relative w-72 h-36 bg-[#D2B48C] shadow-xl'>

                    <div className='font-bold text-2xl mb-2'>
                        <p>Integration Services</p>
                    </div>
                    <div className='font-medium text-sm'>
                        <p>Includes Instagram and</p>
                        <p> WhatsApp integration.</p>
                    </div>
                </div>
                <div className='border-2   border-custom-color-1 text-black flex justify-center text-center m-9  rounded-md flex-col relative w-72 h-36 bg-[#D2B48C] shadow-xl'>

                    <div className='font-bold text-2xl mb-2'>
                        <p>Bonus Shopify Theme</p>
                    </div>
                    <div className='font-medium text-sm'>
                        <p>Offers the choice of a Paid</p>
                        <p>Shopify theme as a bonus.</p>
                    </div>
                </div>

            </div>

            <div className='xl:text-3xl md:text-base hidden md:flex justify-center  items-center  mt-6 font-serif font-medium'>
                <p>Now, Your e-commerce web development is in SAFE hands. </p>
            </div>
            <div className=' md:hidden flex flex-col justify-center  items-center  mt-6 font-serif font-medium'>
                <p>Now, Your e-commerce web </p>
                <p> development is in SAFE hands. </p>
            </div>

            <div className='xl:text-3xl md:text-base  flex justify-center  items-center  mt-6 font-serif font-medium text-custom-color-1'>
                <p>Screenshots of our clients websites</p>
            </div>
            <div className='hidden md:flex justify-center mt-2'>
                <img src={underline} alt="img loading" />
            </div>
            <div className='xl:text-2xl md:text-base flex justify-center  items-center  mt-6 font-serif font-medium'>
                <p style={{ color: '#f7516e' }}>pallavipoddar.com</p>
            </div>
            <div className='mt-10'>
                <Carousel />
            </div>
            <div className='xl:text-2xl md:text-base  flex justify-center  items-center  font-serif font-medium mt-20'>
                <p style={{ color: '#f7516e' }}> minimalistee.com </p>
            </div>
            <div className='mt-10'>
                <Carousel1 />
            </div>
            <div className='xl:text-2xl md:text-base  flex justify-center  items-center   font-serif font-medium mt-20'>
                <p style={{ color: '#f7516e' }}>moybyabeni.com </p>
            </div>
            <div className='mt-10'>
                <Carousel2 />
            </div>
            <div className='xl:text-3xl md:text-base flex justify-center  items-center  mt-16 font-serif font-medium text-custom-color-1'>
                <p>Here is How our service compares to the Rest </p>
            </div>

            <div className='hidden md:flex justify-center mt-2'>
                <img src={underline} alt="img loading" />
            </div>
            <div className='mt-10 pb-20'>
                <Table></Table>
            </div>



        </div>
    )
}

export default Hero
