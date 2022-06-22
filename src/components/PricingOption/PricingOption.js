import React from 'react';

const PricingOption = (props) => {
    const{name,price}=props.pricingOption;
    return (
        <div className='text-3xl bg-slate-100 p-5 rounded-lg'>
            <h1>{name}</h1>
            <p>
                <span className='font-bold text-3xl bg-indigo-200 justify-center rounded-2xl'>{price}</span>
            </p>
            
        </div>
    );
};

export default PricingOption;