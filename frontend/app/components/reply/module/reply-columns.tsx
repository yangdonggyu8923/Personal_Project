import { Link, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { PG } from "../../common/enums/PG";
import { useDispatch } from "react-redux";
import { ReplyColumn } from "../model/replies-column";

interface CellType {
    row: ReplyColumn
}

export default function LawyerColumns(): GridColDef[] {
    const dispatch = useDispatch()

    return [
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'id',
            headerName: 'No.',
            renderCell: ({ row }: CellType) => <Typography textAlign="center" sx={{ fontSize: "1.2rem" }}>{row.id}</Typography>
        }
        ,
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'content',
            headerName: '답변',
            renderCell: ({ row }: CellType) => <Typography textAlign="center" sx={{ fontSize: "1.2rem" }}>
                <Link href={`${PG.LAWYER}/update/${row.id}`} className="underline">{row.content}</Link>
            </Typography>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'regDate',
            headerName: '작성일자',
            renderCell: ({ row }: CellType) => <Typography textAlign="center" sx={{ fontSize: "1.2rem" }}>{row.regDate}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'modDate',
            headerName: '수정일자',
            renderCell: ({ row }: CellType) => <Typography textAlign="center" sx={{ fontSize: "1.2rem" }}>{row.modDate}</Typography>
        },
    ]
}