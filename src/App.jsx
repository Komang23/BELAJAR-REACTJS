import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './component/sidebar/index';
import Home from './pages/home/index';

// Progaming Zaman Now
import HelloWord from './pages/ProgamingZamanNow/HelloWord';
import Props from './pages/ProgamingZamanNow/Props';
import NestedComponent from './pages/ProgamingZamanNow/NestedComponent';
import Conditional from './pages/ProgamingZamanNow/Conditional';

/* CSS TUTORIAL */
import Colors from './pages/CssTutorial/CssColors/Colors';
import BackgroundColor from './pages/CssTutorial/CssBackgrounds/BackgroundColor';
import BackgroundImage from './pages/CssTutorial/CssBackgrounds/BackgroundImage/index';


import Menu1 from './pages/menu1/index';
import Menu2 from './pages/menu2/index';

import './app.css'
import './app2.css'

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="content p-5">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Progaming Zaman Now */}
            <Route path="/menu1" element={<HelloWord />} />
            <Route path="/menu2" element={<Props />} />
            <Route path="/menu3" element={<NestedComponent />} />
            <Route path='/menu4' element={<Conditional/>} />


            {/* CSS TUTORIAL */}
            <Route path="/CssColors/Colors" element={<Colors />} />
            <Route path="/CssBackgroundColor" element={<BackgroundColor />} />
            <Route path='/CssBackgroundImage' element={<BackgroundImage /> } />


            <Route path="/menu1" element={<Menu1 />} />
            
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
