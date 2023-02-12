import HeaderTag from "../Header/Headershort.js"
import FooterTag from "../Footer/Footer.js"
import './step2.css';
import card1 from "../Images/card1.png"
import card2 from "../Images/card1.png"
import card3 from "../Images/card1.png"
import shopping from "../Images/shopping.png"
function step2() {
    return (
        <div>
            <HeaderTag />
            <div className="main-area">
                <p>Select how you would like your product to be serviced</p>
                <div className="address">
                    <span>Service options are for your product located at: <br></br> 1155 ponce deloen long adress name Ave.Atlanta GA.12345</span>
                    <hr></hr>
                    <span>Not your products location? <a href="#">Enter a new address</a></span>
                </div>
                <div className="cards">
                    <div className="card">
                        <img src={card1} ></img> <span>Mail In Repair</span>
                        <p>If your claim is approved, we will send you a shipping label so you can send us your defective for repair.</p>
                        <span>Deductible:</span> <span style={{ float: "right" }}>$89.00</span>
                    </div>
                    <div className="card">
                        <img src={card2} ></img> <span> In Store Repair</span>
                        <p>You will be give a choice of which repair facility to take your device.</p>
                        <span>Deductible:</span> <span style={{ float: "right" }}>$89.00</span>
                    </div>
                    <div className="card">
                        <img src={card3} ></img> <span>Rembursement</span>
                        <p>We'll reimburse you quickly and converiently.</p>
                    </div>

                </div>
                <div>
                    <div className="back_next">
                        <button type="button" className="back">Back</button>
                        <button type="button" className="next" >Next</button>
                    </div>
                </div>
            </div>
            <div className="aside">
            <img src={shopping} ></img> 
            <span style={{fontSize: "10px"}}>Diane's Macbook MacBook Pro</span>
            
            </div>

            <FooterTag />
        </div>

    );
}

export default step2;