(window.webpackJsonpcountries=window.webpackJsonpcountries||[]).push([[0],{57:function(e,t,n){e.exports=n.p+"static/media/earth.356a221d.png"},60:function(e,t,n){e.exports=n(97)},70:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(25),c=n.n(o),i=n(14),u=n(22),s=n(53),l=n(28),m=n(56),p=n(34),f="RANDOM_COUNTRY_LOADED",h="RANDOM_COUNTRY_ERROR",d="ERROR_BOUNDRY_HAS_ERROR",v="FETCH_COUNTRIES_START",y="FETCH_COUNTRIES_SUCCESS",g="FETCH_COUNTRIES_ERROR",E="FETCH_COUNTRY_START",b="FETCH_COUNTRY_SUCCESS",O="FETCH_COUNTRY_ERROR",C="RESET_COUNTRIES_DATA",j="ADD_COUNTRY_TO_FAVORITES",N="REMOVE_COUNTRY_FROM_FAVORITES";function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(n,!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w={country:{},loading:!0,error:!1};var S={hasError:!1};var D=n(43);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x={loading:!0,error:!1,country:null,countries:[],favoriteCountries:[]};var B=Object(u.combineReducers)({randomCountry:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return R({},e,{country:t.payload,loading:!1,error:!1});case h:return R({},e,{loading:!1,error:!0});default:return e}},errorBoundry:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S;switch((arguments.length>1?arguments[1]:void 0).type){case d:return{hasError:!0};default:return e}},countries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return T({},e,{loading:!0,error:!1});case y:return T({},e,{loading:!1,error:!1,countries:t.payload});case g:return T({},e,{loading:!1,error:!0});case C:return T({},e,{loading:!0,error:!1,country:null,countries:[]});case j:return T({},e,{favoriteCountries:[].concat(Object(D.a)(e.favoriteCountries),[t.payload])});case N:var n=Object(D.a)(e.favoriteCountries),r=n.indexOf(t.payload);return n.splice(r,1),T({},e,{favoriteCountries:n});case E:return T({},e,{loading:!0,error:!1});case b:return T({},e,{loading:!1,error:!1,country:t.payload});case O:return T({},e,{loading:!1,error:!0});default:return e}}}),U=n(23),F=n(4),I=n(6),P=n(8),M=n(7),A=n(9),W=n(57),H=n.n(W),L=(n(70),function(){return a.a.createElement("div",{className:"error-indicator text-primary"},a.a.createElement("img",{src:H.a,alt:"error icon"}),a.a.createElement("span",{className:"boom"},"BOOM!"),a.a.createElement("span",null,"something has gone terribly wrong"),a.a.createElement("span",null,"(but we already fix it)"))}),Y=n(2),z=n.n(Y),V=n(16),J=n(42),K=function e(){var t=this;Object(F.a)(this,e),this._apiBase="https://restcountries.eu",this._params="?fields=name;flag;callingCodes;alpha3Code;capital;population;subregion;region;currencies;languages",this.getResource=function(){var e=Object(V.a)(z.a.mark((function e(n){var r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(n));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(n,", received ").concat(r.status));case 5:return e.abrupt("return",r.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getRandomCountry=function(){var n=Object(V.a)(z.a.mark((function n(r){var a,o,c;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.getResource("/rest/v2/callingcode/".concat(r).concat(t._params));case 2:return a=n.sent,o=Object(J.a)(a,1),c=o[0],n.abrupt("return",e._transformCountry(c));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),this.getCountriesByRegion=function(){var n=Object(V.a)(z.a.mark((function n(r){var a;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.getResource("/rest/v2/region/".concat(r).concat(t._params));case 2:return a=n.sent,n.abrupt("return",a.map(e._transformCountry));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),this.getCountriesByLanguage=function(){var n=Object(V.a)(z.a.mark((function n(r){var a;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.getResource("/rest/v2/lang/".concat(r).concat(t._params));case 2:return a=n.sent,n.abrupt("return",a.map(e._transformCountry));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),this.getFavoritesCountries=function(){var n=Object(V.a)(z.a.mark((function n(r){var a;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.getResource("/rest/v2/alpha?codes=".concat(r));case 2:return a=n.sent,n.abrupt("return",a.map(e._transformCountry));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),this.getCountry=function(){var n=Object(V.a)(z.a.mark((function n(r){var a,o,c;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.getResource("/rest/v2/name/".concat(r).concat(t._params));case 2:return a=n.sent,o=Object(J.a)(a,1),c=o[0],n.abrupt("return",e._transformCountry(c));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()};K._transformCountry=function(e){return{id:e.callingCodes[0],name:e.name,flag:e.flag,alpha3Code:e.alpha3Code,capital:e.capital,population:e.population,subregion:e.subregion,region:e.region,currencies:e.currencies,languageName:e.languages[0].name}};var q=new K;function G(e){return{type:h}}function Q(e){return function(){var t=Object(V.a)(z.a.mark((function t(n){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(X()),q.getCountriesByRegion(e).then((function(e){return n(Z(e))})).catch((function(e){return n($(e))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function X(){return{type:v}}function Z(e){return{type:y,payload:e}}function $(e){return{type:g}}function ee(){return{type:C}}var te=function(e){function t(){return Object(F.a)(this,t),Object(P.a)(this,Object(M.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(I.a)(t,[{key:"componentDidCatch",value:function(){this.props.setErrorBoundryState()}},{key:"render",value:function(){return this.props.hasError?a.a.createElement(L,null):this.props.children}}]),t}(r.Component);var ne=Object(l.b)((function(e){return{hasError:e.errorBoundry.hasError}}),(function(e){return{setErrorBoundryState:function(){return e({type:d})}}}))(te),re=function(){return a.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},a.a.createElement(i.b,{className:"navbar-brand",to:"/countries"},"Countries"),a.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},a.a.createElement("ul",{className:"navbar-nav mr-auto"},a.a.createElement("li",{className:"nav-item"},a.a.createElement(i.b,{className:"nav-link",to:"/africa/"},"Africa")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(i.b,{className:"nav-link",to:"/americas/"},"Americas")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(i.b,{className:"nav-link",to:"/asia/"},"Asia")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(i.b,{className:"nav-link",to:"/europe/"},"Europe")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(i.b,{className:"nav-link",to:"/oceania/"},"Oceania"))),a.a.createElement("ul",{className:"navbar-nav ml-auto"},a.a.createElement("li",{className:"nav-item"},a.a.createElement(i.b,{className:"nav-link",to:"/countries-by-language/"},"Countries By Language")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(i.b,{className:"nav-link",to:"/favorite-countries/"},"Favorite countries")))))},ae=(n(73),function(){return a.a.createElement("div",{className:"d-flex justify-content-center w-100"},a.a.createElement("div",{className:"spinner-border text-success",role:"status"},a.a.createElement("span",{className:"sr-only"},"Loading...")))}),oe=(n(74),function(e){function t(){return Object(F.a)(this,t),Object(P.a)(this,Object(M.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchRandomCountry(),this.fetchInterval=setInterval(this.props.fetchRandomCountry,3e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.fetchInterval)}},{key:"render",value:function(){var e=this.props,t=e.country,n=e.loading,r=e.error,o=!(n||r),c=r?a.a.createElement(L,null):null,i=n?a.a.createElement(ae,null):null,u=o?a.a.createElement(ce,{country:t}):null;return a.a.createElement("div",{className:"random-country jumbotron rounded"},a.a.createElement("div",{className:"container"},c,i,u))}}]),t}(r.Component)),ce=function(e){var t=e.country,n=t.name,r=t.alpha3Code,o=t.capital,c=t.population,i=t.subregion,u=t.region,s=t.currencies,l=t.flag;return a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{className:"country-image",src:l,alt:"country"}),a.a.createElement("div",null,a.a.createElement("h4",null,n," - ",r),a.a.createElement("ul",{className:"list-group list-group-flush"},s.map((function(e,t){return a.a.createElement("li",{className:"list-group-item",key:t},a.a.createElement("span",{className:"term"},"Currency: "),a.a.createElement("span",null,e.name,e.symbol?" - ".concat(e.symbol):null))})),a.a.createElement("li",{className:"list-group-item"},a.a.createElement("span",{className:"term"},"Capital: "),a.a.createElement("span",null,o)),a.a.createElement("li",{className:"list-group-item"},a.a.createElement("span",{className:"term"},"Population: "),a.a.createElement("span",null,c)),a.a.createElement("li",{className:"list-group-item"},a.a.createElement("span",{className:"term"},"Subregion: "),a.a.createElement("span",null,i)),a.a.createElement("li",{className:"list-group-item"},a.a.createElement("span",{className:"term"},"Region: "),a.a.createElement("span",null,u)))))};var ie=Object(l.b)((function(e){return{country:e.randomCountry.country,loading:e.randomCountry.loading,error:e.randomCountry.error}}),(function(e){return{fetchRandomCountry:function(){return e(function(){var e=["93","358","355","213","1684","376","244","1264","672","1268","54","374","297","61","43","994","1242","973","880","1246","375","32","501","229","1441","975","591","5997","387","267","","55","246","","1284","1 340","673","359","226","257","855","237","1","238","1345","236","235","56","86","61","61","57","269","242","243","682","506","385","53","599","357","420","45","253","1767","1809","593","20","503","240","291","372","251","500","298","679","358","33","594","689","","241","220","995","49","233","350","30","299","1473","590","1671","502","44","224","245","592","509","","379","504","852","36","354","91","62","225","98","964","353","44","972","39","1876","81","44","962","76","254","686","965","996","856","371","961","266","231","218","423","370","352","853","389","261","265","60","960","223","356","692","596","222","230","262","52","691","373","377","976","382","1664","212","258","95","264","674","977","31","687","64","505","227","234","683","672","850","1670","47","968","92","680","970","507","675","595","51","63","64","48","351","1787","974","383","262","40","7","250","590","290","1869","1758","590","508","1784","685","378","239","966","221","381","248","232","65","1721","421","386","677","252","27","500","82","211","34","94","249","597","4779","268","46","41","963","886","992","255","66","670","228","690","676","1868","216","90","993","1649","688","256","380","971","44","1","598","998","678","58","84","681","212","967","260","263"][Math.floor(250*Math.random())];return function(){var t=Object(V.a)(z.a.mark((function t(n){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:q.getRandomCountry(e).then((function(e){return n({type:f,payload:e})})).catch((function(e){return n(G(e))}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}())}}}))(oe),ue=n(5),se=n(37),le=n.n(se),me=n(36),pe=n.n(me),fe=n(30),he=n.n(fe),de=n(59),ve=n.n(de);n(75);var ye=Object(ue.a)((function(e){return{countries:e.countries.countries,loading:e.countries.loading}}),(function(e){return{addCountryToFavorites:function(t){return e(function(e){return{type:j,payload:e}}(t))},removeCountryFromFavorites:function(t){return e(function(e){return{type:N,payload:e}}(t))}}}))((function(e){var t=e.countries,n=e.onItemSelected,r=e.addCountryToFavorites,o=e.removeCountryFromFavorites,c=t.map((function(e,t){var c=e.name,i=e.capital,u=e.languageName,s=e.alpha3Code;return a.a.createElement(pe.a,{key:c},a.a.createElement(pe.a.Header,null,a.a.createElement(le.a.Toggle,{as:he.a,variant:"link",eventKey:t},c)),a.a.createElement(le.a.Collapse,{eventKey:t},a.a.createElement(pe.a.Body,null,"The capital is ",i,". Language - ",u,a.a.createElement(ve.a,{className:"justify-content-space mt-3"},a.a.createElement(he.a,{variant:"primary",size:"sm",className:"mr-2",onClick:function(){return n(c)}},"More info"),a.a.createElement(he.a,{variant:"success",size:"sm",className:"mr-2",onClick:function(){return r(s)}},"Add to favorites"),a.a.createElement(he.a,{variant:"danger",size:"sm",className:"mr-2",onClick:function(){return o(s)}},"Remove from favorites")))))}));return a.a.createElement(le.a,null,c)})),ge=(n(94),function(e){function t(){return Object(F.a)(this,t),Object(P.a)(this,Object(M.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){this.updateItem()}},{key:"componentDidUpdate",value:function(e){this.props.itemName!==e.itemName&&this.updateItem()}},{key:"updateItem",value:function(){var e=this.props.itemName;e&&this.props.fetchCountry(e)}},{key:"render",value:function(){var e=this.props.country;if(!e)return a.a.createElement("span",null,"Select a country from a list");var t=e.name,n=e.capital,r=e.population,o=e.subregion,c=e.region,i=e.currencies,u=e.flag;return a.a.createElement("div",{className:"item-details card"},a.a.createElement("img",{className:"item-image",src:u,alt:"flag"}),a.a.createElement("div",{className:"card-body"},a.a.createElement("h4",null,t),a.a.createElement("ul",{className:"list-group list-group-flush"},i.map((function(e,t){return a.a.createElement("li",{className:"list-group-item",key:t},a.a.createElement("span",{className:"term"},"Currency: "),a.a.createElement("span",null,e.name,e.symbol?" - ".concat(e.symbol):null))})),a.a.createElement("li",{className:"list-group-item"},a.a.createElement("span",{className:"term"},"Capital: "),a.a.createElement("span",null,n)),a.a.createElement("li",{className:"list-group-item"},a.a.createElement("span",{className:"term"},"Population: "),a.a.createElement("span",null,r)),a.a.createElement("li",{className:"list-group-item"},a.a.createElement("span",{className:"term"},"Subregion: "),a.a.createElement("span",null,o)),a.a.createElement("li",{className:"list-group-item"},a.a.createElement("span",{className:"term"},"Region: "),a.a.createElement("span",null,c)))))}}]),t}(r.Component));var Ee=Object(ue.a)((function(e){return{country:e.countries.country,loading:e.countries.loading,error:e.countries.error}}),(function(e){return{fetchCountry:function(t){return e((n=t,function(){var e=Object(V.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:E}),q.getCountry(n).then((function(e){return t({type:b,payload:e})})).catch((function(e){return t({type:O})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));var n}}}))(ge),be=function(e){var t=e.leftSide,n=e.rightSide;return a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row mb2"},a.a.createElement("div",{className:"col-md-6"},t),a.a.createElement("div",{className:"col-md-6"},n)))},Oe=function(e){function t(){return Object(F.a)(this,t),Object(P.a)(this,Object(M.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchCountriesByRegion("africa")}},{key:"componentWillUnmount",value:function(){this.props.resetCountriesData()}},{key:"render",value:function(){var e=this.props,t=e.history,n=e.match.params.name;return a.a.createElement(be,{leftSide:a.a.createElement(ye,{onItemSelected:function(e){return t.push(e)}}),rightSide:a.a.createElement(Ee,{itemName:n})})}}]),t}(r.Component);var Ce=Object(ue.a)((function(e){return{countries:e.countries.countries,loading:e.countries.loading,error:e.countries.error}}),(function(e){return{fetchCountriesByRegion:function(t){return e(Q(t))},resetCountriesData:function(){return e(ee())}}}))(Oe),je=function(e){function t(){return Object(F.a)(this,t),Object(P.a)(this,Object(M.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchCountriesByRegion("americas")}},{key:"componentWillUnmount",value:function(){this.props.resetCountriesData()}},{key:"render",value:function(){var e=this.props,t=e.history,n=e.match.params.name;return a.a.createElement(be,{leftSide:a.a.createElement(ye,{onItemSelected:function(e){return t.push(e)}}),rightSide:a.a.createElement(Ee,{itemName:n})})}}]),t}(r.Component);var Ne=Object(ue.a)((function(e){return{countries:e.countries.countries,loading:e.countries.loading,error:e.countries.error}}),(function(e){return{fetchCountriesByRegion:function(t){return e(Q(t))},resetCountriesData:function(){return e(ee())}}}))(je),ke=function(e){function t(){return Object(F.a)(this,t),Object(P.a)(this,Object(M.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchCountriesByRegion("asia")}},{key:"componentWillUnmount",value:function(){this.props.resetCountriesData()}},{key:"render",value:function(){var e=this.props,t=e.history,n=e.match.params.name;return a.a.createElement(be,{leftSide:a.a.createElement(ye,{onItemSelected:function(e){return t.push(e)}}),rightSide:a.a.createElement(Ee,{itemName:n})})}}]),t}(r.Component);var Re=Object(ue.a)((function(e){return{countries:e.countries.countries,loading:e.countries.loading,error:e.countries.error}}),(function(e){return{fetchCountriesByRegion:function(t){return e(Q(t))},resetCountriesData:function(){return e(ee())}}}))(ke),we=function(e){function t(){return Object(F.a)(this,t),Object(P.a)(this,Object(M.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchCountriesByRegion("europe")}},{key:"componentWillUnmount",value:function(){this.props.resetCountriesData()}},{key:"render",value:function(){var e=this.props,t=e.history,n=e.match.params.name;return a.a.createElement(be,{leftSide:a.a.createElement(ye,{onItemSelected:function(e){return t.push(e)}}),rightSide:a.a.createElement(Ee,{itemName:n})})}}]),t}(r.Component);var Se=Object(ue.a)((function(e){return{countries:e.countries.countries,loading:e.countries.loading,error:e.countries.error}}),(function(e){return{fetchCountriesByRegion:function(t){return e(Q(t))},resetCountriesData:function(){return e(ee())}}}))(we),De=function(e){function t(){return Object(F.a)(this,t),Object(P.a)(this,Object(M.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchCountriesByRegion("oceania")}},{key:"componentWillUnmount",value:function(){this.props.resetCountriesData()}},{key:"render",value:function(){var e=this.props,t=e.history,n=e.match.params.name;return a.a.createElement(be,{leftSide:a.a.createElement(ye,{onItemSelected:function(e){return t.push(e)}}),rightSide:a.a.createElement(Ee,{itemName:n})})}}]),t}(r.Component);var _e=Object(ue.a)((function(e){return{countries:e.countries.countries,loading:e.countries.loading,error:e.countries.error}}),(function(e){return{fetchCountriesByRegion:function(t){return e(Q(t))},resetCountriesData:function(){return e(ee())}}}))(De),Te=function(e){function t(){return Object(F.a)(this,t),Object(P.a)(this,Object(M.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.favoriteCountries.join(";");this.props.fetchFavoritesCountries(e)}},{key:"componentDidUpdate",value:function(e){if(e.favoriteCountries.length!==this.props.favoriteCountries.length){var t=this.props.favoriteCountries.join(";");this.props.fetchFavoritesCountries(t)}}},{key:"componentWillUnmount",value:function(){this.props.resetCountriesData()}},{key:"render",value:function(){if(console.log(),!this.props.favoriteCountries.length)return a.a.createElement("div",{className:"alert alert-danger w-50 mx-auto my-5",role:"alert"},"The list of favorites countries is empty. Please add countries to your favorites!");var e=this.props,t=e.history,n=e.match.params.name;return a.a.createElement(be,{leftSide:a.a.createElement(ye,{onItemSelected:function(e){return t.push(e)}}),rightSide:a.a.createElement(Ee,{itemName:n})})}}]),t}(r.Component);var xe=Object(ue.a)((function(e){return{countries:e.countries.countries,loading:e.countries.loading,error:e.countries.error,favoriteCountries:e.countries.favoriteCountries}}),(function(e){return{fetchFavoritesCountries:function(t){return e((n=t,function(){var e=Object(V.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(X()),q.getFavoritesCountries(n).then((function(e){return t(Z(e))})).catch((function(e){return t($())}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));var n},resetCountriesData:function(){return e(ee())}}}))(Te),Be=function(e){function t(){return Object(F.a)(this,t),Object(P.a)(this,Object(M.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchCountriesByLanguage("en")}},{key:"componentWillUnmount",value:function(){this.props.resetCountriesData()}},{key:"render",value:function(){var e=this.props,t=e.history,n=e.match.params.name;return a.a.createElement(be,{leftSide:a.a.createElement(ye,{onItemSelected:function(e){return t.push(e)}}),rightSide:a.a.createElement(Ee,{itemName:n})})}}]),t}(r.Component);var Ue=Object(ue.a)((function(e){return{countries:e.countries.countries,loading:e.countries.loading,error:e.countries.error}}),(function(e){return{fetchCountriesByLanguage:function(t){return e(function(e){return function(){var t=Object(V.a)(z.a.mark((function t(n){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(X()),q.getCountriesByLanguage(e).then((function(e){return n(Z(e))})).catch((function(e){return n($(e))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},resetCountriesData:function(){return e(ee())}}}))(Be),Fe=(n(95),function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(ne,null,a.a.createElement(i.a,null,a.a.createElement(re,null),a.a.createElement(ie,null),a.a.createElement(U.c,null,a.a.createElement(U.a,{path:"/countries",exact:!0,render:function(){return a.a.createElement("h1",{className:"heading-text text-primary"},"Welcome to Countries Application")}}),a.a.createElement(U.a,{path:"/africa/:name?",component:Ce}),a.a.createElement(U.a,{path:"/americas/:name?",component:Ne}),a.a.createElement(U.a,{path:"/asia/:name?",component:Re}),a.a.createElement(U.a,{path:"/europe/:name?",component:Se}),a.a.createElement(U.a,{path:"/oceania/:name?",component:_e}),a.a.createElement(U.a,{path:"/countries-by-language/:name?",component:Ue}),a.a.createElement(U.a,{path:"/favorite-countries/:name?",component:xe}),a.a.createElement(U.a,{render:function(){return a.a.createElement("h1",{className:"heading-text text-danger"},"404",a.a.createElement("br",null),"Page not found")}})))))}),Ie=(n(96),Object(u.createStore)(B,Object(s.composeWithDevTools)(Object(u.applyMiddleware)(m.a)))),Pe=a.a.createElement(l.a,{store:Ie},a.a.createElement(i.a,null,a.a.createElement(Fe,null)));c.a.render(Pe,document.getElementById("countries"))}},[[60,1,2]]]);
//# sourceMappingURL=main.dfc3f57a.chunk.js.map