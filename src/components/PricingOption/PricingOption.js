import React from 'react';

const PricingOption = (props) => {
    const{name,price}=props.pricingOption;
    return (
        <div>
            <h1>{name}</h1>
            <h1>{price}</h1>
        </div>
    );
};

export default PricingOption;