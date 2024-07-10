import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Projects from './components/Project';
import Customers from './components/customer';
import Facilities from './components/Facilities';
import Home from './components/Home';
import Settings from './components/Setting';
import TeamMembers from './components/TeamMember';
import Profile from './components/Profile';
import Products from './components/Product';
import General from './components/General';
import HeatPumpCheck from './components/Heatpumpcheck';
import Integration from './components/Integration';
import Notification from './components/Notification';
import Rights from './components/Rights';
import Security from './components/Security';
import Spatiall from './components/Spatiall';
import Subscription from './components/Subscription';
import TechnFeasibilityanalysis from './components/Tech';

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Dashboard />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/customer" element={<Customers />} />
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/facility" element={<Facilities/>}/>
            <Route path="/setting" element={<Settings/>}/>
            <Route path="/team" element={<TeamMembers/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/product" element={<Products/>}/>
            <Route path="/general" element={<General/>}/>
            <Route path="heat" element={<HeatPumpCheck/>}/>
            <Route path="/integration" element={<Integration/>}/>
            <Route path="/notification" element={<Notification/>}/>
            <Route path="/rights" element={<Rights/>}/>
            <Route path="/security" element={<Security/>}/>
            <Route path="/space" element={<Spatiall/>}/>
            <Route path="/subscription" element={<Subscription/>}/>
            <Route path="/tech" element={<TechnFeasibilityanalysis/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
