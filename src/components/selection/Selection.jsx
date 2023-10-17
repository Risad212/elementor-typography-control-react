import './selection.css';

function Selection({data}) {
    const {title,selectData} = data[0];
    return (
        <>
            <div className="selection-control-feild">
                <span className="selection-title">{title}</span>
                <div className="selection-select-wrap">
                    <select id="selectId">
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