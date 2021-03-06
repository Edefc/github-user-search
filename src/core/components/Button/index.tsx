import React from 'react';
import './styles.scss';

type Props = {
    text: string;
}

const Button = ( { text }: Props) => (
    
    <button className="btn btn-primary btn-button">
        <h5 className="text-button">{ text }</h5>
    </button>
   
);
export default Button;