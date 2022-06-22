import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';

const PricingOption = (props) => {
    const{name,price}=props.pricingOption;
    return (
        <div className='text-3xl bg-slate-100 p-5 rounded-lg'>
            <h1>{name}</h1>
            <p>
                <span className='font-bold text-3xl bg-indigo-200 justify-center rounded-2xl'>{price}</span>
                <span>/mo</span>
                <div>
                    <h3 className='text-xl text-left'>Benefits:</h3>
                    <p  className='flex items-center text-xl'><CheckCircleIcon className='w-5 h-5 text-green-500 mr-2'></CheckCircleIcon>
                    Awesome Features
                    </p>
                    
                </div>
            </p>
            
        </div>
    );
};

export default PricingOption;