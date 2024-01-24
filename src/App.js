import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
  
import { Feed } from "./pages/feed";
import { Home } from './pages/home'
import GlobalStyles from "./globalStyles";
import { Login } from './pages/login'

function App() {
    return (
      <Router>
       <GlobalStyles />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
       </Routes >
      </Router>
    );
  }
  
  export default App;