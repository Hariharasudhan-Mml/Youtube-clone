import './SidebarOption.css';


const SidebarOption=({Icon,title})=>{
    return(
        <>
        {title == 'Music' ?(<> <hr/><h2 className="sidebar__heading">Best of YouTube</h2><hr/></> ) : null }

        <div className="SidebarOption">
            <Icon  />
            {title}

        </div>
        </>
    )
}


export default SidebarOption;