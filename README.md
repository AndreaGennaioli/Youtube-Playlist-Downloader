# Youtube Playlist Downloader
With this script You can download a maxinum of 50 video of any youtube playlist! Once downloaded, the files will be stored in the `videos` folder.

**To use this script You need to insert a valid Youtube API Key**

## Usage and Configuration
First of all You will need to install [Node.js](https://nodejs.org/it/download/), and after that open the `cmd` in the folder and type `npm install` to install all the dependencies.

Now You have to set the **Youtube API key**, the **playlist URL** and the download directory (`./videos` by default) in the **`config.json`** file.

### 1. Get Youtube API Key
You can get your own Youtube API key by following [this tutorial](https://www.youtube.com/watch?v=VqML5F8hcRQ&ab_channel=YouTubeWordPressPlugin-Gallery%2CLivestreametc).
Once copied it, past the key in the `config.json` file like this:
```json
"apiKey": "Youtube API Key Here",
```
Then save the file.
### 2. Get the Playlist URL
Navigate on Youtube, choose your preferred playlist and get the direct link for it. 
You will get something like this:
```
https://www.youtube.com/playlist?list=PLMC9KNkIncKseYxDN2niH6glGRWKsLtde
```
Copy and paste it in the `config.json` file like this:
```json
"playlistURL": "Playlist URL Here",
```
### 3. Change the Download Directory
If You want, You can change the download directory changing the `"downloadDir"` value in `config.json` like this:
```json
"downloadDir": "/path/to/dir"
```
### 4. Run the Script
To run the script open the `cmd` in the directory and digit `node .`, then press `ENTER`.
