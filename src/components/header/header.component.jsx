import './header.component.css';
import logo from '../../assets/pngwing.com.png'

const Header = () => {
    return(
        <div className="header">
            <figure>
                <img className='logo' src={logo} alt="logo"/>
                <figcaption>To Do App</figcaption>
            </figure>
        </div>
    );
}

export default Header;