import React, { Component } from 'react'
import Hero from './Hero'
import axios from 'axios';
import User from './User'
import { Redirect } from 'react-router-dom';

class Signup extends Component {
    constructor(props) {
        super(props)
      this.onSubmit = this.onSubmit.bind(this);

        this.state = {
             username:'',
             password:'',
             email:'',
             contact_number:'',
             userError:'',
             passError:'',
             contactError:'',
             userAdded:false
        }
    }

    onChangeUsername = (e) =>{
        this.setState({
            username:e.target.value
        })
    }

    onChangeEmail = (e) =>{
        this.setState({
            email:e.target.value
        })
    }

    onChangePassword = (e) =>{
        this.setState({
            password:e.target.value
        })
    }

    onChangeContact = (e) =>{
        this.setState({
            contact_number:e.target.value
        })
    }


    validate = () => {
        let userError = "";
        let contactError="";
      
        let passError = "";
    
        if (!this.state.username) {
          userError = "name cannot be blank";
        }
      if(this.state.contact_number.length>10 || this.state.contact_number.length<10)
      {
          contactError= "Must contain exact 10 digits "
      }
      if(this.state.password<6)
      {
          if(this.state.password<4)
          passError="Password is too short!";
          else
          passError="Password is short!"

      }
    
        if (userError || contactError || passError) {
          this.setState({ userError,contactError,passError });
          return false;
        }
    
        return true;
      };

    onSubmit(e)
{
    e.preventDefault();
    this.setState({
        userAdded:true
    })
    const isValid = this.validate();
    console.log(`Form Submited:`);
    console.log(`Username: ${this.state.username}`);
    console.log(`Password: ${this.state.password}`);
    console.log(`Email: ${this.state.email}`);
    console.log(`Contact Number: ${this.state.contact_number}`);

    const newUser={
        username:this.state.username,
        password:this.state.password,
        email:this.state.email,
        contact_number:this.state.contact_number
    }
    if(isValid)
    {
    axios.post('http://localhost:4000/good/add',newUser)
        .then(res=>{
            console.log(res.data);
        })
    

    this.setState({
        username:'',
        password:'',
        email:'',
        contact_number:'',
        userError:'',
        passError:'',
        contactError:''
       });
      
    }

}
    


    render() {
        if(this.state.userAdded)
    {
        return <Redirect to={{pathname:"/User"}} />
    }
        return (
            <Hero>
            <form className="box" onSubmit={this.onSubmit}>
              <h1>SignUp</h1>
              <input type="text" name="username" placeholder="Username" value={this.state.username} 
              onChange={this.onChangeUsername} />
                 <div style={{ fontSize: 12, color: "red" }}>
                   {this.state.userError}
                 </div>
              <input type="password" name="password" placeholder="Password" value={this.state.password}
              onChange={this.onChangePassword} />
              <div style={{ fontSize: 12, color: "red" }}>
                   {this.state.passError}
                 </div>
              <input type="email" name="email" placeholder="abc@gmail.com" value={this.state.email}
              onChange={this.onChangeEmail} />
              <input type="text" name="contact_number" placeholder="+91 xxxxxxxxxx" value={this.state.contact_number}
              onChange={this.onChangeContact} />
               <div style={{ fontSize: 12, color: "red" }}>
                   {this.state.contactError}
                 </div>
              <input type="submit" value="Signup" />
            </form>
            </Hero>
        )
    }
}

export default Signup


