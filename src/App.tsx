import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UsersPage from './pages/UsersPage';
import AddUserPage from './pages/AddUserPage';
import { UserProvider } from './Context/UserContext';

function App() {
  return (
    <>
    <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UsersPage />} />
        <Route path='/add' element={<AddUserPage />} />
      </Routes>
    </BrowserRouter>
    </UserProvider>
    </>
  )
}

export default App;