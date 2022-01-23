import {Button} from '@material-ui/core'
import {YouTube} from '@material-ui/icons';
import  {useSelector, useDispatch} from 'react-redux';
import { signInWithPopup } from 'firebase/auth';
import {auth,provider} from '../../firebase/firebase';
import { addUser}  from '../../store/Actions'
  import './Login.css';



const Login=()=>{
const dispatch=useDispatch();
  

const sigin=()=>{
    signInWithPopup(auth,provider).then(res=>{
        console.log(res.user);
        dispatch(addUser(res.user))
    })
}
    return(
        <div className='login'>

<h1><YouTube size="large" />Youtube</h1>
<p>Learn,Teach,Have some Fun ,Get Paid</p>
<Button variant="contained" color="primary" >Sign Up</Button>
<Button  variant="contained" color="secondary" onClick={sigin}>Login with Google</Button>
        </div>
    )
}


export default Login;