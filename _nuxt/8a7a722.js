(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3,4,5],{265:function(t,e,n){"use strict";n.r(e);var o={props:["title","content","imageSrc"]},r=n(47),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("div",{staticClass:"hero-img",style:{"background-image":t.imageSrc}},[t._m(0),t._v(" "),n("div",{staticClass:"hero-shadow"}),t._v(" "),n("div",{staticClass:"hero-text"},[n("h1",[n("br"),t._v(t._s(t.title))]),t._v(" "),n("p",[t._v(t._s(t.content))])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-arrow"},[e("img",{attrs:{src:"/images/icons/chevrons-down.svg"}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(265).default})},266:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{isActive:!1}},methods:{handleNavigationBar:function(){this.isActive=!this.isActive}}},r=n(47),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"nav"},[n("div",{staticClass:"logo"},[n("NuxtLink",{attrs:{to:"/"}},[n("img",{attrs:{src:"/images/logo/logo.png",alt:"logo"}})])],1),t._v(" "),n("ul",{staticClass:"nav-links",class:{"nav-active":t.isActive}},[n("NuxtLink",{attrs:{to:"/about/me"}},[t._v("Strona główna")]),t._v(" "),n("NuxtLink",{attrs:{to:"/about/me"}},[t._v("Spis treści")]),t._v(" "),n("NuxtLink",{attrs:{to:"/about/me"}},[t._v("Literatura")]),t._v(" "),n("NuxtLink",{attrs:{to:"/post2"}},[t._v("Inne")]),t._v(" "),n("NuxtLink",{attrs:{to:"/post"}},[t._v("Kontakt")])],1),t._v(" "),n("div",{staticClass:"burger",class:{toggle:t.isActive},on:{click:t.handleNavigationBar}},[n("div",{staticClass:"line1"}),t._v(" "),n("div",{staticClass:"line2"}),t._v(" "),n("div",{staticClass:"line3"})])])}),[],!1,null,null,null);e.default=component.exports},267:function(t,e,n){"use strict";n.r(e);var o=n(47),component=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.default=component.exports},286:function(t,e,n){"use strict";n.r(e);var o=n(47),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NavigationBar"),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("Footer")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("div",{staticClass:"hero-img"},[n("div",{staticClass:"header-arrow"},[n("img",{attrs:{src:"/images/icons/chevrons-down.svg"}})]),t._v(" "),n("div",{staticClass:"hero-shadow"}),t._v(" "),n("div",{staticClass:"hero-text"},[n("h1",[n("br"),t._v("Ekonomiczny kod")]),t._v(" "),n("p",[t._v("Witaj na blogu - w miejscu, gdzie programujemy z pasją")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"main wrapper"},[n("section",{staticClass:"about-blog"},[n("div",{staticClass:"about-blog-content"},[n("h1",[t._v("Co znajdziesz na blogu?")]),t._v(" "),n("p",[n("b",[t._v("Główym założeniem bloga jest pozyskiwanie i dzielenie się zdobytą przy tym wiedzą. ")])]),t._v(" "),n("p",[t._v("\n          Na blogu publikowane są głównie posty związane z szerokopojętym programowaniem. Back-end, front-end, bazy danych, architektura, wzorce projektowe? Jasne! \n          Wszystkie te tematy są tu poruszane! Ocziwiście blog nie jest zamknięty wyłacznie w ramach technicznych. \n          Poruszane są tutaj również tematy miękkie takie jak relacje, skuteczna komunikacja, samorozwój a także inne około programistyczne zagadnienia. \n          Sporadycznie na blogu mogą się również pojawiać tematy odbiegające od programowania - związane z moimi zainteresowaniami :)\n        ")]),t._v(" "),n("p",[t._v("\n          W poszczególnych sekcjach gurnego paska nawigującego znajdziesz: \n          "),n("ul",[n("b",[t._v("# Strona główna - ")]),t._v(" znajdziesz tam wszystkie ostatnio opublikowane posty. "),n("br"),t._v(" "),n("b",[t._v("# Spis treści - ")]),t._v(" w tej sekcji znajdują się wsyzstkie artykuły związane z szerokopojętym programowaniem, upożądkowane tematycznie. "),n("br"),t._v(" "),n("b",[t._v("# Literatura - ")]),t._v(" ta sekcja poświęcona jest książkom, które przeczytałem i uważam, że warto lub nie je polecać. Każda opisywana tam lektura została okroszona moimi osobistymi wrażeniami z lektury. "),n("br"),t._v(" "),n("b",[t._v("# Inne - ")]),t._v(" zawiera dodatkowe sekcje związane głównie z moimi zainteresowaniami. "),n("br"),t._v(" "),n("b",[t._v("# Kontakt - ")]),t._v(" sekcja zawierająca informacje kontaktowe. "),n("br")])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{NavigationBar:n(266).default,Header:n(265).default,Footer:n(267).default})}}]);