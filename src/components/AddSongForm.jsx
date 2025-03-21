import React, { useState } from 'react';

const AddSongForm = ({ onSongSubmit }) => {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [error, setError] = useState('');  // To store any error messages

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset previous error message
    setError('');

    // Check if title or time is empty
    if (!title || !time) {
      setError('Both title and duration are required!');
      return;
    }

    // Regular expression to validate time format (MM:SS or HH:MM)
    const timeRegex = /^(\d{1,2}):(\d{2})$/; // Matches MM:SS format
    const timeMatch = time.match(timeRegex);

    // Check if time is in a valid format
    if (!timeMatch) {
      setError('Please enter a valid duration in MM:SS or HH:MM format!');
      return;
    }

    // Convert time to minutes
    const timeParts = time.split(':');
    let totalMinutes = parseInt(timeParts[0], 10);
    if (timeParts.length === 2) {
      totalMinutes += parseInt(timeParts[1], 10) / 60;
    }

    // Create the song object
    const songData = {
      title,
      time: totalMinutes,
    };

    // Get existing songs from localStorage or an empty array if not present
    const existingSongs = JSON.parse(localStorage.getItem('songs')) || [];

    // Add the new song to the list
    existingSongs.push(songData);

    // Save the updated list of songs back to localStorage
    localStorage.setItem('songs', JSON.stringify(existingSongs));

    // Pass the data to the parent component (optional, if you need it)
    onSongSubmit(songData);

    // Reset form after submission
    setTitle('');
    setTime('');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">Add New Song</h3>
      
      <form onSubmit={handleSubmit}>
        {/* Song Title Input */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Song Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // Ensure state is updated
            placeholder="Enter song title..."
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Duration Input */}
        <div className="mb-4">
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">Duration (MM:SS or HH:MM)</label>
          <input
            type="text"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)} // Ensure state is updated
            placeholder="Enter duration..."
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 mt-6 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Add Song
        </button>
      </form>
    </div>
  );
};

export default AddSongForm;
