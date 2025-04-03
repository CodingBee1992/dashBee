import { GridColDef } from "@mui/x-data-grid";
import TableGrid from "../components/TableGrid"
import { userRows } from "../data";
import { useState } from "react";
import Add from "../components/Add";

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

  const [open,setOpen]=useState(false)
 

  const handleOpen = ()=>{
    setOpen(!open)
  }

  return (
    <div className="w-full">
      <div className="flex items-center gap-4 mb-2">
        <h1 className="text-2xl font-semibold">Users</h1>
        <button onClick={()=>handleOpen()} className="px-4 py-1 text-[14px] text-black bg-gray-300 cursor-pointer hover:bg-gray-500 hover:text-white duration-300">Add New User</button>
      </div>
      <TableGrid slug="user" columns={columns} rows={userRows}/>
      {open && <Add slug="user" columns={columns} handleOpen={handleOpen}/>}
    </div>
  )
}

export default Users