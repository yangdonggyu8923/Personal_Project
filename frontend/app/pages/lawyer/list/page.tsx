'use client'
import { ILawyers } from "@/app/components/lawyer/model/lawyers-model"
import LawyerColumns from "@/app/components/lawyer/module/lawyer-columns"
import { countLawyers, crawlingLawyers, findAllLawyers } from "@/app/components/lawyer/service/lawyer-service"
import { crawling, getAllLawyers, getCountLawyers } from "@/app/components/lawyer/service/lawyer-slice"
import { DataGrid } from "@mui/x-data-grid"
import axios from "axios"
import { NextPage } from "next"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

const LawyerPage: NextPage = () => {
    const dispatch = useDispatch()
    const allLawyer: [] = useSelector(getAllLawyers)
    const cntLawyer = useSelector(getCountLawyers)
    const router = useRouter()

    const handleCrawlClick = async () => {
      dispatch(crawlingLawyers());
      location.reload()
  };

    useEffect(()=>{
        dispatch(findAllLawyers(1)),
        dispatch(countLawyers())  
    },[])

    return(<>
    <div style={{ height: '100%', width: "100%" }}>
      {allLawyer && <DataGrid
        rows={allLawyer}
        columns={LawyerColumns()}
        pageSizeOptions={[5]}
        checkboxSelection
      />}
    </div>
    <button onClick={handleCrawlClick}>크롤링</button>
    <div>변호사 회원 수 : {cntLawyer} 명 </div>
    </>)
}

export default LawyerPage