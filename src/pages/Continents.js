import { Link } from "react-router-dom"

const Continents = () => {
  return (
    <div>
        <div className="continentes">
            <Link to="/america">A M E R I C A</Link>
            <Link to="/europe">E U R O P E</Link>
            <Link to="/oceania">O C E A N I A</Link>
            <Link to="/asia">A S I A</Link>
            <Link to="/afric">A F R I C A</Link>
        </div>
        
    </div>
  )
}

export default Continents