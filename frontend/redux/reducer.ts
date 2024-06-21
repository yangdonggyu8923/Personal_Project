import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import lawyerReducer from "@/app/components/lawyer/service/lawyer-slice"
import articleReducer from "@/app/components/article/service/article-slice"
import replyReducer from "@/app/components/reply/service/reply-slice"
import resReducer from "@/app/components/reservation/service/res-slice"


const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: number) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const lawyerPersistConfig = {
  key: "lawyer",
  storage,
  whitelist: ["lawyerState"],
};

const replyPersistConfig = {
  key: "reply",
  storage,
  whitelist: ["replyState"],
};

const articlePersistConfig = {
  key: "article",
  storage,
  whitelist: ["articleState"],
};
const resPersistConfig = {
  key: "res",
  storage,
  whitelist: ["resState"],
};




const persistedLawyerReducer = persistReducer(lawyerPersistConfig, lawyerReducer);
const persistedArticleReducer = persistReducer(articlePersistConfig, articleReducer);
const persistedReplyReducer = persistReducer(replyPersistConfig, replyReducer);
const persistedResReducer = persistReducer(resPersistConfig, resReducer);

export const rootReducer = combineReducers({  
  lawyer: persistedLawyerReducer,
  article: persistedArticleReducer,
  reply: persistedReplyReducer   ,
  res: persistedResReducer   })   