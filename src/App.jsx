import { useEffect, useRef, useState } from 'react';
import './App.scss';
import MapView from './components/Map';

function App() {
  const mapRef = useRef();

  useEffect(() => {
    mapRef?.current.highlightCountry('LK');
  }, []);

  return (
    <div className="main-container">
      <nav className="top-nav-bar"></nav>
      <div className="map-view-container">
        <MapView ref={mapRef} />
      </div>
      <div className="footer-bar"></div>
    </div>
  );
}

export default App;
