var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,a="object"==typeof self&&self&&self.Object===Object&&self,c=f||a||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,v=function(){return c.Date.now()};function p(t,e,n){var i,o,r,u,f,a,c=0,l=!1,p=!1,b=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=i,r=o;return i=o=void 0,c=e,u=t.apply(r,n)}function h(t){return c=t,f=setTimeout(j,e),l?g(t):u}function w(t){var n=t-a;return void 0===a||n>=e||n<0||p&&t-c>=r}function j(){var t=v();if(w(t))return T(t);f=setTimeout(j,function(t){var n=e-(t-a);return p?d(n,r-(t-c)):n}(t))}function T(t){return f=void 0,b&&i?g(t):(i=o=void 0,u)}function E(){var t=v(),n=w(t);if(i=arguments,o=this,a=t,n){if(void 0===f)return h(a);if(p)return f=setTimeout(j,e),g(a)}return void 0===f&&(f=setTimeout(j,e)),u}return e=m(e)||0,y(n)&&(l=!!n.leading,r=(p="maxWait"in n)?s(m(n.maxWait)||0,e):r,b="trailing"in n?!!n.trailing:b),E.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=a=o=f=void 0},E.flush=function(){return void 0===f?u:T(v())},E}function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var f=o.test(t);return f||r.test(t)?u(t.slice(2),f?2:8):i.test(t)?NaN:+t}e=function(t,e,n){var i=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),p(t,e,{leading:i,maxWait:e,trailing:o})};const b=document.querySelector(".to-top");var g;b.classList.add("visually-hidden"),window.addEventListener("scroll",e((g=b,function(){scrollY<document.documentElement.clientHeight?g.classList.add("visually-hidden"):g.classList.remove("visually-hidden")}),250)),b.addEventListener("click",(function t(e){e.preventDefault(),window.scrollTo({top:50,behavior:"smooth"}),b.removeEventListener("scroll",t)}));
//# sourceMappingURL=my-library.0b72f41f.js.map