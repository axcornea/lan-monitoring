import ScanNow from "./ScanNow";
import "./BaseLayout.css";

const BaseLayout = (props) => {
    const handleScanRequested = () => {
        return new Promise((res, rej) => setTimeout(res, 2_500));
    };

    return (
        <div className="col-sm-12 col-md-6 col-lg-4 mx-auto p-3 page-container">

            <nav className="navbar bg-dark mb-4" data-bs-theme="dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">LAN monitoring</span>

                    <ScanNow onScanRequested={handleScanRequested} />
                </div>
            </nav>

            {props.children}
        </div>
    );
};

export default BaseLayout;