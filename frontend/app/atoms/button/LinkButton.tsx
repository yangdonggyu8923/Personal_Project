import { PG } from "@/app/components/common/enums/PG"
import { jwtDecode } from "jwt-decode";
import Link from "next/link"
import { parseCookies } from "nookies";

interface ILinkButton{
    id: number,
    title: string,
    path: string
}

const token:string|null = parseCookies().accessToken;

const isValidToken = (token: string | null): boolean => {
    if (!token) {
        return false;
    }
    const parts = token.split('.');
    return parts.length === 3; // JWT는 3부분으로 구성되어야 함
};


export default function LinkButton ({id, title, path}:ILinkButton) {

    
    
    return(
        <Link key={id} href={`${path}`} className="block py-2 px-3 text-gray-900 rounded
     hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white
      md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent
       dark:border-gray-700" aria-current="page">{title}</Link>
       )
    
}

export const linkButtonTitles = [
    {id:1, title:'변호사로그인',path:`${PG.LAWYER}/login`},
    {id:2, title:'변호사가입',path:`${PG.LAWYER}/save`},
    {id:3, title:'변호사목록', path:`${PG.LAWYER}/list`} ,
    {id:4, title:'변호사페이지', path:`${PG.LAWYER}/update/${isValidToken(token)? jwtDecode<any>(parseCookies().accessToken).lawyerId:0}`},
];
