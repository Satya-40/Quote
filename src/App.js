import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import React, { Suspense } from 'react';
import LoadingSpinner from './components/UI/LoadingSpinner';

const NewQuote = React.lazy(()=>import('./Pages/NewQuote'))
const AllQuotes = React.lazy(()=>import('./Pages/AllQuotes'))
const QuoteDetails = React.lazy(()=>import('./Pages/QuoteDetail'))
const NotFound = React.lazy(()=>import('./Pages/NotFound'))

function App() {
  return (
    <Layout>
        <Suspense fallback={<div className='centered'><LoadingSpinner/></div>}>      
      <Routes>

        <Route path="/" element={<Navigate to="/quotes" />} />
        <Route path="/quotes" element={<AllQuotes />} />
        <Route path="/quotes/:quoteId/*" element={<QuoteDetails />} />
        <Route path="/new-quote" element={<NewQuote />} />
        <Route path='*' element={<NotFound/>}/> 
   
      </Routes>     </Suspense>
    </Layout>
  );
}

export default App;
