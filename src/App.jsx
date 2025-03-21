import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Navbar from './components/NavBar';
import Home from './pages/HomePage';
import AddSongForm from './components/AddSongForm';
import SongList from './components/SongList';

const App = () => {
  const [songs, setSongs] = useState([]);

  const handleSongSubmit = (songData) => {
    setSongs((prevSongs) => [...prevSongs, songData]);
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/import-songs"
          element={<AddSongForm onSongSubmit={handleSongSubmit} />}
        />
        <Route path="/playlist" element={<SongList songs={songs} />} />
        <Route path="/" element={< Home/>} />
      </Routes>
    </div>
  );
};

export default App;