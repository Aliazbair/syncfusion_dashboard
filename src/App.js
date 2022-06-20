import { Routes, Route } from 'react-router-dom';
import { Ecommerce, Employees, Order } from './pages';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Ecommerce />} />
        <Route path='/order' element={<Order />} />
      </Routes>
    </div>
  )
};

export default App;
