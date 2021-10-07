import React,{useState} from 'react';
import './styles.scss';
import Select from 'react-select'
import { RadioGroup, RadioButton } from 'react-radio-buttons';

const Formradio = ({ options, defaultValue, handleChange, label, ...otherProps }) => {
  if (!Array.isArray(options) || options.length < 1) return null;

  return (
    <div className="formRowradio">
      <div className="formSelectradio"  {...otherProps}>
        {options.map((option, index) => {
          const { value, name } = option;
          
          return (
              <div>
                    <label class="radio">
                      <input name={name} value={value} type="radio" checked={value===defaultValue} onChange={handleChange}></input>
                      <span>{name}</span>
                    </label>
              </div>        
          );
        })}
      </div>
    </div>
  );
}

export default Formradio;