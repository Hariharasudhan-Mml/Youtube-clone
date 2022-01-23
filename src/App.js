import './App.css';
import Login from './pages/Login/Login'
import {auth,provider} from './firebase/firebase';
import { addUser } from './store/Actions';
import {useDispatch,useSelector} from 'react-redux';
import {store} from './index';
import Landing from './pages/Landing/Landing';
import { signInWithPopup} from 'firebase/auth'
import Header from './components/header/header';

function App() {
  console.log(store.getState())
  const user=useSelector(state=>state.user)
const dispatch=useDispatch();
const signin=()=>{
signInWithPopup(auth,provider).then(res=>{
  console.log(res);
dispatch(addUser(res.user));
  })
}
  return (
    <div className="App">
     { !user ?<Login />:<> <Header/> <Landing/> </> }
    
    </div>
  );
}

export default App;
