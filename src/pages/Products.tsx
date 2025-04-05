import { ChangeEvent, useState } from 'react'
import TableGrid from '../components/TableGrid'
import Add from '../components/Add'
import { GridColDef } from '@mui/x-data-grid'
import { products } from '../data'
import FetchData from '../components/FetchData'

const columns: GridColDef<(typeof products)[number]>[] = [
	{ field: 'id', headerName: 'ID', width: 90 },
	{
		field: 'img',
		headerName: 'Image',
		width: 100,
		renderCell: params => {
			return (
				<img
					src={params.row.img || '/noavatar.png'}
					alt=""
					className="flex self-center w-[32px] h-[32px] rounded-full object-cover"
				/>
			)
		},
	},
	{
		field: 'title',
		type: 'string',
		headerName: 'Title',
		width: 250,
	},
	{
		field: 'color',
		type: 'string',
		headerName: 'Color',
		width: 150,
	},
	{
		field: 'price',
		type: 'string',
		headerName: 'Price',
		width: 200,
	},
	{
		field: 'producer',
		type: 'string',
		headerName: 'Producer',
		width: 200,
	},
	{
		field: 'createdAt',
		headerName: 'Created At',
		width: 200,
		type: 'string',
	},
	{
		field: 'inStock',
		headerName: 'In Stock',
		width: 150,
		type: 'boolean',
	},
]

const Products = () => {
	const [open, setOpen] = useState(false)
	const [dataAPI, setDataAPI] = useState([])
	const { get, post } = FetchData()

	const [title, setTitle] = useState('')
	const [color, setColor] = useState('')
	const [price, setPrice] = useState('')
	const [producer, setProducer] = useState('')
	const [createdAt, setCreatedAt] = useState('')
	const [inStock, setInStock] = useState('')

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		switch (e.target.placeholder) {
			case 'title':
				setTitle(e.target.value)
				break
			case 'color':
				setColor(e.target.value)
				break
			case 'price':
				setPrice(e.target.value)
				break
			case 'producer':
				setProducer(e.target.value)
				break
			case 'createdAt':
				setCreatedAt(e.target.value)
				break
			case 'inStock':
				setInStock(e.target.value)
				break

			default:
				break
		}
	}

	const dataItem = {
		img: 'https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
		color,
		title,
		price,
		producer,
		createdAt,
		inStock,
	}
	const handleOpen = () => {
		setOpen(!open)
	}

	const fetchData = (slug: string) => {
		get(`http://localhost:3000/${slug}s`).then(data => setDataAPI(data))
	}

	const postData = (slug: string, dataItem: object[]) => {
		post(`http://localhost:3000/${slug}s`, dataItem).then(data => console.log(data))
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
			<TableGrid slug="product" columns={columns} rows={dataAPI} fetchData={fetchData} />
			{open && (
				<Add
					slug="product"
					dataItem={dataItem}
					columns={columns}
					handleOpen={handleOpen}
					postData={postData}
					handleChange={handleChange}
				/>
			)}
		</div>
	)
}

export default Products
