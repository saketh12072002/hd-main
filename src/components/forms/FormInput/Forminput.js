import React from 'react'
import './styles.scss'

function Forminput({handleChange, label, ...otherProps}) {
    return (
        <div className="formRowinput">
               
            <div className="label">
            {label && (
                <label>
                    {label}
                </label>
            )}  
            </div>
            <div className="innput">
            <input className="formInput" onChange={handleChange} {...otherProps} />  
            </div>
               
        </div>
    );
}

export default Forminput
