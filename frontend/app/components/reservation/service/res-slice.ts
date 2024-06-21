import { createSlice } from "@reduxjs/toolkit";
import { IRes } from "../model/res-model";
import { countRes, deleteResById, findAllRes, findResById, modifyRes, updateRes } from "./res-service";

const resThunks = [findAllRes]

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}

interface IAuth {
    message?: boolean,
    token?: string
}

interface ResState {
    json?: IRes,
    array?: Array<IRes>,
    auth?: IAuth,

}

export const initialState: ResState = {
    json: {} as IRes, 
    array: [],
    auth: {} as IAuth,

}

export const resSlice = createSlice({
    name: "res",
    initialState,
    reducers: {
        handleSample: (state:any, {payload}) => {state.json.resNo= payload},
        handlePassword: (state: any, { payload }) => { state.json.password = payload },
        handleLaw: (state: any, { payload }) => { state.json.law = payload }
    },
    extraReducers: builder => {
        const { pending, rejected } = status;

        builder
        .addCase(findAllRes.fulfilled, (state: any, { payload }: any) => { state.array = payload })
        .addCase(findResById.fulfilled, (state: any, { payload }: any) => { state.json = payload })
        .addCase(countRes.fulfilled, (state: any, { payload }: any) => { state.count = payload })
        .addCase(modifyRes.fulfilled, (state: any, { payload }: any) => { state.json = payload })
        .addCase(deleteResById.fulfilled, (state: any, { payload }: any) => { state.json = payload })
        .addCase(updateRes.fulfilled, (state: any, { payload }: any) => { state.json = payload })
    }
})

export const getAllRes = (state: any) => {
    console.log('-- Before useSelector --')
    console.log(JSON.stringify(state.res.array))
    return state.res.array;
}
export const getAuth = (state: any) => {
    console.log(JSON.stringify(state.res.auth))
    return state.res.auth
}
export const crawling = (state:any) => (state.res.array)
export const getOneRes = (state: any) => (state.res.json)
export const getCountRes = (state: any) => (state.res.count)
export const deleteOneRes = (state: any) => (state.res.json)
export const existsRes = (state: any) => {
    console.log(JSON.stringify(state.res.json))
    return state.res.json
}

export const { handleLaw, handlePassword, handleSample } = resSlice.actions

export default resSlice.reducer; // 위는 각각의 reducers 여기선 다 합쳐져서 s가 사라진다.