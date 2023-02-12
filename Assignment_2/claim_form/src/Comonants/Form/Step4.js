import HeaderTag from "../Header/Headershort.js"
import FooterTag from "../Footer/Footer.js"
import './step1.css';

function step4() {
    return (
        <div>
            <HeaderTag />
            <div className="main-area">
                <div>
                    <p class="alignleft">Claim details</p>
                    <p class="alignright">Edit</p>
                    <div style={{ clear: "both" }}></div>
                    <hr></hr>
                    <p class="alignleft">Date of Incident</p>
                    <p class="alignright">12/15/2021</p>
                    <div style={{ clear: "both" }}></div>
                    <hr></hr>
                    <p class="alignleft">Reason for claim</p>
                    <p class="alignright">My product is not functioning properly</p>
                    <div style={{ clear: "both" }}></div>
                    <hr></hr>
                    <p class="alignleft">Decription </p>
                    <p class="alignright">My product is not functioning properly</p>
                    <div style={{ clear: "both" }}></div>
                    <hr></hr>
                    <p class="alignleft">Fulfilment information </p>
                    <p class="alignright">Need a diffrent repair option</p>
                    <div style={{ clear: "both" }}></div>
                    
                    <p class="alignleft">Ship To US</p>
                    <div style={{ clear: "both" }}></div>
                    <hr></hr>
                    <p class="alignleft">Delivery Address </p>
                    <p class="alignright">2 cherry road</p>
                    <div style={{ clear: "both" }}></div>

                    <p class="alignleft"> Persional Information</p>
                    <p class="alignright">Edit</p>
                    <div style={{ clear: "both" }}></div>
                    <hr></hr>

                    <p class="alignleft"> Full Name</p>
                    <p class="alignright">Steve smith</p>
                    <div style={{ clear: "both" }}></div>
                    <hr></hr>

                    
                    <p class="alignleft"> Address</p>
                    <p class="alignright">123 main street</p>
                    <div style={{ clear: "both" }}></div>
                    <hr></hr>

                    
                    <p class="alignleft"> Email address</p>
                    <p class="alignright">stevesmith@gmail.com</p>
                    <div style={{ clear: "both" }}></div>
                    <hr></hr>

                    
                    <p class="alignleft"> Contact Number</p>
                    <p class="alignright">070 128 0266</p>
                    <div style={{ clear: "both" }}></div>
                    <hr></hr>

                    <div className="back_next">
                    <button type="button" className="back">Back</button>
                    <button type="button" className="next" >Submit</button>
                    </div>


                </div>

            </div>

            <FooterTag />
        </div>

    );
}

export default step4;