(this["webpackJsonpreact-pages"]=this["webpackJsonpreact-pages"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var n=i(3),a=i.n(n),o=i(8),s=i.n(o),r=(i(13),i(14),i(1)),c=i(2),d=i(6),p=i(5),u=i(4),h=(i(15),i(0)),l=function(e){Object(p.a)(i,e);var t=Object(u.a)(i);function i(e){var n;Object(r.a)(this,i);return(n=t.call(this,e)).state={imageSource:"",product:{id:0,name:"",price:0,imageUrl:""},gridType:"col-lg-3 col-md-4 col-sm-6 col-xs-12"},n.handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(c.a)(i,[{key:"render",value:function(){var e=this.state.imageSource,t=this.state.product,i=t.name,n=t.price;return Object(h.jsx)("div",{className:this.state.gridType,children:Object(h.jsxs)("div",{className:"productCard card",onClick:this.handleClick,children:[Object(h.jsx)("img",{className:"card-img-top",src:e,alt:i,width:"100%"}),Object(h.jsx)("h4",{className:"card-title text-primary",children:Object(h.jsx)("b",{children:i})}),Object(h.jsx)("p",{className:"card-text price",children:Object(h.jsxs)("b",{children:[n," Kr"]})})]})},this.state.product.id)}},{key:"handleClick",value:function(){this.props.onClick(this.props.id)}},{key:"componentDidMount",value:function(){this.loadProductData()}},{key:"loadImage",value:function(){if(""!==this.state.product.imageThumb){var e=this.props.imageService,t="./images/"+this.state.product.imageThumb,i=this;e.loadImage(t,(function(e){return i.setState({imageSource:e})}))}}},{key:"loadProductData",value:function(){var e=this.props.id,t=this;this.props.productService.getProduct(e,(function(e){t.setState({product:e},t.loadImage)}))}}]),i}(n.Component),g=(i(17),function(e){Object(p.a)(i,e);var t=Object(u.a)(i);function i(e){var n;Object(r.a)(this,i);return(n=t.call(this,e)).state={imageSource:"",product:{id:0,name:"",price:0,imageUrl:""}},n.minimize=n.minimize.bind(Object(d.a)(n)),n.addToCart=n.addToCart.bind(Object(d.a)(n)),n}return Object(c.a)(i,[{key:"render",value:function(){var e=this.state.product,t=this.state.imageSource,i=e.name,n=e.description,a=e.price+" kr";return Object(h.jsxs)("div",{className:"productDetails container m-1",children:[Object(h.jsx)("div",{className:"detailsHeader",onClick:this.minimize,children:Object(h.jsx)("h1",{className:"nameHeader",children:i})}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-sm-6 m-0",children:Object(h.jsx)("img",{src:t,alt:i})}),Object(h.jsxs)("div",{className:"col-sm-6 infoBox",children:[Object(h.jsx)("h1",{className:"boldPrice",children:a}),Object(h.jsx)("p",{children:n}),Object(h.jsx)("button",{className:"buyButton bg-warning",onClick:this.addToCart,children:Object(h.jsx)("h1",{children:"Add to cart"})})]})]})]})}},{key:"componentDidMount",value:function(){this.loadProductData()}},{key:"addToCart",value:function(){var e=this.props.shoppingCartService,t=this.props.id,i=this;e.addItem(t,(function(){return console.log("Added",i.state.product.name,"to shopping cart")}))}},{key:"minimize",value:function(){this.props.onClick(this.props.id)}},{key:"loadProductData",value:function(){var e=this.props.id,t=this;this.props.productService.getProduct(e,(function(e){t.setState({product:e},t.loadImage)}))}},{key:"loadImage",value:function(){if(""!==this.state.product.imageUrl){var e=this.props.imageService,t="./images/"+this.state.product.imageUrl,i=this;e.loadImage(t,(function(e){return i.setState({imageSource:e})}))}}}]),i}(n.Component)),m=function(e){Object(p.a)(i,e);var t=Object(u.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).state={products:[],displayItems:[]},n.expandProduct=n.expandProduct.bind(Object(d.a)(n)),n.minimizeProduct=n.minimizeProduct.bind(Object(d.a)(n)),n}return Object(c.a)(i,[{key:"render",value:function(){var e=this.state.displayItems;return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:e})})}},{key:"getProductCards",value:function(e){for(var t=[],i=this.props.productService,n=this.props.imageService,a=this.expandProduct,o=0;o<e.length;o++)t.push(Object(h.jsx)(l,{id:e[o].id,productService:i,imageService:n,onClick:a},o));return this.setState({displayItems:t}),t}},{key:"expandProduct",value:function(e){for(var t=this.props.productService,i=this.props.imageService,n=this.minimizeProduct,a=this.props.shoppingCartService,o=this.state.displayItems,s=0;s<o.length;s++)if(o[s].props.id===e){var r=o[s].props.id,c=Object(h.jsx)(g,{id:r,productService:t,imageService:i,onClick:n,shoppingCartService:a},s);o.splice(s,1,c);break}this.setState({displayItems:o})}},{key:"minimizeProduct",value:function(e){for(var t=this.props.productService,i=this.props.imageService,n=this.expandProduct,a=this.state.displayItems,o=0;o<a.length;o++)if(a[o].props.id===e){var s=a[o].props.id,r=Object(h.jsx)(l,{id:s,productService:t,imageService:i,onClick:n},o);a.splice(o,1,r);break}this.setState({displayItems:a})}},{key:"componentDidMount",value:function(){this.getItems()}},{key:"getItems",value:function(){var e=this;this.props.productService.getProducts((function(t){e.setState({products:t}),e.getProductCards(t)}))}}]),i}(n.Component),b=function(){function e(){Object(r.a)(this,e)}return Object(c.a)(e,[{key:"loadImage",value:function(e,t){var i=new Request(e);fetch(i).then((function(e){if(!e.ok)throw new Error("HTTP error! status: ".concat(e.status));return e.blob()})).then((function(e){var i=URL.createObjectURL(e);t(i)}))}}]),e}(),v=[{id:1,name:"Shoe",price:"999.50",imageThumb:"shoe_thumbnail.png",imageUrl:"shoe.png",description:"It's a good shoe, ignore the reviews stating it causes cramps for normal feet it's ok. Trust us."},{id:2,name:"Sock",price:"99.90",imageThumb:"sock_thumbnail.png",imageUrl:"sock.png",description:"This sock is made of top quality, military grade cotton."},{id:3,name:"Gray Food",price:"50.00",imageThumb:"gray-food_thumbnail.png",imageUrl:"gray-food.png",description:"Some kind of... gray... food..."},{id:4,name:"Dog",price:"9.90",imageThumb:"dog_thumbnail.png",imageUrl:"dog.png",description:"Something's wrong with this dog, you can feel it. Why else would it be so cheap?"},{id:5,name:"Spaghetti (Damaged)",price:"17.50",imageThumb:"spaghetti_thumbnail.png",imageUrl:"spaghetti.png",description:"Got slightly nicked by the previous owner but has been tested and works just fine."},{id:6,name:"Spaghetti",price:"19.90",imageThumb:"spaghetti_thumbnail.png",imageUrl:"spaghetti.png",description:"Delicius spaghetti. Deliciousness not included."},{id:7,name:"Shoe 2",price:"150.00",imageThumb:"shoe_2_thumbnail.png",imageUrl:"shoe_2.png",description:"The riveting sequel to Shoe, now on blue-ray. This one's a dvd though."},{id:8,name:"Snow Globe",price:"40.00",imageThumb:"snow_globe.png",imageUrl:"snow_globe.png",description:"A cool (no pun intended also not actually cold) little globe with a tiny house and people running around inside. Shake it to release its true potential."},{id:9,name:"Daffodil",price:"700.00",imageThumb:"daffodil_thumbnail.png",imageUrl:"daffodil.png",description:"Please stop bying these!!! They are such a pain to package!!!!!!!!"},{id:10,name:"Shoe",price:"999.50",imageThumb:"shoe_thumbnail.png",imageUrl:"shoe.png",description:"It's a good shoe, ignore the reviews stating it causes cramps for normal feet it's ok. Trust us."},{id:11,name:"Sock",price:"99.90",imageThumb:"sock_thumbnail.png",imageUrl:"sock.png",description:"This sock is made of top quality, military grade cotton."},{id:12,name:"Gray Food",price:"50.00",imageThumb:"gray-food_thumbnail.png",imageUrl:"gray-food.png",description:"Some kind of... gray... food..."},{id:13,name:"Dog",price:"9.90",imageThumb:"dog_thumbnail.png",imageUrl:"dog.png",description:"Something's wrong with this dog, you can feel it. Why else would it be so cheap?"},{id:14,name:"Spaghetti (Damaged)",price:"17.50",imageThumb:"spaghetti_thumbnail.png",imageUrl:"spaghetti.png",description:"Got slightly nicked by the previous owner but has been tested and works just fine."},{id:15,name:"Spaghetti",price:"19.90",imageThumb:"spaghetti_thumbnail.png",imageUrl:"spaghetti.png",description:"Delicius spaghetti. Deliciousness not included."},{id:16,name:"Shoe 2",price:"150.00",imageThumb:"shoe_2_thumbnail.png",imageUrl:"shoe_2.png",description:"The riveting sequel to Shoe, now on blue-ray. This one's a dvd though."},{id:17,name:"Snow Globe",price:"40.00",imageThumb:"snow_globe.png",imageUrl:"snow_globe.png",description:"A cool (no pun intended also not actually cold) little globe with a tiny house and people running around inside. Shake it to release its true potential."},{id:18,name:"Daffodil",price:"700.00",imageThumb:"daffodil_thumbnail.png",imageUrl:"daffodil.png",description:"Please stop bying these!!! They are such a pain to package!!!!!!!!"},{id:19,name:"Shoe",price:"999.50",imageThumb:"shoe_thumbnail.png",imageUrl:"shoe.png",description:"It's a good shoe, ignore the reviews stating it causes cramps for normal feet it's ok. Trust us."},{id:20,name:"Sock",price:"99.90",imageThumb:"sock_thumbnail.png",imageUrl:"sock.png",description:"This sock is made of top quality, military grade cotton."},{id:21,name:"Gray Food",price:"50.00",imageThumb:"gray-food_thumbnail.png",imageUrl:"gray-food.png",description:"Some kind of... gray... food..."},{id:22,name:"Dog",price:"9.90",imageThumb:"dog_thumbnail.png",imageUrl:"dog.png",description:"Something's wrong with this dog, you can feel it. Why else would it be so cheap?"},{id:23,name:"Spaghetti (Damaged)",price:"17.50",imageThumb:"spaghetti_thumbnail.png",imageUrl:"spaghetti.png",description:"Got slightly nicked by the previous owner but has been tested and works just fine."},{id:24,name:"Spaghetti",price:"19.90",imageThumb:"spaghetti_thumbnail.png",imageUrl:"spaghetti.png",description:"Delicius spaghetti. Deliciousness not included."},{id:25,name:"Shoe 2",price:"150.00",imageThumb:"shoe_2_thumbnail.png",imageUrl:"shoe_2.png",description:"The riveting sequel to Shoe, now on blue-ray. This one's a dvd though."},{id:26,name:"Snow Globe",price:"40.00",imageThumb:"snow_globe.png",imageUrl:"snow_globe.png",description:"A cool (no pun intended also not actually cold) little globe with a tiny house and people running around inside. Shake it to release its true potential."},{id:27,name:"Daffodil",price:"700.00",imageThumb:"daffodil_thumbnail.png",imageUrl:"daffodil.png",description:"Please stop bying these!!! They are such a pain to package!!!!!!!!"}],f=function(){function e(){Object(r.a)(this,e),this.products=v}return Object(c.a)(e,[{key:"getProducts",value:function(e){var t=[];this.products.forEach((function(e){t.push({id:e.id,name:e.name,price:e.price,imageUrl:e.imageUrl})})),e(t)}},{key:"getProduct",value:function(e,t){for(var i=0;i<this.products.length;i++){var n=this.products[i];if(n.id===e)return void t(n)}}}]),e}(),j=function(){function e(){Object(r.a)(this,e),this._actions=[],this._nextId=0}return Object(c.a)(e,[{key:"add",value:function(e,t){return this._actions.push({id:this._nextId,action:e,invoker:t}),this._nextId++}},{key:"remove",value:function(e){var t=this._actions.findIndex((function(t){return t.id===e}));-1!==t&&this._actions.splice(t,1)}},{key:"invoke",value:function(){for(var e=0;e<this._actions.length;e++)this._actions[e].action.call(this._actions[e].invoker,arguments.length<=0?void 0:arguments[0],arguments.length<=1?void 0:arguments[1],arguments.length<=2?void 0:arguments[2],arguments.length<=3?void 0:arguments[3],arguments.length<=4?void 0:arguments[4],arguments.length<=5?void 0:arguments[5],arguments.length<=6?void 0:arguments[6],arguments.length<=7?void 0:arguments[7],arguments.length<=8?void 0:arguments[8],arguments.length<=9?void 0:arguments[9])}}]),e}(),y=function(){function e(){Object(r.a)(this,e),this.products=[],this.onItemsUpdated=new j}return Object(c.a)(e,[{key:"numberOfItems",get:function(){return this.products.length}},{key:"getAllItems",value:function(e){e(this.products)}},{key:"removeItem",value:function(e,t){console.log("Removing product from cart:",e.name),this.onItemsUpdated.invoke(this)}},{key:"addItem",value:function(e,t){console.log("Adding product to cart:",e),this.products.push(e),t(),this.onItemsUpdated.invoke(this)}}]),e}(),k=(i(18),i(19),function(e){Object(p.a)(i,e);var t=Object(u.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).state={itemsInCart:0},n}return Object(c.a)(i,[{key:"render",value:function(){return Object(h.jsxs)("span",{className:"shoppingCart",children:[Object(h.jsx)("i",{className:"fas fa-shopping-cart"}),this.state.itemsInCart]})}},{key:"componentDidMount",value:function(){var e=this.props.shoppingCartService,t=this.updateItemsInCart;e.onItemsUpdated.add(t,this)}},{key:"updateItemsInCart",value:function(e){var t=e.numberOfItems;this.setState({itemsInCart:t})}}]),i}(n.Component)),S=function(e){Object(p.a)(i,e);var t=Object(u.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){var e=this.props.shoppingCartService;return Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("h1",{children:this.props.name}),Object(h.jsx)(k,{shoppingCartService:e})]})}}]),i}(n.Component);var O=function(){var e=new b,t=new f,i=new y;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("header",{children:Object(h.jsx)(S,{name:"Web Shop",shoppingCartService:i})}),Object(h.jsx)("div",{className:"under",children:Object(h.jsx)(m,{imageService:e,productService:t,shoppingCartService:i})})]})},T=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,21)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;i(e),n(e),a(e),o(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),T()}],[[20,1,2]]]);
//# sourceMappingURL=main.7f12c67f.chunk.js.map