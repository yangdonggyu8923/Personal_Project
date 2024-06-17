"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { getAllArticles, getCountArticles } from '@/app/components/article/service/article-slice';
import ArticleColumns from '@/app/components/article/module/article-columns';
import { countArticles, findAllArticles } from '@/app/components/article/service/article-service';

const ArticleList: NextPage = () => {
    const dispatch = useDispatch();
    const allArticles: [] = useSelector(getAllArticles);
    const cntArticles = useSelector(getCountArticles);

    useEffect(() => {
        dispatch(findAllArticles(1)),
        dispatch(countArticles())
    }, []);

  return (
    <div>
      <h1>전체 글 목록</h1>
      <Box sx={{ height: '100%', width: '100%' }}>
      {allArticles && <DataGrid
        rows={allArticles}
        columns={ArticleColumns()}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />}
    </Box>
    <div>게시글 수 : {cntArticles}</div>
    </div>
  );
};

export default ArticleList;