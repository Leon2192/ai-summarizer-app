/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const SummaryResult = ({ article, error }) => {
    if (error) {
        return (
            <p className="font-inter font-bold text-black">
                Ha ocurrido un error inesperado...
                <br />
                <span className="font-satoshi font-normal text-gray-700">{error?.data?.error}</span>
            </p>
        );
    }

    if (article.summary) {
        return (
            <div className="flex flex-col gap-3">
                <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                    Artículo <span className="blue__gradient">Resumen</span>
                </h2>
                <div className="summary_box">
                    <p className="font-inter font-medium text-sm text-gray-700">{article.summary}</p>
                </div>
            </div>
        );
    }

    return null;
};

export default SummaryResult;
