(this.webpackJsonptrybetunes=this.webpackJsonptrybetunes||[]).push([[0],{29:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(21),s=n.n(c),i=(n(29),n(4)),o=n(5),u=n(7),l=n(6),d=n(13),b=n(3),j=n(2),h=n.n(j),p=n(8),m=n(0),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)("p",{"animate-pulse":!0,flex:!0,"space-x-4":!0,children:"Carregando..."})})}}]),n}(a.Component),x=n(14),O="user",v=function(e){return localStorage.setItem(O,JSON.stringify(e))},g=function(e){return function(t){setTimeout((function(){t(e)}),1500)}},y=function(){return new Promise((function(e){var t=JSON.parse(localStorage.getItem(O));null===t&&(t={}),g(t)(e)}))},k=function(e){return new Promise((function(t){v(Object(x.a)(Object(x.a)({},{name:"",email:"",image:"",description:""}),e)),g("OK")(t)}))},w=function(e){return new Promise((function(t){v(Object(x.a)({},e)),g("OK")(t)}))},S=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).getUser=Object(p.a)(h.a.mark((function t(){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({load:!0}),t.next=3,y();case 3:n=t.sent,e.setState({user:n,load:!1});case 5:case"end":return t.stop()}}),t)}))),e.state={load:!1,user:{}},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getUser()}},{key:"render",value:function(){var e=this.state,t=e.load,n=e.user;return t?Object(m.jsx)(f,{}):Object(m.jsxs)("nav",{className:"bg-blue-600",children:[Object(m.jsx)("h1",{children:"Trybetunes"}),Object(m.jsx)("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",children:Object(m.jsx)("div",{className:"relative flex items-center justify-between h-16",children:Object(m.jsxs)("div",{className:"absolute inset-y-0 left-0 flex items-center",children:[Object(m.jsxs)("p",{className:"text-gray-100 block px-3 py-2 rounded-md text-base font-medium","data-testid":"header-user-name",children:["Usu\xe1rio: ",n.name]}),Object(m.jsx)(d.b,{to:"/TrybeTunes/search","data-testid":"link-to-search",className:"text-gray-100 hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium",children:"Search"}),Object(m.jsxs)(d.b,{to:"/TrybeTunes/favorites","data-testid":"link-to-favorites",className:"text-gray-100 hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium",children:["Favorites"," "]}),Object(m.jsx)(d.b,{to:"/TrybeTunes/profile","data-testid":"link-to-profile",className:"text-gray-100 hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium",children:" Profile "})]})})})]})}}]),n}(a.Component),C=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleCheckbox=function(){var t=Object(p.a)(h.a.mark((function t(n){var a,r,c,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=n.target.checked,r=e.props,c=r.removeOrAddSongs,s=r.music,c(s,a);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={load:!1},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.music,t=e.trackName,n=e.previewUrl,a=e.trackId,r=this.props.checked;return this.state.load?Object(m.jsx)(f,{}):Object(m.jsxs)("div",{children:[t,Object(m.jsxs)("audio",{"data-testid":"audio-component",src:n,controls:!0,children:[Object(m.jsx)("track",{kind:"captions"}),"O seu navegador n\xe3o suporta o elemento"," ",Object(m.jsx)("code",{children:"audio"}),"."]}),Object(m.jsxs)("label",{htmlFor:a,children:["Favorita",Object(m.jsx)("input",{name:"input",id:a,type:"checkbox","data-testid":"checkbox-music-".concat(a),onChange:this.handleCheckbox,checked:r})]})]})}}]),n}(a.Component),N=n(24),I="favorite_songs";JSON.parse(localStorage.getItem(I))||localStorage.setItem(I,JSON.stringify([]));var P=function(){return JSON.parse(localStorage.getItem(I))},A=function(e){return localStorage.setItem(I,JSON.stringify(e))},F=function(e){return function(t){setTimeout((function(){t(e)}),500)}},T=function(){return new Promise((function(e){var t=P();F(t)(e)}))},U=function(e){return new Promise((function(t){if(e){var n=P();A([].concat(Object(N.a)(n),[e]))}F("OK")(t)}))},D=function(e){return new Promise((function(t){var n=P();A(n.filter((function(t){return t.trackId!==e.trackId}))),F("OK")(t)}))},J=function(){var e=Object(p.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://itunes.apple.com/lookup?id=".concat(t,"&entity=song"));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=J,z=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).componentDidMount=function(){e.handleIdSongs(),e.handleFavoriteSongs()},e.handleIdSongs=Object(p.a)(h.a.mark((function t(){var n,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props.match.params.id,t.next=3,M(n);case 3:a=t.sent,e.setState({musics:a});case 5:case"end":return t.stop()}}),t)}))),e.handleFavoriteSongs=Object(p.a)(h.a.mark((function t(){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T();case 2:n=t.sent,e.setState({favorites:n,load:!1});case 4:case"end":return t.stop()}}),t)}))),e.removeOrAddSongs=function(){var t=Object(p.a)(h.a.mark((function t(n,a){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({load:!0}),t.next=3,a?U(n):D(n);case 3:e.handleFavoriteSongs();case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.state={musics:[],load:!0,favorites:[]},e}return Object(o.a)(n,[{key:"handleSection",value:function(e){var t=this,n=e.musics,a=e.favorites;return Object(m.jsxs)("section",{children:[Object(m.jsx)("p",{"data-testid":"artist-name",children:n[0].artistName}),Object(m.jsx)("p",{"data-testid":"album-name",children:n[0].collectionName}),n.slice(1).map((function(e){return Object(m.jsx)(C,{checked:a.some((function(t){return e.trackId===t.trackId})),music:e,removeOrAddSongs:t.removeOrAddSongs},e.collectionId)}))]})}},{key:"render",value:function(){var e=this.state.load;return Object(m.jsxs)("div",{"data-testid":"page-album",children:[Object(m.jsx)(S,{}),e?Object(m.jsx)(f,{}):this.handleSection(this.state)]})}}]),n}(a.Component),E=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleFavoriteSongs=Object(p.a)(h.a.mark((function t(){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T();case 2:n=t.sent,e.setState({favorites:n,load:!1});case 4:case"end":return t.stop()}}),t)}))),e.removeOrAddSongs=function(){var t=Object(p.a)(h.a.mark((function t(n,a){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({load:!0}),t.next=3,a?U(n):D(n);case 3:e.handleFavoriteSongs();case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.state={load:!1,favorites:[]},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.handleFavoriteSongs()}},{key:"handleSection",value:function(e){var t=this,n=e.favorites;return Object(m.jsx)("section",{children:n.map((function(e){return Object(m.jsx)(C,{checked:n.some((function(t){return e.trackId===t.trackId})),music:e,removeOrAddSongs:t.removeOrAddSongs},e.collectionId)}))})}},{key:"render",value:function(){var e=this.state.load;return Object(m.jsxs)("div",{"data-testid":"page-favorites",children:[Object(m.jsx)(S,{}),e?Object(m.jsx)(f,{}):this.handleSection(this.state)]})}}]),n}(a.Component),G=n(15),K=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState({criarUsuario:Object(G.a)({},a,r)})},e.handleClick=Object(p.a)(h.a.mark((function t(){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.criarUsuario,e.setState({load:!0}),t.next=4,k(n);case 4:e.setState({load:!1,redirect:!0});case 5:case"end":return t.stop()}}),t)}))),e.state={criarUsuario:{name:""},load:!1,redirect:!1},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.redirect,n=e.load,a=e.criarUsuario;return n?Object(m.jsx)(f,{}):t?Object(m.jsx)(b.a,{to:"/search"}):Object(m.jsx)("div",{"data-testid":"page-login",className:"min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:Object(m.jsxs)("div",{className:"max-w-md w-full space-y-8",children:[Object(m.jsx)("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Digite seu nome"}),Object(m.jsx)("form",{className:"mt-8 space-y-6",children:Object(m.jsxs)("label",{htmlFor:"name",children:[Object(m.jsx)("div",{className:"rounded-md shadow-sm -space-y-px",children:Object(m.jsx)("input",{className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-600 focus:border-blue-600 focus:z-10 sm:text-sm",placeholder:"Nome",name:"name","data-testid":"login-name-input",onChange:this.handleChange})}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{"data-testid":"login-submit-button",type:"button",disabled:a.name.length<3,onClick:this.handleClick,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Entrar"})]})})]})})}}]),n}(a.Component),B=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{"data-testid":"page-not-found",children:Object(m.jsx)("p",{children:"Page Not Found"})})}}]),n}(a.Component),R=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleGetUser=Object(p.a)(h.a.mark((function t(){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({load:!0}),t.next=3,y();case 3:n=t.sent,e.setState({load:!1,user:n});case 5:case"end":return t.stop()}}),t)}))),e.userProfile=function(){var t=e.state.user,n=t.name,a=t.email,r=t.image,c=t.description;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("p",{children:n}),Object(m.jsx)("p",{children:a}),Object(m.jsx)("img",{src:r,alt:"Profile","data-testid":"profile-image"}),Object(m.jsx)("p",{children:c})]})},e.state={load:!1,user:{}},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.handleGetUser()}},{key:"render",value:function(){var e=this.state.load;return Object(m.jsxs)("div",{"data-testid":"page-profile",children:[Object(m.jsx)(S,{}),e?Object(m.jsx)(f,{}):this.userProfile(),Object(m.jsx)(d.b,{to:"/TrybeTunes/profile/edit",children:" Editar perfil "})]})}}]),n}(a.Component),V=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleGetUser=Object(p.a)(h.a.mark((function t(){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y();case 2:n=t.sent,e.setState({load:!1,user:n});case 4:case"end":return t.stop()}}),t)}))),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState((function(e){var t=e.user;return{user:Object(x.a)(Object(x.a)({},t),{},Object(G.a)({},a,r))}}))},e.enableButton=function(){var t=e.state.user,n=Object.values(t);return n.length<4||(!e.emailValidation()||n.some((function(e){return!e.length})))},e.emailValidation=function(){var t=e.state.user.email;return/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(t)},e.handleClick=Object(p.a)(h.a.mark((function t(){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.user,e.setState({load:!0}),t.next=4,w(n);case 4:e.setState({load:!1,redirect:!0});case 5:case"end":return t.stop()}}),t)}))),e.state={load:!0,user:{name:"",email:"",description:"",image:""}},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.handleGetUser()}},{key:"editProfileForm",value:function(){var e=this.state.user,t=e.name,n=e.email,a=e.image,r=e.description;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("input",{"data-testid":"edit-input-name",type:"text",value:t,name:"name",onChange:this.handleChange}),Object(m.jsx)("input",{"data-testid":"edit-input-email",type:"text",value:n,name:"email",onChange:this.handleChange}),Object(m.jsx)("input",{"data-testid":"edit-input-description",type:"text",value:r,name:"description",onChange:this.handleChange}),Object(m.jsx)("input",{"data-testid":"edit-input-image",type:"text",value:a,name:"image",onChange:this.handleChange}),Object(m.jsxs)("button",{"data-testid":"edit-button-save",type:"button",disabled:this.enableButton(),onClick:this.handleClick,children:[" ","Salvar"," "]})]})}},{key:"render",value:function(){var e=this.state,t=e.load;return e.redirect?Object(m.jsx)(b.a,{to:"/TrybeTunes/profile"}):Object(m.jsxs)("div",{"data-testid":"page-profile-edit",children:[Object(m.jsx)(S,{}),t?Object(m.jsx)(f,{}):this.editProfileForm()]})}}]),n}(a.Component),q=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.artworkUrl100,n=e.collectionName,a=e.artistName,r=e.collectionId;return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{width:"150px",src:t,alt:"".concat(n," de ").concat(a)}),Object(m.jsx)(d.b,{to:"/album/".concat(r),"data-testid":"link-to-album-".concat(r),children:n})]},t)})}}]),n}(a.Component),$=function(){var e=Object(p.a)(h.a.mark((function e(t){var n,a,r,c,s,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURI(t).replaceAll("%20","+"),a="https://itunes.apple.com/search?entity=album&term=".concat(n,"&attribute=allArtistTerm"),e.next=4,fetch(a);case 4:return r=e.sent,e.next=7,r.json();case 7:return c=e.sent,s=c.results,i=s.map((function(e){return{artistId:e.artistId,artistName:e.artistName,collectionId:e.collectionId,collectionName:e.collectionName,collectionPrice:e.collectionPrice,artworkUrl100:e.artworkUrl100,releaseDate:e.releaseDate,trackCount:e.trackCount}})),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=$,H=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(G.a)({},a,r))},e.handleClick=Object(p.a)(h.a.mark((function t(){var n,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.searchInput,e.setState({load:!0,artistName:n}),t.next=4,_(n);case 4:a=t.sent,e.setState({searchAlbuns:a,loadAPI:!0,load:!1,searchInput:""});case 6:case"end":return t.stop()}}),t)}))),e.handleStateCondition=function(t){var n=t.loadAPI,a=t.searchAlbuns,r=t.load,c=t.artistName;return r?Object(m.jsx)(f,{}):n&&!a.length?Object(m.jsx)("p",{children:"Nenhum \xe1lbum foi encontrado"}):n?Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:"Resultado de \xe1lbuns de: ".concat(c)}),e.handleAlbumMap(a)]},"a"):void 0},e.state={searchInput:"",load:!1,searchAlbuns:{},loadAPI:!1},e}return Object(o.a)(n,[{key:"handleAlbumMap",value:function(e){return e.map((function(e){return Object(a.createElement)(q,Object(x.a)(Object(x.a)({},e),{},{key:e.trackId}))}))}},{key:"render",value:function(){var e=this.state.searchInput;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(S,{}),Object(m.jsx)("div",{"data-testid":"page-search",className:"min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:Object(m.jsxs)("div",{className:"max-w-md w-full space-y-8",children:[Object(m.jsx)("div",{children:Object(m.jsx)("label",{htmlFor:"searchInput",children:Object(m.jsx)("input",{name:"searchInput","data-testid":"search-artist-input",onChange:this.handleChange,value:e,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"})})}),Object(m.jsx)("button",{"data-testid":"search-artist-button",type:"button",disabled:e.length<2,onClick:this.handleClick,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Pesquisar Albuns"}),this.handleStateCondition(this.state)]})})]})}}]),n}(a.Component),L=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsx)(d.a,{basename:"/TrybeTunes",children:Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.b,{exact:!0,path:"/",component:K}),Object(m.jsx)(b.b,{path:"/search",component:H}),Object(m.jsx)(b.b,{path:"/album/:id",component:z}),Object(m.jsx)(b.b,{path:"/favorites",component:E}),Object(m.jsx)(b.b,{path:"/profile/edit",component:V}),Object(m.jsx)(b.b,{path:"/profile",component:R}),Object(m.jsx)(b.b,{component:B})]})})}}]),n}(r.a.Component),Q=L;s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(Q,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.fe6e7c9a.chunk.js.map