import Fontfamily from '../fontfamily/fontFamily';
import Fontstyle from '../fontstyle/Fontstyle';
import Fontweight from '../fontweight/Fontweight';
import Textdecoration from '../textdecoration/Textdecoration';
import Transform from '../transform/Transform';
import './typography.css';


function typography() {
    return (
        <>
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
               {/*------- font width control ----------*/}
                <Fontweight />
                {/*------- transform control ----------*/}
                <Transform />
                {/*------- font style control ----------*/}
                <Fontstyle />
                {/*------- text decoration control ----------*/}
                 <Textdecoration />
            </div>
        </>
    )
}

export default typography
