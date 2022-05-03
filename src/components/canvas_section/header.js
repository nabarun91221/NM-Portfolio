
import "./header.css";
const Header = (props) => {
    return (
        <header className="header_container">
            {props.children}
        </header>
    )
}
export default Header;