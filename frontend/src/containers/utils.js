import moment from "moment";

export const blockTransactionsGridColumns = [
    { field: "hash", headerName: "Hash", sortable: false, flex: 1000, disableColumnMenu: true },
    { field: "time", headerName: "Time", sortable: false, flex: 200, disableColumnMenu: true },
    { field: "size", headerName: "Size", sortable: false, flex: 200, disableColumnMenu: true }
];

export const blocksSummaryGridColumns = [
    { field: "hash", headerName: "Hash", sortable: false, flex: 1000, disableColumnMenu: true },
    { field: "time", headerName: "Time", sortable: false, flex: 200, disableColumnMenu: true },
    { field: "height", headerName: "Height", sortable: false, flex: 200, disableColumnMenu: true, rightEmptyWidth:0 }
];

export const getTransactionGridRows = ({ blockDetails }) =>
    blockDetails.transactions.map((tr) => ({
        ...tr,
        id: tr.hash,
        time: convertMsToDays(tr.time),
        size: bytesToSize(tr.size)
    }))

export const getBlocksSummaryGridRows = (data) => data.blocksFeed.map((block) => ({ ...block, id: block.hash, time: convertMsToDays(block.time) }))

export const navigateToBlock = (getValue, history) => { history.push(`/blocks/${getValue("hash")}`) }

export const convertMsToDays = (time) => `${moment.duration(time).asDays().toFixed()} days`;

export const bytesToSize = (bytes) => {
    var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes === 0) return "0 Byte";
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
}