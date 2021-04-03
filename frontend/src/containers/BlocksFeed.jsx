import React from 'react';
import Divider from "../components/Divider/Divider"
import FullPageLoader from '../components/Loaders/FullPageLoader';
import { getBlocksFeed } from "../queries";
import { useQuery } from "@apollo/client";
import { Link } from 'react-router-dom'

export const BlocksFeed = () => {
    const { loading, error, data } = useQuery(getBlocksFeed);

    if (loading) return <FullPageLoader />;
    if (error) return `Error! ${error.message}`;

    return (
        <React.Fragment>
            <div> Blocks FEED:</div>
            <Divider />
            <div>{data.blocksFeed.map((block, i) => (
                <div key={i}> <Link to={`/blocks/${block.hash}`}> Hash: {block.hash}</Link></div>
            ))}</div>
            <Divider />
        </React.Fragment>
    );
}

export default BlocksFeed