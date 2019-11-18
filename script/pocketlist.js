var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
obj = {
	"data":{
	"subscription_type": "premium",
	"subscription_expires" = "2022-12-30";
	};
};
$done({body: JSON.stringify(obj)});
/**
 * @supported 9E1BBA07A0EF
 */
