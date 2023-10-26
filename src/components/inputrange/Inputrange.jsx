import { useEffect, useState } from 'react';
import './inputrange.css';

function Inputrange({ stateProps, data }) {
    const { value, setValue } = stateProps;
    const { key, title, maxValue, defaultValue } = data;

    const handleOnchange = (elem) => {
        setValue({
            ...value,
            [key]: elem.target.value,

        });
    }

    useEffect(() => {
        if (value[key]) {
            console.log(value[key]);
        }
    }, [value[key]])


    /*--------- device icon toggle function ------------*/
    const [isToggled, setIsToggled] = useState(true);
    const [styleDevice, setStyleDevice] = useState();
    const [styleUnit,setStyleUnit] = useState();

    const showDeviceIcon = () => {
        setIsToggled(!isToggled);
        if (isToggled) {
            setStyleDevice('90px');
        } else {
            setStyleDevice('27px');
        }
    };
    
    /*--------- units toggle function ------------*/
    const showUnits = () => {
        setIsToggled(!isToggled);
        if (isToggled) {
            setStyleUnit('122px');
        } else {
            setStyleUnit('27px');
        }
    }

    return (
        <>
            <div className="inputRange-control-feild">
                <div className="inputRange-head">
                    <div className="left">
                        <span className="inputRange-title">{title}</span>
                        <div className='icon-list' style={{ height: `${styleDevice}` }}>
                            <button className="item" onClick={() => {
                                showDeviceIcon()
                            }}><i class="fa-solid fa-desktop"></i></button>
                            <button className="item"><i class="fa-solid fa-tablet-screen-button"></i></button>
                            <button className="item"><i class="fa-solid fa-mobile-screen"></i></button>
                        </div>
                    </div>
                    <div className="right">
                        <div className="units-switcher" style={{height: `${styleUnit}`}} onClick={() => {
                            showUnits();
                        }}>
                          <span className="switch">px</span>
                          <span className="switch">em</span>
                          <span className="switch">rem</span>
                          {title == 'size'? <span className="switch">vw</span>: ''}
                          <span className='switch'><i class="fa-solid fa-pen"></i></span> 
                        </div>
                    </div>
                </div>
                <div className="inputRange-nUiTouch">
                    <div className="input-rang">
                        <input type="range" onChange={handleOnchange} defaultValue={defaultValue} id="inputRangeRange" name="inputRange" min="0" max={maxValue} />
                    </div>
                    <div className="input-value">
                        <input type="number" name='inputRangeValue' defaultValue={value[key] ? value[key] : ''} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Inputrange;