import './fontstyle.css';

function Fontstyle({stateProps}) {
    const {value,setValue} = stateProps;

    const handleOnchange = (elem) => {
        // setValue({
        //     ...value,
        //     style: elem.target.value,
        //   });

    }

    if(value){
        console.log(value.style);
    }
    return (
        <>
            <div className="fontstyle-control-feild">
                <span className="fontstyle-title">Style</span>
                <div className="fontstyle-select-wrap">
                    <select id="selectId" onChange={handleOnchange}>
                        <option value="">Default</option>

                        <option value="normal">Normal</option>

                        <option value="italic">Italic</option>

                        <option value="oblique">Oblique</option>
                    </select>
                </div>
            </div>
        </>
    );
}

export default Fontstyle;