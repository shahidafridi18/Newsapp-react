import './App.css';
import React, { useState } from 'react';
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

const App = () => {
  const pageSize = 10;
  const apikey = process.env.REACT_APP_API_KEY; // Access the API key from the environment variable

  const [country, setCountry] = useState('in');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleCountryChange = (c) => {
    setCountry(c);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <HashRouter>
        <Navbar />

        <h1 className='text-center fade-in my-2'>Welcome to THE DAILY!</h1>

        <div className='container my-4 d-flex justify-content-center'>
          <p style={{ fontSize: '20px' }}><strong>Choose a country:</strong></p>
          <div className={`dropdown ${dropdownOpen ? 'open' : ''} ms-2`}>
            <button
              className="btn btn-dark dropdown-toggle custom-dropdown-btn"
              type="button"
              id="dropdownMenuButton"
              onClick={toggleDropdown}
            >
              {countryList.find((c) => c.code === country)?.name || 'Select Country'}
            </button>
            <div className={`dropdown-menu dropdown-menu-dark ${dropdownOpen ? 'show' : ''} dropdown-menu-right`} aria-labelledby="dropdownMenuButton">
              <div style={{ maxHeight: '250px', overflowY: 'scroll' }}>
                {countryList.map((c) => (
                  <button
                    key={c.code}
                    className="dropdown-item"
                    onClick={() => handleCountryChange(c.code)}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<News key="general" pageSize={pageSize} apikey={apikey} country={country} category="general" title="News" />} />
          <Route path="/business" element={<News key="business" pageSize={pageSize} apikey={apikey} country={country} category="business" title="Business" />} />
          <Route path="/entertainment" element={<News key="entertainment" pageSize={pageSize} apikey={apikey} country={country} category="entertainment" title="Entertainment" />} />
          <Route path="/sports" element={<News key="sports" pageSize={pageSize} apikey={apikey} country={country} category="sports" title="Sports" />} />
          <Route path="/health" element={<News key="health" pageSize={pageSize} apikey={apikey} country={country} category="health" title="Health" />} />
          <Route path="/science" element={<News key="science" pageSize={pageSize} apikey={apikey} country={country} category="science" title="Science" />} />
          <Route path="/technology" element={<News key="technology" pageSize={pageSize} apikey={apikey} country={country} category="technology" title="Technology" />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
