import './Header.css'

export const Header = () => {

    return (
        <header className="Header">
            <div className='header-container'>
                <h1 className="header-logo">logo</h1>

                    <nav className="navbar">
                        <a className="navbar-link" href="#">link1</a>
                        <a className="navbar-link" href="#">link2</a>
                        <a className="navbar-link" href="#">link3</a>
                    </nav>
            </div>
        </header>
    )
}