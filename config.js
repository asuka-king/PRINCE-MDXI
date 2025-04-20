const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


// Load configuration from config.json
const configData = JSON.parse(fs.readFileSync('./config.json', 'utf-8'));



function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "prince_md-eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0YzcG1USzVuYXd2Q0cyNFAvSkZ6dnpWV2dKeVZYeEpYaTAwRWFrYkJIbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0VOTjd1S0lwUkJMNTA0bTJ0N0diWmxzZ2RrNkxaaU9USTB3YlZFS2FWbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwS3Axa2h3b09mdnVkbkJ2NDNCU2JyMURkWUo0NWEzU1VvbEN3SW9UOEg0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBeVE5UHR6M3YzSlhxRTRYSTU1ZnRFcUF1bXpldUx5Y1FuSnR2emRxaTNRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldENTlLS3QzMmJtcDZoZGpwMDBPN1NQZlhSRStNY01iaFMwN09tZ3Vqbmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJwWXMyc0w4NWF1eE8zV3FuQUFTcm1ZQStJelk0NmE1bzdXUFhJTzFTRm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUQxcFVUaUFrWm5uY3VNL09NbU4yRU1sNGtaeVp5VU1HNUNuNDgzRTBWZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUFMVUo2czNxcFN2aktHRXR1M0lGY1NETUcvQ0hNenJhTGN0cXNudjB3bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllwNWdWcnNhbFVINUc5UXNsWWVKRjIwTk9Wd0V0akNmZmYvanN0Tk84eEZNejhxWTFsb09rMUJzYmcycTJuaklidVc5aXhVWEs0Vy9xUSsxY3Y4TmlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMxLCJhZHZTZWNyZXRLZXkiOiJzNjVZK0NoZ2dOb1J3S2RCTVhvaEs4SVNtVEdXM3psRitPRWhhT2FCM05ZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXMmhIZzZUclNqbTJDTzJVSEh0b2RBIiwicGhvbmVJZCI6Ijg0ZmVjNzAxLTU2MmQtNDMxMS04YjFiLWE0MmU3ZWZmM2M0YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSlBvNDlZQmVzWUN2YkFhQVhzcTRsQzVvRHc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTXhteDRZc2F4UElMdFBYcHI5SnFVQ3lITmU0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjM0SkczN0UxIiwibWUiOnsiaWQiOiI5NDc2OTQ4NDAwNDozNkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS3phZ1BjQ0VKV2VsY0FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieXA2OHNpTkFoZ2ZNYXZhanBsK25ib1Q3aWg1alBLWVZLWjRianZFR1R6dz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWXcrM0tvR3dXcnhQeTNoNHBORk9HWWxQNDJzRnRaUXBXWFA3czg5SHJYNWdZZmlYNG0vcE9EaFZHZm44c25UbnhNUXlLam8yQk5mV0Y5ODJQZEZKQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IndCNndBR0NtOVdubk93Vmg0by9FbFF2d0VhK3lnMlM5NVNRQlZ5NURackY2MXhjUGQ1WG1oQmc0Rm8wVEc4NWRET2pabCs3N2JOb1h0ZGFWd2Jod2lRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3Njk0ODQwMDQ6MzZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY3FldkxJalFJWUh6R3IybzZaZnAyNkUrNG9lWXp5bUZTbWVHNDd4Qms4OCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0NTE3ODQwM30=",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "private",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://raw.githubusercontent.com/Mayelprince/url/main/url/1264.jpg",
MENU_IMG: process.env.MENU_IMG || "https://raw.githubusercontent.com/Mayelprince/url/main/url/1264.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hi 💁🏽 How Can I Assist You. Am alive Now.",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log",
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
FAKE_TYPING: process.env.FAKE_TYPING || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "fase",
BOT_NAME: process.env.BOT_NAME || "𝗣𝗥𝗜𝗡𝗖𝗘 𝗠𝗗𝗫",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};



