(this["webpackJsonpclothing-store"]=this["webpackJsonpclothing-store"]||[]).push([[0],{51:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var c=n(6),i=n.n(c),a=n(32),r=n.n(a),s=(n(51),n(0)),l=n.n(s),o=n(13),b=n(1),d=n(12),j=(n(53),n(54),n(26)),u=(n(55),n(21)),m=(n(56),n(4)),p=function(e){var t=e.title,n=e.imageUrl,c=e.size,i=e.linkUrl;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(u.b,{to:i,className:"".concat(c," menu-item"),children:[Object(m.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("h1",{className:"title",children:t}),Object(m.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})})},h=n(14),g=["id"],O=function(){var e=Object(h.c)((function(e){return e.directory.sections}));return Object(m.jsx)("div",{className:"directory-menu",children:e.map((function(e){var t=e.id,n=Object(j.a)(e,g);return Object(m.jsx)(p,Object(o.a)({},n),t)}))})},f=function(){return Object(m.jsx)("div",{className:"homepage",children:Object(m.jsx)(O,{})})},x=function(){return Object(m.jsx)("div",{className:"shop-page",children:Object(m.jsx)(d.b,{})})},v=n.p+"static/media/logo.835f9813.png",N=(n(63),n(64),n.p+"static/media/shopping-bag.cfde1dec.svg"),w="TOGGLE_CART_HIDDEN",k="ADD_ITEM",y="CLEAR_ITEM_FROM_CART",U="REMOVE_ITEM",C=function(){return{type:w}},S=function(e){return{type:k,payload:e}},B=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.cart.cartItems.reduce((function(e,t){return e+t.quantity}),0)}));return Object(m.jsxs)("div",{className:"cart-icon",onClick:function(){return e(C())},children:[Object(m.jsx)("img",{src:N,alt:"cart",className:"shopping-icon"}),Object(m.jsx)("span",{className:"item-count",children:t})]})},I=(n(65),n(66),["children","isGoogleSignIn","inverted"]),T=function(e){var t=e.children,n=e.isGoogleSignIn,c=e.inverted,i=Object(j.a)(e,I);return Object(m.jsx)("button",Object(o.a)(Object(o.a)({className:"".concat(c?"inverted":"").concat(n?"google-sign-in":""," custom-button")},i),{},{children:t}))},M=(n(67),function(e){var t=e.item,n=t.imageUrl,c=t.price,i=t.name,a=t.quantity;return Object(m.jsxs)("div",{className:"cart-item",children:[Object(m.jsx)("img",{src:n,alt:"item"}),Object(m.jsxs)("div",{className:"item-details",children:[Object(m.jsx)("span",{className:"name",children:i}),Object(m.jsxs)("span",{className:"price",children:[a," x $",c]})]})]})}),D=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.cart.cartItems}));return Object(m.jsxs)("div",{className:"cart-dropdown",children:[Object(m.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(m.jsx)(M,{item:e},e.id)})):Object(m.jsx)("span",{className:"empty-message",children:"Your Cart is Empty"})}),Object(m.jsx)(u.b,{to:"/Clothing-Store-Website/checkout",className:"checkout-button",children:Object(m.jsx)(T,{onClick:function(){return e(C())},children:"GO TO CHECKOUT"})})]})},G=n(43),E=n(28),H=n(24),P=Object(G.a)({apiKey:"AIzaSyAY0AwA4tESLVbcYX1t9KGiG8zWq-5Ta_Q",authDomain:"clothing-store-584cd.firebaseapp.com",projectId:"clothing-store-584cd",storageBucket:"clothing-store-584cd.appspot.com",messagingSenderId:"3559620519",appId:"1:3559620519:web:e853687b3e1b632583c082"}),q=Object(E.c)(P),A=Object(H.c)(),W=new H.a;W.setCustomParameters({prompt:"select_account"});var J=function(){var e=Object(b.a)(l.a.mark((function e(t,n){var c,i,a,r,s,b;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return c=Object(E.a)(q,"users/".concat(t.uid)),e.next=5,Object(E.b)(c);case 5:if(i=e.sent,a=t.displayName,r=t.email,s=new Date,b=Object(o.a)({displayName:a,email:r,createdAt:s},n),i.exists()){e.next=18;break}return e.prev=10,e.next=13,Object(E.e)(c,b,{merge:!0});case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(10),console.log("Error"+e.t0);case 18:return e.abrupt("return",c);case 19:case"end":return e.stop()}}),e,null,[[10,15]])})));return function(t,n){return e.apply(this,arguments)}}(),R=function(){return Object(H.e)(A,W).then((function(e){var t=H.a.credentialFromResult(e),n=t.accessToken,c=e.user;console.log("Credential"+t+"Token "+n+"User "+c)})).catch((function(e){var t=e.code,n=e.message,c=e.email,i=H.a.credentialFromError(e);console.log("ErrorCode "+t+"ErrorMessage "+n+"ErrorEmail "+c+"ErrorCredential "+i)}))},V=function(){var e=Object(h.c)((function(e){return e.user.currentUser})),t=Object(h.c)((function(e){return e.cart.hidden}));return Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)(u.b,{to:"/clothing-store",className:"logo-container",children:Object(m.jsx)("img",{src:v,alt:"brand",className:"logo"})}),Object(m.jsxs)("div",{className:"options",children:[Object(m.jsx)(u.b,{className:"option",to:"/clothing-store/shop",children:"SHOP"}),Object(m.jsx)(u.b,{className:"option",to:"/clothing-store/contact",children:"CONTACT"}),e?Object(m.jsx)("div",{className:"option",onClick:function(){return A.signOut()},children:"SIGN OUT"}):Object(m.jsx)(u.b,{to:"/clothing-store/signin",className:"option",children:"SIGN IN"}),Object(m.jsx)(B,{})]}),t?null:Object(m.jsx)(D,{})]})},Y=(n(69),n(11)),F=(n(70),n(71),["handleChange","label"]),L=function(e){var t=e.handleChange,n=e.label,c=Object(j.a)(e,F);return Object(m.jsxs)("div",{className:"group",children:[Object(m.jsx)("input",Object(o.a)({className:"form-input",onChange:t},c)),n?Object(m.jsx)("label",{className:"".concat(c.value.length?"shrink":""," form-input-label"),children:n}):null]})},_=function(){var e=Object(c.useState)(""),t=Object(Y.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(""),r=Object(Y.a)(a,2),s=r[0],o=r[1],d=function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,Object(H.d)(A,n,s);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:i(""),o("");case 11:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.target,n=t.name,c=t.value;"email"===n?i(c):o(c)};return Object(m.jsxs)("div",{className:"sign-in",children:[Object(m.jsx)("h2",{children:"I already have an account"}),Object(m.jsx)("span",{className:"title",children:"Sign in with your email and password"}),Object(m.jsxs)("form",{onSubmit:d,children:[Object(m.jsx)(L,{type:"email",id:"email",name:"email",value:n,label:"Email",handleChange:j,required:!0}),Object(m.jsx)(L,{type:"password",id:"password",name:"password",value:s,label:"Password",handleChange:j,required:!0}),Object(m.jsxs)("div",{className:"button-container",children:[Object(m.jsx)(T,{type:"submit",value:"submit form",children:"Sign In"}),Object(m.jsx)(T,{onClick:R,isGoogleSignIn:!0,children:"Sign In With Google"})]})]})]})},z=(n(72),function(){var e=Object(c.useState)(""),t=Object(Y.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(""),r=Object(Y.a)(a,2),s=r[0],o=r[1],d=Object(c.useState)(""),j=Object(Y.a)(d,2),u=j[0],p=j[1],h=Object(c.useState)(""),g=Object(Y.a)(h,2),O=g[0],f=g[1],x=function(){var e=Object(b.a)(l.a.mark((function e(t){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),u===O){e.next=4;break}return alert("Passwords don't Match"),e.abrupt("return");case 4:return e.prev=4,e.next=7,Object(H.b)(A,s,u);case 7:return c=e.sent,a=c.user,e.next=11,J(a,{displayName:n});case 11:i(""),o(""),p(""),f(""),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(4),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),v=function(e){var t=e.target,n=t.name,c=t.value;"displayName"===n?i(c):"email"===n?o(c):"password"===n?p(c):f(c)};return Object(m.jsxs)("div",{className:"sign-up",children:[Object(m.jsx)("h2",{className:"title",children:"I do not have an account"}),Object(m.jsx)("span",{children:"Sign up with your email and password"}),Object(m.jsxs)("form",{className:"sign-up-form",onSubmit:x,children:[Object(m.jsx)(L,{type:"text",name:"displayName",value:n,handleChange:v,label:"Display Name",required:!0}),Object(m.jsx)(L,{type:"email",name:"email",value:s,handleChange:v,label:"Email",required:!0}),Object(m.jsx)(L,{type:"password",name:"password",value:u,handleChange:v,label:"Password",required:!0}),Object(m.jsx)(L,{type:"password",name:"confirmPassword",value:O,handleChange:v,label:"Confirm Password",required:!0}),Object(m.jsx)(T,{type:"submit",children:"SIGN UP"})]})]})}),K=function(){return Object(m.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(m.jsx)(_,{}),Object(m.jsx)(z,{})]})},Q=(n(73),n(74),function(e){var t=e.cartItem,n=Object(h.b)(),c=t.name,i=t.imageUrl,a=t.price,r=t.quantity;return Object(m.jsxs)("div",{className:"checkout-item",children:[Object(m.jsx)("div",{className:"image-container",children:Object(m.jsx)("img",{src:i,alt:"item"})}),Object(m.jsx)("span",{className:"name",children:c}),Object(m.jsxs)("span",{className:"quantity",children:[Object(m.jsx)("div",{className:"arrow",onClick:function(){return n({type:U,payload:t})},children:"\u276e"}),Object(m.jsx)("span",{className:"value",children:r}),Object(m.jsx)("div",{className:"arrow",onClick:function(){return n(S(t))},children:"\u276f"})]}),Object(m.jsx)("span",{className:"price",children:a}),Object(m.jsx)("div",{className:"remove-button",onClick:function(){return n({type:y,payload:t})},children:"\u2715"})]})}),X=n(44),Z=n.n(X),$=function(e){var t=e.price,n=100*t;return Object(m.jsx)(Z.a,{label:"Pay Now",name:"Clothing Store",billingAddress:!0,shippingAddress:!0,image:v,description:"Your Total is $ ".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){alert("Payment Successful")},stripeKey:"pk_test_51JLrCeSGGkZgkx5gmePwMozTKILSmNhjQDhSjDuodMiBpJiaHloQsKPYgxp5mjvu1lRUgjlCuOw6CJcYYSjIXPc000UakjaqSV"})},ee=function(){var e=Object(h.c)((function(e){return e.cart.cartItems})),t=Object(h.c)((function(e){return e.cart.cartItems.reduce((function(e,t){return e+t.quantity*t.price}),0)}));return Object(m.jsxs)("div",{className:"checkout-page",children:[Object(m.jsxs)("div",{className:"checkout-header",children:[Object(m.jsx)("div",{className:"header-block",children:Object(m.jsx)("span",{children:"Product"})}),Object(m.jsx)("div",{className:"header-block",children:Object(m.jsx)("span",{children:"Description"})}),Object(m.jsx)("div",{className:"header-block",children:Object(m.jsx)("span",{children:"Quantity"})}),Object(m.jsx)("div",{className:"header-block",children:Object(m.jsx)("span",{children:"Price"})}),Object(m.jsx)("div",{className:"header-block",children:Object(m.jsx)("span",{children:"Remove"})})]}),e.map((function(e){return Object(m.jsx)(Q,{cartItem:e},e.id)})),Object(m.jsx)("div",{className:"total",children:Object(m.jsxs)("span",{children:["Total: $",t]})}),Object(m.jsxs)("div",{className:"test-warning",children:["*Please use the following test credit card for payments*",Object(m.jsx)("br",{})," 4242 4242 4242 4242 - Exp: 11/2021 - CVV: 1234"]}),Object(m.jsx)($,{price:t})]})},te=(n(75),n(76),n(77),function(e){var t=e.item,n=Object(h.b)(),c=t.imageUrl,i=t.name,a=t.price;return Object(m.jsxs)("div",{className:"collection-item",children:[Object(m.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(c,")")}}),Object(m.jsxs)("div",{className:"collection-footer",children:[Object(m.jsx)("span",{className:"name",children:i}),Object(m.jsxs)("span",{className:"price",children:["$",a]})]}),Object(m.jsx)(T,{inverted:!0,onClick:function(){return n(S(t))},children:"Add to Cart"})]})}),ne=function(e){var t=e.title,n=e.items;return Object(m.jsxs)("div",{className:"collection-preview",children:[Object(m.jsx)("h1",{className:"title",children:t}),Object(m.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(m.jsx)(te,{item:e},e.id)}))})]})},ce=["id"],ie=function(){var e=Object(h.c)((function(e){return e.shop.collections})),t=Object.keys(e).map((function(t){return e[t]}));return Object(m.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,n=Object(j.a)(e,ce);return Object(m.jsx)(ne,Object(o.a)({},n),t)}))})},ae=(n(78),function(){var e,t=Object(d.i)(),n=Object(h.c)((function(e){return e.shop.collections})),c=(e=t.collectionId,n[e]),i=c.title,a=c.items;return Object(m.jsxs)("div",{className:"collection-page",children:[Object(m.jsx)("h2",{className:"title",children:i}),Object(m.jsx)("div",{className:"items",children:a.map((function(e){return Object(m.jsx)(te,{item:e},e.id)}))})]})}),re=(n(79),n.p+"static/media/profile.3549ff3e.jpg"),se=function(){return Object(m.jsxs)("div",{className:"contact-container",children:[Object(m.jsx)("h1",{children:"GET IN TOUCH"}),Object(m.jsxs)("a",{href:"https://www.linkedin.com/in/hemant-ghatawal/",target:"blank",children:[Object(m.jsx)("h3",{className:"name",children:"Hemant Saini - Web Developer"}),Object(m.jsx)("img",{className:"profile-image",src:re,alt:"Aarush"})]})]})},le=(n(80),function(){return Object(m.jsxs)("div",{className:"footer-container",children:[Object(m.jsx)("img",{src:v,alt:"brand"}),Object(m.jsx)("h2",{children:"Clothing Store"}),Object(m.jsx)("h4",{children:"\xa9 All Rights Reserved"})]})}),oe="SET_CURRENT_USER",be=function(e){return{type:oe,payload:e}};var de=function(){var e=Object(h.c)((function(e){return e.user.currentUser})),t=Object(h.b)();return Object(c.useEffect)((function(){var e=A.onAuthStateChanged(function(){var e=Object(b.a)(l.a.mark((function e(n){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=5;break}return e.next=3,J(n);case 3:c=e.sent,Object(E.d)(c,(function(e){t(be(Object(o.a)({id:e.id},e.data())))}));case 5:t(be(n));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return function(){console.log("Unmounting App"),e()}}),[t]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(V,{}),Object(m.jsxs)(d.e,{children:[Object(m.jsx)(d.c,{exact:!0,path:"/clothing-store",element:Object(m.jsx)(f,{})}),Object(m.jsx)(d.c,{exact:!0,path:"/clothing-store/contact",element:Object(m.jsx)(se,{})}),Object(m.jsxs)(d.c,{path:"/clothing-store/shop",element:Object(m.jsx)(x,{}),children:[Object(m.jsx)(d.c,{path:"",element:Object(m.jsx)(ie,{})}),Object(m.jsx)(d.c,{path:":collectionId",element:Object(m.jsx)(ae,{})})]}),Object(m.jsx)(d.c,{exact:!0,path:"/clothing-store/signin",element:e?Object(m.jsx)(d.a,{to:"/clothing-store",replace:!0}):Object(m.jsx)(K,{})}),Object(m.jsx)(d.c,{exact:!0,path:"/clothing-store/checkout",element:Object(m.jsx)(ee,{})}),Object(m.jsx)(d.c,{path:"*",element:Object(m.jsx)("main",{style:{width:"100%",height:"10vh",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(m.jsx)("h4",{children:"There's nothing here!"})})})]}),Object(m.jsx)(le,{})]})},je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))},ue=n(25),me=(n(81),n(35)),pe={currentUser:null},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;return t.type===oe?Object(o.a)(Object(o.a)({},e),{},{currentUser:t.payload}):e},ge=n(17),Oe=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(ge.a)(e),[Object(o.a)(Object(o.a)({},t),{},{quantity:1})])},fe=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},e),{},{quantity:e.quantity-1}):e}))},xe={hidden:!0,cartItems:[]},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(o.a)(Object(o.a)({},e),{},{hidden:!e.hidden});case k:return Object(o.a)(Object(o.a)({},e),{},{cartItems:Oe(e.cartItems,t.payload)});case y:return Object(o.a)(Object(o.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case U:return Object(o.a)(Object(o.a)({},e),{},{cartItems:fe(e.cartItems,t.payload)});default:return e}},Ne={sections:[{id:1,title:"hats",imageUrl:"https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",linkUrl:"shop/hats"},{id:2,title:"jackets",imageUrl:"https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",linkUrl:"shop/jackets"},{id:3,title:"sneakers",imageUrl:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",linkUrl:"shop/sneakers"},{id:4,title:"womens",imageUrl:"https://images.unsplash.com/photo-1608912215571-61b7d5914b35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",size:"large",linkUrl:"shop/womens"},{id:5,title:"mens",imageUrl:"https://images.unsplash.com/photo-1610384104075-e05c8cf200c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",size:"large",linkUrl:"shop/mens"}]},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;return t.type,e},ke={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Ue=n(45),Ce={key:"root",storage:n.n(Ue).a,whitelist:["cart"]},Se=Object(ue.b)({user:he,cart:ve,directory:we,shop:ye}),Be=Object(me.a)(Ce,Se);var Ie=Object(ue.c)(Be,ue.a.apply(void 0,[])),Te=Object(me.b)(Ie),Me=n(46);r.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(h.a,{store:Ie,children:Object(m.jsx)(u.a,{children:Object(m.jsx)(Me.a,{persistor:Te,children:Object(m.jsx)(de,{})})})})}),document.getElementById("root")),je()}},[[84,1,2]]]);
//# sourceMappingURL=main.d0155f88.chunk.js.map