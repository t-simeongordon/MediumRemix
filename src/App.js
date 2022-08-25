import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component'
import Content from './routes/mainContent/mainContent.component'
import Team from './routes/team/team.component'

import Navigation from './routes/navigation/navigation.component'
const App =()=> {

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home />} />
        <Route path='content' element={<Content />} />
        <Route  path='team' element={<Team />} />
      </Route>
    </Routes>
  )
}

export default App;
