import assurant from "../Images/assurant-footer-logo.png"
import ssl from "../Images/ssl-logo.jpeg"
import pci from "../Images/pci-logo.jpeg"
import './Footer.css';
function FooterTag() {
    return (
        <div className="footer">
            <div className="left">
                <a href="#default" className="logo"><img src={assurant} alt="image"></img></a>
                <span>@ 2022 Assurant,Inc.All rights reserved</span>
            </div>
            <div className="right">
      
            <a style={{ margin: "0 10px 0 100px"}} href="#default" className="logo"><img src={ssl} alt="ssl"></img></a>
            <a href="#default" className="logo"><img src={pci} alt="pci"></img></a>
           
         
            <ul className="list">
                <li>Support Details</li>
                <li>Privacy Policy</li>
                <li>TermsofService</li>
                </ul>
            </div>
        </div>
    );
}
export default FooterTag;