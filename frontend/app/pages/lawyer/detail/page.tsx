'use client';
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from 'axios';
import React from 'react';
import { NextPage } from "next";
import { PG } from "@/app/components/common/enums/PG";
import { MyTypography } from "@/app/components/common/style/cell";

declare global {
  interface Window {
    daum: any;
  }
}

const JoinAdditionalPage: NextPage = () => {
  const [inputs, setInputs] = useState({
    law: "",
    lawyerNo: "",
    belong: "",
    belongPhone: "",
    address: "",
    adressDetail: "",
    image: "",
    visitCost: "",
    phoneCost: "",
    videoCost: "",
    university: "",
    major: "",
  });

  const { law, belong, belongPhone, address, adressDetail } = inputs;

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const options = [
    { value: '형사법', label: '형사법' },
    { value: '공법', label: '공법' },
    { value: '국제법', label: '국제법' },
    { value: '국제거래법', label: '국제거래법' },
    { value: '노동법', label: '노동법' },
    { value: '조세법', label: '조세법' },
    { value: '지적재산권법', label: '지적재산권법' },
    { value: '민사법', label: '민사법' },
    { value: '경제법', label: '경제법' },
    { value: '환경법', label: '환경법' },
  ];

  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const url = `${process.env.NEXT_PUBLIC_API_URL}/lawyers/register`;
    const data = { law, belong, belongPhone, address, adressDetail };
    const config = {
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        Authorization: `Bearer blah ~`,
        "Access-Control-Allow-Origin": "*",
      }
    };
    axios.post(url, data, config)
      .then(res => {
        alert("추가 정보가 저장되었습니다.");
        router.push(`${PG.LAWYER}/login`);
      });
  };
    const handleOutSubmit = () => {
        router.push(`${PG.LAWYER}/login`);
    }

  const openAddressSearch = () => {
    new window.daum.Postcode({
      oncomplete: function(data: any) {
        setInputs({
          ...inputs,
          address: data.address
        });
      }
    }).open();
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        {MyTypography('추가 정보 기입', "1.5rem")}
        

        <div className="flex items-center mb-4">
          <label htmlFor="law" className="block text-gray-700 text-sm font-bold mr-2 flex-none" style={{width: '100px'}}><b>담당분야</b></label>
          <select className="bg-gray-100 border border-gray-300 p-2 flex-grow" style={{ flexBasis: 0, flexGrow: 1 }} onChange={handleChange} value={law} name="law">
            <option value="">담당분야를 선택하세요</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center mb-4">
          <label htmlFor="office" className="block text-gray-700 text-sm font-bold mr-2 flex-none" style={{width: '100px'}}><b>소속</b></label>
          <input type="text" className="bg-gray-100 border border-gray-300 p-2 flex-grow" style={{flexBasis: 0, flexGrow: 1}} placeholder="소속 없을 경우 공백" name="office" onChange={handleChange} value={belong} /><br />
        </div>

        <div className="flex items-center mb-4">
          <label htmlFor="belongPhone" className="block text-gray-700 text-sm font-bold mr-2 flex-none" style={{width: '100px'}}><b>소속 전화번호</b></label>
          <input type="text" className="bg-gray-100 border border-gray-300 p-2 flex-grow" style={{flexBasis: 0, flexGrow: 1}} placeholder="소속 전화번호를 입력하세요" name="belongPhone" onChange={handleChange} value={belongPhone} required /><br />
        </div>

        <div className="flex items-center mb-4">
          <label htmlFor="address" className="block text-gray-700 text-sm font-bold mr-2 flex-none" style={{width: '100px'}}><b>소속 주소</b></label>
          <input type="text" className="bg-gray-100 border border-gray-300 p-2 flex-grow" style={{flexBasis: 0, flexGrow: 1}} placeholder="주소를 검색하세요" name="address" onChange={handleChange} value={address} readOnly /><br />
          <button type="button" onClick={openAddressSearch} className="ml-2 bg-blue-500 text-white py-2 px-4 rounded-xl font-bold uppercase hover:bg-blue-600 transition-colors duration-300">주소 검색</button>
        </div>

        <div className="flex items-center mb-4">
          <label htmlFor="adressDetail" className="block text-gray-700 text-sm font-bold mr-2 flex-none" style={{width: '100px'}}><b>추가 주소</b></label>
          <input type="text" className="bg-gray-100 border border-gray-300 p-2 flex-grow" style={{flexBasis: 0, flexGrow: 1}} placeholder="추가 주소를 입력하세요" name="adressDetail" onChange={handleChange} value={adressDetail} /><br />
        </div>
     
        <div className="buttons flex justify-center items-center">
          <button className="btn bg-blue-500 text-white py-2 px-4 rounded-xl font-bold uppercase hover:bg-blue-600 transition-colors duration-300" onClick={handleSubmit}>추가완료</button>
          <span className="mx-3"></span>
          <button className="btn bg-blue-500 text-white py-2 px-4 rounded-xl font-bold uppercase hover:bg-blue-600 transition-colors duration-300" onClick={handleOutSubmit}>다음에 할게요</button>
        </div>
      </div>
    </>
  );
}

export default JoinAdditionalPage;
