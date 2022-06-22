import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';

const Benefit = (props) => {
    return (
        <div>
            <p className='flex items-center text-xl'><CheckCircleIcon className='w-5 h-5 text-green-500 mr-2'></CheckCircleIcon>
                {props.benefit}
            </p>

        </div>
    );
};

export default Benefit;