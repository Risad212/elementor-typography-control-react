import { useState } from 'react';
import './fontsize.css';

function Fontsize({stateProps}) {
    const {value,setValue} = stateProps;

    const handleOnchange = (elem) => {
        setValue({
            ...value,
            fontSize: elem.target.value,
          });
    }

    if(value){
        console.log(value.fontSize);
    }
    
    /*--------- device icon toggle function ------------*/
    let isToggled = false;
    const showDeviceIcon = () => {
        isToggled = !isToggled;
        if (isToggled) {
            document.querySelector('.icon-list').classList.add('showAllDeviceIcon')
        } else {
            document.querySelector('.icon-list').classList.remove('showAllDeviceIcon')
        }
    }
       /*--------- units toggle function ------------*/
    let isToggledUnits = false;
    const showUnits = () => {
        isToggledUnits = !isToggledUnits;
        if (isToggledUnits) {
            document.querySelector('.units-switcher').classList.add('showUnitSwhitch')
        } else {
            document.querySelector('.units-switcher').classList.remove('showUnitSwhitch')
        }
    }
    

    return (
        <>
            <div className="fontsize-control-feild">
                <div className="fontsize-head">
                    <div className="left">
                        <span className="fontsize-title">Size</span>
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
                          <span className="switch">vw</span>
                          <span className='switch'><i class="fa-solid fa-pen"></i></span> 
                        </div>
                    </div>
                </div>
                <div className="fontsize-nUiTouch">
                    <div className="input-rang">
                        <input type="range" defaultValue='0' onChange={handleOnchange} id="fontSizeRange" name="fontSizeRange" min="0" max="200" />
                    </div>
                    <div className="input-value">
                        <input type="number" name='fontSizeValue' defaultValue='1' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Fontsize;