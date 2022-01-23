import {Button} from '@material-ui/core';
import Video from '../video/video';
import './Content.css';
import ChildImg from '../../assets/kannathil.png';
import TrainImg from '../../assets/train.jpg';
import CryptoImg from '../../assets/crypto.jpg';
import AirportImg from '../../assets/airport.jpg';
import FarmImg from '../../assets/farm.jpg';
import LinuxImg from '../../assets/linu.png';
import MemeImg from '../../assets/meme.jpg';
import RstationImg from '../../assets/sat-rail-station.jpg';
import SanthoshImg from '../../assets/songi.png';
import SuryaImg from '../../assets/surya.jpg';
import BiriyaniImg from '../../assets/arav.jpg';
import VdosongImg from '../../assets/veyilodu vilayadi.jpg';




const Content=()=>{


const tags=["Friends","SchoolMates" ,"Arts","Lockdown","Online Exams","covid" ,"Vaccination","Aware of covid"]
const videoData=[
{thumbnail:ChildImg,title:"Kannathil Muthamittal Video song",channelName:"Tamil Music",logo:ChildImg,duration:"05:20",views:"1M",date:"1 year"},
{thumbnail:TrainImg,title:"Bitter Truth about Indian Trains",channelName:"High view",logo:TrainImg,duration:"10:46",views:"2.3k",date:"3 Months"},
{thumbnail:CryptoImg,title:" Is Powr coin holds the Maximum threshold ? ",channelName:"Crypto Tamil",logo:CryptoImg,duration:"7:12",views:"5.2k",date:"8 Months"},
{thumbnail:AirportImg,title:" Chennai international Airport Construction Video",channelName:"Amazing videos",logo:AirportImg,duration:"3:02",views:"10.4k",date:"2 Months"},
{thumbnail:FarmImg,title:"A Day in a Farmers' Field",channelName:"Hari the decoder",logo:FarmImg,duration:"20:30",views:"433k",date:"1 Year"},
{thumbnail:LinuxImg,title:"Linux vs Windows | which one is Best",channelName:"Hari the decoder",logo:FarmImg,duration:"17:32",views:"1.3M",date:"1 Year"},
{thumbnail:MemeImg,title:"Respond to the Fun Meme",channelName:"Tamil Memes",logo:MemeImg,duration:"23:30",views:"2M",date:"2 Years"},
{thumbnail:RstationImg,title:"Revealing Pudukkottai Railway Station",channelName:"Times with Satya",logo:RstationImg,duration:"8:10",views:"1M",date:"10 Months"},
{thumbnail:SanthoshImg,title:"Lets Start Editing Pictures like a pro",channelName:"Santhosh",logo:SanthoshImg,duration:"1920",views:"300K",date:"2 Months"},
{thumbnail:SuryaImg,title:"How to Ride a Boat at your Own",channelName:"Surya's LifeStyle",logo:SuryaImg,duration:"10:40",views:"105K",date:"12 Months"},
{thumbnail:BiriyaniImg,title:"Ever Tasted the Smoke Biriyani ?.let's Watch to Taste ",channelName:"Arivuketta ARAV",logo:BiriyaniImg,duration:"25:00",views:"742K",date:"1 Year"},
{thumbnail:VdosongImg,title:"Veilodu Vilayadi Ultra HD Video Song",channelName:"Tamil Thendral",logo:VdosongImg,duration:"6:03",views:"3M",date:"5 Years"},
]

return(
    <div className="Content">
<div className="tags">
{tags.map((tag,index)=><Button key={index}>{tag}</Button>)}
</div>
< div className='video__content'>
{videoData.map((data,index)=>{
return <Video key={index} thumbnail={data.thumbnail} title={data.title}logo={data.logo} duration={data.duration} views={data.views} date={data.date} channelName={data.channelName}/>
})}

</div>


    </div>
)
}



export default Content;