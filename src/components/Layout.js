
import {Link} from 'react-router-dom';


const LayOut = (props) => {

    console.log('Layout ==>' , props);
    return (
      <div>
        <header>
          <nav className="Navbar">
            <Link to="/">Home</Link >
            <Link to="/about">About</Link >
            <Link to="/contact">Contact</Link >
            <Link to="/posts">Posts</Link >
  
          </nav>
  
        </header>
  
  
        {props.children}
  
        <footer className="Footer"> Footer </footer>
  
      </div>
    )
  }
export default LayOut;  