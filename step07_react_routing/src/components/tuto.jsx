/*
import { BrowserRouter as Router, Route , Routes , Link } from "react-router-dom";

function Home() {
    return <h2>Home Page</h2>;
}

function About() {
    return <h2>About Page</h2>
}

function RouterApp() {
    return (
        <Router>
            <nav>
                <Link to="/">Home2</Link><br/>
                <Link to="/about">About2</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>

    );
}
export default RouterApp;
*/
/*
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

function Home() {
    return <h2>Home Page</h2>;
}

function About() {
    return <h2>About Page</h2>;
}

function Contact() {
    return <h2>Contact Page</h2>;
}

function RouterApp() {
    return (
        <Router>
            <nav>
                <NavLink to="/" end style={({isActive}) => ({color : isActive? 'red' :'black'})}>Home</NavLink>
                <NavLink to="/about" end style={({isActive}) => ({color:isActive? 'red' : 'black'})}>About</NavLink>
                <NavLink to="/contact" end style={({isActive}) => ({color:isActive? 'red' : 'black'})}>Contact</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>          
        </Router>

    );
}

export default RouterApp;
*/



/*
import { BrowserRouter as Router , Routes , Route , Links, useParams, Link } from "react-router-dom";

function UserProfile() {
    const {username} = useParams();

    return <h2>Welcome , {username}!</h2>

}

function RouterApp() {
    return (
        <Router>
            <ul>
                <li><Link to="/user/johndoe">John's Profile</Link></li>
                <li><Link to="user/janedoe">Jane's Profile</Link></li>
            </ul>
            <Routes>
                <Route path="/user/:username" element={<UserProfile />}/>
            </Routes>
        </Router>

    );

}

export default RouterApp;
*/


/*
import {BrowserRouter as Router , Route , Link , Routes } from "react-router-dom";

function ProductDetail() {
    
    const {category , productId} = useParams();

    return (
        <div>
            <h2>Category : {category}</h2>
            <h2>ProductId : {productId}</h2>
        </div>
    );

}

function RouterApp() {

    return (
        <Router>
            <h3><Link to="/products/ele/1">Electronic Product 1</Link></h3>
            <h3><Link to="products/book/2">Book Product 2</Link></h3>
            <Routes>
                <Route path="/products/:category/:productId" element={<ProductDetail />} />
            </Routes>
        </Router>
    );

}

export default RouterApp;
*/

/*
// 예시5
import { useState } from "react";
import { BrowserRouter as Router , Routes , Route, useNavigate, useParams } from "react-router-dom";

function LoginPage() {

    const [username , setUsername] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username) {
            navigate(`/user/${username}`);
        }
    }

    return (
        <div>
            <input type="text" placeholder="Enter username" 
            value={username} onChange={(e) => setUsername(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>
        </div>
    );

}

function UserProfile() {
    const {username} = useParams();
    return <h2>Welcome , {username}</h2>
}

function RouterApp() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/user/:username" element={<UserProfile/>} />
            </Routes>
        </Router>
    );
}
export default RouterApp;
*/

/*
import { BrowserRouter as Router , Routes , Route , Link , useSearchParams } from "react-router-dom";
function SearchPage() {
    const[searchParams] = useSearchParams();
    const query  = searchParams.get("query");

    return <h2>Search Result for : {query}</h2>

}

function RouterApp() {
    return (
        <Router>
            <nav>
                <Link to="/search?query=react">Search for "react"</Link>
                <Link to="/search?query=router">Search for "router"</Link>
            </nav>
            <Routes>
                <Route path="/search" element={<SearchPage />} />
            </Routes>
        </Router>
    );
}
export default RouterApp;
*/

{/*
import { BrowserRouter as Router , Routes , Route , Link , Outlet } from "react-router-dom";
function ProductPage() {
    return (
        <div>
            <h2>Product Page</h2>
            <nav>
                <Link to="details">Details</Link>
                <Link to="reviews">Reviews</Link>
            </nav>
            <h1>여기 아래로 옴</h1>
            <div>
                아울렛가자
            <Outlet />
            </div>
            
        </div>
    );
}

function ProductDetail() {
    return <p>Details</p>;
}

function ProductReviews() {
    return <p>Reviews</p>;
}

function RouterApp() {
    return (
        <Router>
            <Routes>
                <Route path="/product" element={<ProductPage/>} >
                    <Route path="details" element={<ProductDetail />}/>
                    <Route path="reviews" element={<ProductReviews />} />
                </Route>
            </Routes>
        </Router>
    );
}
export default RouterApp;
*/}

{/*
    
import { BrowserRouter as Router , Routes, Route, Link , Outlet } from "react-router-dom";
function Home() {
    return <h2>Home Page</h2>
}

function NotFound() {
    return <h2>404 Page Not Found</h2>
}

function RouterApp() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/unknown">Unkown Page</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </Router>
    );
}
export default RouterApp;
*/}