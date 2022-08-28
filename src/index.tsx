import * as ReactDOMClient from 'react-dom/client';
import Graph from "./components/Graph";
import { Home } from './pages/Home';


const root = ReactDOMClient.createRoot(document.getElementById("root"))
root.render(<Home />)
