import { useEffect } from 'react';
import './transform.css';

function Transform({stateProps}) {
    const {value,setValue} = stateProps;

    const handleOnchange = (elem) => {
        setValue({
            ...value,
            transform: elem.target.value,
          });
    }

    useEffect(() => {
        if(value.transform){
            console.log(value.transform);
        }
    },[value.transform])
    
    return (
        <>
            <div className="transform-control-feild">
                <span className="transform-title">Transform</span>
                <div className="transform-select-wrap">
                    <select id="selectId" name='transform' onChange={handleOnchange}>
                        <option value="">Default</option>

                        <option value="uppercase">Uppercase</option>

                        <option value="lowercase">Lowercase</option>

                        <option value="capitalize">Capitalize</option>

                        <option value="none">Normal</option>

                    </select>
                </div>
            </div>
        </>
    );
}

export default Transform;