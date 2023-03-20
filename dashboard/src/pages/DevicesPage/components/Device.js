import Port from "../../../components/Port";
import "./Device.css";

const Device = (props) => {
    const uniqueDeviceDomId = "device-body-" + props.ip.replace(".", "_");
    const cssClassBasedOnSecurityStatus = "device--" + props.securityStatus.toLowerCase();

    return (
        <div className={"device card mb-2 " + cssClassBasedOnSecurityStatus}>
            <div className="card-header" data-bs-toggle="collapse" data-bs-target={"#" + uniqueDeviceDomId}>
                {props.name}
            </div>

            <div id={uniqueDeviceDomId} className="collapse show">
                <div className="card-body d-flex flex-wrap gap-1">
                    {
                        props.ports.map(port =>
                            <Port num={port.port} type={port.type} />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Device;