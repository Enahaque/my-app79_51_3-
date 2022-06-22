import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0, benefits: [
                'everything on free',
                'unlimited deals',
                'localized deals',
                'fantastic deals',
                'crazy deals'
            ]
        },
        { id: 2, name: 'Regular', price: 10 , benefits: [
            'regular on free',
            'unlimited deals',
            'localized deals',
            'fantastic deals',
            'crazy deals'
        ] },
        { id: 3, name: 'Premium', price: 20 , benefits: [
            'lifetime free',
            'unlimited deals',
            'localized deals',
            'fantastic deals',
            'crazy deals'
        ] },
    ];
    return (
        <div className='bg-slate-400 p-5 mt-5'>
            <h2 className='text-5xl text-white font-mono font-bold'>Best Pricing</h2>
            <p className='font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi est cum praesentium laudantium nemo sequi minima, id facere ex similique nam, repellat culpa doloremque amet.</p>
            <div className='grid md:grid-cols-3 gap-5 mt-5'>
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