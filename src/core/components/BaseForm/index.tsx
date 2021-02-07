import React from 'react';
import './styles.scss';

type Props =  {
    title: string
    children: React.ReactNode
}

const BaseForm = ( {title, children }: Props) => {

    return (
        <div className="base-form">
            <h1 className="form-title">
                { title }
           </h1>
           { children }
          <div >
               <button className="btn btn-primary btn-botton">
                   Encontrar
               </button>

           </div>
        </div>
    )
}

export default BaseForm;