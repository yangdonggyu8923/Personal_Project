'use client'

import { PG } from "@/app/components/common/enums/PG"
import { ILawyers } from "@/app/components/lawyer/model/lawyers-model"
import { deleteLawyerById, findLawyerById, modifyLawyer } from "@/app/components/lawyer/service/lawyer-service"
import { getOneLawyer, handleLaw, handlePassword, handleSample } from "@/app/components/lawyer/service/lawyer-slice"
import { Button, Input, Typography } from "@mui/material"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

export default function LawyerDetailPage({params}:any){
    const router = useRouter()
    const dispatch = useDispatch()
    const oneLawyer:ILawyers = useSelector(getOneLawyer)

    const updatePassword = (e:any) => dispatch(handlePassword(e.target.value))
    const updateSample = (e:any) => dispatch(handleSample(e.target.value))
    const updateLaw = (e:any) => {
        console.log("Updating law with value:", e.target.value)
        dispatch(handleLaw(e.target.value)) 
    }
    
    const handleModifyLawyer = () => {
        dispatch(modifyLawyer(oneLawyer))
        location.reload()
    }

    const handleDeleteLawyer = () =>{
        // destroyCookie(null, 'accessToken')
        // dispatch(deleteUserById(token? jwtDecode<any>(token).userId:0))
        dispatch(deleteLawyerById(params.id))
        router.push(`${PG.LAWYER}/list`)
    }
    
    useEffect(()=>{
        // dispatch(findUserById(token? jwtDecode<any>(token).userId:0))
        dispatch(findLawyerById(params.id))
    },[])

    return(<>
        <span>ID : </span><Typography textAlign="center" sx={{fontSize:"1.2rem"}}>{oneLawyer.id}</Typography>
        {/* <span>ID : </span><Typography textAlign="center" sx={{fontSize:"1.2rem"}}>{token? jwtDecode<any>(token).userId:0}</Typography> */}
        <span>아이디 : </span><Typography textAlign="center" sx={{fontSize:"1.2rem"}}>{oneLawyer.username}</Typography>
        <span>비밀번호 : </span><Input type="password" name="password" placeholder={oneLawyer.password} onChange={updatePassword}></Input><br />
        <span>이름 : </span><Typography textAlign="center" sx={{fontSize:"1.2rem"}}>{oneLawyer.name}</Typography>
        <span>담당분야 : </span><Input type="text" name="law" placeholder={oneLawyer.law} onChange={updateLaw}></Input><br />
        <span>자격번호 : </span><Typography textAlign="center" sx={{fontSize:"1.2rem"}}>{oneLawyer.lawyerNo}</Typography>
        <Button onClick={handleModifyLawyer}>수정</Button>
        <Button onClick={handleDeleteLawyer}>탈퇴</Button>
        </>)
}