import './textdecoration.css';

function Textdecoration() {
    return (
        <>
            <div className="textdecoration-control-feild">
                <span className="textdecoration-title">Decoration</span>
                <div className="textdecoration-select-wrap">
                    <select id="selectId">

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