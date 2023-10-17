import './fontsize.css';

function Fontsize() {
    let isToggled = false;
    const showDeviceIcon = () => {
        isToggled = !isToggled;
        if (isToggled) {
            document.querySelector('.units-switcher').classList.add('showUnitSwhitch')
        } else {
            document.querySelector('.units-switcher').classList.remove('showUnitSwhitch')
        }
    }

    // let isToggledUnits = false;
    // const showUnits = () => {
    //     isToggled = !isToggled;
    //     if (isToggled) {
    //         document.querySelector('.units-switcher').classList.add('showUnits')
    //     } else {
    //         document.querySelector('.units-switcher').classList.remove('showUnits')
    //     }
    // }
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
                            showDeviceIcon()
                        }}>
                            <span className='switch'>px</span>
                            <span className='switch'>em</span>
                            <span className='switch'>rem</span>
                            <span className='switch'>vw</span>
                            <span className='switch'><i class="fa-solid fa-pen"></i></span>
                        </div>
                    </div>
                </div>
                <div className="fontsize-nUiTouch">
                    <div className="input-rang">
                        <input type="range" id="vol" name="vol" min="0" max="200" />
                    </div>
                    <div className="input-value">
                        <input type="number" value='1' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Fontsize;