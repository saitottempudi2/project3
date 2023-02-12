import Images from "../Images/pgh-logo.svg"
import './Header.css';
function HeaderTag() {
    return (
        <div>
            <div className="header">
                <a href="#default" className="logo"><img src={Images} alt="image" width={70}></img></a>
                <div className="header-right">
                    <a href="#home">Home</a>
                    <a href="#account">Account</a>
                    <a href="#mydevices">My Devices</a>
                    <a href="#techservies">Tech Service</a>
                    <a className="active" href="">File a Claim</a>
                </div>
            </div>
            <div className="claimColor"><h3> File a Claim</h3></div>

        </div>
    );
}
export default HeaderTag;