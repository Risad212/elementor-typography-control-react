import { useState } from 'react';
import Fontsize from '../fontsize/Fontsize';
import Selection from '../selection/Selection';
import Inputrange from '../inputrange/Inputrange';
import {decorationData,styleData,transformData,weightData,wordSpacingData,letterSpacingData, lineHeightData,fontFamilyData, fontSizeData} from '../dummyData/Dummydata';
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

    return (
        <>
            <div className="main-control">
                <div className="main-control-wrap">
                    <div className='main-control-title'>
                        <span>Typography</span>
                    </div>
                    <div className="main-control-icon">
                        <span className='icon'><i class="fa-solid fa-globe"></i></span>
                        <span className="icon"><i class="fa-solid fa-pen-to-square"></i></span>
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
                    {/*------- font family control ----------*/}
                    <Selection stateProps={stateProps} data={fontFamilyData}/>
                    {/*------- font size control ----------*/}
                    <Fontsize stateProps={stateProps} />
                    {/*------- font width control ----------*/}
                    <Selection data={weightData} stateProps={stateProps}/>
                    {/*------- transform control ----------*/}
                    <Selection data={transformData} stateProps={stateProps}/>
                    {/*------- font style control ----------*/}
                    <Selection data={styleData} stateProps={stateProps}/>
                    {/*------- text decoration control ----------*/}
                    <Selection data={decorationData} stateProps={stateProps}/>
                    {/*------- line height control ----------*/}
                    <Inputrange stateProps={stateProps} data={lineHeightData}/>
                    {/*------- letter spacing control ----------*/}
                    <Inputrange stateProps={stateProps} data={letterSpacingData}/>
                    {/*------- word spacing control ----------*/}
                    <Inputrange stateProps={stateProps} data={wordSpacingData} />
                </div>
            </div>
        </>
    )
}

export default typography
