import {DiscoverIcon,StarIcon,MessageIcon,TrendIcon,GlobeIcon,BuildIcon,AddIcon} from './icons/SidebarIcons'
import user1 from '../assets/sidebar/1.jpg';
import user2 from '../assets/sidebar/2.jpg';
import user3 from '../assets/sidebar/3.jpg';
import user4 from '../assets/sidebar/5.jpg';
export default function Sidebar() {
  return ( 
    <aside className="w-[100px]  border-r-[#EDEFF2] border-r-[2px] z-40 flex flex-col justify-between items-center py-8"
    style={{}}
    >
      <nav className="flex-1 px-4">
        <ul className='flex flex-col gap-4'>
          <li className="w-[50px] h-[50px] flex items-center justify-center rounded-[100px] p-[10px] bg-white circle-shadow cursor-pointer">
              <DiscoverIcon/>
          </li>
          <li className="w-[50px] h-[50px] flex items-center justify-center rounded-[100px] p-[10px] bg-white circle-shadow cursor-pointer">
              <StarIcon/>
          </li>
          <li className="w-[50px] h-[50px] flex items-center justify-center rounded-[100px] p-[10px] bg-white circle-shadow cursor-pointer">
              <MessageIcon/>
          </li>
          <li className="w-[50px] h-[50px] flex items-center justify-center rounded-[100px] p-[10px] bg-white circle-shadow cursor-pointer">
              <TrendIcon/>
          </li>
          <li className="w-[50px] h-[50px] flex items-center justify-center rounded-[100px] p-[10px] bg-white circle-shadow cursor-pointer">
              <GlobeIcon/>
          </li>
          <li className="w-[50px] h-[50px] flex items-center justify-center rounded-[100px] p-[10px] bg-white circle-shadow cursor-pointer">
              <BuildIcon/>
          </li>
        </ul>
      </nav>
      <div className='flex flex-col justify-end items-center gap-3.5'>
        <div className="w-[50px] h-[50px] rounded-[100px] overflow-hidden circle-shadow cursor-pointer">
            <img className='w-full h-full object-cover' src={user1}/>
        </div>
        <div className="w-[50px] h-[50px] rounded-[100px] overflow-hidden circle-shadow cursor-pointer">
            <img className='w-full h-full object-cover' src={user2}/>
        </div>
        <div className="w-[50px] h-[50px] rounded-[100px] overflow-hidden circle-shadow cursor-pointer">
            <img className='w-full h-full object-cover' src={user3}/>
        </div>
        <div className="w-[50px] h-[50px] rounded-[100px] overflow-hidden circle-shadow cursor-pointer">
            <img className='w-full h-full object-cover' src={user4}/>
        </div>
        <div className="w-[50px] h-[50px] flex items-center justify-center rounded-[100px] p-[10px] circle-shadow cursor-pointer">
            <AddIcon/>
        </div>
      </div>
    </aside>
  );
}
