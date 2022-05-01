import { Route, Routes } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import HomePage from '../../features/home/HomePage';
import NavBar from '../../features/nav/NavBar';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Container className='main'>
        <NavBar> </NavBar>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/events' element={<EventDashboard />} />
          <Route path='/events/:id' element={<EventDetailedPage />} />
          <Route path='/createEvent' element={<EventForm />} />
          <Route path='/manage/:id' element={<EventForm />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
