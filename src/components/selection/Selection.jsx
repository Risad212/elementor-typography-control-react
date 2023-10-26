
import { useEffect } from 'react';
import './selection.css';

function Selection({data,stateProps}) {
    const {title,selectData,key} = data[0];
    const {value,setValue} = stateProps;

    const handleOnchange = (elem) => {
        setValue({
            ...value,
            [key]: elem.target.value,
          });
    }


    useEffect(() => {
      if(value[key]){
        console.log(value[key]);
      }
    },[value[key]])

    return (
        <>
            <div className="selection-control-feild">
                <span className="selection-title">{title}</span>
                <div className="selection-select-wrap">
                    <select id="selectId" onChange={handleOnchange}>
                        {
                            selectData.map((elem) => {
                                return(
                                    <option value={elem.value} >{elem.innerText}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
        </>
    );
}

export default Selection;