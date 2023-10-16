import './fontstyle.css';

function Fontstyle() {
    return (
        <>
            <div className="fontstyle-control-feild">
                <span className="fontstyle-title">Style</span>
                <div className="fontstyle-select-wrap">
                    <select id="selectId">
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