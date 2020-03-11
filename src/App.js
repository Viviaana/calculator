import React, {Component} from 'react';
import './App.css';


class App extends Component {
state = {
  sum: ""
}


onClick = button =>{
  if (button === "="){
    this.calculate()
  }
  else if (button === "clear"){
    this.clearBtn()
  }
  else{
    this.setState({
      sum: this.state.sum + button
    })
  }
};

clearBtn = () =>{
  this.setState({
    sum: ""
  });
}

calculate = () =>{
  try {
    this.setState({
      sum: (eval(this.state.sum))
    })
} catch (e) {
    this.setState({
      sum: "error"
    })
  }
};



render(){
  return (
    <div className="App">

      <div className = "calcGrid">
        <div className = "box answerBox"><p>{this.state.sum}</p></div>
        <div className = "box clearBox"><button name = "clear" onClick={this.clearBtn}>Clear</button></div>
        <div className = "box divideBox"><button name = "/">/</button></div>
        <div className = "box num7"><button name = "7" onClick={e => this.onClick(e.target.name)}>7</button></div>
        <div className = "box num8"><button name = "8" onClick={e => this.onClick(e.target.name)}>8</button></div>
        <div className = "box num9"><button name = "9" onClick={e => this.onClick(e.target.name)}>9</button></div>
        <div className = "box timesBox"><button name = "*" onClick={e => this.onClick(e.target.name)}>*</button></div>
        <div className = "box num4"><button name = "4" onClick={e => this.onClick(e.target.name)}>4</button></div>
        <div className = "box num5"><button name = "5" onClick={e => this.onClick(e.target.name)}>5</button></div>
        <div className = "box num6"><button name = "6" onClick={e => this.onClick(e.target.name)}>6</button></div>
        <div className = "box minusBox"><button name = "-" onClick={e => this.onClick(e.target.name)}>-</button></div>
        <div className = "box num1"><button name = "1" onClick={e => this.onClick(e.target.name)}>1</button></div>
        <div className = "box num2"><button name = "2" onClick={e => this.onClick(e.target.name)}>2</button></div>
        <div className = "box num3"><button name = "3" onClick={e => this.onClick(e.target.name)}>3</button></div>
        <div className = "box plusBox"><button name = "+" onClick={e => this.onClick(e.target.name)}>+</button></div>
        <div className = "box num0"><button name = "0" onClick={e => this.onClick(e.target.name)}>0</button></div>
        <div className = "box numdecimal"><button name = "." onClick={e => this.onClick(e.target.name)}>.</button></div>
        <div className = "box equalsBox"><button name = "=" onClick={e => this.onClick(e.target.name)}>=</button></div>
      </div>

    </div>
  );
}
}


export default App;
