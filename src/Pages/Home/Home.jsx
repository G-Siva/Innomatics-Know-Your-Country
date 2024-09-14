// Home.js
import React from 'react';
import './Home.css'; // Import the CSS file
import SearchBar from "../../components/searchbar/SearchBar";

const Home = () => {
  return (
    <div className='home-class'>
      <SearchBar />
    </div>
  );
}

export default Home;
