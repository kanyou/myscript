/*
[Script]
http-request ^https://[\s\S]*\.googlevideo\.com/.*&(oad|ctier) script-path=https://Choler.github.io/Surge/Script/YouTube.js

[MITM]
hostname = *.googlevideo.com
*/
/**
 * @supported 9E1BBA07
 */

var data = {
  body: "{}",
  headers: {
    "Content-Type": "multipart/byteranges"
  }
};
$done({response: data});