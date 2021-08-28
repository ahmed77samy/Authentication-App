import "./styles/header.scss"
import {Link} from "react-router-dom"
import AppComponent from "../../core/component/App.component";

class Header extends AppComponent {
    render() {
        return (
            <header>
                <div className='header__logo'>
                    <span>
                        <Link to="/">my logo</Link>
                    </span>
                </div>
                <nav className='header__navigation'>
                    <ul>
                        <li>
                            <Link to ="/">home</Link>
                        </li>
                        <li>
                            <Link to ="/login">login</Link>
                        </li>
                        <li>
                            <Link to ="/register">register</Link>
                        </li>
                        <li>
                            <Link to ="/user">user</Link>
                        </li>
                    </ul>
                </nav>
                <div className='header__tools'>
                    tools
                </div>
            </header>
        )
    }
}

export default Header