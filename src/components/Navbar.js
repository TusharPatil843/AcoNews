import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const query = e.target.search.value; // Get the search input value
    if (query) {
      navigate(`/search/${encodeURIComponent(query)}`); // Navigate to the search route with the query parameter
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-light" style={{  }}>
      <div className="container-fluid">
        <a className="navbar-brand text-primary" href="/" style={{ fontWeight: 'bold', fontSize:'30px' }}>AcoNews</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mt-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a 
                className="nav-link text-primary dropdown dropdown-toggle" 
                href="/" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
                id="navbarDropdownCategories"
              >
                <span style={{fontWeight :'500'}}>Categories</span>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownCategories">
                <li><a className="dropdown-item" href="/">General</a></li>
                <li><a className="dropdown-item" href="/business">Business</a></li>
                <li><a className="dropdown-item" href="/entertainment">Entertainment</a></li>
                <li><a className="dropdown-item" href="/sports">Sports</a></li>
                <li><a className="dropdown-item" href="/science">Science</a></li>
                <li><a className="dropdown-item" href="/health">Health</a></li>
                <li><a className="dropdown-item" href="/tech">Technology</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a 
                className="nav-link text-primary dropdown dropdown-toggle" 
                href="/" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
                id="navbarDropdownCountries"
              >
                <span style={{fontWeight :'500'}}>Countries</span>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownCountries">
                <li><a className="dropdown-item" href="/in">India</a></li>
                <li><a className="dropdown-item" href="/au">Australia</a></li>
                <li><a className="dropdown-item" href="/us">United States</a></li>
                <li><a className="dropdown-item" href="/gb">United Kingdom</a></li>
              </ul>
            </li>

            <li className="nav-item active text-primary">
              <a className="nav-link text-primary" href="/about"><span className="sr-only">What's AcoNews</span></a>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Search" 
              aria-label="Search" 
              name='search'
              style={{ borderColor: '#007bff' }}
            />
            <button 
              className="btn btn-outline-primary" 
              type="submit"
              style={{  }}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;