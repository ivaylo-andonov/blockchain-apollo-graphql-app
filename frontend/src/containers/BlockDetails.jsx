import React from "react";
import { useQuery } from "@apollo/client";
import { getBlockDetails } from "../queries";
import { Typography } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import FullPageLoader from "../components/FullPageLoader";
import { getTransactionGridRows, blockTransactionsGridColumns, convertMsToDays, bytesToSize } from "./utils";

export const BlockDetails = ({ match }) => {
    const hash = match.params.hash;
    const { loading, error, data } = useQuery(getBlockDetails, { variables: { hash } });

    if (loading) return <FullPageLoader />
    if (error) return `Error! ${error.message}`;

    return (
        <div style={{ width: "100%", textAlign: "center" }}>
            <Typography variant="h3" gutterBottom> Block {data.blockDetails.blockIndex}</Typography>
            <div style={{ height: "50px", textAlign: "left", fontSize: "x-large" }}>
                <Typography variant="h6" gutterBottom> Hash: {data.blockDetails.hash}</Typography>
                <Typography variant="h6" gutterBottom> Previous block: {data.blockDetails.prevBlock}</Typography>
                <Typography variant="h6" gutterBottom> Index: {data.blockDetails.blockIndex}</Typography>
                <Typography variant="h6" gutterBottom> Fee: {data.blockDetails.fee}</Typography>
                <Typography variant="h6" gutterBottom> Size: {bytesToSize(data.blockDetails.size)}</Typography>
                <Typography variant="h6" gutterBottom> Weight: {data.blockDetails.weight}</Typography>
                <Typography variant="h6" gutterBottom> Height: {data.blockDetails.height}</Typography>
                <Typography variant="h6" gutterBottom> Time: {convertMsToDays(data.blockDetails.time)}</Typography>
                <Typography style={{ width: "100%", textAlign: "center" }} variant="h5" gutterBottom>Transactions</Typography>
                <div style={{ height: 300, width: "100%" }}>
                    <DataGrid
                        pageSize={100}
                        rows={getTransactionGridRows(data)}
                        columns={blockTransactionsGridColumns}
                    />
                </div>
            </div>
        </div >
    );
}

export default BlockDetails