import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid'
import { Link } from 'react-router'

import view from "../assets/svg/view.svg"
import trash from "../assets/svg/delete.svg"

interface Props {
	columns: GridColDef[]
	rows: object[],
  users:string
}

const TableGrid = ({ columns, rows,users }: Props) => {

  const handleDelete =(id:number)=>{

  }

	const actionColumn: GridColDef = {
		field: 'action',
		headerName: 'Action',
		width: 200,
		renderCell: params => (
			<div className='flex gap-2'>
				<Link to={`/dashBee/${users}/${params.row.id}`}>
					<img src={view} alt="" />
				</Link>
        <div onClick={()=> handleDelete(params.row.id)}>
          <img src={trash} alt="" />
        </div>
			</div>
		),
	}

	return (
		<div >
			<DataGrid
				className="dataGrid p-2 bg-white w-full"
				rows={rows}
				columns={[...columns,actionColumn]}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 10,
						},
					},
				}}
				slots={{ toolbar: GridToolbar }}
				slotProps={{
					toolbar: {
						showQuickFilter: true,
						quickFilterProps: { debounceMs: 500 },
					},
				}}
				pageSizeOptions={[10]}
				checkboxSelection
				disableRowSelectionOnClick
				disableColumnFilter
				disableDensitySelector
				disableColumnSelector
			/>
		</div>
	)
}

export default TableGrid
