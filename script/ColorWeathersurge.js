/**
 *@supported 9E1BBA07A0EF
 */
let obj = JSON.parse($response.body);
obj.result["xy_vip_expire"] = 1700238229.113103;
obj.result["is_vip"] = true;
obj.result["vip_expired_at"] = 1700238229.113103;
obj.result["is_xy_vip"] = true;
$done({body: JSON.stringify(obj)});