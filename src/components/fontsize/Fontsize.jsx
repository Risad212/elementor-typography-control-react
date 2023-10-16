import './fontsize.css';

function Fontsize() {
    let isToggled = false;
    const showDeviceIcon = () => {
        isToggled = !isToggled;
        if (isToggled) {
            document.querySelector('.icon-list').classList.add('showAllDeviceIcon')
        } else {
            document.querySelector('.icon-list').classList.remove('showAllDeviceIcon')
        }
    }
    return (
        <>
            <div className="fontsize-control-feild">
                 <div className="fontsize-head">
                   <span className="fontsize-title">Size</span>
                    <ul className='icon-list'>
                        <li className="item" onClick={() => {
                            showDeviceIcon()
                        }}><i class="fa-solid fa-desktop"></i></li>
                        <li className="item"><i class="fa-solid fa-tablet-screen-button"></i></li>
                        <li className="item"><i class="fa-solid fa-mobile-screen"></i></li>
                    </ul>
                 </div>
                <div className="fontsize-nUiTouch">
                    
                </div>
            </div>
        </>
    );
}

export default Fontsize;