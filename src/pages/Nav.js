import { Info } from "lucide-react"
import "./nav.css"
import {Link} from 'react-router-dom'
const Nav=()=>
{
    return (
        <nav className="navbar">
        <div class="sanjeev">
         SPORTS EMPORIUM ⚽
         </div>
      <ul>

        <Link to='/home'>
          <li>Home</li>
        </Link>
      
        <Link to='/login'>
          <li>Login</li>
        </Link>
      
        <Link to='/register'>
          <li>SignUp</li>
        </Link>
        <Link to='/about'>
          <li>About</li>
        </Link>
      
        <Link to='/sidebar'>
          <li><Info/></li>
        </Link>
      </ul>
      
    </nav>

    )
}
export default Nav