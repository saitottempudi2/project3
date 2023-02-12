import logo from './logo.svg';
import './App.css';
import ClaimForm from "./Comonants/Claims/CliamForm.js"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import React  from 'react';
import Step1 from "./Comonants/Form/Step1.js";
import Step2 from "./Comonants/Form/Step2.js";
import Step3 from "./Comonants/Form/Step3.js";
import Step4 from "./Comonants/Form/Step4.js";
import Step5 from "./Comonants/Form/Step5.js";

function App() {
  return (
<div>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<ClaimForm/>}></Route>
    <Route path="/Step1" element={<Step1/>}></Route>
    <Route path="/Step2" element={<Step2/>}></Route>
    <Route path="/Step3" element={<Step3/>}></Route>
    <Route path="/Step4" element={<Step4/>}></Route>
    <Route path="/Step5" element={<Step5/>}></Route>
  </Routes>
  </BrowserRouter>
</div>
    
  );
}

export default App;
