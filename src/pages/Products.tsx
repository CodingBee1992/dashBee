import { useState } from "react"
import TableGrid from "../components/TableGrid"
import Add from "../components/Add"

const Products = () => {
	const [open, setOpen] = useState(false)

	const handleOpen = () => {
		setOpen(!open)
	}

	return (
		<div className="w-full">
			<div className="flex items-center gap-4 mb-2">
				<h1 className="text-2xl font-semibold">Users</h1>
				<button
					onClick={() => handleOpen()}
					className="px-4 py-1 text-[14px] text-black bg-gray-300 cursor-pointer hover:bg-gray-500 hover:text-white duration-300">
					Add New User
				</button>
			</div>
			<TableGrid slug="users" columns={columns} rows={userRows} />
			{open && <Add slug="user" columns={columns} handleOpen={handleOpen} />}
		</div>
	)
}

export default Products
