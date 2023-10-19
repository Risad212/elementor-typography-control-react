import { useEffect } from 'react';
import './wordspacing.css';

function Wordspacing({stateProps}) {
    const {value,setValue} = stateProps;

    const handleOnchange = (elem) => {
        setValue({
            ...value,
            wordSpacing: elem.target.value,
          });
    }
   
    useEffect(() => {
        if(value.wordSpacing){
            console.log(value.wordSpacing);
        }
    },[value.wordSpacing])

    /*--------- device icon toggle function ------------*/
    let isToggled = false;
    const showDeviceIcon = () => {
        isToggled = !isToggled;
        if (isToggled) {
            document.querySelector('.wordspacing-head .icon-list').classList.add('showAllDeviceIcon')
        } else {
            document.querySelector('.wordspacing-head .icon-list').classList.remove('showAllDeviceIcon')
        }
    }
       /*--------- units toggle function ------------*/
    let isToggledUnits = false;
    const showUnits = () => {
        isToggledUnits = !isToggledUnits;
        if (isToggledUnits) {
            document.querySelector('.wordspacing-head .units-switcher').classList.add('showUnitSwhitch')
        } else {
            document.querySelector('.wordspacing-head .units-switcher').classList.remove('showUnitSwhitch')
        }
    }
    
    return (
        <>
            <div className="wordspacing-control-feild">
                <div className="wordspacing-head">
                    <div className="left">
                        <span className="wordspacing-title">Word Spacing</span>
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
                <div className="wordspacing-nUiTouch">
                    <div className="input-rang">
                        <input type="range" onChange={handleOnchange} defaultValue='0' id="wordspacingRange" name="wordSpacing" min="0" max="100" />
                    </div>
                    <div className="input-value">
                        <input type="number" name='wordspacingValue' defaultValue={value.wordSpacing? value.wordSpacing: ''} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Wordspacing;