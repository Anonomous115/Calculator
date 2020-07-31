import React from "react";

import "./styles.css";
import Buttons from "./components/buttons";
import Display from "./components/display";
var checker = "hello";
class App extends React.Component {
  state = {
    counter: 0,
    currNum: "",
    secondNum: "",
    thirdNum: "",
    sign: "",
    result: "0",
    init: "CE",
    prevAns: "",
    prevResult: "",
    prevSign: "",
    evaluated: false,
  };

  handleClear = () => {
    this.setState({
      currNum: "",
      secondNum: "",
      thirdNum: "",
      sign: "",
      result: "0",
      init: "CE",
      prevAns: "",
      prevResult: "",
      prevSign: "",
      evaluated: false,
    });
  };
  handleClick = (e) => {
    if (this.state.result.length > 0) {
      this.setState({
        counter: this.state.counter++,
      });
    }
    if (!isNaN(e.target.value) && this.state.result.length < 21) {
      if (this.state.sign === "") {
        this.setState({
          currNum: this.state.currNum + e.target.value,
          result: this.state.currNum.concat(e.target.value),
        });
      }

      if (this.state.evaluated) {
        this.setState({
          thirdNum: this.state.thirdNum.concat(e.target.value),
          result: this.state.thirdNum.concat(e.target.value),
        });
      }

      if (this.state.sign !== "" && !this.state.evaluated) {
        this.setState({
          secondNum: this.state.secondNum.concat(e.target.value),
          result: this.state.secondNum.concat(e.target.value),
        });
      }
    } else if (this.state.sign === "" && !this.state.evaluated) {
      this.setState({
        result: this.state.currNum,
      });
    } else if (this.state.sign !== "" && !this.state.evaluated) {
      this.setState({
        result: this.state.secondNum,
      });
    } else if (this.state.evaluated) {
      this.setState({
        result: this.state.thirdNum,
      });
    }
  };

  handleOperators = (e) => {
    if (this.state.sign === "") {
      this.setState({
        sign: e.target.value.toString(),
        prevSign: e.target.value.toString(),
      });
    }
    if (this.state.sign !== "") {
      function parser(x) {
        return parseFloat(x);
      }
      var answer = {
        "+": function (x, y) {
          return parser(x) + parser(y);
        },
        "-": function (x, y) {
          return parser(x) - parser(y);
        },
        "*": function (x, y) {
          return parser(x) * parser(y);
        },
        "/": function (x, y) {
          return parser(x) / parser(y);
        },
      };

      if (this.state.sign !== "" && !this.state.evaluated) {
        this.setState({
          result: answer[this.state.sign](
            this.state.currNum,
            this.state.secondNum
          ).toString(),

          currNum: "",
          evaluated: true,
          prevAns: answer[this.state.sign](
            this.state.currNum,
            this.state.secondNum
          ).toString(),

          secondNum: answer[this.state.sign](
            this.state.currNum,
            this.state.secondNum
          ).toString(),
        });
      }

      if (this.state.evaluated && this.state.sign !== "") {
        this.setState({
          result: answer[this.state.sign](
            this.state.secondNum,
            this.state.thirdNum
          ).toString(),
          evaluated: true,
          thirdNum: "",

          currNum: "",
          secondNum: answer[this.state.sign](
            this.state.secondNum,
            this.state.thirdNum
          ).toString(),
        });
      }
    }
  };
  handleFormat = (num) => {
    if (num.length > 3 && !this.state.result.includes(".")) {
      for (let i = num.length - 3; i > 0; i -= 3) {
        num = num.substr(0, i) + "," + num.substr(i);
      }
    }
    return num;
  };

