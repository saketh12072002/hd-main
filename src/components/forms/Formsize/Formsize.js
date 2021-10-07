import React,{useState} from 'react';
import './styles.scss';
import Select from 'react-select'
import { RadioGroup, RadioButton } from 'react-radio-buttons';

const Formsize = ({ options, defaultValue, handleChange, label, ...otherProps }) => {
  if (!Array.isArray(options) || options.length < 1) return null;

  return (
    <div className="formRowradiosize">
      {label && (
        <label>
          {label}
        </label>
      )}

    

      <div className="formSelectsize" value={defaultValue} onChange={handleChange} {...otherProps}>
        {options.map((option, index) => {
          const { value, name } = option;

          return (
    
              <div  class="List__numbers">
                    {/* <label class="Property__Field">
                      <input  name={name} value={value} type="radio" unchecked></input>
                      <span>{name}</span>
                    </label> */}

                    <div class="Property__Field">
                        <input id={name} type="radio" name={name} value={value} unchecked />
                        <label for={name}>{name}</label>
                    </div>
              </div>
              
              
           
            
          );
        })}
      </div>
    </div>
  );
}

export default Formsize