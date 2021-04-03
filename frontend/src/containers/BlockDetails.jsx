import React from 'react';
import FullPageLoader from '../components/Loaders/FullPageLoader';
import { getBlockDetails } from "../queries";
import { useQuery } from "@apollo/client";
import Divider from "../components/Divider/Divider"

export const BlockDetails = (props) => {
    const hash = props.match.params.hash;
    const { loading, error, data } = useQuery(getBlockDetails, { variables: { hash } });

    if (loading) return <FullPageLoader />
    if (error) return `Error! ${error.message}`;

    return (
        <div>
            <h2>Block {data.blockDetails.blockIndex}</h2>
            <Divider />
            <h5>Hash: {data.blockDetails.hash}</h5>
            <h5>Index: {data.blockDetails.blockIndex}</h5>
            <h5>Fee:{data.blockDetails.fee}</h5>
            <h5>Size:{data.blockDetails.size}</h5>
            <h5>Block Transactions:
          {data.blockDetails.transactions.map((tx, i) => (
                <div key={i}>{tx.hash}</div>
            ))}
            </h5>
        </div>
    );
}

export default BlockDetails
