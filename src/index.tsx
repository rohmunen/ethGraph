import * as ReactDOMClient from 'react-dom/client';
import Graph from "./components/Graph";


const root = ReactDOMClient.createRoot(document.getElementById("root"))
root.render(<Graph />)