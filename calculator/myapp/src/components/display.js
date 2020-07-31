import React from "react";
var size = {
  9: 63,
  10: 57,
  11: 54,
  12: 50,
  13: 45,
  14: 42,
  15: 39,
  16: 36,
  17: 34,
  18: 32,
  19: 30,
  20: 29,
  21: 28,
};
var placer = "";
class Display extends React.Component {
  handleFontSize = (num) => {
    const length = num.length;
    if (num.length > 0) {
      placer = size[length];
    }
    return placer;
  };
  render() {
    return (
      <div>
        <center>
          <div
            className="display"
            style={{ fontSize: this.handleFontSize(this.props.result) }}
          >
            <p class="text">
              {this.props.result !== "NaN"
                ? this.props.handleFormat(this.props.result)
                : "Error"}
            </p>
          </div>
        </center>
      </div>
    );
  }
}
export default Display;
