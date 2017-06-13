/**
function uaredirect() {
var n = navigator.userAgent.toLowerCase();
if (n.indexOf('android') > -1) {
document.writeln('<center><iframe scrolling="no" frameborder="0" marginheight="0" marginwidth="0" width="100%" height="15000" allowTransparency src="http://m.newsilo.org/android/"></iframe></center>')
} else if (n.indexOf('iphone') > -1 || n.indexOf('ipod') > -1 || n.indexOf('ipad') > -1 || n.indexOf('ios') > -1) {
document.writeln('<center><iframe scrolling="no" frameborder="0" marginheight="0" marginwidth="0" width="100%" height="15000" allowTransparency src="http://m.newsilo.org/ios/"></iframe></center>')
} else {
document.writeln('<center><iframe scrolling="no" frameborder="0" marginheight="0" marginwidth="0" width="100%" height="15000" allowTransparency src="http://pc.newsilo.org/"></iframe></center>')
}
}
uaredirect();
**/
document.location.href="http://pc.newsilo.org";