import './typography.css';
/*----- import all components -------*/



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
            </div>
        </>
    )
}

export default typography
