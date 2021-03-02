
import './assets/css/App.css';
import {Header} from "./components/Header";
import {Balance} from "./components/Balance";
import {IngresosEgresos} from "./components/IngresosEgresos";
import Transactions from "./components/Transactions";
import AgregarTransaccion from "./components/AgregarTransaccion";

import {GlobalProvider}  from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
    <Header/>
    <div className='container'>
      <Balance/>
      <IngresosEgresos/>
      <Transactions/>
      <AgregarTransaccion/>
    </div>
    </GlobalProvider>
  );
}

export default App;
