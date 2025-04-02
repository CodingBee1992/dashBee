import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'
interface Props {
	color: string

	title: string

	dataKey: string
	dataKey2: string

	chartData: object[]
}
const Barchartbox = ({ title, color, dataKey,dataKey2, chartData }: Props) => {
	return (
		<div className="w-full h-full">
			<h1>{title}</h1>
			<div className="h-[150px] w-full">
				<ResponsiveContainer className='w-full h-full'>
					<BarChart  data={chartData} className='w-full h-full'>
                    <XAxis dataKey={dataKey2} />
						<Tooltip
							contentStyle={{background:"#2a3447", borderRadius:'5px' }}
							labelStyle={{ display: 'none' }}
                            cursor={{fill:"none"}}
                          
						/>
						<Bar dataKey={dataKey} fill={color} />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}

export default Barchartbox
