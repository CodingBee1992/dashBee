import logo from '../assets/svg/logo.svg'
import search from '../assets/svg/search.svg'
import app from '../assets/svg/app.svg'
import expand from '../assets/svg/expand.svg'
import settings from '../assets/svg/settings.svg'
import notification from '../assets/svg/notifications.svg'
import userImg from '../assets/svg/logoBee.jpg'

const Navbar = () => {
  return (
    <div className='flex justify-between p-4'>
        <div className='flex items-center gap-1'>
            <img src={logo} alt="" />
            <span>dashBee</span>
        </div>
        <div className='flex items-center gap-4 '>
            <img src={search} alt="" className='svg'/>
            <img src={app} alt="" className='svg'/>
            <img src={expand} alt="" className='svg'/>
            <div className='relative flex items-center gap-3'>
                <img src={notification} alt="" className='svg'/>
                <span className='absolute top-[-13px] right-[-13px] flex items-center justify-center text-[12px] bg-red-600 w-[18px] h-[18px] rounded-full'>1</span>
            </div>
            <div className='flex items-center gap-2 px-5'>
                <img src={userImg} alt="" className='w-[30px] h-[30px] rounded-full object-cover'/>
                <span>codingBee</span>
            </div>
            <img src={settings} alt="" className='svg'/>
        </div>
    </div>
  )
}

export default Navbar