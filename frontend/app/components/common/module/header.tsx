'use client'
import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Link } from '@mui/material';
import LinkButton, { linkButtonTitles } from '@/app/atoms/button/LinkButton';
import { useEffect, useState } from 'react';
import { destroyCookie, parseCookies } from 'nookies';
import { useDispatch, useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { ILawyers } from '../../lawyer/model/lawyers-model';
import { getOneLawyer } from '../../lawyer/service/lawyer-slice';
import { findLawyerById, logoutLawyer } from '../../lawyer/service/lawyer-service';


function Header() {
  const router = useRouter()
  const dispatch = useDispatch()
  const oneLawyer:ILawyers = useSelector(getOneLawyer)
  const [showProfile,  setShowProfile] = useState(false)
  const [showLawyerProfile,  setShowLawyerProfile] = useState(false)
  let token:string = "";


  const sampletoken:string|null = parseCookies().accessToken;
  const isValidToken = (token: string | null): boolean => {
    if (!token) {
        return false;
    }
    const parts = token.split('.');
    return parts.length === 3; // JWT는 3부분으로 구성되어야 함
};

  useEffect(() => {
    if (isValidToken(sampletoken)? jwtDecode<any>(parseCookies().accessToken).lawyerId:0) {
      setShowLawyerProfile(true)

      dispatch(findLawyerById(jwtDecode<any>(parseCookies().accessToken).lawyerId))
    } else {
      setShowLawyerProfile(false)
    }
  }, [parseCookies().accessToken])
  

  const lawyerLogoutHandler = () => {
    console.log('로그아웃 적용 전 : ' + parseCookies().accessToken)
    dispatch(logoutLawyer())
      .then((res: any) => {
        destroyCookie(null, 'accessToken')
        console.log('로그아웃 적용 후 : ' + parseCookies().accessToken)
        setShowLawyerProfile(false)
        token="";
        router.push('/')
        // location.replace('/')
      })
      .catch((err:any) => {
        console.log('로그아웃 실행에서 에러가 발생함 : ' + err)
      })
  }

  return <nav className="bg-customGray border-gray-200 dark:bg-gray-900">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4" >
    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse" style={{ textDecoration: 'none' }}>
      {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-white  dark:text-white">
        LawMate
      </span>
    </Link>
      {/* {!showProfile && <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <img className="w-8 h-8 rounded-full" src="public/img/user/profile.jpg" alt="user photo" />
      </button>} */}
      {
      // !showProfile &&
      //   <div className="flex px-4 py-3 float-end space-x-4">
      //     <span  
      //     className="block text-sm  text-gray-500 truncate dark:text-gray-400"><a href='/'>회원 로그인</a></span>
      //   </div>
      }
      {
      showLawyerProfile &&
        <div className="flex px-4 py-3 float-end space-x-4">
          <span className="block text-sm text-gray-900 dark:text-white">{oneLawyer.username}님</span>
          {/* <span className="block text-sm  text-gray-500 truncate dark:text-gray-400 mx-5">{oneUser.username}@gmail.com</span> */}
          <span 
          onClick={lawyerLogoutHandler} 
          className="block text-sm  text-gray-500 truncate dark:text-gray-400"><a>로그아웃</a></span>
        </div>
      }
      {
      // !showLawyerProfile &&
      //   <div className="flex px-4 py-3 float-end space-x-4">
      //     <span className="block text-sm text-gray-900 dark:text-white">{oneLawyer.username}님</span>
      //     <span 
      //     className="block text-sm  text-gray-500 truncate dark:text-gray-400"><a href='#'>변호사 로그인</a></span>
      //   </div>
      }
      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-white md:dark:bg-white dark:border-gray-700">

          {linkButtonTitles.map((elem) => (
            <li key={elem.id}>
              <LinkButton title={elem.title} path={elem.path} id={elem.id} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
}
export default Header;