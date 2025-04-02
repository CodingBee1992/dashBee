import { Link } from 'react-router'

import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'

interface Props {
    color:string,
    icon:string,
    title:string,
    number:number | string,
    dataKey:string,
    percentage:number,
    chartData:object[],
}

const Chartbox = ({color,icon,title,number,dataKey,percentage,chartData}:Props) => {
	return (
		<div className="flex justify-between h-full">
			<div className="flex flex-2/2 flex-col justify-between h-full">
				<div className="flex items-center gap-1">
					<img src={icon} alt="" />
					<span>{title}</span>
				</div>
				<h1>{number}</h1>
				<Link to={'/dashBee/'} className={`text-[14px] text-[${color}] hover:text-teal-500 duration-300`}>
					view all
				</Link>
			</div>
			<div className="flex flex-col justify-between flex-2/2  ">
				<div className="h-full w-full">
					<ResponsiveContainer>
						<LineChart data={chartData}>
                            <Tooltip contentStyle={{background:'transparent', border:'none'}} labelStyle={{display:'none'}} position={{x:10, y:60}}/>
							<Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2} />
						</LineChart>
					</ResponsiveContainer>
				</div>
				<div className="flex flex-col items-end">
					<span className={`text-[14px] font-semibold ${percentage > 0 ? 'text-green-400': 'text-red-500'}`}>{percentage}%</span>
					<span className="text-[12px]">this month</span>
				</div>
			</div>
		</div>
	)
}

export default Chartbox
