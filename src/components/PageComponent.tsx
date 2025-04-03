
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import logo from '../assets/svg/logoBee.jpg'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const PageComponent = () => {
	return (
		<div className="grid grid-cols-2 w-full h-full">
			<div className="flex flex-col gap-10 p-4 ">
				<div className="mb-15">
					<div className="flex items-center gap-3 mb-5">
						<img src={logo} alt="" className="w-[70px] h-[70px] rounded-full" />
						<h1 className="text-2xl">CodingBee</h1>
						<button className="p-2 text-white text-[14px] bg-red-400 rounded-[4px] cursor-pointer hover:bg-red-500 duration-300">Update</button>
					</div>
					<div className="flex flex-col gap-4">
						<div>
							<span className="text-(--soft-color) text-[14px]">UserName: </span>
							<span>codingBee</span>
						</div>
						<div>
							<span className="text-(--soft-color) text-[14px]">UserName: </span>
							<span>codingBee</span>
						</div>
						<div>
							<span className="text-(--soft-color) text-[14px]">UserName: </span>
							<span>codingBee</span>
						</div>
						<div>
							<span className="text-(--soft-color) text-[14px]">UserName: </span>
							<span>codingBee</span>
						</div>
						<div>
							<span className="text-(--soft-color) text-[14px]">UserName: </span>
							<span>codingBee</span>
						</div>
					</div>
				</div>
				<div className="py-2 h-[300px] w-full border-t-[1px] border-t-(--soft-bg)">
					<ResponsiveContainer width="100%" height="100%">
						<LineChart
							
							data={data}
							>
							
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
							<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
						</LineChart>
					</ResponsiveContainer>
				</div>
			</div>
			<div className="p-4">
        <h2>Latest Activities</h2>
        <ul>
          <li className="list-disc">
            <div>
              <p>CodingBee </p>
              <time>2 days ago</time>
            </div>
          </li>
          <li className="list-disc">
            <div>
              <p>CodingBee </p>
              <time>2 days ago</time>
            </div>
          </li>
          <li className="list-disc">
            <div>
              <p>CodingBee </p>
              <time>2 days ago</time>
            </div>
          </li>
          <li className="list-disc">
            <div>
              <p>CodingBee </p>
              <time>2 days ago</time>
            </div>
          </li>
          <li className="list-disc">
            <div>
              <p>CodingBee </p>
              <time>2 days ago</time>
            </div>
          </li>
        
        </ul>
      </div>
		</div>
	)
}

export default PageComponent
