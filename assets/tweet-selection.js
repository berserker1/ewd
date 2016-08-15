/**
 * tweet-selection - Tweet selected text. Like Medium but out of the box.
 * @version 2.0.0
 * @link    https://github.com/kikobeats/tweet-selection
 * @author  Kiko Beats (https://github.com/kikobeats)
 * @license MIT
 */
!function(e){function t(e){var t=3,n=2;return e=e||window.event,e.which===t||e.button===n||!1}function n(){return window.getSelection().toString()}function i(e,t){return e.length>o.WORDS_MAX&&(e=e.substring(0,o.WORDS_MAX+t.ellipsis.length),e+=t.ellipsis),t.quoteLeft+e+t.quoteRight}var o={WORDS_MAX:109,DEFAULTS:{minimumTextSelected:3,shareClass:".tweet-selection",height:"300",width:"400",ellipsis:"…",quoteRight:"”",quoteLeft:"“"}};e.fn.tweetSelection=function(s){function l(){e(s.shareClass).remove(),document.getSelection().removeAllRanges()}function u(t,n){var i=r.mouse.top-60,o=r.mouse.left+(n.clientX-r.mouse.left)/2,l='<a href="https://twitter.com/share?url='+encodeURIComponent(window.location.href);l+="&text="+encodeURIComponent(t),["hashtags","via","related"].forEach(function(e){s[e]&&(l+="&"+e+"="+encodeURIComponent(s[e]))}),l+="\" class='"+s.shareClass.substr(1)+" fade-in one'",l+=" onclick=\"window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,",l+="scrollbars=yes,height="+s.height,l+=",width="+s.width+"');return false;\"></a>",e("body").append(l),e(s.shareClass).css({position:"absolute",top:i,left:o})}s=e.extend(o.DEFAULTS,s);var r={mouse:{},isVisible:!1};e(this).mousedown(function(e){r.mouse.top=e.clientY+window.pageYOffset,r.mouse.left=e.clientX,!t(e)&&r.isVisible&&(l(),r.isVisible=!1)}),e(this).mouseup(function(e){var o=n();o.length>s.minimumTextSelected&&!t(e)&&(u(i(o,s),e),r.isVisible=!0)})}}($);