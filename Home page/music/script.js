// Song data for Three Man Down
const songs = [
    {
        id: 1,
        title: "เพลงรัก",
        album: "Three Man Down",
        year: 2024,
        duration: "4:35",
        thumbnail: "./photomusic/luk.jpg",
        audio: "./song/เพลงรัก.mp3" // Placeholder URL
    },
    {
        id: 2,
        title: "ไม่ให้ไป",
        album: "Three Man Down",
        year: 2024,
        duration: "4:07",
        thumbnail: "./photomusic/maihaipai.jpg",
        audio: "./song/ไม่ให้ไป.mp3"
    },
    {
        id: 3,
        title: "ขอโทษที่ติดต่อไป",
        album: "Three Man Down Feat. NAP the NAP",
        year: 2025,
        duration: "5:13",
        thumbnail: "./photomusic/napthenap.jpg",
        audio: "./song/ขอโทษที่ติดต่อไป.mp3"
    },
    {
        id: 4,
        title: "ขอโทษที่ติดต่อไป",
        album: "Three Man Down feat. INK WARUNTORN",
        year: 2025,
        duration: "4:32",
        thumbnail: "./photomusic/ink.jpg",
        audio: "./song/ขอโทษที่ติดต่อไปink.mp3"
    },
    {
        id: 5,
        title: "ปล่อยให้เวลา",
        album: "28",
        year: 2023,
        duration: "2:49",
        thumbnail: "./photomusic/poihai.jpg",
        audio: "./song/ปล่อยให้เวลา.mp3"
    },
    {
        id: 6,
        title: "คนใหม่",
        album: "28",
        year: 2023,
        duration: "3:48",
        thumbnail: "./photomusic/some.jpg",
        audio: "./song/คนใหม่.mp3"
    },
    {
        id: 7,
        title: "เปิดตัวเขา (Rebound)",
        album: "28",
        year: 2023,
        duration: "3:56",
        thumbnail: "./photomusic/openfan.jpg",
        audio: "./song/เปิดตัวเขา.mp3"
    },
    {
        id: 8,
        title: "วันเกิดฉันปีนี้",
        album: "JOOX 100x100 SEASON 3",
        year: 2021,
        duration: "3:59",
        thumbnail: "./photomusic/hbd.jpg",
        audio: "./song/วันเกิดฉันปีนี้.mp3"
    },
    {
        id: 9,
        title: "ไปเถอะเธอ",
        album: "Three Man Down",
        year: 2019,
        duration: "4:23",
        thumbnail: "./photomusic/pailoi.jpg",
        audio: "./song/ไปเถอะเธอ.mp3"
    },
    {
        id: 10,
        title: "ฝันถึงแฟนเก่า",
        album: "Three Man Down",
        year: 2020,
        duration: "4:39",
        thumbnail: "./photomusic/fun.jpg",
        audio: "./song/ฝันถึงแฟนเก่า.mp3"
    },
    {
        id: 11,
        title: "ถ้าเธอรักฉันจริง",
        album: "Three Man Down",
        year: 2020,
        duration: "3:59",
        thumbnail: "./photomusic/lukchan.jpg",
        audio: "./song/ถ้าเธอรักฉันจริง.mp3"
    },
    {
        id: 12,
        title: "น้อง",
        album: "28",
        year: 2022,
        duration: "4:13",
        thumbnail: "./photomusic/nok.jpg",
        audio: "./song/น้อง.mp3"
    },
    {
        id: 13,
        title: "ข้างกัน",
        album: "Three Man Down",
        year: 2017,
        duration: "4:56",
        thumbnail: "./photomusic/kargun.jpg",
        audio: "./song/ข้างกัน.mp3"
    },
    {
        id: 14,
        title: "Time Zone",
        album: "Three Man Down",
        year: 2021,
        duration: "4:38",
        thumbnail: "./photomusic/timezone.jpg",
        audio: "./song/Time Zone.mp3"
    },
    {
        id: 15,
        title: "Friend Zone",
        album: "Three Man Down",
        year: 2021,
        duration: "3:53",
        thumbnail: "./photomusic/friendzone.jpg",
        audio: "./song/Friend Zone.mp3"
    },
    {
        id: 16,
        title: "ฝนตกไหม",
        album: "Three Man Down",
        year: 2019,
        duration: "4:28",
        thumbnail: "./photomusic/fon.jpg",
        audio: "./song/ฝนตกไหม.mp3"
    },
    {
        id: 17,
        title: "ไม่อยากให้เธอไม่สบาย (You)",
        album: "Three Man Down",
        year: 2023,
        duration: "5:36",
        thumbnail: "./photomusic/you.jpg",
        audio: "./song/ไม่อยากให้เธอไม่สบาย.mp3"
    },
    {
        id: 18,
        title: "เมา",
        album: "28",
        year: 2023,
        duration: "3:03",
        thumbnail: "./photomusic/drunk.jpg",
        audio: "./song/เมา.mp3"
    },
    {
        id: 19,
        title: "คนเศร้า2019",
        album: "Three Man Down",
        year: 2019,
        duration: "2:32",
        thumbnail: "./photomusic/2019.jpg",
        audio: "./song/คนเศร้า2019.mp3"
    },
    {
        id: 20,
        title: "ความรักทำให้คนตาบอด",
        album: "ซนซน 40 ปี GMM GRAMMY",
        year: 2023,
        duration: "4:26",
        thumbnail: "./photomusic/40gmm.jpg",
        audio: "./song/ความรักทำให้คนตาบอด.mp3"
    }
];

