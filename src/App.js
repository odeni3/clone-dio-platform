import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
//import { Feed } from "./pages/feed";

import { Home } from './pages/home'
//import { Login } from './pages/login'

function App() {
return (
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes >
    </Router>
);
}
  
export default App;