function uaredirect() {
var n = navigator.userAgent.toLowerCase();
if (n.indexOf('android') > -1) {
	document.location.href="http://m.newsilo.org/android/";
} else if (n.indexOf('iphone') > -1 || n.indexOf('ipod') > -1 || n.indexOf('ipad') > -1 || n.indexOf('ios') > -1) {
	document.location.href="http://m.newsilo.org/ios/";
} else {
	document.location.href="http://pc.newsilo.org/";
}
}
uaredirect();
