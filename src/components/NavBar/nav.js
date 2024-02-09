import { Link } from 'react-router-dom';

export default function Nav(){
    return(
        <>
        <nav>
            <ul>
                <li><Link to="/accordion">Accordion App</Link></li>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
        </>
    )
}