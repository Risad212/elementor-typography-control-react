import { useState } from 'react';
import './selection.css';

function Selection({data}) {
    const {title,selectData} = data[0];
    
    const [value,setValue] = useState({
        decoration: '',
    })

    const handleOnchange = (elem) => {
        const name = elem.target.name;
        setValue({
            ...value,
            name: elem.target.value,
          });
          console.log(value.name);
    }

    
    return (
        <>
            <div className="selection-control-feild">
                <span className="selection-title">{title}</span>
                <div className="selection-select-wrap">
                    <select id="selectId" name="decoration" onChange={handleOnchange}>
                        {
                            selectData.map((elem) => {
                                return(
                                    <option value={elem.value}>{elem.innerText}</option>
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