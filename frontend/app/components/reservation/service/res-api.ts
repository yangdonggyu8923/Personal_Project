import instance from "../../common/configs/axios-config"
import { IRes } from "../model/res-model"

export const findAllResAPI = async (page :number)=>{
    try {
        const response = await instance().get('/res/list', {
            params: { page, size: 10, limit: 10 }
        })
        return response.data
    } catch (error) {
        console.log(error)
        return error
    }
}


export const findResByIdAPI = async (id: number) => {
    try {
        const response = await instance().get('/res/detail', {
            params: { id }
        })
        return response.data
    } catch (error) {
        console.log(error)
        return error
    }
}

export const modifyResAPI = async (res: IRes) => {
    try {
        const response = await instance().patch('/res/patch', res)
        return response.data
    } catch (error) {
        console.log(error)
        return error
    }
}

export const countResAPI = async () => {
    try {
        const response = await instance().get('/res/count', {
            params: {}
        })
        return response.data
    } catch (error) {
        console.log(error)
        return error
    }
}

export const deleteResByIdAPI = async (id: number) => {
    try {
        const response = await instance().delete('/res/delete', {
            params: { id }
        })
        return response.data
    } catch (error) {
        console.log(error)
        return error
    }
}


export const updateResAPI = async (res: IRes) => {
    try {
        const response = await instance().patch('/res/update', res)
        console.log('updateAPI 결과 : '+ response.data)
        return response.data
    } catch (error) {
        console.log(error)
        return error
    }
}