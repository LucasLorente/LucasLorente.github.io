(function(t){function e(e){for(var o,i,s=e[0],c=e[1],u=e[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1fe2":function(t,e,n){"use strict";var o=n("202e"),r=n.n(o);r.a},"202e":function(t,e,n){},"402d":function(t,e,n){"use strict";var o=n("4bc8"),r=n.n(o);r.a},"4bc8":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view",{staticClass:"margin"})],1)},a=[],i={name:"app"},s=i,c=(n("5c0b"),n("2877")),u=Object(c["a"])(s,r,a,!1,null,null,null),l=u.exports,p=n("0874"),f=n("8c4f"),d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row contenido"},[o("img",{staticClass:"img-fluid col-xl-6 col-12",attrs:{src:n("cf05"),alt:"Pokemon",id:"logo"}}),o("br"),o("h1",{staticClass:"col-xl-5 col-12",attrs:{id:"subtitulo"}},[t._v("Generaciones")]),o("div",{staticClass:"col-12",attrs:{role:"group"}},[o("router-link",{staticClass:"btn boton",attrs:{type:"button",to:{name:"generacion",params:{idGeneracion:1}}}},[t._v("1")]),o("router-link",{staticClass:"btn boton",attrs:{type:"button",to:{name:"generacion",params:{idGeneracion:2}}}},[t._v("2")]),o("router-link",{staticClass:"btn boton",attrs:{type:"button",to:{name:"generacion",params:{idGeneracion:3}}}},[t._v("3")]),o("router-link",{staticClass:"btn boton",attrs:{type:"button",to:{name:"generacion",params:{idGeneracion:4}}}},[t._v("4")]),o("router-link",{staticClass:"btn boton",attrs:{type:"button",to:{name:"generacion",params:{idGeneracion:5}}}},[t._v("5")]),o("router-link",{staticClass:"btn boton",attrs:{type:"button",to:{name:"generacion",params:{idGeneracion:6}}}},[t._v("6")]),o("router-link",{staticClass:"btn boton",attrs:{type:"button",to:{name:"generacion",params:{idGeneracion:7}}}},[t._v("7")])],1),o("router-view")],1)},m=[],b={},v=b,g=(n("1fe2"),Object(c["a"])(v,d,m,!1,null,"37938586",null)),h=g.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row contenido"},[n("a",{staticClass:"botonAtras",on:{click:function(e){return t.$router.go(-1)}}},[n("v-icon",{staticClass:"icono",attrs:{name:"arrow-circle-left"}})],1),n("h1",{staticClass:"titulo"},[t._v("Equipo")])]),n("div",{staticClass:"row d-flex justify-content-center m-0"},[t._l(t.listaFavoritos,(function(t,e){return n("pokemonCard",{key:e,staticClass:"col-8 col-sm-4 col-md-4 col-lg-3 col-xl-2",attrs:{pokemon:t,pokemonInfo:"pokemonInfoEquipo"}})})),n("router-view")],2)])},k=[],y=(n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card m-2"},[n("img",{staticClass:"card-img-top img-fluid",attrs:{src:t.pokemon.image}}),n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v(t._s(t.pokemon.name))]),t.isFavoritos()?n("button",{staticClass:"btn btn-danger",on:{click:function(e){return t.eliminarFavorito(t.pokemon.id)}}},[t._v("Eliminar")]):t._e(),n("router-link",{staticClass:"btn btn-dark",staticStyle:{opacity:"0"},attrs:{to:{name:t.pokemonInfo,params:{id:t.pokemon.id.toString(),url:t.pokemon.url}}}},[t._v("Información")])],1)])},C=[],j=(n("b0c0"),{props:{pokemon:Object,pokemonInfo:String},methods:{isFavoritos:function(){return"favoritos"===this.$route.name},eliminarFavorito:function(t){this.$store.dispatch("removeFavorito",t)}}}),w=j,P=(n("892f"),Object(c["a"])(w,_,C,!1,null,"290bd337",null)),E=P.exports,x=n("2f62");n("94e4");function T(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?T(Object(n),!0).forEach((function(e){Object(y["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var I={components:{pokemonCard:E},computed:S({},Object(x["c"])(["listaFavoritos"]))},F=I,D=(n("fadf"),Object(c["a"])(F,O,k,!1,null,"2d60054a",null)),$=D.exports,A=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("navbar"),o("div",{staticClass:"container-fluid todo"},[o("img",{staticClass:"img-fluid",attrs:{src:n("cf05"),alt:"Pokemon",id:"logo"}}),o("br"),o("span",{attrs:{id:"selector"}},[t._v("generaciones")]),o("br"),o("div",{staticClass:"btn-group",attrs:{role:"group"}},[o("button",{staticClass:"btn boton",attrs:{type:"button"},on:{click:function(e){return t.listar(1)}}},[t._v("1")]),o("button",{staticClass:"btn boton",attrs:{type:"button"},on:{click:function(e){return t.listar(2)}}},[t._v("2")]),o("button",{staticClass:"btn boton",attrs:{type:"button"},on:{click:function(e){return t.listar(3)}}},[t._v("3")]),o("button",{staticClass:"btn boton",attrs:{type:"button"},on:{click:function(e){return t.listar(4)}}},[t._v("4")]),o("button",{staticClass:"btn boton",attrs:{type:"button"},on:{click:function(e){return t.listar(5)}}},[t._v("5")]),o("button",{staticClass:"btn boton",attrs:{type:"button"},on:{click:function(e){return t.listar(6)}}},[t._v("6")]),o("button",{staticClass:"btn boton",attrs:{type:"button"},on:{click:function(e){return t.listar(7)}}},[t._v("7")])]),o("div",{staticClass:"row d-flex justify-content-center"},[t._l(t.listaPokemons,(function(t,e){return o("pokemonCard",{key:e,staticClass:"col-8 col-md-3 col-lg-3 col-xl-2",attrs:{pokemon:t,pokemonInfo:"pokemonInfoListado"}})})),o("router-view")],2)])],1)},G=[],R=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{attrs:{id:"navbar",role:"navigation"}},[o("ul",{staticClass:"row",attrs:{id:"navbar-nav"}},[o("li",{staticClass:"col-12 col-md-6",attrs:{id:"navegadorPrincipal"}},[o("img",{staticClass:"img-fluid rounded-circle",attrs:{id:"logo",src:n("93d3"),width:"90px"}}),o("div",{staticClass:"input-group",attrs:{id:"buscador"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.filtroPokemon,expression:"filtroPokemon"}],staticClass:"form-control",attrs:{type:"text",id:"inputBuscar",placeholder:"Buscar"},domProps:{value:t.filtroPokemon},on:{input:function(e){e.target.composing||(t.filtroPokemon=e.target.value)}}})]),o("button",{staticClass:"btn",attrs:{id:"botonDesplegar"},on:{click:t.desplegar}},[o("v-icon",{attrs:{name:"chevron-circle-down",scale:"2"}})],1)]),o("div",{staticClass:"col-md-6",attrs:{id:"desplegable"}},[o("li",{staticClass:"col-12 col-md-6"},[o("router-link",{attrs:{to:"/"}},[t._v("Pokemon")])],1),o("li",{staticClass:"col-12 col-md-6"},[o("router-link",{attrs:{to:"/equipo"}},[t._v("Equipo")])],1)])])])},L=[],V=(n("e187"),n("1157"));window.$=V;var q={name:"navbar",computed:{filtroPokemon:{get:function(){return this.$store.filtro},set:function(){this.$store.commit("SET_FILTRO",event.target.value)}}},methods:{desplegar:function(){V("#desplegable").is(":hidden")?V("#desplegable").slideDown(300):V("#botonDesplegar").is(":visible")&&V("#desplegable").slideUp(300)}}},M=q,N=(n("ca48"),Object(c["a"])(M,R,L,!1,null,"7141ed7f",null)),K=N.exports;function B(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function J(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?B(Object(n),!0).forEach((function(e){Object(y["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var U={components:{pokemonCard:E,navbar:K},computed:J({},Object(x["b"])(["GET_FILTRADO"]),{listaPokemons:function(){return this.$store.getters.GET_FILTRADO}}),methods:{listar:function(t){this.$route.params.idGeneracion!=t&&(this.$store.dispatch("fetchPokemons",t),this.$router.push("/generacion/"+t))}},beforeCreate:function(){this.$store.dispatch("fetchPokemons",this.$route.params.idGeneracion)}},z=U,H=(n("6a93"),Object(c["a"])(z,A,G,!1,null,"4d40fca8",null)),Q=H.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal"},[n("div",{staticClass:"container pokemon"},[n("div",[n("img",{staticClass:"img-fluid",attrs:{src:t.seleccionado.image,alt:t.seleccionado.name}})]),n("div",{staticClass:"grupo"},[n("div",{staticClass:"infoPokemon"},[n("h1",[t._v(t._s(t.seleccionado.name))]),t._l(t.seleccionado.types,(function(e){return n("p",{key:e,attrs:{id:"tipo"}},[t._v("Tipo: "+t._s(e))])})),n("p",[t._v("Peso: "+t._s(t.seleccionado.weight))]),n("br")],2),n("div",{staticClass:"botones"},[t.verificar?n("button",{staticClass:"btn btn-dark",on:{click:t.agregar}},[t._v("Agregar a Equipo")]):n("p",{attrs:{id:"mensajeAgregado"}},[t._v("Agregado al equipo")]),n("button",{staticClass:"btn btn-danger",on:{click:function(e){t.$router.go(-1),t.vaciar()}}},[t._v("Atrás")])])])])])},X=[];function Y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function Z(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Y(Object(n),!0).forEach((function(e){Object(y["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var tt={computed:Z({},Object(x["c"])(["seleccionado"]),{},Object(x["b"])(["GET_FAVORITOS_ID"]),{verificar:function(){return-1==this.$store.getters.GET_FAVORITOS_ID(this.seleccionado.id)}}),methods:{vaciar:function(){this.$store.dispatch("fetchSeleccionado",0),document.body.style.overflow="auto"},agregar:function(){this.$store.dispatch("commitFavorito",this.seleccionado)}},created:function(){var t=this.$route.params.url;this.$store.dispatch("fetchSeleccionado",t),document.body.style.overflow="hidden"}},et=tt,nt=(n("402d"),Object(c["a"])(et,W,X,!1,null,"2feeddc6",null)),ot=nt.exports;o["a"].use(f["a"]);var rt=[{path:"/",name:"principal",component:h},{path:"/generacion/:idGeneracion",name:"generacion",component:Q,children:[{path:"pokemon/:id",name:"pokemonInfoListado",component:ot}]},{path:"/equipo",name:"favoritos",component:$,children:[{path:"pokemon/:id",name:"pokemonInfoEquipo",component:ot}]}],at=new f["a"]({routes:rt,mode:"history"}),it=(n("c740"),n("caad"),n("d81d"),n("a434"),n("d3b7"),n("2532"),n("96cf"),n("1da1"));o["a"].use(x["a"]);var st=new x["a"].Store({state:{listaPokemons:[],listaFavoritos:[],filtro:"",seleccionado:{}},getters:{GET_FAVORITOS:function(t){return t.listaFavoritos},GET_FAVORITOS_ID:function(t,e){return function(t){return e.GET_FAVORITOS.findIndex((function(e){return e.id===t}))}},GET_FILTRADO:function(t){return""==t.filtro?t.listaPokemons:t.listaPokemons.filter((function(e){return e.name.includes(t.filtro.toLowerCase())}))}},actions:{fetchPokemons:function(){var t=Object(it["a"])(regeneratorRuntime.mark((function t(e,n){var o,r,a,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:o=e.commit,a=0,t.t0=n,t.next=1===t.t0?5:2===t.t0?9:3===t.t0?14:4===t.t0?19:5===t.t0?24:6===t.t0?29:7===t.t0?34:39;break;case 5:return t.next=7,fetch("https://pokeapi.co/api/v2/pokemon?limit=151");case 7:return r=t.sent,t.abrupt("break",39);case 9:return t.next=11,fetch("https://pokeapi.co/api/v2/pokemon?offset=151&limit=100");case 11:return r=t.sent,a=151,t.abrupt("break",39);case 14:return t.next=16,fetch("https://pokeapi.co/api/v2/pokemon?offset=251&limit=135");case 16:return r=t.sent,a=251,t.abrupt("break",39);case 19:return t.next=21,fetch("https://pokeapi.co/api/v2/pokemon?offset=386&limit=107");case 21:return r=t.sent,a=386,t.abrupt("break",39);case 24:return t.next=26,fetch("https://pokeapi.co/api/v2/pokemon?offset=493&limit=156");case 26:return r=t.sent,a=493,t.abrupt("break",39);case 29:return t.next=31,fetch("https://pokeapi.co/api/v2/pokemon?offset=649&limit=72");case 31:return r=t.sent,a=649,t.abrupt("break",39);case 34:return t.next=36,fetch("https://pokeapi.co/api/v2/pokemon?offset=721&limit=86");case 36:return r=t.sent,a=721,t.abrupt("break",39);case 39:return t.next=41,r.json();case 41:i=t.sent,s=i.results.map((function(t,e){return{name:t.name,id:a+e,image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(a+e+1,".png"),url:t.url}})),o("SET_POKEMONS",s);case 44:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),fetchSeleccionado:function(){var t=Object(it["a"])(regeneratorRuntime.mark((function t(e,n){var o,r,a,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(o=e.commit,0!=n){t.next=5;break}o("SET_SELECCIONADO",{}),t.next=14;break;case 5:return t.next=7,fetch(n);case 7:return r=t.sent,t.next=10,r.json();case 10:a=t.sent,i=a.types.map((function(t){return t.type.name})),s={name:a.name,id:a.id,image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+a.id+".png",types:i,weight:a.weight+" Kilogramos",url:n},o("SET_SELECCIONADO",s);case 14:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),commitFavorito:function(t,e){var n=t.commit,o=t.getters;o.GET_FAVORITOS.length<=5&&n("SET_FAVORITO",e)},removeFavorito:function(t,e){var n=t.commit,o=t.getters,r=o.GET_FAVORITOS,a=r.findIndex((function(t){return t.id===e}));r.splice(a,1),n("DELETE_FAVORITO",r)}},mutations:{SET_POKEMONS:function(t,e){t.listaPokemons=e},SET_SELECCIONADO:function(t,e){t.seleccionado=e},SET_FAVORITO:function(t,e){t.listaFavoritos.push(e)},SET_FILTRO:function(t,e){t.filtro=e},DELETE_FAVORITO:function(t,e){t.listaFavoritos=e}}});o["a"].component("v-icon",p["a"]),o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(l)},router:at,store:st}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),r=n.n(o);r.a},"6a93":function(t,e,n){"use strict";var o=n("8320"),r=n.n(o);r.a},8320:function(t,e,n){},"892f":function(t,e,n){"use strict";var o=n("fa9d"),r=n.n(o);r.a},"8f9d":function(t,e,n){},"93d3":function(t,e,n){t.exports=n.p+"img/Pokeball.eefa14c7.svg"},"9c0c":function(t,e,n){},a3ce:function(t,e,n){},ca48:function(t,e,n){"use strict";var o=n("a3ce"),r=n.n(o);r.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.8d5e7c5b.png"},fa9d:function(t,e,n){},fadf:function(t,e,n){"use strict";var o=n("8f9d"),r=n.n(o);r.a}});
//# sourceMappingURL=app.5358c23c.js.map