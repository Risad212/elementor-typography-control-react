import './transform.css';

function Transform() {
    return (
        <>
            <div className="transform-control-feild">
                <span className="transform-title">Transform</span>
                <div className="transform-select-wrap">
                    <select id="selectId" name='transform'>
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