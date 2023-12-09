// App.js

import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { HashRouter, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  pageSize = 10;
  apikey = '4b2f2b633e5849d3aebabb70d9609041';

  




  render() {
    return (
      <div className="app-container">
        <HashRouter>
          <Navbar />

          <h1 className='text-center fade-in my-2'>Welcome to the THE DAILY!</h1>

          <Routes>
            <Route path="/" element={<News key="general" pageSize={this.pageSize} apikey={this.apikey} country="in" category="general" title="News" />} />
            <Route path="/business" element={<News key="business" pageSize={this.pageSize} apikey={this.apikey} country="in" category="business" title="Business" />} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} apikey={this.apikey} country="in" category="Entertainment" title="Entertainment" />} />
            <Route path="/sports" element={<News key="sports" pageSize={this.pageSize} apikey={this.apikey} country="in" category="sports" title="Sports" />} />
            <Route path="/health" element={<News key="health" pageSize={this.pageSize} apikey={this.apikey} country="in" category="health" title="Health" />} />
            <Route path="/science" element={<News key="science" pageSize={this.pageSize} apikey={this.apikey} country="in" category="science" title="Science" />} />
            <Route path="/technology" element={<News key="technology" pageSize={this.pageSize} apikey={this.apikey} country="in" category="technology" title="Technology" />} />
          </Routes>



        </HashRouter>
      </div>
    );
  }
}

