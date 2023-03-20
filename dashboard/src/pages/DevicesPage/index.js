import BaseLayout from "../../components/BaseLayout";
import DeviceContainer from "./components/DeviceContainer";

const DEVICES = [
    {
        name: "WinBox",
        ip: "192.168.100.11",
        securityStatus: "ok",
        ports: [
            {
                port: 22,
                type: "tcp",
            },
            {
                port: 80,
                type: "tcp",
            },
            {
                port: 3000,
                type: "tcp",
            },
            {
                port: 54,
                type: "udp",
            },
            {
                port: 1001,
                type: "etherium",
            },
            {
                port: 5534,
                type: "vtap-tunnel",
            },
        ],
    }
];

const Index = () => {
    return (
        <BaseLayout>
            <DeviceContainer devices={DEVICES} />
        </BaseLayout>
    );
};

export default Index;