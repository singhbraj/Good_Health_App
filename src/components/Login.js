import React, { Component } from 'react';

import Hero from './Hero'
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
   
    pageSwitch:true,
    welcome:false,
    count:0,
    numEror:'',
    text: {
      phonenumber: '',
      code:''
      
    }
  }

  sendText = _ => {
    const { text } = this.state;
    //pass text message GET variables via query string
    fetch(`http://127.0.0.1:4000/login?phonenumber=${text.phonenumber}`)
    .then(console.log(`${text.phonenumber}`))
    this.setState({
      pageSwitch:false
    })  
  }

  verifyCode =()=>{
   this.setState({
     welcome:true
   })
   
   
  }

//   componentDidUpdate()
//   {
//       if(this.state.welcome){
//           this.state.history.push('/welcome');
//       }
//   }
     

  render() {
    const { text } = this.state;
    if(this.state.welcome)
    {
        return <Redirect to={{pathname:"/welcome"}} />
    }
    
    const spacer = {
      margin: 8
    }
    
    return (
      

      <Hero>
        

       { this.state.pageSwitch?
        <div style={{ marginTop: 10 }} >
          <h2> Send OTP </h2>
          <label> Your Phone Number </label>
          <br />
          <input value={text.phonenumber} placeholder="91XXXXXXXXXX"
            onChange={e => this.setState({ text: { ...text, phonenumber: e.target.value } })} />
          <div style={spacer} />
          <button onClick={this.sendText}> Send OTP </button>
        </div>
         :
        <div style={{ marginTop: 10 }} >
          <h2>Verify </h2>
          <label>Enter Your Code</label>
          <br />
          <input value={text.code} placeholder="Enter Your Code!!"
            onChange={e => this.setState({ text: { ...text, code: e.target.value } })} />
          <div style={spacer} />
          <button onClick={this.verifyCode} > Submit </button>
        </div>
       }
    
      </Hero>
    );
  }
}
export default Login;