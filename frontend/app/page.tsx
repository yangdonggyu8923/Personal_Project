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


const HomePage = () => {
  

  return (<>

  </>);
}
export default HomePage;