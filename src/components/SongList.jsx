import React, { useState, useEffect } from 'react';
import { jsPDF } from "jspdf";

const SongList = () => {
  // Load songs from localStorage initially or default to an empty array if no songs exist
  const [songList, setSongList] = useState(() => {
    const savedSongs = localStorage.getItem('songs');
    return savedSongs ? JSON.parse(savedSongs) : [];
  });

  // Update localStorage whenever the song list changes
  useEffect(() => {
    localStorage.setItem('songs', JSON.stringify(songList));
  }, [songList]);

  const totalDuration = songList.reduce((acc, song) => acc + song.time, 0);

  const moveSongUp = (index) => {
    if (index > 0) {
      const newSongs = [...songList];
      const temp = newSongs[index];
      newSongs[index] = newSongs[index - 1];
      newSongs[index - 1] = temp;
      setSongList(newSongs);
    }
  };

  const moveSongDown = (index) => {
    if (index < songList.length - 1) {
      const newSongs = [...songList];
      const temp = newSongs[index];
      newSongs[index] = newSongs[index + 1];
      newSongs[index + 1] = temp;
      setSongList(newSongs);
    }
  };

  const deleteSong = (index) => {
    const updatedSongs = songList.filter((_, songIndex) => songIndex !== index);
    setSongList(updatedSongs);
  };

  const exportToPDF = () => {
    const doc = new jsPDF();

    // Title Styling
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("Playlist", 14, 20);

    // Table Header Styling
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(255, 255, 255); // White text
    doc.setFillColor(0, 123, 255); // Blue background for headers
    doc.rect(14, 30, 180, 10, 'F'); // Fill rectangle (header background)
    doc.text("No", 14, 36); // Numbering column header
    doc.text("Song Title", 24, 36); // Song title column header
    doc.text("Duration", 120, 36); // Duration column header

    // Table Content Styling
    let yOffset = 50; // Y position for the first song
    doc.setFont("helvetica", "normal");
    doc.setTextColor(0, 0, 0); // Black text for content

    songList.forEach((song, index) => {
      // Number column
      doc.text((index + 1).toString(), 14, yOffset);

      // Song Title column
      doc.text(song.title, 24, yOffset);

      // Duration column
      doc.text(formatTime(song.time), 120, yOffset);

      yOffset += 10; // Move down for the next song
    });

    // Total Duration Styling
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0); // Black text for total row
    doc.text("Total Duration", 14, yOffset);
    doc.text(formatTime(totalDuration), 120, yOffset);

    // Save the PDF
    doc.save('playlist.pdf');
  };

  return (
    <div className="mt-8 max-w-3xl mx-auto px-4">
      <h3 className="text-3xl font-extrabold text-center text-gray-800 mb-4">Play List</h3>
      {songList.length === 0 ? (
        <p className="text-xl text-center text-red-500">No songs added yet!</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="min-w-full bg-white table-auto text-center">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-3 px-6 text-left font-semibold">Song Title</th>
                <th className="py-3 px-6 text-center font-semibold">Duration</th>
                <th className="py-3 px-6 text-center font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {songList.map((song, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-all duration-300">
                  <td className="py-3 px-6 text-left text-gray-800">{song.title}</td>
                  <td className="py-3 px-6 text-center text-gray-600">{formatTime(song.time)}</td>
                  <td className="py-3 px-6 text-center">
                    <button
                      onClick={() => moveSongUp(index)}
                      className="px-4 py-1 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 mr-2"
                      disabled={index === 0} // Disable "Up" button if the song is already at the top
                    >
                      ↑
                    </button>
                    <button
                      onClick={() => moveSongDown(index)}
                      className="px-4 py-1 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 mr-2"
                      disabled={index === songList.length - 1} // Disable "Down" button if the song is already at the bottom
                    >
                      ↓
                    </button>
                    <button
                      onClick={() => deleteSong(index)} // Delete button
                      className="px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                      ✖
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-100 font-semibold">
                <td className="py-3 px-6 text-left">Total Duration</td>
                <td className="py-3 px-6 text-center text-gray-800">{formatTime(totalDuration)}</td>
                <td className="py-3 px-6 text-center"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}

      {/* Export Button */}
      <div className="mt-4 text-center">
        <button
          onClick={exportToPDF}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Export to PDF
        </button>
      </div>
    </div>
  );
};

const formatTime = (timeInMinutes) => {
  const minutes = Math.floor(timeInMinutes);
  const seconds = Math.round((timeInMinutes - minutes) * 60);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '00')}`;
};

export default SongList;
