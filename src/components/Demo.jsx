/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLazyGetSummaryQuery } from '../services/article';
import SearchForm from './shared/SearchForm';
import ArticlesHistory from './shared/ArticlesHistory';
import Loader from './ui/Loader';
import SummaryResult from './shared/SummaryResult';

const Demo = () => {
    const [article, setArticle] = useState({ url: '', summary: '' });
    const [allArticles, setAllArticles] = useState([]);
    const [copied, setCopied] = useState('');
    const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

    useEffect(() => {
        const articlesFromStorage = JSON.parse(localStorage.getItem('articles'));
        if (articlesFromStorage) setAllArticles(articlesFromStorage);
    }, []);

    const handleSubmit = async (url) => {
        const { data } = await getSummary({ articleUrl: url });
        if (data?.summary) {
            const newArticle = { ...article, url, summary: data.summary };
            const updatedArticles = [newArticle, ...allArticles];
            setArticle(newArticle);
            setAllArticles(updatedArticles);
            localStorage.setItem('articles', JSON.stringify(updatedArticles));
        }
    };

    const handleCopy = (copyUrl) => {
        setCopied(copyUrl);
        navigator.clipboard.writeText(copyUrl);
        setTimeout(() => setCopied(false), 3000);
    };

    return (
        <section className="mt-16 w-full max-w-xl">
            <SearchForm article={article} setArticle={setArticle} handleSubmit={handleSubmit} />
            <ArticlesHistory
                allArticles={allArticles}
                setArticle={setArticle}
                handleCopy={handleCopy}
                copied={copied}
            />
            <div className="my-10 max-w-full flex justify-center items-center">
                {isFetching ? (
                    <Loader />
                ) : (
                    <SummaryResult article={article} error={error} />
                )}
            </div>
        </section>
    );
};

export default Demo;
