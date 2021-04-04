import React from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Typography } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { getBlocksFeed } from "../queries";
import FullPageLoader from "../components/FullPageLoader";
import { getBlocksSummaryGridRows, navigateToBlock, blocksSummaryGridColumns } from "./utils"

export const BlocksFeed = () => {
    const { loading, error, data } = useQuery(getBlocksFeed);
    const history = useHistory()

    if (loading) return <FullPageLoader />;
    if (error) return `Error! ${error.message}`;

    return (
        <React.Fragment>
            <div style={{ height: 650, width: "100%", textAlign: "center" }}>
                <Typography variant="h3" gutterBottom>Crypto Blocks feed</Typography>
                <DataGrid pageSize={10}
                    density="comfortable"
                    rows={getBlocksSummaryGridRows(data)}
                    columns={blocksSummaryGridColumns}
                    onCellClick={({ getValue }) => navigateToBlock(getValue, history)}
                />
            </div>
        </React.Fragment>
    );
}

export default BlocksFeed