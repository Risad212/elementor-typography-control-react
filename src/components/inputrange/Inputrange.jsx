import { useEffect } from 'react';
import './inputrange.css';

function Wordspacing({stateProps,data}) {
    const {value,setValue} = stateProps;
    const {key,title,maxValue, defaultValue} = data;
    
    const handleOnchange = (elem) => {
        setValue({
            ...value,
            [key]: elem.target.value,
            
          });
          console.log(key);
    }

    useEffect(() => {
        if(value.key){
            console.log(value);
        }
    },[value.key])


    /*--------- device icon toggle function ------------*/
    let isToggled = false;
    const showDeviceIcon = () => {
        isToggled = !isToggled;
        if (isToggled) {
            document.querySelector('.inputRange-head .icon-list').classList.add('showAllDeviceIcon')
        } else {
            document.querySelector('.inputRange-head .icon-list').classList.remove('showAllDeviceIcon')
        }
    }
       /*--------- units toggle function ------------*/
    let isToggledUnits = false;
    const showUnits = () => {
        isToggledUnits = !isToggledUnits;
        if (isToggledUnits) {
            document.querySelector('.inputRange-head .units-switcher').classList.add('showUnitSwhitch')
        } else {
            document.querySelector('.inputRange-head .units-switcher').classList.remove('showUnitSwhitch')
        }
    }
    
    return (
        <>
            <div className="inputRange-control-feild">
                <div className="inputRange-head">
                    <div className="left">
                        <span className="inputRange-title">{title}</span>
                        <div className='icon-list'>
                            <button className="item" onClick={() => {
                                showDeviceIcon()
                            }}><i class="fa-solid fa-desktop"></i></button>
                            <button className="item"><i class="fa-solid fa-tablet-screen-button"></i></button>
                            <button className="item"><i class="fa-solid fa-mobile-screen"></i></button>
                        </div>
                    </div>
                    <div className="right">
                        <div className="units-switcher" onClick={() => {
                            showUnits();
                        }}>
                          <span className="switch">px</span>
                          <span className="switch">em</span>
                          <span className="switch">rem</span>
                          <span className='switch'><i class="fa-solid fa-pen"></i></span> 
                        </div>
                    </div>
                </div>
                <div className="inputRange-nUiTouch">
                    <div className="input-rang">
                        <input type="range" onChange={handleOnchange} defaultValue={defaultValue} id="inputRangeRange" name="inputRange" min="0" max={maxValue} />
                    </div>
                    <div className="input-value">
                        <input type="number" name='inputRangeValue' defaultValue={value[key]? value[key]: ''} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Wordspacing;