'use client';
import { useEffect, useRef, useState } from "react";
import axios from 'axios'
import Link from "next/link";
import AxiosConfig from "./components/common/configs/axios-config";
import { useRouter } from "next/navigation";
import { PG } from "./components/common/enums/PG";
import instance from "@/app/components/common/configs/axios-config"
import { useDispatch, useSelector } from "react-redux";
import { IUsers } from "./components/user/model/users-model";
import { existsId, loginUser } from "./components/user/service/user-service";
import { getAuth, existsUser } from "./components/user/service/user-slice";
import { parseCookies, destroyCookie, setCookie } from "nookies"
import { jwtDecode } from "jwt-decode";
import { roRO } from "@mui/material/locale";


const HomePage = () => {
  const router = useRouter();
  

  return (<>
  <div className="flex flex-col justify-center items-center h-screen w-screen">
        <div className="flex flex-col p-0 justify-center items-center">
          
          <div className=" justify-start flex flex-col gap-[0.5vh]">
            <div className="bg-[var(--color-Harbor-firth)] w-[41.53vw] hover:bg-gradient-to-r from-[var(--color-Harbor-first)] to-[var(--color-Harbor-firth)] transition duration-500 ease-in-out px-[2vw]">
              <button
                onClick={() => router.push(`${PG.LAWYER}/register`)}
                className="text-[var(--color-Harbor-second)] hover:text-[var(--color-Harbor-firth)] transition duration-500 ease-in-out"
              >
                회원가입
              </button>
            </div>
            <div className="bg-[var(--color-Harbor-firth)] w-[41.53vw] hover:bg-gradient-to-r from-[var(--color-Harbor-first)] to-[var(--color-Harbor-firth)] transition duration-500 ease-in-out px-[2vw]">
              <button
                onClick={() => router.push(`${PG.LAWYER}/login`)}
                className="text-[var(--color-Harbor-second)] hover:text-[var(--color-Harbor-firth)] transition duration-500 ease-in-out"
              >
                로그인
              </button>
            </div>
          </div>
        </div>
      </div>
    </>);
}
export default HomePage;