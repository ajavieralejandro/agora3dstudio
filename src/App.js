import LandPage from './Pages/LandPage/landPage';
import WebPages from './Pages/WebPages/webPages';
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer';
import Artists from './Pages/Artists/artists';
import { Route,Switch,HashRouter,Routes } from "react-router-dom";
import { Lan } from '@mui/icons-material';
import Academy from './Pages/LandPage/Accademy/academy';


const App = () => {
  return (
    <>

    
<HashRouter>
  <Routes>
  <Route exact name="Land" path="/" Component={LandPage} />
  <Route exact path="/Home" Component={LandPage} />

  <Route exact path="/artists" Component={Artists} />
  <Route exact path="/Webs" Component={WebPages} />
  <Route exact path="/Academy" Component={Academy} />



  </Routes>

</HashRouter>
  </>

  );
};

export default App;