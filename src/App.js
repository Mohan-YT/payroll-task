import { Route, Routes } from 'react-router-dom';
import './App.css';
import Employee from './Employee';
import Menulist from './MenuList';
import Navigation from './Navbar';
import Addemp from './Addemp';
import { DataProvider } from './context/DataContext';
import Missing from './Missing';
import Editdata from './Editdata';

function App() {
  return (
    <DataProvider>
        <Navigation />

        <main className="app w-100 d-flex">
          <Routes>
            <Route path="/" element={ <><Menulist /><Employee /></> } />

            <Route path="/additem" element={<><Menulist /><Addemp /> </>} />
            <Route path="/empty/:slug" element={<><Menulist /><Missing /></>} />
            <Route path="/edit/:id" element={<><Menulist /><Editdata /></>} />
          </Routes>
        </main>
    </DataProvider>
  );
}

export default App;
