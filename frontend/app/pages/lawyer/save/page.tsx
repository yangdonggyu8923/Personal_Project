'use client';
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from 'axios';
import React from 'react';
import { NextPage } from "next";
import { PG } from "@/app/components/common/enums/PG";
import { MyTypography } from "@/app/components/common/style/cell";
import { useDispatch, useSelector } from "react-redux";
import { existsLawyer } from "@/app/components/lawyer/service/lawyer-slice";
import { ILawyers } from "@/app/components/lawyer/model/lawyers-model";
import { existsId } from "@/app/components/lawyer/service/lawyer-service";

declare global {
  interface Window {
    daum: any;
  }
}

const JoinPage: NextPage = () =>  {
  const dispatch = useDispatch()
  const message: boolean = useSelector(existsLawyer)
  const [lawyer, setLawyer] = useState({} as ILawyers)
  const [isWrongId, setIsWrongId] = useState(false)
  const [isWrongPw, setIsWrongPw] = useState(false)
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    email: "",
    name: "",
    phone: "",
    lawyerNo: "",
  });

  const { username, password, name, email, phone, lawyerNo } = inputs;

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInputs({
        ...inputs,
        [name]: value
      });
  }

  const router = useRouter();

  const handleLawyername = (e: any) => {
    const ID_CHECK = /^[a-zA-Z0-9][a-zA-Z0-9]{5,19}$/g;
    // 영어 대소문자로 시작하는 6 ~ 20자의 영어 소문자 또는 숫자
    if (ID_CHECK.test(e.target.value)) {
      setIsWrongId(false)
    } else if (e.target.value == "") {
      setIsWrongId(false)
    } else {
      setIsWrongId(true)
    }
    setLawyer({
      ...lawyer,
      username: e.target.value
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const url = `${process.env.NEXT_PUBLIC_API_URL}/lawyers/register`;
    const data = { username, password, name, email, phone, lawyerNo};
    const config = {
      headers:{
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        Authorization: `Bearer blah ~`,
        "Access-Control-Allow-Origin": "*",
      }
    };
    axios.post(url, data, config)
      .then(res => {
        alert("response가 가져온 ID : " + JSON.stringify(res.data));
        router.push(`${PG.LAWYER}/detail`);
      });
  } 
    // useEffect(() => {
    // dispatch(existsId(lawyer.username))
    // alert("이미 사용중인 아이디입니다."),[]})

  
  

  return (
    <>
      <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        {MyTypography('변호사 회원가입', "1.5rem")}
        <div className="flex items-center mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mr-2 flex-none" style={{width: '100px'}}><b>아이디</b></label>
          <input type="text" className="bg-gray-100 border border-gray-300 p-2 flex-grow" style={{flexBasis: 0, flexGrow: 1}} placeholder="아이디를 입력하세요" name="username" onChange={handleChange} value={username} required /><br />
          {!message && (<pre>
          <h6 className="text-red-600">사용중인 아이디입니다.</h6>
        </pre>)}
        </div>

        <div className="flex items-center mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mr-2 flex-none" style={{width: '100px'}}><b>비밀번호</b></label>
          <input type="password" className="bg-gray-100 border border-gray-300 p-2 flex-grow" style={{flexBasis: 0, flexGrow: 1}} placeholder="비밀번호를 입력하세요" name="password" onChange={handleChange} value={password} required /><br />
        </div>

        <div className="flex items-center mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mr-2 flex-none" style={{width: '100px'}}><b>이메일</b></label>
          <input type="text" className="bg-gray-100 border border-gray-300 p-2 flex-grow" style={{flexBasis: 0, flexGrow: 1}} placeholder="이메일를 입력하세요" name="email" onChange={handleChange} value={email} required /><br />
        </div>

        <div className="flex items-center mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mr-2 flex-none" style={{width: '100px'}}><b>이름</b></label>
          <input type="text" className="bg-gray-100 border border-gray-300 p-2 flex-grow" style={{flexBasis: 0, flexGrow: 1}} placeholder="이름을 입력하세요" name="name" onChange={handleChange} value={name} required /><br />
        </div>

        <div className="flex items-center mb-4">
          <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mr-2 flex-none" style={{width: '100px'}}><b>전화번호</b></label>
          <input type="text" className="bg-gray-100 border border-gray-300 p-2 flex-grow" style={{flexBasis: 0, flexGrow: 1}} placeholder="전화번호를 입력하세요" name="phone" onChange={handleChange} value={phone} required /><br />
        </div>

        <div className="flex items-center mb-4">
          <label htmlFor="lawyerNo" className="block text-gray-700 text-sm font-bold mr-2 flex-none" style={{width: '100px'}}><b>자격번호</b></label>
          <input type="text" className="bg-gray-100 border border-gray-300 p-2 flex-grow" style={{flexBasis: 0, flexGrow: 1}} placeholder="-를 제외한 8자리 자격번호" name="lawyerNo" onChange={handleChange} value={lawyerNo} required /><br />
        </div>

        <div className="buttons flex justify-center items-center">
          <button className="btn bg-blue-500 text-white py-2 px-4 rounded-xl font-bold uppercase hover:bg-blue-600 transition-colors duration-300" onClick={handleSubmit}>회원가입</button>
        </div>
      </div>
    </>
  );
}

export default JoinPage;

