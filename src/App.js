import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import BlogDetails from './pages/BlogDetails';
import NotFound from "./pages/NotFound";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/create" element={<Create/>}/>
                        <Route path="/blogs/:id" element={<BlogDetails/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
