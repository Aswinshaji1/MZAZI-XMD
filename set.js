/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables. And don't forget to rest, for even the relentless must recharge.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVBHeVRYUjl5SFhlT1BFK2MyK1hmb2JLSlYrTnhvMzkydUtRQkN3b29YOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSEY5dGQwaC9TQlRRa2J0UFBuWUpUbU9Fd2orVnJxL3JKdUNnVWp5RUVqQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJS0JnVzBGSVFVWkJBbForUFdiSHBERmNaZkZ1SHlzZlNRc2Rqc1JWNEZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTZlNYeVczUzBmRnVxWExYTEsvQm9CVXRUTTV5Unc0bEFNbm05YSttZEQwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlNWmgzajNWb0lEUE1ESCtFRGhQbDdMNUNMR2FmK3cxL1pZNjh4MXBxSGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImREc3RyQ2xoVWFkNmoxRlFDSE9Gc0FsNXpydmVlMm0xdUNaZFk3VG9CbVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0k5UGxaVFFNUEhEaU9aUmh6S1dtd2NhTWJmVThQUlFraUdqUVZ2VWxYST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiazJCekRERkFXQ1RXTDVjeno0Qm5GcDFITFlERjFMM1Z2NkJTU0p5T2lUTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFDa0I0K0RJQk80cFhyVEVkUDFEMlI4a2E3aTN6aG9GbzFsamZkZUdBS2tFUGlUY01zaHFFQnZIS2lLa2VjSytiVVMvd2R6Yk80QVAxVkp6RFhCZGlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA2LCJhZHZTZWNyZXRLZXkiOiJqU0FCdEVWOFVNbUFDUlpvMGNuN1owTStJdWV5a2FpSmNTQmNQei9PeldFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJLNzJBRlBQOCIsIm1lIjp7ImlkIjoiOTE5NTM5MTgyMTQ4Ojg4QHMud2hhdHNhcHAubmV0IiwibGlkIjoiODg3NDMxMTc2MzE1NjU6ODhAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNON3MvdElGRUlQYytjSUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJraDZLN0pWNURWNis0V1N1UzVoaDZ5WEh2WEUzNXhqMWd3VnZsdUh6aHlFPSIsImFjY291bnRTaWduYXR1cmUiOiIvbFczOUZJQnFBRWNlMzliRnpHc3VSVWpYc2hzTHdPejkyZ0RkTVoyK1lLUk81SHV5d0IwS0dmVmxHK050R21CajgvSzRsd2diUGw0T1lrY2hVQldEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSkg5b1pkWHY5WVc3T21zUUw5OXFSb05NamFHYWcydHFFUTJqanp5QVk1YWsyTDltb2V3YzFmZ2VvN05xMjV5RFJHT01QeEltVEZpeDNzbzhleXN1aXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTk1MzkxODIxNDg6ODhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWkllaXV5VmVRMWV2dUZrcmt1WVllc2x4NzF4TitjWTlZTUZiNWJoODRjaCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUxMDE5MDY1LCJsYXN0UHJvcEhhc2giOiIzZll3Q0siLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU0ybCJ9';
const autobio = process.env.AUTOBIO || 'FALSE';
const autolike = process.env.AUTOLIKE_STATUS || 'TRUE';
const autoviewstatus = process.env.AUTOVIEW_STATUS || 'TRUE';
const welcomegoodbye = process.env.WELCOMEGOODBYE || 'FALSE';

const prefix = process.env.PREFIX || '!';
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'FALSE';
const mode = process.env.MODE || 'PUBLIC';
const antidel = process.env.ANTIDELETE || 'TRUE';

const botname = process.env.BOTNAME || '𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗';
const antibot = process.env.ANTIBOT || 'FALSE';
const author = process.env.STICKER_AUTHOR ||'𝗕𝗢𝗧';
const packname = process.env.STICKER_PACKNAME || '𝗠𝗭𝗔𝗭𝗜';
const dev = process.env.DEV || '254741388986';
const anticall = process.env.AUTOREJECT_CALL || 'TRUE';

const menu = process.env.MENU_TYPE || 'VIDEO';
const DevMzazi = dev.split(",");
const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
const bad = process.env.BAD_WORD || 'fuck';
const autoread = process.env.AUTOREAD || 'FALSE';

const admin = process.env.ADMIN_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗿𝗲𝘀𝗲𝗿𝘃𝗲𝗱 𝗳𝗼𝗿 𝗔𝗱𝗺𝗶𝗻𝘀!';
const group = process.env.GROUP_ONLY_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝗚𝗿𝗼𝘂𝗽𝘀!';
const botAdmin = process.env.BOT_ADMIN_MSG || '𝗜 𝗻𝗲𝗲𝗱 𝗔𝗱𝗺𝗶𝗻 𝗽𝗿𝗲𝘃𝗶𝗹𝗲𝗱𝗴𝗲𝘀!';
const NotOwner = process.env.NOT_OWNER_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗼𝘄𝗻𝗲𝗿!';

const wapresence = process.env.WA_PRESENCE || 'recording';
const antilink = process.env.ANTILINK || 'TRUE';
const mycode = process.env.CODE || '254';
const port = process.env.PORT || 10000;
const antilinkall = process.env.ANTILINK_ALL || 'TRUE';

module.exports = {
  session,
  antidel,
  sessionName,
  autobio,
  author,
  packname,
  dev,
  DevMzazi,
  badwordkick,
  anticall,
  bad,
  mode,
  group,
  NotOwner,
  botname,
  botAdmin,
  menu,
  autoread,
  antilink,
  admin,
  mycode,
  antilinkall,
  wapresence,
  welcomegoodbye,
  antibot,
  herokuapi,
  prefix,
  port,
  gptdm,
  appname,
  autolike,
  autoviewstatus,
};
  
