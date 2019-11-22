/*
Surge4:
http-response ^https?:\/\/backend\.getdrafts\.com\/api\/v1\/verification\/account\_status requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/kanyou/myscript/master/script/drafts.js
QX:
^https?:\/\/backend\.getdrafts\.com\/api\/v1\/verification\/account\_status url script-response-body https://raw.githubusercontent.com/kanyou/myscript/master/script/drafts.js
hostname=backend.getdrafts.com
*/
const bodyObj = JSON.parse($response.body);
bodyObj.is_subscription_active=true;
bodyObj.active_expires_at="2022-01001T00:00:00Z";
bodyObj.active_subscription_type="premium";
$done({body:JSON.stringify(bodyObj)});
