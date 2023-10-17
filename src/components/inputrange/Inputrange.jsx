import './inputrange.css';

function Inputrange({data}) {
    const {title, defaultValue, maxRange, units,rangInputName,rangDefaultValue} = data;
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
            <div className="inputrange-control-feild">
                <div className="inputrange-head">
                    <div className="left">
                        <span className="inputrange-title">{title}</span>
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
                            {
                                units && units.map((elem,index) => {
                                    return(
                                        <>
                                           <span className='switch' key={index}>{elem}</span>
                                        </>
                                    )
                                })
                            }
                            <span className='switch'><i class="fa-solid fa-pen"></i></span> 
                        </div>
                    </div>
                </div>
                <div className="inputrange-nUiTouch">
                    <div className="input-rang">
                        <input type="range" defaultValue={rangDefaultValue} id="vol" name={rangInputName} min="0" max={maxRange} />
                    </div>
                    <div className="input-value">
                        <input type="number" name="" defaultValue={defaultValue} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Inputrange;