import { Link } from 'react-router'

import { menu } from '../data'

const Sidebar = () => {
	return (
		<div className="flex flex-col gap-4 w-[250px] p-4  border-r-2 border-[var(--soft-bg)]">
            {menu.map((item)=>(
                <div key={item.id} className='flex flex-col gap-3'>
				<span  className='text-[12px] text-[var(--soft-color)] font-[200]'>{item.title.toUpperCase()}</span>
                {item.listItems.map((list)=>(
                    <Link key={list.id} to={`/dashBee${list.url}`} className='flex items-center gap-2 p-1 hover:bg-[var(--soft-bg)] rounded-[5px] duration-300'>
					<img src={list.icon} alt="" className='w-[15px] h-[15px]'/>
					<span>{list.title}</span>
				</Link>
                ))}
				
				{/* <Link to={'/dashBee/'} className='flex items-center gap-2 p-1 hover:bg-[var(--soft-bg)] rounded-[5px] duration-300'>
					<img src={profile} alt="" className='w-[15px] h-[15px]'/>
					<span>Profile</span>
				</Link> */}
			</div>
            ))}
			
			
		</div>
	)
}

export default Sidebar
