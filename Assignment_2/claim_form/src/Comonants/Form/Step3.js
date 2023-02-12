import HeaderTag from "../Header/Headershort.js"
import FooterTag from "../Footer/Footer.js"
import './step1.css';

// material UI
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function step3() {
    return (
        <div>
            <HeaderTag />
            <div className="main-area">
                <p>Mail in Repair</p>
                <p>Once your device is repaired it will be shipped the address provided below via standard shiping (1 business day).</p>
                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group" defaultValue="same"
                    >
                        <FormControlLabel value="same" control={<Radio />} label="Same as policy" />
                        <FormControlLabel value="new" control={<Radio />} label="New Address" />
                    </RadioGroup>
                </FormControl>
                <address className="ser-address">
                    <span>Steve Smith</span>
                    <span>123 Main Street</span>
                    <span>Altanta,Georgia 30031</span>
                    <span>United States</span>
                    <span>steve.smith@gmail.com</span>
                </address>
                <div className="back_next">
                    <button type="button" className="back">Back</button>
                    <button type="button" className="next" >Next</button>
                </div>
            </div>

            <FooterTag />
        </div>

    );
}

export default step3;