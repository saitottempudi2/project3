import HeaderTag from "../Header/Header.js"
import FooterTag from "../Footer/Footer.js"
import Form from "../Form/Form.js"
import * as ReactDOM from 'react-dom';
import { React } from 'react';
import { render } from "react-dom"

function ClaimForm()
{
 return( <div>
   <HeaderTag/>
   <Form/>
   <FooterTag/>
   </div>
 );
}
export default ClaimForm;