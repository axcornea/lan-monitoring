import Device from "./Device";

const DeviceContainer = (props) => {
    return (
        <div className="device-container">
            {
                props.devices &&
                props.devices.map(device =>
                    <Device
                        name={device.name}
                        ports={device.ports}
                        ip={device.ip}
                        securityStatus={device.securityStatus}
                    />)
            }
        </div>
    );
};

export default DeviceContainer;