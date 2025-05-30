import { GridColDef } from '@mui/x-data-grid'
import { ChangeEvent, FormEvent} from 'react'

interface Props {
	columns: GridColDef[]

	slug: string
	dataItem: object[]
	handleOpen: () => void
	postData: (slug: string, data: object[]) => void
	handleChange:(e: ChangeEvent<HTMLInputElement>)=> void
}
// interface dataProps {
// 	id:number,
// 	img:string,
// 	lastName:string,
// 	firstName:string,
// 	email:string,
// 	phone:string,
// 	createdAt:string,
// 	verified:boolean
// }

const Add = ({ slug, columns,dataItem, handleOpen, postData, handleChange }: Props) => {
	

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		postData(slug, dataItem)
	}

	return (
		<div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black/50  z-100">
			<div className="relative flex flex-col  items-center p-4  bg-(--soft-bg) rounded-2xl">
				<span
					onClick={() => handleOpen()}
					className="absolute top-2 right-2 flex items-center justify-center text-[20px] w-[25px] h-[25px] rounded-full hover:bg-gray-500 duration-300 cursor-pointer">
					X
				</span>
				<h1 className="flex self-start text-2xl mb-4 text-(--soft-color)">Add new {slug}</h1>
				<form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4 p-4">
					{columns
						.filter(item => item.field !== 'id' && item.field !== 'img')
						.map((column, index) => (
							<div key={index} className="flex flex-col gap-2">
								<label htmlFor="">{column.headerName}</label>
								<input
									onChange={handleChange}
									type={column.type}
									placeholder={column.field}
									className="p-1 bg-transparent text-white border-[1px] border-(--soft-color) rounded-[4px] outline-none"
								/>
							</div>
						))}
					<button
						type="submit"
						className="col-start-2 px-6 py-1 text-white rounded-2xl bg-teal-400 hover:bg-teal-600 duration-300 cursor-pointer">
						Send
					</button>
				</form>
			</div>
		</div>
	)
}

export default Add
