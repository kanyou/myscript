/**
 *@supported 9E1BBA07A0EF
 */
let obj = JSON.parse($response.body);
obj.data["vip"] = 99;
obj.data["amount"] = 99;
$done({body: JSON.stringify(obj)});
