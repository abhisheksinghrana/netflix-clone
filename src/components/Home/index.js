import React, { useState, useEffect } from 'react';
import Banner from '../Banner';
import ShowList from '../ShowList';
import axios from 'axios';
import APIs, { BaseUrl } from '../../utils/apis';
import showList from '../../constants/showList';

function Home() {
    const [showListData, setShowListData] = useState([]);

    let fetchShowLists = () => {
        const apis = [];
        for (let item of Object.values(showList)) {
            apis.push(axios.get(`${BaseUrl}${item.api}`));
        };
        return axios.all(apis).then(axios.spread((...responses) => {
            return responses;
        })).catch(() => {
            return []
        })
    }

    useEffect(() => {
        let fetchDate = async () => {
            const result = await fetchShowLists();
            console.log('rana useEffect', result);
            setShowListData(result);
        };
        fetchDate();
    }, []);

    return <>
        <Banner />
        <div className="content-container">
            {showListData.map((item, index) => (
                <ShowList key={index} data={item.data.results} />))}
        </div>
    </>;
}

export default Home;