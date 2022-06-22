import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {id:1,name:'Free',price:0},
        {id:2,name:'Regular',price:10},
        {id:3,name:'Premium',price:20},
    ];
    return (
        <div className='bg-yellow-100 p-5 mt-5'>
            <h2 className='text-5xl text-gray-500 font-mono font-bold'>Best Pricing</h2>
            <p className='font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi est cum praesentium laudantium nemo sequi minima, id facere ex similique nam, repellat culpa doloremque amet.</p>
            <div>
                {
                    pricingOptions.map(pricingOption => <PricingOption
                        key={pricingOption.id}
                        pricingOption={pricingOption}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;