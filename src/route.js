import React , {Component} from "react";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import './App.css'
class App extends Component {
    render(){
        return (
            <BrowserRouter> {/*ou bien <HashRouter> */}
                <div>
                    <ul> {/*les liens*/}
                        <li><Link className="link" to="/">Accueil</Link></li>
                        <li><Link className="link" to="/about">About</Link></li>
                        <li><Link className="link" to="/blog">Blog</Link></li>
                    </ul>
                    <div className="man-route-place">
                        <Routes> {/*les routs */}
                            <Route path="/" element={<Accueil />}></Route>
                            <Route path="/about" element={<About />}></Route>
                            <Route path="/blog" element={<Blog />}></Route>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
function Accueil(){
    return(
        <div>
            <h1>Accueil</h1>
        </div>
    )
}
function About(){
    return(
        <div>
            <h1>About</h1>
        </div>
    )
}
function Blog(){
    return(
        <div>
            <h1>Blog</h1>
        </div>
    )
}

export default App;