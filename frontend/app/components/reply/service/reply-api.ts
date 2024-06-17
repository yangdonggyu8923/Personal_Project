import instance from "../../common/configs/axios-config"
import { IReplies } from "../model/replies-model"

export const findAllRepliesAPI = async (page :number)=>{
    try {
        const response = await instance().get('/lawyers/list', {
            params: { page, size: 10, limit: 10 }
        })
        return response.data
    } catch (error) {
        console.log(error)
        return error
    }
}

export const crawlingRepliesAPI = async (lawyer: IReplies) => {
    try {
        console.log(` 크롤링API에 넘어온 파라미터 : ${JSON.stringify(lawyer)}`)
        const response = await instance().get('/lawyers/crawl')
        return response.data
    } catch (error) {
        console.log(error)
        return error
    }
}

export const findReplyByIdAPI = async (id: number) => {
    try {
        const response = await instance().get('/lawyers/detail', {
            params: { id }
        })
        return response.data
    } catch (error) {
        console.log(error)
        return error
    }
}

export const modifyReplyAPI = async (lawyer: IReplies) => {
    try {
        const response = await instance().put('/lawyers/modify', lawyer)
        return response.data
    } catch (error) {
        console.log(error)
        return error
    }
}

export const countReplyAPI = async () => {
    try {
        const response = await instance().get('/lawyers/count', {
            params: {}
        })
        return response.data
    } catch (error) {
        console.log(error)
        return error
    }
}

export const deleteReplyByIdAPI = async (id: number) => {
    try {
        const response = await instance().delete('/lawyers/delete', {
            params: { id }
        })
        return response.data
    } catch (error) {
        console.log(error)
        return error
    }
}

export const loginReplyAPI = async (lawyer: IReplies) => {
    console.log(` 로그인API 에 넘어온 파라미터 : ${JSON.stringify(lawyer)}`)
    try{
        const response = await instance().post(`/auth/login`,lawyer)
        return response.data
    }catch(error){
        console.log(error)
        return error
    }
}

export const existsIdAPI = async (username: string) => {
    try {
        const response = await instance().get('/auth/exists-username',
            { params: { username } })
        return response.data
    } catch (error) {
        console.log(error)
        return error
    }
}

export const logoutReplyAPI = async () => {
    try {
        const response = await instance().get('/lawyers/logout')
        console.log('logoutAPI 결과 : '+ response.data)
        return response.data
    } catch (error) {
        console.log(error)
        return error
    }
}

export const updateReplyAPI = async (lawyer: IReplies) => {
    try {
        const response = await instance().post('/lawyers/update', lawyer)
        console.log('updateAPI 결과 : '+ response.data)
        return response.data
    } catch (error) {
        console.log(error)
        return error
    }
}