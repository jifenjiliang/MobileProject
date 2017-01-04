var hashMap = {
	'address' : searchObj,
	'rlist' : rlistObj,
	'detail' : detailObj,
	'citylist' : citylistObj
}
var prevModule = null;
var curModule = null;
function routeController(hash){
	var Module = hashMap[hash] || hashMap['address'];
	prevModule = curModule;
	curModule = Module;
	if (prevModule) {
		prevModule.leave();
	}
	curModule.enter();
}
if (location.hash) {
	var hash = location.hash.slice(1);
	routeController(hash);
}else{
	routeController('address');
}
window.onhashchange = function(){
	var hash = location.hash.slice(1);
	routeController(hash);
}