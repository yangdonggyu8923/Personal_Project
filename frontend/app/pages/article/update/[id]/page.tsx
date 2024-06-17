'use client'
import { PG } from "@/app/components/common/enums/PG";
import { MyTypography } from "@/app/components/common/style/cell";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form"
import { NextPage } from "next";
import { jwtDecode } from "jwt-decode";
import { destroyCookie, parseCookies } from "nookies";
import { getOneArticle } from "@/app/components/article/service/article-slice";
import { IArticles } from "@/app/components/article/model/articles-model";
import { deleteArticleById, findArticleById, updateArticle } from "@/app/components/article/service/article-service";
import Select from "react-select/base";


const UpdateLaywerPage:NextPage = () => {
  const {register, handleSubmit, formState: { errors }} = useForm();
  const dispatch = useDispatch()
  const router = useRouter()
  const oneArticle:IArticles = useSelector(getOneArticle)
  const token:string|null = parseCookies().accessToken;

const handleDeleteArticle = () =>{
    alert('탈퇴 완료.')
    destroyCookie(null, 'accessToken')
    dispatch(deleteArticleById(token? jwtDecode<any>(token).lawyerId:0))
    router.push("/")
}
  const handelCancel = () => {
    alert('수정을 취소합니다.')
    router.push(`${PG.LAWYER}/list`)}

  const onSubmit = (data:any) => {
    data.id = jwtDecode<any>(token).lawyerId
    alert(JSON.stringify(data))
    dispatch(updateArticle(data))
    .then((res:any)=>{
      alert('수정 완료')
      console.log('서버에서 넘어온 메신저 : ' + res.payload.id)
    //   router.push(`${PG.LAWYER}/list`)
      location.reload()
    })
    .catch((err:any)=>{})  
  }

  useEffect(()=>{
    dispatch(findArticleById(token? jwtDecode<any>(token).lawyerId:0))
    console.log('토큰을 디코드한 내용 : ')
              console.log(JSON.stringify(jwtDecode<any>(parseCookies().accessToken)))
              console.log('토큰을 디코드한 ID : ')
              console.log(jwtDecode<any>(parseCookies().accessToken).lawyerId)
  }, [])

  

  return(<>

<form className="max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
    <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        {MyTypography('변호사페이지', "1.5rem")}
        <input type="hidden" value={jwtDecode<any>(parseCookies().accessToken).id} readOnly />

        <div className="flex items-center mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mr-2 flex-none" style={{width: '100px'}}>
                글 수정
            </label>
            <input defaultValue={jwtDecode<any>(parseCookies().accessToken).username} className="bg-gray-300 border border-gray-300 p-2 flex-grow" style={{ flexBasis: 0, flexGrow: 1, cursor: 'default' }} type="text" name="username" readOnly/>
        </div>

        <div className="flex items-center mb-4">
            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mr-2 flex-none" style={{width: '100px'}}>
                제목
            </label>
            <input {...register('title', { required: true, maxLength: 40 })} 
                className="bg-gray-100 border border-gray-300 p-2 flex-grow" style={{ flexBasis: 0, flexGrow: 1 }} placeholder={oneArticle.title} defaultValue={oneArticle.title} type="text" name="title"/>
        </div>

    
    <div className="flex items-center mb-4">
        <label htmlFor="content" className="block text-gray-700 text-sm font-bold mr-2 flex-none" style={{width: '100px'}}>
            내용
        </label>
        <input {...register('content', {required: true, maxLength:40})} 
        className="bg-gray-100 border border-gray-300 p-2 flex-grow" style={{flexBasis: 0, flexGrow: 1}} placeholder={oneArticle.content} defaultValue={oneArticle.content} type="text" name="content"/>
    </div>

        <div className="flex items-center mb-4">
            <label htmlFor="regDate" className="block text-gray-700 text-sm font-bold mr-2 flex-none" style={{width: '100px'}}>
                작성일자
            </label>
            <input defaultValue={oneArticle.regDate} className="bg-gray-300 border border-gray-300 p-2 flex-grow" style={{ flexBasis: 0, flexGrow: 1, cursor: 'default' }} type="text" name="regDate" />
        </div>

        <div className="flex items-center mb-4">
            <label htmlFor="modDate" className="block text-gray-700 text-sm font-bold mr-2 flex-none" style={{width: '100px'}}>
                수정일자
            </label>
            <input defaultValue={oneArticle.modDate} className="bg-gray-300 border border-gray-300 p-2 flex-grow" style={{ flexBasis: 0, flexGrow: 1, cursor: 'default' }} type="text" name="modDate" />
        </div>



    


    <div className="buttons flex space-x-4">
    <button className="btn bg-blue-500 text-white py-2 px-4 rounded-xl font-bold uppercase hover:bg-blue-600 transition-colors duration-300" type="submit">수정</button>
    
      <div className="btn bg-blue-500 text-white py-2 px-4 rounded-xl font-bold uppercase hover:bg-blue-600 transition-colors duration-300"
        onClick={handleDeleteArticle}>삭제</div>
  
      <div className="btn bg-blue-500 text-white py-2 px-4 rounded-xl font-bold uppercase hover:bg-blue-600 transition-colors duration-300"
        onClick={handelCancel}>취소</div>
    </div>
  </div>
  </form>
  </>)
}
export default UpdateLaywerPage