import { useState } from "react"
import TableGrid from "../components/TableGrid"
import Add from "../components/Add"
import { GridColDef } from "@mui/x-data-grid";
import { products } from "../data";

const columns: GridColDef<(typeof products)[number]>[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
	field: "img",
	headerName: "Image",
	width: 100,
	renderCell: (params) => {
	  return <img src={params.row.img || "/noavatar.png"} alt="" className="flex self-center w-[32px] h-[32px] rounded-full object-cover"/>;
	},
  },
  {
	field: "title",
	type: "string",
	headerName: "Title",
	width: 250,
  },
  {
	field: "color",
	type: "string",
	headerName: "Color",
	width: 150,
  },
  {
	field: "price",
	type: "string",
	headerName: "Price",
	width: 200,
  },
  {
	field: "producer",
	type: "string",
	headerName: "Producer",
	width: 200,
	
  },
  {
	field: "createdAt",
	headerName: "Created At",
	width: 200,
	type: "string",
  },
  {
	field: "inStock",
	headerName: "In Stock",
	width: 150,
	type: "boolean",
  },
];

const Products = () => {
	const [open, setOpen] = useState(false)

	const handleOpen = () => {
		setOpen(!open)
	}

	return (
		<div className="w-full">
			<div className="flex items-center gap-4 mb-2">
				<h1 className="text-2xl font-semibold">Products</h1>
				<button
					onClick={() => handleOpen()}
					className="px-4 py-1 text-[14px] text-black bg-gray-300 cursor-pointer hover:bg-gray-500 hover:text-white duration-300">
					Add New Product
				</button>
			</div>
			<TableGrid slug="product" columns={columns} rows={products} />
			{open && <Add slug="product" columns={columns} handleOpen={handleOpen} />}
		</div>
	)
}

export default Products
