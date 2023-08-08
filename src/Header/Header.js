import './Header.css';
export default function Header() {
    return (
        <header>
            <div class="navbar-container">
                <div class="container d-flex justify-content-between align-items-center">
                    <h2 class="logo">Next1Code</h2>
                    <Nav />
                </div>
            </div>
            <h1 class="hero-title">I am Milad Bahrami</h1>
            <p class="hero-desc">Hello, world!</p>
        </header>
    );
}

function Nav() {
    return (
        <nav class="navbar">
            <ul class="d-flex">
                <li><a class="nav-link" href="#hero">Home</a></li>
                <li><a class="nav-link" href="#about">About</a></li>
                <li><a class="nav-link" href="#services">Services</a></li>
                <li><a class="nav-link" href="#blog">Blog</a></li>
            </ul>
        </nav>
    );
}