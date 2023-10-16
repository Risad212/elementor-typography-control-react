import Fontfamily from '../fontfamily/fontFamily';
import Fontsize from '../fontsize/Fontsize';
import Fontstyle from '../fontstyle/Fontstyle';
import Fontweight from '../fontweight/Fontweight';
import Textdecoration from '../textdecoration/Textdecoration';
import Transform from '../transform/Transform';
import './typography.css';


function typography() {
    let isToggled = false;
    const toggle = () => {
        isToggled = !isToggled;
        if (isToggled) {
            document.querySelector('.typography-control').classList.add('showTypography')
        } else {
            document.querySelector('.typography-control').classList.remove('showTypography')
        }
    }
    return (
        <>
            <div className="main-control">
                <div className="main-control-wrap">
                    <div className='main-control-title'>
                        <span>Typography</span>
                    </div>
                    <div className="main-control-icon">
                        <span className='icon'><i class="fa-solid fa-globe"></i></span>
                        <span className="icon" onClick={(e) => {
                            toggle()
                        }}><i class="fa-solid fa-pen-to-square"></i></span>
                    </div>
                </div>
                <div className="typography-control">
                    <div className="typography-header">
                        <span className='title'>Typography</span>
                        <div className="control-tools">
                            <button className='control-undo'><i class="fa-solid fa-rotate-left"></i></button>
                            <button class="e-control-tool"><i class="fa-solid fa-plus"></i></button>
                        </div>
                    </div>
                    {/*------- font control ----------*/}
                    <Fontfamily />
                    {/*------- font size control ----------*/}
                    <Fontsize />
                    {/*------- font width control ----------*/}
                    <Fontweight />
                    {/*------- transform control ----------*/}
                    <Transform />
                    {/*------- font style control ----------*/}
                    <Fontstyle />
                    {/*------- text decoration control ----------*/}
                    <Textdecoration />
                </div>
            </div>
        </>
    )
}

export default typography
