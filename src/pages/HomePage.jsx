import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900 px-6">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
        🎵 Welcome to the Song Playlist App 🎵
      </h1>
      <p className="text-lg text-center max-w-lg text-gray-700">
        This app allows you to create, manage, and export your own playlist with ease!
      </p>
      <ul className="text-lg mt-4 text-left list-disc list-inside text-gray-600">
        <li>✅ Add Songs – Create a list of your favorite songs.</li>
        <li>✅ Rearrange Songs – Move songs up or down to organize your playlist.</li>
        <li>✅ Delete Songs – Remove unwanted songs with a single click.</li>
        <li>✅ Export to PDF – Save your playlist as a well-formatted PDF.</li>
      </ul>
      <p className="text-lg mt-6 text-center max-w-lg font-semibold text-gray-600">
        🎸 Perfect for Musicians & Bands!  
        <br />
        Easily create and share setlists for gigs, rehearsals, or personal practice.
      </p>
      <button
        className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition"
      >
       Get started by adding songs! 🚀
      </button>
    </div>
  );
};

export default Home;