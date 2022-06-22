import React from 'react';
import Benefit from '../Benefit/Benefit';

const PricingOption = (props) => {
    const{name,price,benefits}=props.pricingOption;
    return (
        <div className='text-3xl bg-slate-100 p-5 rounded-lg'>
            <h1>{name}</h1>
            <p>
                <span className='font-bold text-3xl bg-indigo-200 justify-center rounded-2xl'>{price}</span>
                <span>/mo</span>
                <div>
                    <h3 className='text-xl text-left'>Benefits:</h3>
                    {
                        benefits.map(benefit=><Benefit
                        key={benefit.id}
                        benefit={benefit}
                        
                        ></Benefit>)
                    }
                    
                </div>
            </p>
            
        </div>
    );
};

export default PricingOption;