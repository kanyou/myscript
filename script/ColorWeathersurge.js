/**
 *@supported 9E1BBA07A0EF
 */
let obj = JSON.parse($response.body);
obj.data["xy_vip_expire"] = 1700238229.113103;
obj.data["is_vip"] = true;
obj.data["vip_expired_at"] = 1700238229.113103;
obj.data["is_xy_vip"] = true;
$done({body: JSON.stringify(obj)});