  toggleMinus = () => {
    if (!this.state.evaluated) {
      if (this.state.sign === "") {
        if (!this.state.currNum.includes("-")) {
          this.setState({
            result: "-" + this.state.result,
            currNum: "-" + this.state.currNum,
          });
        } else {
          this.setState({
            currNum: this.state.currNum.replace("-", ""),
            result: this.state.result.replace("-", ""),
          });
        }
      } else if (
        this.state.sign !== "" &&
        !this.state.secondNum.includes("-")
      ) {
        this.setState({
          result: "-" + this.state.result,
          secondNum: "-" + this.state.secondNum,
        });
      } else if (this.state.sign !== "" && this.state.secondNum.includes("-")) {
        this.setState({
          secondNum: this.state.secondNum.replace("-", ""),
          result: this.state.result.replace("-", ""),
        });
      }
    } else if (this.state.evaluated) {
      if (!this.state.thirdNum.includes("-")) {
        this.setState({
          result: "-" + this.state.result,
          thirdNum: "-" + this.state.thirdNum,
        });
      }
      if (this.state.result.includes("-")) {
        this.setState({
          thirdNum: this.state.thirdNum.replace("-", ""),
          result: this.state.result.replace("-", ""),
        });
      }
      if (this.state.result.includes("--")) {
        this.setState({
          thirdNum: this.state.thirdNum.replace("--", ""),
          result: this.state.result.replace("--", ""),
        });
      }
    }
  };
  handlePercent = () => {
    if (this.state.result.length < 20 && this.state.sign === "") {
      this.setState({
        result: parseFloat(this.state.result) / 100,
      });
    }
    if (this.state.sign === "/" && !this.state.evaluated) {
      this.setState({
        result: ((this.state.result / this.state.currNum) * 100).toString(),
      });
    } else if (this.state.sign === "/" && this.state.evaluated) {
      this.setState({
        result: ((this.state.thirdNum / this.state.secondNum) * 100).toString(),
      });
    }
  };
  handleDecimal = () => {
    if (this.state.evaluated && !this.state.thirdNum.includes(".")) {
      this.setState({
        thirdNum: this.state.thirdNum + "." + "0",
        result: this.state.thirdNum + "." + "0",
      });
    }
    if (!this.state.evaluate) {
      if (this.state.sign === "" && !this.state.currNum.includes(".")) {
        this.setState({
          currNum: this.state.currNum + "." + "0",
          result: this.state.result + "." + "0",
        });
      } else if (
        this.state.sign !== "" &&
        !this.state.secondNum.includes(".")
      ) {
        this.setState({
          secondNum: this.state.secondNum + "." + "0",
          result: this.state.result + "." + "0",
        });
      }
    }
  };
  handleEqual = () => {
    if (this.state.sign !== "") {
      function parser(x) {
        return parseFloat(x);
      }
      var answer = {
        "+": function (x, y) {
          return parser(x) + parser(y);
        },
        "-": function (x, y) {
          return parser(x) - parser(y);
        },
        "*": function (x, y) {
          return parser(x) * parser(y);
        },
        "/": function (x, y) {
          return parser(x) / parser(y);
        },
      };
      this.setState({
        sign: "",
      });
      if (this.state.sign !== "" && !this.state.evaluated) {
        this.setState({
          result: answer[this.state.sign](
            this.state.currNum,
            this.state.secondNum
          ).toString(),
          sign: "",
          currNum: "",
          evaluated: true,
          prevAns: answer[this.state.sign](
            this.state.currNum,
            this.state.secondNum
          ).toString(),
          nextResult: answer[this.state.sign](
            this.state.thirdNum,
            this.state.prevAns
          ).toString(),
          secondNum: answer[this.state.sign](
            this.state.currNum,
            this.state.secondNum
          ).toString(),
        });
      }
    }
    if (this.state.evaluated && this.state.sign !== "") {
      this.setState({
        result: answer[this.state.sign](
          this.state.secondNum,
          this.state.thirdNum
        ).toString(),
        evaluated: true,
        thirdNum: "",
        currNum: "",
        secondNum: answer[this.state.sign](
          this.state.secondNum,
          this.state.thirdNum
        ).toString(),
      });
    }
  };
  render() {
    console.log(checker[0]);
    return (
      <div>
        <center>
          <Display
            handleFormat={this.handleFormat}
            result={this.state.result}
          />
          <Buttons
            handleClick={this.handleClick}
            handleClear={this.handleClear}
            currNum={this.state.currNum}
            secondNum={this.state.secondNum}
            result={this.state.result}
            sign={this.state.sign}
            handleFormat={this.handleFormat}
            initText={this.state.init}
            handleEval={this.handleEval}
            handleOperators={this.handleOperators}
            handlePercent={this.handlePercent}
            handleEqual={this.handleEqual}
            toggleMinus={this.toggleMinus}
            handleDecimal={this.handleDecimal}
          />

          <h1 class="person">Made with 💕 By Anonymous115</h1>
        </center>
      </div>
    );
  }
}

export default App;
