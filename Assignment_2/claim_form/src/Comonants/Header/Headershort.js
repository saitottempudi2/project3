import Images from "../Images/pgh-logo.svg"
import './Header.css';
function HeaderTag() {
    return (
        <div>
            <div className="header">
                <a href="#default" className="logo"><img src={Images} alt="image" width={70}></img></a>
                <div className="header-right">
                    <a href="#faqs">FAQs</a>
                    <a href="#contactus">Contact Us</a>
                    <a href="#file">File a Claim</a>
                </div>
            </div>
            <div className="claimColor" style={{color: "white" , backgroundColor:'#0474bc'}}><h3> File a Claim</h3></div>

        </div>
    );
}
export default HeaderTag;