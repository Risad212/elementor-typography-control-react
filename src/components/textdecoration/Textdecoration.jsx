import { useEffect } from 'react';
import './textdecoration.css';

function Textdecoration({stateProps}) {
    const {value,setValue} = stateProps;

    const handleOnchange = (elem) => {
        setValue({
            ...value,
            decoration: elem.target.value,
          });
    }

    useEffect(() => {
        if(value.decoration){
            console.log(value.decoration);
        }
    },[value.decoration])

    return (
        <>
            <div className="textdecoration-control-feild">
                <span className="textdecoration-title">Decoration</span>
                <div className="textdecoration-select-wrap">
                    <select id="selectId" onChange={handleOnchange}>

                        <option value="">Default</option>

                        <option value="underline">Underline</option>

                        <option value="overline">Overline</option>

                        <option value="line-through">Line Through</option>

                        <option value="none">None</option>
                    </select>
                </div>
            </div>
        </>
    );
}

export default Textdecoration;