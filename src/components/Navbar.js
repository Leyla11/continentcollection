import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="navbar">
        <ol>
            <li>
                <Link to="/">H O M E</Link>
            </li>
            <li>
                <Link  to="/continents">C O N T I N E N T S</Link>
            </li>
        </ol>
    </div>
  )
}

