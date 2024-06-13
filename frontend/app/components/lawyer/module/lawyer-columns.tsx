import { Link, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { PG } from "../../common/enums/PG";
import { LawyerColumn } from "../model/lawyers-column";
import { deleteLawyerById } from "../service/lawyer-service";
import { useDispatch } from "react-redux";

interface CellType {
    row: LawyerColumn
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
            field: 'username',
            headerName: '아이디',
            renderCell: ({ row }: CellType) => <Typography textAlign="center" sx={{ fontSize: "1.2rem" }}>
                <Link href={`${PG.LAWYER}/update/${row.id}`} className="underline">{row.username}</Link>
            </Typography>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'password',
            headerName: '비밀번호',
            renderCell: () => <>********</>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'name',
            headerName: '이름',
            renderCell: ({ row }: CellType) => <Typography textAlign="center" sx={{ fontSize: "1.2rem" }}>{row.name}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'phone',
            headerName: '전화번호',
            renderCell: ({ row }: CellType) => <Typography textAlign="center" sx={{ fontSize: "1.2rem" }}>{row.phone}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'birth',
            headerName: '출생년도',
            renderCell: ({ row }: CellType) => <Typography textAlign="center" sx={{ fontSize: "1.2rem" }}>{row.birth}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'lawyerNo',
            headerName: '자격번호',
            renderCell: ({ row }: CellType) => <Typography textAlign="center" sx={{ fontSize: "1.2rem" }}>{row.lawyerNo}</Typography>
        },

        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'law',
            headerName: '담당분야',
            renderCell: ({ row }: CellType) => <Typography textAlign="center" sx={{ fontSize: "1.2rem" }}>{row.law}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'belong',
            headerName: '소속',
            renderCell: ({ row }: CellType) => <Typography textAlign="center" sx={{ fontSize: "1.2rem" }}>{row.belong}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'address',
            headerName: '주소',
            renderCell: ({ row }: CellType) => <Typography textAlign="center" sx={{ fontSize: "1.2rem" }}>{row.address}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'addressDetail',
            headerName: '추가 주소',
            renderCell: ({ row }: CellType) => <Typography textAlign="center" sx={{ fontSize: "1.2rem" }}>{row.addressDetail}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'belongPhone',
            headerName: '소속 전화번호',
            renderCell: ({ row }: CellType) => <Typography textAlign="center" sx={{ fontSize: "1.2rem" }}>{row.belongPhone}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'visitCost',
            headerName: '방문상담비용',
            renderCell: ({ row }: CellType) => <Typography textAlign="center" sx={{ fontSize: "1.2rem" }}>{row.visitCost}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'phoneCost',
            headerName: '전화상담비용',
            renderCell: ({ row }: CellType) => <Typography textAlign="center" sx={{ fontSize: "1.2rem" }}>{row.phoneCost}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'videoCost',
            headerName: '영상상담비용',
            renderCell: ({ row }: CellType) => <Typography textAlign="center" sx={{ fontSize: "1.2rem" }}>{row.videoCost}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'university',
            headerName: '대학교',
            renderCell: ({ row }: CellType) => <Typography textAlign="center" sx={{ fontSize: "1.2rem" }}>{row.university}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'major',
            headerName: '학과',
            renderCell: ({ row }: CellType) => <Typography textAlign="center" sx={{ fontSize: "1.2rem" }}>{row.major}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'premium',
            headerName: '프리미엄',
            renderCell: ({ row }: CellType) => <Typography textAlign="center" sx={{ fontSize: "1.2rem" }}>{row.premium}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'delete',
            headerName: 'DELETE',
            renderCell: ({ row }: CellType) =>(
            <div className="flex items-center justify-center">
            <button 
                    onClick={() => {
                        console.log("delete lawyer id : {}", row.id)
                        dispatch(deleteLawyerById(row.id))
                        location.reload();
                    }}>DELETE</button>
                    </div>)
        },

    ]
}