// DOM Elements
const songContainer = document.getElementById('song-container');
const playlistContainer = document.getElementById('playlist-container');
const bandInfoContainer = document.getElementById('band-info-container');
const playlistTable = document.getElementById('playlist-table').querySelector('tbody');
const filterContainer = document.getElementById('filter-container');
const albumFilter = document.getElementById('album-filter');
const yearFilter = document.getElementById('year-filter');
const sortFilter = document.getElementById('sort-filter');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const audioPlayer = document.getElementById('audio-player');
const currentSongElement = document.getElementById('current-song');
const currentAlbumElement = document.getElementById('current-album');
const currentThumbnail = document.getElementById('current-thumbnail');
const progressBar = document.getElementById('progress-bar');
const progressContainer = document.getElementById('progress-container');
const playButton = document.getElementById('play-btn');
const playIcon = document.getElementById('play-icon');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const currentTimeElement = document.getElementById('current-time');
const durationElement = document.getElementById('duration');
const volumeSlider = document.getElementById('volume-slider');
const volumeIcon = document.getElementById('volume-icon');
const loadingSpinner = document.getElementById('loading-spinner');
const navLinks = document.querySelectorAll('.nav-link');

// App State
let currentSongIndex = -1;
let isPlaying = false;
let filteredSongs = [...songs];

// Initialize App
function initApp() {
    // Generate Album Options
    const albums = [...new Set(songs.map(song => song.album))];
    albums.forEach(album => {
        const option = document.createElement('option');
        option.value = album;
        option.textContent = album;
        albumFilter.appendChild(option);
    });
    
    // Generate Year Options
    const years = [...new Set(songs.map(song => song.year))].sort((a, b) => b - a);
    years.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
    });
    
    // Initial Render
    renderSongs(songs);
    renderPlaylist(songs);
    
    // Set Event Listeners
    setupEventListeners();
    
    // Hide loading spinner
    loadingSpinner.classList.remove('active');
}

// Render Songs in Grid View
function renderSongs(songsArray) {
    songContainer.innerHTML = '';
    
    songsArray.forEach((song, index) => {
        const songElement = document.createElement('div');
        songElement.className = 'song';
        songElement.dataset.index = index;
        
        songElement.innerHTML = `
            <div class="thumbnail-container">
                <img src="${song.thumbnail}" alt="${song.title}" class="thumbnail">
                <div class="play-overlay">
                    <i class="fas fa-play"></i>
                </div>
            </div>
            <h2>${song.title}</h2>
            <p>${song.album} • ${song.year}</p>
            <p>${song.duration}</p>
        `;
        
        songElement.addEventListener('click', () => {
            playSong(index);
        });
        
        songContainer.appendChild(songElement);
    });
}

