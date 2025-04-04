import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

interface Props {
	id: number
	img?: string
	title: string
	info: object
	chart: {
		dataKeys: { name: string; color: string }[]
		data: object[]
	}
	activities: { time: string; text: string }[]
}

const PageComponent = ({ img, title, info, chart, activities }: Props) => {
	return (
		<div className="grid grid-cols-2 w-full h-full">
			<div className="flex flex-col gap-10 p-4 ">
				<div className="mb-15">
					<div className="flex items-center gap-3 mb-5">
						<img src={img} alt="" className="w-[70px] h-[70px] rounded-full" />
						<h1 className="text-2xl">{title}</h1>
						<button className="p-2 text-white text-[14px] bg-red-400 rounded-[4px] cursor-pointer hover:bg-red-500 duration-300">
							Update
						</button>
					</div>
					<div className="flex flex-col gap-4">
						{Object.entries(info).map(item => (
							<div key={item[0]}>
								<span className="text-(--soft-color) text-[14px]">{item[0]}: </span>
								<span>{item[1]}</span>
							</div>
						))}
					</div>
				</div>
				<div className="py-2 h-[300px] w-full border-t-[1px] border-t-(--soft-bg)">
					<ResponsiveContainer width="100%" height="100%">
						<LineChart data={chart.data}>
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip />
							<Legend />
							{chart.dataKeys.map(dataKey => (
								<Line type="monotone" dataKey={dataKey.name} stroke={dataKey.color} activeDot={{ r: 8 }} />
							))}
							
						</LineChart>
					</ResponsiveContainer>
				</div>
			</div>
			<div className="p-4">
				<h2 className="mb-2">Latest Activities</h2>
				<ul className="list">
					{activities.map((activity) => (
						<li key={activity.text} className=" relative w-[1px] pt-10 bg-[#f45b69]">
							<div className="p-3.5 min-w-[400px] bg-[#f45b6810]">
								<p className="mb-2">{activity.text} </p>
								<time className="text-[12px]">{activity.time}</time>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default PageComponent
