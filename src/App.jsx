import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Toaster } from 'react-hot-toast';
import WayRoute from './Routes/routes';
function App() {

  return (
    <>
      <Toaster position='top-right'/>
      <WayRoute/>
    </>
  )
}

export default App