// Render Playlist View
function renderPlaylist(songsArray) {
    playlistTable.innerHTML = '';
    
    songsArray.forEach((song, index) => {
        const row = document.createElement('tr');
        row.dataset.index = index;
        
        row.innerHTML = `
            <td><button class="play-btn"><i class="fas fa-play"></i></button></td>
            <td>${song.title}</td>
            <td>${song.album}</td>
            <td>${song.year}</td>
            <td>${song.duration}</td>
        `;
        
        row.addEventListener('click', () => {
            playSong(index);
        });
        
        playlistTable.appendChild(row);
    });
}

// Play a song
function playSong(index) {
    if (index >= 0 && index < filteredSongs.length) {
        currentSongIndex = index;
        const song = filteredSongs[index];
        
        // Update UI
        currentSongElement.textContent = song.title;
        currentAlbumElement.textContent = song.album;
        currentThumbnail.src = song.thumbnail;
        
        // Set audio source
        audioPlayer.src = song.audio;
        audioPlayer.load();
        
        // Play audio
        audioPlayer.play()
            .then(() => {
                isPlaying = true;
                playIcon.className = 'fas fa-pause';
                
                // Update active song in UI
                document.querySelectorAll('.song.active, .playlist-table tr.active')
                    .forEach(el => el.classList.remove('active'));
                
                // Update grid view if visible
                const activeSongElement = document.querySelector(`.song[data-index="${index}"]`);
                if (activeSongElement) {
                    activeSongElement.classList.add('active');
                }
                
                // Update playlist view if visible
                const activeRowElement = document.querySelector(`.playlist-table tr[data-index="${index}"]`);
                if (activeRowElement) {
                    activeRowElement.classList.add('active');
                }
            })
            .catch(error => {
                console.error('Error playing audio:', error);
                alert('ไม่สามารถเล่นเพลงได้ กรุณาลองใหม่อีกครั้ง');
            });
    }
}

// Toggle play/pause
function togglePlay() {
    if (currentSongIndex === -1 && filteredSongs.length > 0) {
        // If no song is selected, play the first song
        playSong(0);
        return;
    }
    
    if (isPlaying) {
        audioPlayer.pause();
        isPlaying = false;
        playIcon.className = 'fas fa-play';
    } else {
        audioPlayer.play()
            .then(() => {
                isPlaying = true;
                playIcon.className = 'fas fa-pause';
            })
            .catch(error => {
                console.error('Error playing audio:', error);
            });
    }
}

// Play previous song
function playPrevSong() {
    if (currentSongIndex > 0) {
        playSong(currentSongIndex - 1);
    } else if (filteredSongs.length > 0) {
        // Play the last song if at the beginning
        playSong(filteredSongs.length - 1);
    }
}

// Play next song
function playNextSong() {
    if (currentSongIndex < filteredSongs.length - 1) {
        playSong(currentSongIndex + 1);
    } else if (filteredSongs.length > 0) {
        // Play the first song if at the end
        playSong(0);
    }
}

// Update progress bar
function updateProgress() {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
        
        // Update time displays
        currentTimeElement.textContent = formatTime(audioPlayer.currentTime);
        durationElement.textContent = formatTime(audioPlayer.duration);
    }
}

// Set progress when clicking on progress bar
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;
    
    if (duration) {
        audioPlayer.currentTime = (clickX / width) * duration;
    }
}

