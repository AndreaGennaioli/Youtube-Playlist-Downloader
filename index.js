const config = require('./config.json');
const ytdl = require('ytdl-core');
const fs = require('fs');
const path = require('path');

const {	google } = require('googleapis');
const youtube = google.youtube('v3');

const sleep = (ms) => {
	return new Promise(resolve => setTimeout(resolve, ms))
}

let playlistID = config.playlistURL.substring('https://www.youtube.com/playlist?list='.length)

youtube.playlistItems.list({
	key: config.apiKey,
	part: 'id,snippet',
	playlistId: playlistID,
	maxResults: 200,
}, async (err, results) => {
	if (err) return console.log(err.message)
	let data = results.data.items;

	for (let video of data) {
		try {
			await new Promise((resolve, reject) => {
				console.log(`Downloading: ${video.snippet.title}`)
				let file = ytdl(`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`, {
					format: 'mp4'
				}).pipe(fs.createWriteStream(path.join(__dirname, config.downloadDir, `${video.snippet.title}.mp4`)));
				file.on('error', err => {
					console.log('\x1b[32m', `x Error Downloading: ${video.snippet.title}`)
					console.log("\x1b[0m", '\n')
					reject()
				})
				file.on('close', () => {
					console.log("\x1b[32m", `! Downloaded: ${video.snippet.title}`);
					console.log("\x1b[0m", '\n')
					resolve()
				})
			})
		} catch (err) {
			console.log('\x1b[42m', `x Error Downloading: ${video.snippet.title}`)
			console.log("\x1b[0m", '\n')

		}
	}
});