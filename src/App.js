import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Head from './Pages/Head/index'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
    <Analytics />
      <br />
      <Head />
    </>
  );
}

export default App;
