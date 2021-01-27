import React from 'react';

export default function useFetch () {
    const [data, updateData] = React.useState(null);
    const [error, updateError] = React.useState(null);
    const [loading, updateLoading] = React.useState(null);

    async function fetchData (url, options) {
        updateLoading(true);
        try {
            const response = await fetch(url);
            const json = await response.json();
            updateLoading(false);
            updateData(json);
        } catch (error) {
            updateError(error);
        }
    }

    return {data, error, loading, fetchData};

};