import { createSlice } from "@reduxjs/toolkit";
import { IReplies } from "../model/replies-model";
import { countReplies, crawlingReplies, deleteReplyById, existsId, findAllReplies, findReplyById, loginReply, modifyReply, updateReply } from "./reply-service";

const lawyerThunks = [findAllReplies]

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}

interface IAuth {
    message?: boolean,
    token?: string
}

interface ReplyState {
    json?: IReplies,
    array?: Array<IReplies>,
    auth?: IAuth,

}

export const initialState: ReplyState = {
    json: {} as IReplies, 
    array: [],
    auth: {} as IAuth,

}

export const lawyerSlice = createSlice({
    name: "lawyers",
    initialState,
    reducers: {
        handleSample: (state:any, {payload}) => {state.json.lawyerNo= payload},
        handlePassword: (state: any, { payload }) => { state.json.password = payload },
        handleLaw: (state: any, { payload }) => { state.json.law = payload }
    },
    extraReducers: builder => {
        const { pending, rejected } = status;

        builder
        .addCase(crawlingReplies.fulfilled, (state: any, { payload }: any) => { state.array = payload })
        .addCase(findAllReplies.fulfilled, (state: any, { payload }: any) => { state.array = payload })
        .addCase(findReplyById.fulfilled, (state: any, { payload }: any) => { state.json = payload })
        .addCase(countReplies.fulfilled, (state: any, { payload }: any) => { state.count = payload })
        .addCase(loginReply.fulfilled, (state: any, { payload }: any) => { state.auth = payload })
        .addCase(modifyReply.fulfilled, (state: any, { payload }: any) => { state.json = payload })
        .addCase(deleteReplyById.fulfilled, (state: any, { payload }: any) => { state.json = payload })
        .addCase(existsId.fulfilled, (state: any, { payload }: any) => { state.json = payload })
        .addCase(updateReply.fulfilled, (state: any, { payload }: any) => { state.json = payload })
    }
})

export const getAllReplies = (state: any) => {
    console.log('-- Before useSelector --')
    console.log(JSON.stringify(state.lawyer.array))
    return state.lawyer.array;
}
export const getAuth = (state: any) => {
    console.log(JSON.stringify(state.lawyer.auth))
    return state.lawyer.auth
}
export const crawling = (state:any) => (state.lawyer.array)
export const getOneReply = (state: any) => (state.lawyer.json)
export const getCountReplies = (state: any) => (state.lawyer.count)
export const deleteOneReply = (state: any) => (state.lawyer.json)
export const existsReply = (state: any) => {
    console.log(JSON.stringify(state.lawyer.json))
    return state.lawyer.json
}

export const { handleLaw, handlePassword, handleSample } = lawyerSlice.actions

export default lawyerSlice.reducer; // 위는 각각의 reducers 여기선 다 합쳐져서 s가 사라진다.