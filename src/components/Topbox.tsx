import { topDealUsers } from '../data'

const Topbox = () => {
	return (
		<div className='h-[500px]'>
			<h1 className='p-2 text-2xl font-semibold'>Top Deals</h1>
			<div className='flex flex-col justify-around h-full px-4 '>
                {topDealUsers.map((user)=>(
                    <div key={user.id} className='flex justify-between items-center'>
                        <div className='flex gap-3'>
                            <img src={user.img} alt="" className='w-[30px] h-[30px] rounded-full object-cover'/>
                            <div className='flex flex-col'>
                                <span className='text-[14px] font-[500]'>{user.username}</span>
                                <span className='text-[12px] '>{user.email}</span>
                            </div>
                        </div>
                        <span>${user.amount}</span>
                    </div>
                ))}
            </div>
		</div>
	)
}

export default Topbox
