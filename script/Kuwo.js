/*
Regex: ^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice)

MITM = vip1.kuwo.cn
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
var urlj = JSON.parse(url);

const pay = '/music.pay';
const vip = '/vip/v2/user/vip';
const time = '/vip/spi/mservice';

if (url.indexOf(pay) != -1) {
    urlj[uid]=1;
    url = JSON.stringify(urlj);
}
if (url.indexOf(vip) != -1) {
	obj.data["vipLuxuryExpire"] = "1988121599000";
	obj.data["isYearUser"] = "2";
	obj.data["vipmExpire"] = "1988121599000";
	obj.data["vipOverSeasExpire"] = "1988121599000";
	obj.data["vipExpire"] = "1988121599000";
	obj.data["vip3Expire"] = "1988121599000";
	obj.data["biedSong"] = "11";
	body = JSON.stringify(obj);
}

if (url.indexOf(time) != -1) {
	obj["isVIPMAutoPay"] = 2;
	obj["isVIPLuxAutoPay"] = 2;
	body = JSON.stringify(obj);
}

if (url.indexOf(pay) != -1) {
	body = JSON.stringify(obj);
}

$done({body});
/**
 * @supported 29022075
 */