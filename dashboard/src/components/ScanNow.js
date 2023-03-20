import {useState} from "react";

const REFRESH_BUTTON_STATES = {
    NORMAL: 0,
    LOADING: 1,
};

const ScanNow = (props) => {
    const [refreshButtonState, setRefreshButtonState] = useState(REFRESH_BUTTON_STATES.NORMAL);

    const handleRefreshButtonClick = async () => {
        if (refreshButtonState !== REFRESH_BUTTON_STATES.NORMAL) {
            return;
        }

        setRefreshButtonState(REFRESH_BUTTON_STATES.LOADING);
        props.onScanRequested && await props.onScanRequested();
        setRefreshButtonState(REFRESH_BUTTON_STATES.NORMAL);
    };

    return (
        <button className="btn btn-sm btn-outline-secondary" type="button" onClick={handleRefreshButtonClick}>
            {
                refreshButtonState === REFRESH_BUTTON_STATES.NORMAL &&
                <>
                    Scan now
                </>
            }

            {
                refreshButtonState === REFRESH_BUTTON_STATES.LOADING &&
                <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Loading new data
                </>
            }
        </button>
    );
};

export default ScanNow;