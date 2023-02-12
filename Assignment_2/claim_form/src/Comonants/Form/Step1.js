
import HeaderTag from "../Header/Headershort.js"
import * as React from 'react';
import FooterTag from "../Footer/Footer.js"
import './Form.css';
import './step1.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Form() {

    const [startDate, setStartDate,] = useState();
    const [formData, setFormData] = useState({})
    const onChangeHandler = (event) => {

        console.log(event)
        if (event.target.name === 'reason') {

            let copy = { ...formData }

            if (event.target.checked) {
                copy.languages.push(event.target.value)
            } else {
                copy.languages = copy.languages.filter(el => el !== event.target.value)
            }

            setFormData(copy)

        } else {
            setFormData(() => ({
                ...formData,
                [event.target.name]: event.target.value
            }))
        }
    }

    const [checked, setChecked] = React.useState(true);

    const handleChange = () => {
        setChecked(!checked);
    };

const navigate = useNavigate(true);

  function handleClick(event) {

   navigate('/Step2');
  }


    return (
        <div style={{ background: '#f4f4f4' }}>
            <HeaderTag />
            <div style={{ marginBottom: 20 }} className="main">
                <div className="App" style={{ width: 380 }} >
                    <p>Please tell us what happend</p>
                    <form>
                        <div className="form-group">
                            <label htmlFor="Date" className="form-label">Date of incident</label>
                            <DatePicker className="form-control example-custom-input" selected={startDate} onChange={(date) => setStartDate(date)} placeholderText="e.g. Placeholder " />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Date" className="form-label">Describe the issue or reason for your request</label>
                            <textarea name="DescribeIssue" className="form-control" rows={4} cols={40} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="device" className="form-label">Select the reason for your claim/request </label>
                            <select className="form-select" name="reason" onChange={onChangeHandler} defaultValue="" placeholder="e.g. Placeholder">
                                <option value="loss">Loss</option>
                                <option value="theft">Theft</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={checked}
                                    onChange={handleChange}
                                />
                                <span style={{ fontSize: 10 }}> I agree the Terms of Use and acknowledge that I have reviewed the ruad Notice.</span>
                            </label>
                        </div>
                        <div className="back_next">
                            <button type="button" className="back">Back</button>
                            <button type="button" className="next" onSubmit={handleClick}>Next</button>
                        </div>
                    </form>

                </div>

            </div>
            <FooterTag />
        </div>

    );
}