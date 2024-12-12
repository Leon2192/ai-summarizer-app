/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { linkIcon } from '../../assets'

const SearchForm = ({ article, setArticle, handleSubmit }) => {
    const handleInputChange = (e) => {
        setArticle({ ...article, url: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(article.url);
    };

    return (
        <form className="relative flex justify-center items-center" onSubmit={onSubmit}>
            <img src={linkIcon} alt="link_icon" className="absolute left-0 my-2 ml-3 w-5" />
            <input
                type="url"
                placeholder="Ingresa la URL..."
                value={article.url}
                onChange={handleInputChange}
                required
                className="url_input peer"
            />
            <button type="submit" className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700">
                +
            </button>
        </form>
    );
};

export default SearchForm;