// Format time from seconds to MM:SS
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Filter songs based on album, year, and search
function filterSongs() {
    loadingSpinner.classList.add('active');
    
    setTimeout(() => {
        const albumValue = albumFilter.value;
        const yearValue = yearFilter.value;
        const sortValue = sortFilter.value;
        const searchValue = searchInput.value.toLowerCase();
        
        // Filter songs
        filteredSongs = songs.filter(song => {
            const matchAlbum = albumValue === 'all' || song.album === albumValue;
            const matchYear = yearValue === 'all' || song.year.toString() === yearValue;
            const matchSearch = searchValue === '' || 
                              song.title.toLowerCase().includes(searchValue) || 
                              song.album.toLowerCase().includes(searchValue);
            
            return matchAlbum && matchYear && matchSearch;
        });
        
        // Sort songs
        switch (sortValue) {
            case 'newest':
                filteredSongs.sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
                break;
            case 'oldest':
                filteredSongs.sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
                break;
            case 'a-z':
                filteredSongs.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'z-a':
                filteredSongs.sort((a, b) => b.title.localeCompare(a.title));
                break;
        }
        
        // Reset current song if it's filtered out
        if (currentSongIndex !== -1 && !filteredSongs.includes(songs[currentSongIndex])) {
            currentSongIndex = -1;
        }
        
        // Render filtered songs
        renderSongs(filteredSongs);
        renderPlaylist(filteredSongs);
        
        loadingSpinner.classList.remove('active');
    }, 300); // Slight delay for spinner animation
}

// Switch between views
function switchView(view) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    document.querySelector(`.nav-link[data-view="${view}"]`).classList.add('active');
    
    songContainer.style.display = 'none';
    playlistContainer.style.display = 'none';
    bandInfoContainer.style.display = 'none';
    filterContainer.style.display = 'none';
    
    switch (view) {
        case 'grid':
            songContainer.style.display = 'flex';
            filterContainer.style.display = 'flex';
            break;
        case 'playlist':
            playlistContainer.style.display = 'block';
            filterContainer.style.display = 'flex';
            break;
        case 'band':
            bandInfoContainer.style.display = 'block';
            break;
    }
}

// Set up event listeners
function setupEventListeners() {
    // Playback controls
    playButton.addEventListener('click', togglePlay);
    prevButton.addEventListener('click', playPrevSong);
    nextButton.addEventListener('click', playNextSong);
    
    // Progress bar
    progressContainer.addEventListener('click', setProgress);
    audioPlayer.addEventListener('timeupdate', updateProgress);
    audioPlayer.addEventListener('ended', playNextSong);
    
    // Volume control
    volumeSlider.addEventListener('input', () => {
        const value = volumeSlider.value;
        audioPlayer.volume = value / 100;
        
        // Update volume icon based on level
        if (value > 60) {
            volumeIcon.className = 'fas fa-volume-up';
        } else if (value > 0) {
            volumeIcon.className = 'fas fa-volume-down';
        } else {
            volumeIcon.className = 'fas fa-volume-mute';
        }
    });
    
    volumeIcon.addEventListener('click', () => {
        if (audioPlayer.volume > 0) {
            // Store the current volume to restore later
            volumeIcon.dataset.lastVolume = volumeSlider.value;
            volumeSlider.value = 0;
            audioPlayer.volume = 0;
            volumeIcon.className = 'fas fa-volume-mute';
        } else {
            // Restore the last volume
            const lastVolume = volumeIcon.dataset.lastVolume || 80;
            volumeSlider.value = lastVolume;
            audioPlayer.volume = lastVolume / 100;
            volumeIcon.className = lastVolume > 60 ? 'fas fa-volume-up' : 'fas fa-volume-down';
        }
    });
    
    // Filters
    albumFilter.addEventListener('change', filterSongs);
    yearFilter.addEventListener('change', filterSongs);
    sortFilter.addEventListener('change', filterSongs);
    
    // Search
    searchButton.addEventListener('click', filterSongs);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            filterSongs();
        }
    });
    
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const view = link.dataset.view;
            switchView(view);
        });
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT') return; // Skip if in input field
        
        switch (e.code) {
            case 'Space': // Play/Pause
                e.preventDefault();
                togglePlay();
                break;
            case 'ArrowLeft': // Previous song
                playPrevSong();
                break;
            case 'ArrowRight': // Next song
                playNextSong();
                break;
        }
    });
}

// Initialize app on load
window.addEventListener('load', initApp);