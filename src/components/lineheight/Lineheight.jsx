import { useEffect } from 'react';
import './lineheight.css';

function lineheight({stateProps}) {
    const {value,setValue} = stateProps;

    const handleOnchange = (elem) => {
        setValue({
            ...value,
            lineHeight: elem.target.value,
          });
    }

    
    useEffect(() => {
        if(value.lineHeight){
            console.log(value.lineHeight);
        }
    },[value.lineHeight])
  

    /*--------- device icon toggle function ------------*/
    let isToggled = false;
    const showDeviceIcon = () => {
        isToggled = !isToggled;
        if (isToggled) {
            document.querySelector('.lineheight-head .icon-list').classList.add('showAllDeviceIcon')
        } else {
            document.querySelector('.lineheight-head .icon-list').classList.remove('showAllDeviceIcon')
        }
    }
       /*--------- units toggle function ------------*/
    let isToggledUnits = false;
    const showUnits = () => {
        isToggledUnits = !isToggledUnits;
        if (isToggledUnits) {
            document.querySelector('.lineheight-head .units-switcher').classList.add('showUnitSwhitch')
        } else {
            document.querySelector('.lineheight-head .units-switcher').classList.remove('showUnitSwhitch')
        }
    }
    
    return (
        <>
            <div className="lineheight-control-feild">
                <div className="lineheight-head">
                    <div className="left">
                        <span className="lineheight-title">Line-Height</span>
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
                <div className="lineheight-nUiTouch">
                    <div className="input-rang">
                        <input type="range" onChange={handleOnchange} defaultValue='0' id="lineheightRange" name="lineHeight" min="0" max="100" />
                    </div>
                    <div className="input-value">
                        <input type="number" name='lineheightValue' defaultValue={value.lineHeight? value.lineHeight: ''} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default lineheight;