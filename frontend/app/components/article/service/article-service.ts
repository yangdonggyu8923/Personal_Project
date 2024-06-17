import { createAsyncThunk } from "@reduxjs/toolkit";
import { countArticlesAPI, deleteArticleByIdAPI, findAllArticlesAPI, findArticleByIdAPI, findArticlePostAPI, findBoardMyListAPI, modifyArticleAPI, saveArticleAPI, updateArticleAPI } from "./article-api";
import { IArticles } from "../model/articles-model";

export const findAllArticles: any = createAsyncThunk(
    'lawyers/findAllArticles',
    async (page:number)=>{
        console.log('findAllUsers page : ' + page)
        const data:any = await findAllArticlesAPI(1);
        const {message, result}: any =data;
        console.log('----- API를 사용한 경우 ------')
        console.log('message : ' + message)
        console.log(JSON.stringify(result))
        return data
    }
)

export const findArticleById: any = createAsyncThunk(
    'articles/findArticleById',
    async (id: number) => {
        const data: any = await findArticleByIdAPI(id);
        return data
    }
)

export const deleteArticleById: any = createAsyncThunk(
    'articles/deleteArticleById',
    async (id: number) => {
        const data: any = await deleteArticleByIdAPI(id);
        return data
    }
)

export const countArticles: any = createAsyncThunk(
    'articles/countArticles',
    async () => (await countArticlesAPI())
)

export const modifyArticle: any = createAsyncThunk(
    'articles/modifyArticle',
    async (article: IArticles) => {
        const data :any = await modifyArticleAPI(article)
        return data
    }
)
export const findBoardMyList: any = createAsyncThunk(
    'articles/findBoardMyList',
    async (id: number) => {
        console.log(JSON.stringify(id))
        const data :any = await findBoardMyListAPI(id)
        return data
    }
)
export const findArticlePost: any = createAsyncThunk(
    'articles/findArticlePost',
    async (article: IArticles) => {
        console.log(JSON.stringify(article))
        const data :any = await findArticlePostAPI(article)
        return data
    }
)

export const saveArticle: any = createAsyncThunk(
    'articles/saveArticle',
    async (article: IArticles) => {
        console.log(JSON.stringify(article))
        const data :any = await saveArticleAPI(article)
        return data
    }
)

export const updateArticle: any = createAsyncThunk(
    'articles/updateArticle',
    async (article: IArticles) => {
        console.log(JSON.stringify(article))
        const data :any = await updateArticleAPI(article)
        return data
    }
)
