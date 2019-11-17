var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/vip/v2/user/vip';
const time = '/vip/spi/mservice';

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


$done({body});
/**
 * @supported 9E1BBA07A0EF
 */
