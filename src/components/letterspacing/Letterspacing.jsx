import './letterspacing.css';

function Letterspacing({stateProps}) {
    const {value,setValue} = stateProps;

    const handleOnchange = (elem) => {
        setValue({
            ...value,
            letterSpacing: elem.target.value,
          });
    }

    if(value){
        console.log(value.letterSpacing);
    }

    /*--------- device icon toggle function ------------*/
    let isToggled = false;
    const showDeviceIcon = () => {
        isToggled = !isToggled;
        if (isToggled) {
            document.querySelector('.letterspacing-head .icon-list').classList.add('showAllDeviceIcon')
        } else {
            document.querySelector('.letterspacing-head .icon-list').classList.remove('showAllDeviceIcon')
        }
    }
       /*--------- units toggle function ------------*/
    let isToggledUnits = false;
    const showUnits = () => {
        isToggledUnits = !isToggledUnits;
        if (isToggledUnits) {
            document.querySelector('.letterspacing-head .units-switcher').classList.add('showUnitSwhitch')
        } else {
            document.querySelector('.letterspacing-head .units-switcher').classList.remove('showUnitSwhitch')
        }
    }
    
    return (
        <>
            <div className="letterspacing-control-feild">
                <div className="letterspacing-head">
                    <div className="left">
                        <span className="letterspacing-title">Letter Spacing</span>
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
                <div className="letterspacing-nUiTouch">
                    <div className="input-rang">
                        <input type="range" onChange={handleOnchange} defaultValue='30' id="letterspacingRange" name="letterSpacing" min="0" max="100" />
                    </div>
                    <div className="input-value">
                        <input type="number" name='letterspacingValue' defaultValue={value.letterSpacing? value.letterSpacing: ''} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Letterspacing;