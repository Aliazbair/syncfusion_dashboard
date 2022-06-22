import { Routes, Route } from 'react-router-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';
import {
  Area,
  Bar,
  Calendar,
  ColorMapping,
  ColorPicker,
  Customers,
  Ecommerce,
  Editor,
  Employees,
  Financial,
  Kanban,
  Line,
  Order,
  Pie,
  Pyramid,
  Stacked,
} from './pages';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import './App.css';

import { useSatateContext } from './contexts/ContentProvider';

const App = () => {
  const { activeMenu } = useSatateContext();

  return (
    <div className=''>
      <div className='flex relative dark:bg-main-dark-bg'>
        {/* TooltipComponent */}
        <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
          <TooltipComponent content='Setting' position='Top'>
            <button
              style={{ background: 'blue', borderRadius: '50%' }}
              className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {/* MENU and slider */}
        {activeMenu ? (
          <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
            <Sidebar />
          </div>
        ) : (
          <div className='w-0 dark:bg-secondary-dark-bg'>
            <Sidebar />
          </div>
        )}
        {/* navbar */}
        <div
          className={`dark:bg-main-bg bg-main-bg min-h-screen w-full  ${
            activeMenu ? 'md:ml-72' : 'flex-2'
          }`}
        >
          <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full '>
            <Navbar />
          </div>
        </div>
        {/* Routes app */}
        <div>
          <Routes>
            {/* dashboard */}
            <Route path='/' element={<Ecommerce />} />
            <Route path='/ecommerec' element='ecommerec' />

            {/* Pages */}
            <Route path='/order' element={<Order />} />
            <Route path='/employees' element={<Employees />} />
            <Route path='/customers' element={<Customers />} />

            {/* Apps */}
            <Route path='/kanban' element={<Kanban />} />
            <Route path='/editor' element={<Editor />} />
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/color-picker' element={<ColorPicker />} />

            {/* Charts */}
            <Route path='/line' element={<Line />} />
            <Route path='/area' element={<Area />} />
            <Route path='/bar' element={<Bar />} />
            <Route path='/pie' element={<Pie />} />
            <Route path='/financial' element={<Financial />} />
            <Route path='/color-mapping' element={<ColorMapping />} />
            <Route path='/pyramid' element={<Pyramid />} />
            <Route path='/stacked' element={<Stacked />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
