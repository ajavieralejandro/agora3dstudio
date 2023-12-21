import LandPage from './Pages/LandPage/landPage';
import WebPages from './Pages/WebPages/webPages';
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer';
import Artists from './Pages/Artists/artists';
import { Route,Switch,HashRouter,Routes } from "react-router-dom";
import { Lan } from '@mui/icons-material';


const App = () => {
  return (
    <>

    
<HashRouter>
  <Routes>
  <Route exact path="/" Component={LandPage} />
  <Route exact path="/artists" Component={Artists} />
  <Route exact path="/webPages" Component={WebPages} />



  </Routes>

</HashRouter>
  </>

  );
};

export default App;