import React from 'react';
import delivery from '../Assets/pngtree-delivery-boy-with-mask-riding-bike-vector-png-image_2187935.jpeg';
import herobg from '../Assets/7940-orange-pink-peach-light-line-1920x1200.jpeg';
import one from '../Assets/ice2-removebg-preview.png';
import { heroData } from '../utils/data';




const HomeContainer = () => {
  
  

  return (
    <div className='grid md:py-8  grid-cols-1 md:grid-cols-2 gap-2 w-full  ' id='home'>

      <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
        <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
          <p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>
          <div className='w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl'>
            <img src={delivery} className='w-full h-full object-contain' alt="delivery" />
          </div>
        </div>

        <p className='text-[2.5rem] lg:text-[4rem] font-bold tracking-wide text-headingColor'>The Fastest Delivery in <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>Your City</span></p>

        <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod accusantium at ipsa explicabo nesciunt porro ea illo veniam ut neque sequi animi blanditiis debitis illum voluptatum magnam, aut itaque fugit?</p>

        <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 '>Order Now</button>

      </div>


      <div className=' py-2 flex-1 relative'>
            <img src={herobg} alt="Hero-background" className='w-full md:w-[60%] md:h-full absolute top-0 right-0'/>

            <div className='w-full h-full absolute  top-0 left-0 flex items-center justify-center py-4 gap-4 flex-wrap lg:px-32'>
                {
                  heroData && heroData.map(n =>(
                    <div key={n.id} className=' lg:w-190 min-w-[190px] p-4 bg-[rgba(255,255,255,0.4)] mt-2 backdrop-blur-md rounded-3xl flex flex-col justify-center items-center shadow-lg'>
                      <img src={n.imageSrc} alt="ice-cream"  className='w-20 lg:w-32 -mt-10 lg:-mt-10 h-20 '/>
                      <p classname='text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4'>
                        {n.name}
                      </p>
                      <p className='text0[12px] lg:text-sm font-semibold text-lighttextGray my-1 lg:my-3'>{n.decp}</p>
                      <p className='text-sm font-semibold text-headingColor'>
                        <span className='text-sm text-red-600'>$</span>{n.price}
                      </p>

                    </div>
                  ))
                }

            </div>

      </div>

    </div>
  )
}

export default HomeContainer