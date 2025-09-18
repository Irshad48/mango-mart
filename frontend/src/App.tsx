import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Authentication/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
  <Route path="/Authentication/login" element={<Login />} />
        {/* Add more routes here as needed */}
        <Route path="*" element={
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <h1>Welcome to Mango Mart</h1>
            <p>Go to <a href="/Authentication/login">Login</a></p>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
