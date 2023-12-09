// App.js

import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { HashRouter, Routes, Route } from 'react-router-dom';

const countryList = [
  { code: 'ae', name: 'United Arab Emirates' },
  { code: 'ar', name: 'Argentina' },
  { code: 'at', name: 'Austria' },
  { code: 'au', name: 'Australia' },
  { code: 'be', name: 'Belgium' },
  { code: 'bg', name: 'Bulgaria' },
  { code: 'br', name: 'Brazil' },
  { code: 'ca', name: 'Canada' },
  { code: 'ch', name: 'Switzerland' },
  { code: 'cn', name: 'China' },
  { code: 'co', name: 'Colombia' },
  { code: 'cu', name: 'Cuba' },
  { code: 'cz', name: 'Czech Republic' },
  { code: 'de', name: 'Germany' },
  { code: 'eg', name: 'Egypt' },
  { code: 'es', name: 'Spain' },
  { code: 'fr', name: 'France' },
  { code: 'gb', name: 'United Kingdom' },
  { code: 'gr', name: 'Greece' },
  { code: 'hk', name: 'Hong Kong' },
  { code: 'hu', name: 'Hungary' },
  { code: 'id', name: 'Indonesia' },
  { code: 'ie', name: 'Ireland' },
  { code: 'il', name: 'Israel' },
  { code: 'in', name: 'India' },
  { code: 'it', name: 'Italy' },
  { code: 'jp', name: 'Japan' },
  { code: 'kr', name: 'South Korea' },
  { code: 'lt', name: 'Lithuania' },
  { code: 'lv', name: 'Latvia' },
  { code: 'ma', name: 'Morocco' },
  { code: 'mx', name: 'Mexico' },
  { code: 'my', name: 'Malaysia' },
  { code: 'ng', name: 'Nigeria' },
  { code: 'nl', name: 'Netherlands' },
  { code: 'nz', name: 'New Zealand' },
  { code: 'ph', name: 'Philippines' },
  { code: 'pl', name: 'Poland' },
  { code: 'pt', name: 'Portugal' },
  { code: 'pr', name: 'Puerto Rico' },
  { code: 'ro', name: 'Romania' },
  { code: 'rs', name: 'Serbia' },
  { code: 'ru', name: 'Russia' },
  { code: 'sa', name: 'Saudi Arabia' },
  { code: 'se', name: 'Sweden' },
  { code: 'sg', name: 'Singapore' },
  { code: 'th', name: 'Thailand' },
  { code: 'tr', name: 'Turkey' },
  { code: 'tw', name: 'Taiwan' },
  { code: 'ua', name: 'Ukraine' },
  { code: 'us', name: 'United States' },
  { code: 've', name: 'Venezuela' },
  { code: 'za', name: 'South Africa' },
];

export default class App extends Component {
  pageSize = 10;
  apikey = '0bc16c5c3f3b4a65b46b4ab2eb228d6a';

  constructor() {
    super();
    this.state = {
      country: 'in',
      dropdownOpen: false,
    };
  }

  handleCountryChange = (c) => {
    this.setState({ country: c, dropdownOpen: false });
  };

  toggleDropdown = () => {
    this.setState((prevState) => ({ dropdownOpen: !prevState.dropdownOpen }));
  };


  render() {
    return (
      <div >
        <HashRouter>
          <Navbar />

          <h1 className='text-center fade-in my-2'>Welcome to the THE DAILY!</h1>

          <div className='container my-4 d-flex justify-content-center'>
            <p  style={{ fontSize: '20px' }}><strong>Choose a country :</strong></p>
            <div className={`dropdown ${this.state.dropdownOpen ? 'open' : ''} ms-2`}>
              <button
                className="btn btn-dark dropdown-toggle custom-dropdown-btn" 
                type="button"
                id="dropdownMenuButton"
                onClick={this.toggleDropdown}
              >
                {countryList.find((c) => c.code === this.state.country)?.name || 'Select Country'}
              </button>
              <div className={`dropdown-menu dropdown-menu-dark ${this.state.dropdownOpen ? 'show' : ''} dropdown-menu-right`} aria-labelledby="dropdownMenuButton">
                <div style={{ maxHeight: '250px', overflowY: 'scroll' }}>
                  {countryList.map((c) => (
                    <button
                      key={c.code}
                      className="dropdown-item"
                      onClick={() => this.handleCountryChange(c.code)}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>




          </div>

          <Routes>
            <Route path="/" element={<News key="general" pageSize={this.pageSize} apikey={this.apikey} country={this.state.country} category="general" title="News" />} />
            <Route path="/business" element={<News key="business" pageSize={this.pageSize} apikey={this.apikey} country={this.state.country} category="business" title="Business" />} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} apikey={this.apikey} country={this.state.country} category="Entertainment" title="Entertainment" />} />
            <Route path="/sports" element={<News key="sports" pageSize={this.pageSize} apikey={this.apikey} country={this.state.country} category="sports" title="Sports" />} />
            <Route path="/health" element={<News key="health" pageSize={this.pageSize} apikey={this.apikey} country={this.state.country} category="health" title="Health" />} />
            <Route path="/science" element={<News key="science" pageSize={this.pageSize} apikey={this.apikey} country={this.state.country} category="science" title="Science" />} />
            <Route path="/technology" element={<News key="technology" pageSize={this.pageSize} apikey={this.apikey} country={this.state.country} category="technology" title="Technology" />} />
          </Routes>



        </HashRouter>
      </div>
    );
  }
}

