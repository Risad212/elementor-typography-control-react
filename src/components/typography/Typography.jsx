import { useState } from 'react';
import Fontfamily from '../fontfamily/fontFamily';
import Fontsize from '../fontsize/Fontsize';
import Lineheight from '../lineheight/Lineheight';
import Letterspacing from '../letterspacing/Letterspacing';
import Wordspacing from '../wordspacing/Wordspacing';
import Selection from '../selection/Selection';
import {decorationData,styleData,transformData,weightData} from '../dummyData/Dummydata';
import './typography.css';



function typography() {
    const [stateValue,setStateValue] = useState({
        family: '',
        size: '1',
        weight: '',
        transform: '',
        style: '',
        decoration: '',
        lineHeight: '',
        letterSpacing: '',
        wordSpacing: '',
    })

    const stateProps = {
        value: stateValue,
        setValue: setStateValue
    }

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
                        <span className="icon" onClick={() => {
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
                    <Fontfamily stateProps={stateProps}/>
                    {/*------- font size control ----------*/}
                    <Fontsize stateProps={stateProps}/>
                    {/*------- font width control ----------*/}
                    <Selection data={weightData} stateProps={stateProps}/>
                    {/*------- transform control ----------*/}
                    <Selection data={transformData} stateProps={stateProps}/>
                    {/*------- font style control ----------*/}
                    <Selection data={styleData} stateProps={stateProps}/>
                    {/*------- text decoration control ----------*/}
                    <Selection data={decorationData} stateProps={stateProps}/>
                    {/*------- line height control ----------*/}
                    <Lineheight stateProps={stateProps}/>
                    {/*------- letter spacing control ----------*/}
                    <Letterspacing stateProps={stateProps}/>
                    {/*------- word spacing control ----------*/}
                    <Wordspacing stateProps={stateProps}/>
                </div>
            </div>
        </>
    )
}

export default typography
