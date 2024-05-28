'use client';
import { useRouter } from "next/navigation"
import { useState } from "react";
import axios from 'axios'
import React from 'react';
import { NextPage } from "next";


const JoinPage: NextPage = () =>  {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    name: "",
    subject: "",
    lawyerNo: ""
  })

  const { username, password, name, subject, lawyerNo } = inputs;
  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setInputs({
        ...inputs,
        [name]: value
      })
  }

  const router = useRouter();

  const handleSubmit = (e:any) => {
    e.preventDefault()
    const url = `${process.env.NEXT_PUBLIC_API_URL}/lawyers/save`
    const data = { username, password, name, subject, lawyerNo }
    const config = {
      headers:{
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
         Authorization: `Bearer blah ~` ,
        "Access-Control-Allow-Origin": "*",
    }}
    axios.post(url, data, config)
      .then(res => {
        alert("response가 가져온 ID : " + JSON.stringify(res.data))
        router.push("http://localhost:3000/")
      })
  }


  return (<>
    <div className="container">
      <hr />
      <label htmlFor="username"><b>아이디</b></label>
      <input type="text" placeholder="Enter Username" name="username" onChange={handleChange} value={username} required /><br />

      <label htmlFor="password"><b>비밀번호</b></label>
      <input type="password" placeholder="Enter Password" name="password" onChange={handleChange} value={password} required /><br />

      <label htmlFor="name"><b>이름</b></label>
      <input type="text" placeholder="Enter Name" name="name" onChange={handleChange} value={name} required /><br />

      <label htmlFor="subject"><b>담당분야</b></label>
      <input type="text" placeholder="Enter Subject" name="subject" onChange={handleChange} value={subject} required /><br />
      
      <label htmlFor="lawyerNo"><b>자격번호</b></label>
      <input type="text" placeholder="Enter lawyerNo" name="lawyerNo" onChange={handleChange} value={lawyerNo} required /><br />

     
    
      <div className="clearfix">
        <button type="submit" className="signupbtn" onClick={handleSubmit}>회원가입</button>
      </div>
    </div>
  </>);
}



export default JoinPage;