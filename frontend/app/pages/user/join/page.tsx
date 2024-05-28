'use client';
import { useRouter } from "next/navigation"
import { useState } from "react";
import axios from 'axios'
import React from 'react';
import { API } from "@/app/components/common/enums/API";
import AxiosConfig from "@/app/components/common/configs/axios-config";
import { PG } from "@/app/components/common/enums/PG";
import { NextPage } from "next";


const JoinPage: NextPage = () =>  {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    name: "",
    phone: "",
  })

  const { username, password, name, phone } = inputs;
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
    const url = `${process.env.NEXT_PUBLIC_API_URL}/users/save`
    const data = { username, password, name, phone }
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
      <label htmlFor="username"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="username" onChange={handleChange} value={username} required /><br />

      <label htmlFor="password"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="password" onChange={handleChange} value={password} required /><br />

      <label htmlFor="name"><b>Name</b></label>
      <input type="text" placeholder="Enter Name" name="name" onChange={handleChange} value={name} required /><br />

      <label htmlFor="phone"><b>Phone Number</b></label>
      <input type="text" placeholder="Enter Phone Number" name="phone" onChange={handleChange} value={phone} required /><br />

     
    
      <div className="clearfix">
        <button type="submit" className="signupbtn" onClick={handleSubmit}>회원가입</button>
      </div>
    </div>
  </>);
}



export default JoinPage;