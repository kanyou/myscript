var body = $response.body;
var url = $request.url;
const path1 = '/api/v1/pocketlists.me.get';
let obj = JSON.parse(body);
if (url.indexOf(path1) != -1) {
	obj.data["subscription_type"] = "premium";
	obj.data["subscription_expires"] = "2022-12-30";
	body = JSON.stringify(obj);  
 }

$done({body});
/**
 * @supported 9E1BBA07A0EF
 */
