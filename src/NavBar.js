const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>The Yuval Blog</h1>
            <div className="links">
                <a href="/">home </a>
                <a href="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>New Blog</a>
            </div>
        </nav>
      );
}
 
export default NavBar;