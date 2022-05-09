import { Route, Routes, useLocation } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import HomePage from '../../features/home/HomePage';
import NavBar from '../../features/nav/NavBar';
import Sandbox from '../../features/sandbox/Sandbox';
import ModalManager from '../common/modals/ModalManager';
import './App.css';

function App() {
  const { key } = useLocation();

  return (
    <div className='App'>
      <Container className='main'>
        <ModalManager />
        <NavBar> </NavBar>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/events' element={<EventDashboard />} />
          <Route path='/sandbox' element={<Sandbox />} />
          <Route path='/events/:id' element={<EventDetailedPage />} />
          <Route path='/createEvent' element={<EventForm key={key} />} />
          <Route path='/manage/:id' element={<EventForm key={key} />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
