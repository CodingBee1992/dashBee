import { GridColDef } from '@mui/x-data-grid'
import TableGrid from '../components/TableGrid'
import { userRows } from '../data'
import { ChangeEvent, useState } from 'react'
import Add from '../components/Add'
import FetchData from '../components/FetchData'

const columns: GridColDef<(typeof userRows)[number]>[] = [
	{ field: 'id', headerName: 'ID', width: 90 },
	{
		field: 'img',
		headerName: 'Avatar',
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
		field: 'firstName',
		type: 'string',
		headerName: 'First name',
		width: 150,
	},
	{
		field: 'lastName',
		type: 'string',
		headerName: 'Last name',
		width: 150,
	},
	{
		field: 'email',
		type: 'string',
		headerName: 'Email',
		width: 200,
	},
	{
		field: 'phone',
		type: 'string',
		headerName: 'Phone',
		width: 200,
	},
	{
		field: 'createdAt',
		headerName: 'Created At',
		width: 200,
		type: 'string',
	},
	{
		field: 'verified',
		headerName: 'Verified',
		width: 150,
		type: 'boolean',
	},
]

const Users = () => {
	const [open, setOpen] = useState(false)
	const [dataAPI, setDataAPI] = useState([])
	const { get, post } = FetchData()
	const [firstName, setFirstName] = useState('')
	const [lastName, setLasttName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [createdAt, setCreatedAt] = useState('')
	const [verified, setVerified] = useState('')

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		switch (e.target.placeholder) {
			case 'firstName':
				setFirstName(e.target.value)
				break
			case 'lastName':
				setLasttName(e.target.value)
				break
			case 'email':
				setEmail(e.target.value)
				break
			case 'phone':
				setPhone(e.target.value)
				break
			case 'createdAt':
				setCreatedAt(e.target.value)
				break
			case 'verified':
				setVerified(e.target.value)
				break

			default:
				break
		}
	}

	const dataItem = {
		img: 'https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
		lastName,
		firstName,
		email,
		phone,
		createdAt,
		verified,
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
				<h1 className="text-2xl font-semibold">Users</h1>
				<button
					onClick={() => handleOpen()}
					className="px-4 py-1 text-[14px] text-black bg-gray-300 cursor-pointer hover:bg-gray-500 hover:text-white duration-300">
					Add New User
				</button>
			</div>
			<TableGrid slug="user" columns={columns} rows={dataAPI} fetchData={fetchData} />
			{open && (
				<Add
					slug="user"
					columns={columns}
					dataItem={dataItem}
					handleOpen={handleOpen}
					postData={postData}
					handleChange={handleChange}
				/>
			)}
		</div>
	)
}

export default Users
