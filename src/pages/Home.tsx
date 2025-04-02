import Barchartbox from '../components/Barchartbox'
import BigChartBox from '../components/BigChartBox'
import Chartbox from '../components/Chartbox'
import PieChartBox from '../components/PieChartBox'
import Topbox from '../components/Topbox'
import {
	chartBoxUser,
	chartBoxProduct,
	chartBoxRevenue,
	chartBoxConversion,
	barChartBoxRevenue,
	barChartBoxVisit,
} from '../data'
const Home = () => {
	return (
		<div className="grid grid-cols-4 auto-rows-[minmax(180px,auto)] gap-2">
			<div className="col-span-1 row-span-3 p-2 rounded-[10px] border-[1px] border-(--soft-bg)">
				<Topbox />
			</div>
			<div className="p-2 rounded-[10px] border-[1px] border-(--soft-bg)">
				<Chartbox {...chartBoxUser} />
			</div>
			<div className="p-2 rounded-[10px] border-[1px] border-(--soft-bg)">
				<Chartbox {...chartBoxProduct} />
			</div>
			<div className="col-span-1 row-span-3 p-2 rounded-[10px] border-[1px] border-(--soft-bg)">
				<PieChartBox />
			</div>
			<div className="p-2 rounded-[10px] border-[1px] border-(--soft-bg)">
				<Chartbox {...chartBoxConversion} />
			</div>
			<div className="p-2 rounded-[10px] border-[1px] border-(--soft-bg)">
				<Chartbox {...chartBoxRevenue} />
			</div>
			<div className="col-span-2 row-span-2 p-2 rounded-[10px] border-[1px] border-(--soft-bg)">
				<BigChartBox />
			</div>
			<div className="p-2 rounded-[10px] border-[1px] border-(--soft-bg)">
				<Barchartbox {...barChartBoxRevenue} />
			</div>
			<div className="p-2 rounded-[10px] border-[1px] border-(--soft-bg)">
				<Barchartbox {...barChartBoxVisit} />
			</div>
		</div>
	)
}

export default Home
