if ($response.statusCode == 200 && $request.method == 'GET') {
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/api/v2/readings/limitation';
const time = '/api/v2/readings/accessible';

if (url.indexOf(vip) != -1) {
	obj["modules"] = [];
	obj["auditionDuration"] = 7200;
	body = JSON.stringify(obj);
}
if (url.indexOf(time) != -1) {
	obj["from"] = 1482071586;
	obj["to"] = 1671373986;
	body = JSON.stringify(obj);
}
} else {
	$done({})
}
$done({body});
/**
 * @supported 9E1BBA07A0EF
 */