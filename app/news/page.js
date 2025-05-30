import React from 'react';

import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";

const NewsPage = () => {
    return (
        <>
            <h1>News Page</h1>
            <NewsList news={DUMMY_NEWS} />
        </>
    );
};

export default NewsPage;