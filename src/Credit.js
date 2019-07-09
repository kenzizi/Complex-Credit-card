import React from "react";
import Chip from "./credit-chip.png";
import Logo from "./logo.png";
import "./Credit.css";

class CreditCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardnumber: '',
      ownerchange: "Karim kenzizi",
      datechange: ""
    };
    this.numchange = this.numchange.bind(this);
    this.ownerchange = this.ownerchange.bind(this);
    // this.datechange=this.datechange.bind(this)
  }
  addSlash = (date) => {
      let ar=[]
    for  (let i=0;i<date.length;i+=2){
        ar.push(date.slice(i,i+2))
    }
    return ar.join('/')
  }

  validCode = (num) => {
    let regexp2 = /(.{4})/g;
    let str = num.replace(/[ ]/g, "");
    num = str.replace(regexp2, "$1 ").trim();
    return num 
   };

  
  datevalue = event => {
    if (event.target.value.length <= 5) {
      let input = event.target.value;
      input = input.replace(/[^0-9]/g, "");
     if (Number(input.slice(0,2))>12){
        alert('wrong input')
     }
     else{
        this.setState({ datechange: input });
     }
    
    }
  };

  ownerchange(event) {
    this.setState({
      ownerchange: event.target.value
    });
  }
  numchange(event) {
    let l = event.target.value.length;
    if (!event.target.value[l - 1].match(/[0-9]/)) {
        event.target.value = event.target.value.substring(0, l - 1);
    }
    this.setState({
      cardnumber: event.target.value
    });
  }

  render() {
    return (
      <div className="container">
        <div className="credit-container">
          <p className="credit-title"> CREDIT CARD</p>
          <img src={Chip} className="img-code" alt="chip" />
          <div className="main">
            <div className="credit-info">
              <p className="secret-code">
                <span>
                  {this.validCode(this.state.cardnumber)}   
                </span>
              </p>
              <div className="display">
                <p>
                  <span>{this.state.ownerchange.toUpperCase()}</span>
                </p>
                <p className="">{this.addSlash(this.state.datechange.padEnd('*',16))}</p>
              </div>
            </div>
            <div>
              <img src={Logo} className="logo" alt="logo" />
            </div>
          </div>
        </div>

        <div className="forms">
          <form>
            <input
              type="text"
              placeholder="Card Number"
             value={this.validCode(this.state.cardnumber)}
             maxLength='19'
             onChange={this.numchange}
            />
            <input
              type="text"
              placeholder="Owner Name"
              maxLength="20"
              onChange={this.ownerchange}
            />
            <input
              type="text"
              placeholder="Validation date"
              onChange={this.datevalue}
              value={this.addSlash(this.state.datechange)}
            />
          </form>
        </div>
      </div>
    );
  }
}
export default CreditCard;
