import './Navbar.css'
export default function Navbar(){
    return(
        <nav className="navbar">
            <h1 className="logo">Aladdin</h1>
            <ul className="pages">
                <li>Products</li>
                <li>Users</li>
                <li>Orders</li>
                <li>Messages</li>
            </ul>
        </nav>
    )
}