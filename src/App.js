
// import './App.css';
// import Home from './Pages/Home';
// import Purchese from './Pages/Purchese';
// import './Res.css';

// function App() {
//   return (
//     <div className="App">
//       {/* <Home/> */}
//       <Purchese/>
//     </div>
//   );
// }

// export default App;



import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Land from "./components/Land";
import Attack from "./Screens/Attack";

import { MetaMaskProvider } from "metamask-react";
import PurcheseUnit from "./Screens/PurcheseUnit";
import Purchese from "./Pages/Purchese";


import "./App.css";
import "./dihan.css";
import AddRemovePurchese from "./Screens/AddRemovePurchese";

function App() {
  return (
    <BrowserRouter>
      <MetaMaskProvider>
        <Layout>
          {/* <Land /> */}
          {/* <Attack /> */}

          {/* page route system here  */}
          <Routes>
            <Route path="/" element={<Land />} />
            {/* <Route path="/" element={<Land />} /> */}
            <Route path="attack" element={<Attack />} />
            <Route path="purcheseUnit" element={<Purchese />} />
            <Route path="addRemovePurchese" element={<AddRemovePurchese />} />
          </Routes>
        </Layout>
      </MetaMaskProvider>
    </BrowserRouter>
  );
}

export default App;
