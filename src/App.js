//IMPORTS
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/content';
import Movies from './components/Movies';
import Read from './components/Read';

// App Function - Displaying compenents - using client side routing handling paths
function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/read" element={<Read /> } />
        <Route path="/create" element={<Header />} />
      </Routes>
    </Router>
  );
}

//export app 
export default App;