import { useState } from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  // Mock login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("KASH");
  const [registering, setRegistering] = useState(false);
  const [newName, setNewName] = useState("");
  
  return (
    <> 
    <header>
      {/* Brand image here */}
      {/*<img src= "https://via.placeholder.com/150" alt="Brand Logo" style={{ height: '50px', margin: '1em' }} /> */}
      <img src= {logo} alt="logo" style={{ height: '50px', width:'50px' ,  margin: '1em' }} />

      <nav className="navstyle">
        {/* this is the header ^ should include the brand image (logo) and the login section*/}
        {/* <Link to="/Ecom" style={{ marginRight: 'irem' }}>Ecom </Link>
        <Link to="/Feature" style={{ marginRight: 'lrem' }}>Feature </Link> */}
        <Link to="/resume-react/">Home</Link>
        <Link to="/resume-react/Ecom"> Ecom </Link>
        <Link to="/resume-react/Feature"> Feature </Link>
        <Link to="/resume-react/Resume"> Resume </Link>
      </nav>

      <div className="loging" >
        {/* Mock login/logout toggle */}
        {isLoggedIn ? (
            <span
              style={{ float: 'right', marginRight: '1em', cursor: 'pointer', color: 'black'}}
              onClick={() => setIsLoggedIn(false)}
            >
              <span> Welcome {name} </span> &nbsp;
              Logout
            </span>
          ) : (
            <>
              <span style={{ float: 'right', marginRight: '1em', cursor: 'pointer', color: 'black' }}
                onClick={() => setIsLoggedIn(true)}
              >
                Login
              </span>
              <span style={{ float: 'right', marginRight: '1em', color: 'black' }}>
                Register
              </span>
              {registering && (
                <div style={{ marginTop: '1em', width: '100%', color: 'black'}}>
                  <input
                    type="text"
                    value={newName}
                    placeholder="Enter your name"
                    onChange={(e) => setNewName(e.target.value)}
                  />
                  <button
                    style={{ marginLeft: '0.5em' }}
                    onClick={() => {
                      if (newName.trim() !== "") {
                        setName(newName.trim());
                        setRegistering(false);
                        setNewName("");
                      }
                    }}
                  >
                    Submit
                  </button>
                </div>
              )}
            </>
          )}
      </div>        
    </header>
    </>
    );
}
export default Header;