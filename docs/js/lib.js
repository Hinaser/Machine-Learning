!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=N.elements;return"string"==typeof e?e.split(" "):e}function a(e,t){var n=N.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),N.elements=n+" "+e,s(t)}function o(e){var t=F[e[b]];return t||(t={},S++,e[b]=S,F[S]=t),t}function i(e,n,r){if(n||(n=t),v)return n.createElement(e);r||(r=o(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():y.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||E.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function c(e,n){if(e||(e=t),v)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),i=0,c=r(),l=c.length;i<l;i++)a.createElement(c[i]);return a}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return N.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(N,t.frag)}function s(e){e||(e=t);var r=o(e);return!N.shivCSS||p||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),v||l(e,r),e}function m(e){for(var t,n=e.getElementsByTagName("*"),a=n.length,o=RegExp("^(?:"+r().join("|")+")$","i"),i=[];a--;)t=n[a],o.test(t.nodeName)&&i.push(t.applyElement(u(t)));return i}function u(e){for(var t,n=e.attributes,r=n.length,a=e.ownerDocument.createElement(x+":"+e.nodeName);r--;)t=n[r],t.specified&&a.setAttribute(t.nodeName,t.nodeValue);return a.style.cssText=e.style.cssText,a}function d(e){for(var t,n=e.split("{"),a=n.length,o=RegExp("(^|[\\s,>+~])("+r().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),i="$1"+x+"\\:$2";a--;)t=n[a]=n[a].split("}"),t[t.length-1]=t[t.length-1].replace(o,i),n[a]=t.join("}");return n.join("{")}function h(e){for(var t=e.length;t--;)e[t].removeNode()}function f(e){function t(){clearTimeout(i._removeSheetTimer),r&&r.removeNode(!0),r=null}var r,a,i=o(e),c=e.namespaces,l=e.parentWindow;return!T||e.printShived?e:(void 0===c[x]&&c.add(x),l.attachEvent("onbeforeprint",function(){t();for(var o,i,c,l=e.styleSheets,s=[],u=l.length,h=Array(u);u--;)h[u]=l[u];for(;c=h.pop();)if(!c.disabled&&C.test(c.media)){try{o=c.imports,i=o.length}catch(e){i=0}for(u=0;u<i;u++)h.push(o[u]);try{s.push(c.cssText)}catch(e){}}s=d(s.reverse().join("")),a=m(e),r=n(e,s)}),l.attachEvent("onafterprint",function(){h(a),clearTimeout(i._removeSheetTimer),i._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var p,v,g=e.html5||{},E=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,y=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,b="_html5shiv",S=0,F={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",p="hidden"in e,v=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){p=!0,v=!0}}();var N={elements:g.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:g.shivCSS!==!1,supportsUnknownElements:v,shivMethods:g.shivMethods!==!1,type:"default",shivDocument:s,createElement:i,createDocumentFragment:c,addElements:a};e.html5=N,s(t);var C=/^$|\b(?:all|print)\b/,x="html5shiv",T=!v&&function(){var n=t.documentElement;return!(void 0===t.namespaces||void 0===t.parentWindow||void 0===n.applyElement||void 0===n.removeNode||void 0===e.attachEvent)}();N.type+=" print",N.shivPrint=f,f(t),"object"==typeof module&&module.exports&&(module.exports=N)}("undefined"!=typeof window?window:this,document),function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=E.elements;return"string"==typeof e?e.split(" "):e}function a(e,t){var n=E.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),E.elements=n+" "+e,s(t)}function o(e){var t=g[e[p]];return t||(t={},v++,e[p]=v,g[v]=t),t}function i(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=o(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():f.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||h.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function c(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),i=0,c=r(),l=c.length;i<l;i++)a.createElement(c[i]);return a}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return E.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(E,t.frag)}function s(e){e||(e=t);var r=o(e);return!E.shivCSS||m||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||l(e,r),e}var m,u,d=e.html5||{},h=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",v=0,g={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",m="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){m=!0,u=!0}}();var E={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3-pre",shivCSS:d.shivCSS!==!1,supportsUnknownElements:u,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:s,createElement:i,createDocumentFragment:c,addElements:a};e.html5=E,s(t),"object"==typeof module&&module.exports&&(module.exports=E)}("undefined"!=typeof window?window:this,document);