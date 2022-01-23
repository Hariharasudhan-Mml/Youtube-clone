import SidebarOption from '../SidebarOption/SidebarOption'
import {Home,Explore,Subscriptions,VideoLibrary,History,MusicNote, SportsTennisOutlined,SportsEsportsOutlined,Theaters,Note,LiveTv,Style} from '@material-ui/icons';
import './sidebar.css' ;


const Sidebar=()=>{
    const sidebarData=[
        {icon:Home,title:"Home"},
        {icon:Explore,title:"Explore"},
        {icon:Subscriptions,title:"Subscriptions"},
        {icon:VideoLibrary,title:"VideoLibrary"},
        {icon:History,title:"History"},
        {icon:MusicNote,title:"Music"},
        {icon:SportsTennisOutlined,title:"Sports"},
        {icon:SportsEsportsOutlined,title:"Game"},
        {icon:Theaters,title:"Film"},
        {icon:Note,title:"News"},
        {icon:LiveTv,title:"Live"},
        {icon:Style,title:"Fasion & Beauty"},



]


    return (
        <div className='Sidebar'>
{sidebarData.map((sidebar,index)=><SidebarOption key={index} Icon={sidebar.icon} title={sidebar.title}/>
    )}
        </div>

    )
}

export default Sidebar;