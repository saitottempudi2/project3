
import * as React from 'react';
import './Form.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Navigate } from 'react-router-dom';


export default function Form() {
    const [value, setValue] = React.useState('yes');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const [formData, setFormData] = useState({
        brand: 'Apple',
        model: 'MacBook Pro',
        nickname: 'Daniel MacBook',
        serial: '97654567890076',
        price: '$ 2000',
        languages: ['html'],
    })

    const onChangeHandler = (event) => {

        console.log(event)
        if (event.target.name === 'languages') {

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

    const onSubmitHandler = (event) => {
        event.preventDefault()
        console.log(formData)
    }
    const [startDate, setStartDate] = useState(new Date());
    const [auth, setAuth] = useState(false);
    if (auth) {
        return <Navigate to='/Step1'></Navigate>
    }


    return (
        <div className="main">
            <div >
                <h3>Claim Pre-Qualification</h3>
            </div>

            <hr></hr>
            <p>To get started with the claim process, please answer the following questions.</p>
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Do you still have possession of the devce?</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes, I have the devie" />
                    <FormControlLabel value="no" control={<Radio />} label="No, I do not have the device" />
                </RadioGroup>
            </FormControl><hr></hr>
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Is your device damaged in some way?</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes, I have the devie" />
                    <FormControlLabel value="no" control={<Radio />} label="No, I do not have the device" />
                </RadioGroup>
            </FormControl>
            <hr></hr>
            <div style={{ marginBottom: 20 }} className="main">
                <p>Confirm the device category, Brand and model or select this information below.</p>
                <div className="App">
                    <form onSubmit={onSubmitHandler}>
                        <div className="form-group">
                            <label htmlFor="device" className="form-label">Device Type</label>
                            <select className="form-select" name="occupation" onChange={onChangeHandler} value={formData.occupation}>
                                <option value="lapotp">Laptop</option>
                                <option value="mac">Mac</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="brand" className="form-label">Brand</label>
                            <input className="form-control" name="brand" onChange={onChangeHandler} value={formData.brand} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="model" className="form-label">Model</label>
                            <input className="form-control" name="model" onChange={onChangeHandler} value={formData.model} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="nickname" className="form-label">Device Nickname</label>
                            <input className="form-control" name="nickname" onChange={onChangeHandler} value={formData.nickname} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="serial" className="form-label">Serial Number</label>
                            <input className="form-control" name="serial" onChange={onChangeHandler} value={formData.serial} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price" className="form-label">Purhase Price,$</label>
                            <input className="form-control" name="price" onChange={onChangeHandler} value={formData.price} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Date" className="form-label">Purhase Date</label>
                            <DatePicker className="form-control example-custom-input" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <p style={{ fontSize: 10 }}>Upon completion you'll be taken to our Assurant claims site.</p>
                        <div className="form-group">

                        </div>
                    </form>
                </div>
                <div className="claim-button"><button className="btn" type="submit" onClick={() => setAuth(true)}>Start A Claim</button></div>
            </div>
        </div>


    );
}