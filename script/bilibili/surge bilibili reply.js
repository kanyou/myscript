/**
 *@supported 9E1BBA07A0EF
 */
let body = $response.body
body=JSON.parse(body)
delete body['data']['notice']
body=JSON.stringify(body)
$done({body})
