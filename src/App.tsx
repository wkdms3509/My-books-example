import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Add from './pages/Add';
import DetailPage from './pages/DetailPage'; 
import Edit from './pages/Edit';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Signin from './pages/Signin';
import Error from './pages/Error';

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/add" element={<Add />} />
          <Route path="/book/:id" element={<DetailPage />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App;
