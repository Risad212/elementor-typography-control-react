import './fontweight.css';

function Fontweight() {
    return (
        <>
            <div className="fontWeight-control-feild">
                <span className="fontWeight-title">Weight</span>
                <div className="fontWeight-select-wrap">
                    <select id="elementor-control-default-c1945" data-setting="label_typography_font_weight">
                        <option value="100">100 (Thin)</option>

                        <option value="200">200 (Extra Light)</option>

                        <option value="300">300 (Light)</option>

                        <option value="400">400 (Normal)</option>

                        <option value="500">500 (Medium)</option>

                        <option value="600" selected>600 (Semi Bold)</option>

                        <option value="700">700 (Bold)</option>

                        <option value="800">800 (Extra Bold)</option>

                        <option value="900">900 (Black)</option>

                        <option value="">Default</option>

                        <option value="normal">Normal</option>

                        <option value="bold">Bold</option>

                    </select>
                </div>
            </div>
        </>
    );
}

export default Fontweight;