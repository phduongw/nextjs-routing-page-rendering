import React from 'react';
import {getLatestNews} from "@/lib/news";
import NewsList from "@/components/news-list";

const LatestNewsPage = () => {
    const latestNews = getLatestNews()
    return (
        <>
            <h2>Latest News Page</h2>
            <NewsList news={latestNews}/>
        </>
    );
};

export default LatestNewsPage;