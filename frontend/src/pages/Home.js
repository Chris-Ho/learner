import Navbar from '../components/Navbar/Navbar';
import Carousel from '../components/Carousel/Carousel';
import {BrowserRouter} from 'react-router-dom';

function Home() {
  return (
    <>
    <BrowserRouter>
        <Navbar/>
    </BrowserRouter>
    <Carousel/>
    </>
  );
}

export default Home;
