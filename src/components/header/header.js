import { Menu } from "@material-ui/icons";
import { YouTube, Search, Mic,Apps,MoreVert} from "@material-ui/icons";
import { Button,Avatar  } from "@material-ui/core";
import { useSelector } from "react-redux"; 
import './header.css';

const Header = () => {
  const user=useSelector(state=>state.user);
  console.log(user.photoURL,user)
  return (
    <div className="header">
      <div className="header__left">
        <div className="menu__icon">
          <Menu />
        </div>
        <div className="header__logo">
          <YouTube />
          YouTube
        </div>
      </div>
      <div className="header__search">
        <input type="text" placeholder="search" />
        <Button className="search__button">
          {" "}
         <Search />
        </Button>

        <Mic className="mic__icon" />
      </div>
      <div className="header__right">
        <Apps/>
      <MoreVert/>
      <div className="user">
        <Avatar src={user.photoURL} alt="user_img"></Avatar>
        <div className="user__name">{user.displayName}</div>
      </div>

   
      </div>

    </div>
  )
};
export default Header;