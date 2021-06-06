import React from 'react'
import './styles.css'

function Sizechart() {
    return (
        <div className="sizechart">
        <ul className="SizeSwatchList HorizontalList HorizontalList--spacingTight">        
            <li className="HorizontalList__Item">
                      <input id="option-product-template-0-0" className="SizeSwatch__Radio" type="radio" name="option-0" value="S-38" checked="checked" data-option-position="1" />
                      <label for="option-product-template-0-0" className="SizeSwatch">S-38</label>
            </li>
            <li className="HorizontalList__Item">
                      <input id="option-product-template-0-1" className="SizeSwatch__Radio" type="radio" name="option-0" value="M-40" data-option-position="1" />
                      <label for="option-product-template-0-1" className="SizeSwatch">M-40</label>
            </li><li className="HorizontalList__Item">
                      <input id="option-product-template-0-2" className="SizeSwatch__Radio" type="radio" name="option-0" value="L-42" data-option-position="1" />
                      <label for="option-product-template-0-2" className="SizeSwatch">L-42</label>
            </li>
            <li className="HorizontalList__Item" data-id="inactive">
                      <input id="option-product-template-0-3" className="SizeSwatch__Radio" type="radio" name="option-0" value="XL-44" data-option-position="1" />
                      <label for="option-product-template-0-3" className="SizeSwatch">XL-44</label>
            </li>
            <li className="HorizontalList__Item">
                      <input id="option-product-template-0-4" className="SizeSwatch__Radio" type="radio" name="option-0" value="XXL-46" data-option-position="1" />
                      <label for="option-product-template-0-4" className="SizeSwatch">XXL-46</label>
            </li>
            <li className="HorizontalList__Item" data-id="inactive">
                      <input id="option-product-template-0-5" className="SizeSwatch__Radio" type="radio" name="option-0" value="XXXL-48" data-option-position="1" />
                      <label for="option-product-template-0-5" className="SizeSwatch">XXXL-48</label>
            </li>
        </ul>
        </div>
    )
}

export default Sizechart
