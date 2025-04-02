import { GridColDef } from "@mui/x-data-grid";
import TableGrid from "../components/TableGrid"
import { userRows } from "../data";

const columns: GridColDef<(typeof userRows)[number]>[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" className="flex self-center w-[32px] h-[32px] rounded-full object-cover"/>;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];


const Users = () => {
  return (
    <div className="w-full">
      <div>
        <h1>Users</h1>
        <button>Add New User</button>
      </div>
      <TableGrid users="users" columns={columns} rows={userRows}/>
    </div>
  )
}

export default Users