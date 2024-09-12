import './App.css';
import React, {  useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';
import Footer from './components/Footer';

const App = ()=> {
  
  const pageSize = 3;

  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  const[progress,setProgress] = useState(0);
  
    return (
      <div>
        <Router>
          <LoadingBar
            color='#007bff'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
            height={4}
          />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News setProgress = {setProgress} apiKey={apiKey}pageSize={pageSize} category="general" />} />
            <Route exact path="/entertainment" element={<News setProgress = {setProgress} apiKey={apiKey}pageSize={pageSize} category="entertainment" />} />
            <Route exact path="/sports" element={<News setProgress = {setProgress} apiKey={apiKey}pageSize={pageSize} category="sports" />} />
            <Route exact path="/health" element={<News setProgress = {setProgress} apiKey={apiKey}pageSize={pageSize} category="health" />} />
            <Route exact path="/science" element={<News setProgress = {setProgress} apiKey={apiKey}pageSize={pageSize} category="science" />} />
            <Route exact path="/business" element={<News setProgress = {setProgress} apiKey={apiKey}pageSize={pageSize}  category="business" />} />
            <Route exact path="/tech" element={<News setProgress = {setProgress} apiKey={apiKey}pageSize={pageSize} category="technology" />} />



            <Route exact path="/in" element={<News setProgress = {setProgress} apiKey={apiKey}pageSize={pageSize} country="in" countryName="india"/>} />
            <Route exact path="/au" element={<News setProgress = {setProgress} apiKey={apiKey}pageSize={pageSize} country="au" countryName="australia"/>} />
            <Route exact path="/us" element={<News setProgress = {setProgress} apiKey={apiKey}pageSize={pageSize} country="us" countryName="USA" />} />
            <Route exact path="/gb" element={<News setProgress = {setProgress} apiKey={apiKey}pageSize={pageSize} country="gb" countryName="UK" />} />

            <Route exact path="/search/:query" element={<News setProgress = {setProgress} apiKey={apiKey}pageSize={pageSize} />} />

            <Route exact path="/about" element={<About />}/>



          </Routes>
          <Footer/>
        </Router>
      </div>
    )
  
}

export default App;
