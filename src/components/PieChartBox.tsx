import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const data = [
	{ name: 'Mobile', value: 400, color: '#008080' },
	{ name: 'Desktop', value: 300, color: '#00C49F' },
	{ name: 'Laptop', value: 100, color: '#FFBB28' },
	{ name: 'Tablet', value: 200, color: '#FF8042' },
]

const PieChartBox = () => {
	return (
		<div className="flex flex-col justify-between h-full w-full">
			<h1 className="p-3 text-2xl">Leads by Source</h1>
			<div className="flex items-center justify-center w-full h-[300px]">
				<ResponsiveContainer>
					<PieChart>
						<Tooltip
							contentStyle={{ background: data[0].color, borderRadius: '5px' }}
							labelStyle={{ display: 'none' }}
						/>

						<Pie data={data} innerRadius={'70%'} outerRadius={'90%'} fill="#8884d8" paddingAngle={5} dataKey="value">
							{data.map((item, index) => (
								<Cell key={`cell-${index}`} fill={item.color} />
							))}
						</Pie>
					</PieChart>
				</ResponsiveContainer>
			</div>
			<div className='flex justify-between'>
				{data.map((item)=>(
					<div key={item.name} className='flex flex-col '>
						<div className='flex items-center gap-1'>
							<div  style={{backgroundColor: item.color}} className={`w-[10px] h-[10px] bg-[${item.color.slice(0,item.color.length)}] rounded-full`}></div>
							<span>{item.name}</span>
						</div>
						<span className='text-center'>{item.value}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default PieChartBox
