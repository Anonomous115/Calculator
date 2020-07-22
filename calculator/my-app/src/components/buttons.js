import React from "react";

class buttons extends React.Component {
  render() {
    return (
      <div className="App">
        <button className="others" value="C" onClick={this.props.handleClear}>
          {this.props.result === "0" ? this.props.initText : "C"}
        </button>
        <button className="others" value="-" onClick={this.props.toggleMinus}>
          -/+
        </button>
        <button className="others" value="%" onClick={this.props.handlePercent}>
          %
        </button>
        <button
          value="/"
          onClick={this.props.handleOperators}
          className="operators"
        >
          &divide;
        </button>
        <br />
        <button value="7" onClick={this.props.handleClick}>
          7
        </button>
        <button value="8" onClick={this.props.handleClick}>
          8
        </button>
        <button value="9" onClick={this.props.handleClick}>
          9
        </button>
        <button
          value="*"
          onClick={this.props.handleOperators}
          className="operators"
        >
          x
        </button>
        <br />
        <button value="4" onClick={this.props.handleClick}>
          4
        </button>
        <button value="5" onClick={this.props.handleClick}>
          5
        </button>
        <button value="6" onClick={this.props.handleClick}>
          6
        </button>

        <button
          value="-"
          onClick={this.props.handleOperators}
          className="operators"
        >
          &minus;
        </button>
        <br />
        <button value="1" onClick={this.props.handleClick}>
          1
        </button>
        <button value="2" onClick={this.props.handleClick}>
          2
        </button>
        <button value="3" onClick={this.props.handleClick}>
          3
        </button>
        <button
          value="+"
          onClick={this.props.handleOperators}
          className="operators"
        >
          +
        </button>
        <br />
        <button class="zero" value="0" onClick={this.props.handleClick}>
          0
        </button>
        <button value="." onClick={this.props.handleDecimal}>
          .
        </button>
        <button onClick={this.props.handleEqual} className="operators">
          =
        </button>

        <br />
      </div>
    );
  }
}
export default buttons;
