import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';

import { Stacked, Pie, Button, SparkLine } from '../components';
import { earningData, SparkLineAreaData, ecomPieChartDat } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white 
        dark:text-gray-200
        dark:bg-secondary-dark-bg 
        h-44 rounded-x1 w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2x1'>$63,448.78</p>
            </div>
          </div>
          <div className='mt-6'>
            <Button 
              color="white"
              bgColor="blue"
              text="Download"
              borderRadius="10px"
              size="md"/>
          </div>
        </div>

        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map((item) => (
            <div
            key={item.title}
            className="bg-white 
            dark: text-gray-200 
            dark:bg-secondary-dark-bg 
            md:w-56 p-4 pt-9 rounded-2x1">

              <button type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="text-2x1 opacity-0.9 rounded-full p-4 hover:drop-shadow-x1">
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>
                  {item.amount}
                </span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className='text-sm text-gray-400 mt-1'>
                {item.title}
              </p>

            </div>
          ))}
        </div>

      </div>
      
    </div>
  )
}

export default Ecommerce