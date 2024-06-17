import { createAsyncThunk } from "@reduxjs/toolkit";
import { countReplyAPI, crawlingRepliesAPI, deleteReplyByIdAPI, existsIdAPI, findAllRepliesAPI, findReplyByIdAPI, loginReplyAPI, logoutReplyAPI, modifyReplyAPI, updateReplyAPI } from "./reply-api";
import { IReplies } from "../model/replies-model";

export const findAllReplies: any = createAsyncThunk(
    'lawyers/findAllReplies',
    async (page:number)=>{
        console.log('findAllUsers page : ' + page)
        const data:any = await findAllRepliesAPI(1);
        const {message, result}: any =data;
        console.log('----- API를 사용한 경우 ------')
        console.log('message : ' + message)
        console.log(JSON.stringify(result))
        return data
    }
)

export const crawlingReplies: any = createAsyncThunk(
    'lawyers/crawlingReplies',
    async (lawyer: IReplies) => {
        console.log('crawlingReplies : ' + lawyer)
        const data: any = await crawlingRepliesAPI(lawyer);
        return data
    }
)

export const findReplyById: any = createAsyncThunk(
    'lawyers/findReplyById',
    async (id: number) => {
        const data: any = await findReplyByIdAPI(id);
        return data
    }
)

export const modifyReply: any = createAsyncThunk(
    'lawyers/modifyReply',
    async (lawyer: IReplies) => {
        const data: any = await modifyReplyAPI(lawyer);
        return data
    }
)

export const countReplies: any = createAsyncThunk(
    'lawyers/countReply',
    async () => {
        const data: any = await countReplyAPI();
        return data
    }
)

export const deleteReplyById: any = createAsyncThunk(
    'lawyers/deleteReplyById',
    async (id:number) => {
        const data: any = await deleteReplyByIdAPI(id);
        return data
    }
)

export const loginReply: any = createAsyncThunk(
    'lawyers/loginReply',
    async (lawyer: IReplies) => {
        const data: any = await loginReplyAPI(lawyer);
        return data
    }
)

export const existsId: any = createAsyncThunk(
    'lawyers/existsId',
    async (username: string) => {
        const data: any = await existsIdAPI(username);
        return data
    }
)

export const logoutReply: any = createAsyncThunk(
    'lawyers/logoutReply',
    async () => await logoutReplyAPI()
)

export const updateReply: any = createAsyncThunk(
    'lawyers/updateReply',
    async (lawyer: IReplies) => await updateReplyAPI(lawyer)
)