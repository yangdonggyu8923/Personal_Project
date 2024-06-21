import { createAsyncThunk } from "@reduxjs/toolkit";
import { countResAPI, deleteResByIdAPI, findAllResAPI, findResByIdAPI, modifyResAPI, updateResAPI } from "./res-api";
import { IRes } from "../model/res-model";


export const findAllRes: any = createAsyncThunk(
    'lawyers/findAllRes',
    async (page:number)=>{
        console.log('findAllUsers page : ' + page)
        const data:any = await findAllResAPI(1);
        const {message, result}: any =data;
        console.log('----- API를 사용한 경우 ------')
        console.log('message : ' + message)
        console.log(JSON.stringify(result))
        return data
    }
)

export const findResById: any = createAsyncThunk(
    'lawyers/findResById',
    async (id: number) => {
        const data: any = await findResByIdAPI(id);
        return data
    }
)

export const modifyRes: any = createAsyncThunk(
    'lawyers/modifyRes',
    async (lawyer: IRes) => {
        const data: any = await modifyResAPI(lawyer);
        return data
    }
)

export const countRes: any = createAsyncThunk(
    'lawyers/countRes',
    async () => {
        const data: any = await countResAPI();
        return data
    }
)

export const deleteResById: any = createAsyncThunk(
    'lawyers/deleteResById',
    async (id:number) => {
        const data: any = await deleteResByIdAPI(id);
        return data
    }
)


export const updateRes: any = createAsyncThunk(
    'lawyers/updateRes',
    async (lawyer: IRes) => await updateResAPI(lawyer)
)