import React, { useState } from 'react'

function Form() {
    
   const [name, setName] =useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const handleNameSubmit = (e) => {
    setName(e.target.value);
  };

  const handleEmailSubmit = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordSubmit = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ Name: name, Email: email, Password: password });
    setName("");
    setEmail("");
    setPassword("");

  }
  
    
  return (
    <>
    
  <h3>User Login</h3>
    <form>
        <input type='text'  value={name} placeholder='enter name here'  onChange={(e) =>setName(e.target.value)}/>
        <br></br>
        <input type='text' value={email} placeholder='enter email here' onChange={(e) =>setEmail(e.target.value)}/>
        <br></br>
        <input type='text' value={password} placeholder='****'  onChange={(e) =>setPassword(e.target.value)}/>
        <br></br>
        <button type='submit' onClick={(e)=>{e.preventDefault();console.log(name)}}>submit</button>
    </form>


    


    </>
  )
}

export default Form