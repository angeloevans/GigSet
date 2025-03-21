# Song Playlist App 🎶

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react&logoColor=black) 
![jsPDF](https://img.shields.io/badge/jsPDF-v2.x-4B8BF5?style=flat-square&logo=jsPDF&logoColor=white) 
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v2.x-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white) 
![Local Storage](https://img.shields.io/badge/Local%20Storage-YES-yellow?style=flat-square)


Welcome to the **Song Playlist App!** 
<br>
This app allows musicians and bands to create, manage, and export their personalized playlists. 
<br>
The app allows users to add songs, reorder them, delete them, and export the entire playlist to a **PDF**. 
<br>
It uses `Local Storage` to persist data and ensures that your playlist is saved even when you refresh the page.

---

## Features

- Add new songs to the playlist
- Set song durations in `MM:SS` or `HH:MM` format
- Move songs `up (↑)` or `down (↓)` in the list
- **Delete** songs from the playlist
- Export your playlist to a **PDF** document
- Uses `Local Storage` to persist song data across sessions

---

## Tech Stack 

- **React** - JavaScript library for building user interfaces.
- **Local Storage** - For persistent data storage, even after refreshing the page.
- **jsPDF** - For exporting the playlist to a styled PDF document.
- **Tailwind CSS** - Utility-first CSS framework to style the application.

---

## Installation 💻 

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/song-playlist-app.git
2. Install dependencies:
    ```bash
    cd song-playlist-app
    npm install
3. Start the app:
    ```bash
    npm run dev
4. Open your browser and go to http://localhost:5173

## How it Works

1. **Add a New Song:**
   - You can add songs to your playlist by entering the song title and duration <br>(in `MM:SS` or `HH:MM` format). 
   - The form ensures that **both** fields are filled and that the duration follows the correct time format before submission.

2. **Manage Your Playlist:**
   - The playlist is stored locally in your browser's storage. You can view, reorder, and delete songs.
   - Move songs `up (↑)` or `down (↓)` in the list, or remove it entirely by clicking the delete button.

3. **Export Playlist:**
   - After adding songs, you can export your playlist to a **PDF** with the click of a button.
   - The **PDF** will contain the song list along with their durations, and the total duration of all songs in the playlist.

4. **Persistent Storage:**
   - The playlist is saved in your browser's `local storage`, ensuring that your data persists even if you refresh the page or reopen the app.

### Acknowledgments 💡

- Thanks to [jsPDF](https://github.com/parallax/jsPDF) for the PDF export functionality.
- Thanks to [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework.
- Special thanks to the open-source community for their contributions!

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.