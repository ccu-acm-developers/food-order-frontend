(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__26gr1",control:"Checkout_control__2qGfb",actions:"Checkout_actions__2X_6_",submit:"Checkout_submit__2BFZZ",invalid:"Checkout_invalid__2gAN9"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2pjQw",total:"Cart_total__3pLin",actions:"Cart_actions__1GOmr","button--alt":"Cart_button--alt__1Z2QQ",button:"Cart_button__fw1-t",httpError:"Cart_httpError__3VFdR",success:"Cart_success__MUHG0","success-btn":"Cart_success-btn__2baiv","review-btn":"Cart_review-btn__38M3C"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1B1_q",summary:"CartItem_summary__3FMDj",price:"CartItem_price__2Nl0j",amount:"CartItem_amount__jUKEC",actions:"CartItem_actions__UwVPJ"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__2ZLCP","meals-appear":"AvailableMeals_meals-appear__ONwLi",mealsLoading:"AvailableMeals_mealsLoading__Yyvu4",mealsError:"AvailableMeals_mealsError__3Alfu"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__3CMOT",icon:"HeaderCartButton_icon__9KWtg",badge:"HeaderCartButton_badge__1Z3gL",bump:"HeaderCartButton_bump__3atD4"}},,,function(e,t,n){e.exports={backdrop:"Modal_backdrop__1mfF6",modal:"Modal_modal__4DXUe","slide-down":"Modal_slide-down__W3MdX"}},function(e,t,n){e.exports={header:"Header_header__zSTUo",icon:"Header_icon__2vjkY","main-image":"Header_main-image__2Q3So"}},function(e,t,n){e.exports={meal:"MealItem_meal__2uJ70",price:"MealItem_price__3sNYl"}},,,function(e,t,n){e.exports={card:"Card_card__1m44e"}},function(e,t,n){e.exports={form:"MealItemForm_form__32qVd"}},function(e,t,n){e.exports={input:"Input_input__2swPp"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__22zUX","meals-appear":"MealsSummary_meals-appear__3GnoV"}},function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);n(23);var a=n(2),r=n(6),c=n.n(r),s=n(13),i=n(4),o=n(5),l=n.n(o),u=n(1),d=n.n(u),A=d.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),m=n(7),j=n.n(m),b=n(0),h=function(e){var t="$".concat(e.price.toFixed(2));return Object(b.jsxs)("li",{className:j.a["cart-item"],children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:e.name}),Object(b.jsxs)("div",{className:j.a.summary,children:[Object(b.jsx)("span",{className:j.a.price,children:t}),Object(b.jsxs)("span",{className:j.a.amount,children:["x ",e.amount]})]})]}),Object(b.jsxs)("div",{className:j.a.actions,children:[Object(b.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(b.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},O=n(3),f=n.n(O),x=function(e){var t=Object(u.useState)(""),n=Object(a.a)(t,2),r=n[0],c=n[1],s=Object(u.useState)(!1),i=Object(a.a)(s,2),o=i[0],l=i[1],d=e(r);return{value:r,isValid:d,hasError:!d&&o,valueChangeHandler:function(e){c(e.target.value)},inputBlurHandler:function(){l(!0)},reset:function(){c(""),l(!1)}}},p=function(e){var t=Object(u.useState)(),n=Object(a.a)(t,2),r=n[0],c=n[1],s=x((function(e){return""!==e.trim()})),i=s.value,o=s.isValid,l=s.hasError,d=s.valueChangeHandler,A=s.inputBlurHandler,m=s.reset,j=x((function(e){return e.includes("@")&&e.trim().length>=6})),h=j.value,O=j.isValid,p=j.hasError,v=j.valueChangeHandler,C=j.inputBlurHandler,V=j.reset,g=x((function(e){return""!==e.trim()})),F=g.value,N=g.isValid,W=g.hasError,B=g.valueChangeHandler,k=g.inputBlurHandler,I=g.reset,w=x((function(e){return""!==e.trim()})),Y=w.value,K=w.isValid,L=w.hasError,q=w.valueChangeHandler,Z=w.inputBlurHandler,y=w.reset,S=x((function(e){return""!==e.trim()})),E=S.value,z=S.isValid,H=S.hasError,J=S.valueChangeHandler,X=S.inputBlurHandler,Q=S.reset,U=" ".concat(l?f.a.invalid:""),D="".concat(p?f.a.invalid:""),T="".concat(W?f.a.invalid:""),_="".concat(L?f.a.invalid:""),R="".concat(H?f.a.invalid:"");return Object(b.jsxs)("form",{className:f.a.form,onSubmit:function(t){if(t.preventDefault(),o&&O&&N&&K&&z){c();var n={first_name:i,email:h,street:F,city:Y,postal_code:E};e.onSubmit(n),m(),I(),Q(),V(),y(),c()}else c(Object(b.jsx)("p",{className:f.a.invalid,children:"Please submit the requested fields"}))},children:[Object(b.jsxs)("div",{className:"".concat(f.a.control," ").concat(U),children:[Object(b.jsx)("label",{htmlFor:"name",children:"Name"}),Object(b.jsx)("input",{type:"text",id:"name",onChange:d,onBlur:A,value:i})]}),Object(b.jsxs)("div",{className:"".concat(f.a.control," ").concat(D),children:[Object(b.jsx)("label",{htmlFor:"name",children:"Email"}),Object(b.jsx)("input",{type:"email",id:"email",onChange:v,onBlur:C,value:h})]}),Object(b.jsxs)("div",{className:"".concat(f.a.control," ").concat(T),children:[Object(b.jsx)("label",{htmlFor:"name",children:"Street"}),Object(b.jsx)("input",{type:"text",id:"text",onChange:B,onBlur:k,value:F})]}),Object(b.jsxs)("div",{className:"".concat(f.a.control," ").concat(_),children:[Object(b.jsx)("label",{htmlFor:"name",children:"City"}),Object(b.jsx)("input",{type:"text",id:"text",onChange:q,onBlur:Z,value:Y})]}),Object(b.jsxs)("div",{className:"".concat(f.a.control," ").concat(R),children:[Object(b.jsx)("label",{htmlFor:"name",children:"Postal Code"}),Object(b.jsx)("input",{type:"text",id:"text",onChange:J,onBlur:X,value:E})]}),r,Object(b.jsxs)("div",{className:f.a.actions,children:[Object(b.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(b.jsx)("button",{className:f.a.submit,children:"Confirm"})]})]})},v=n(14),C=n.n(v),V=n(10),g=n.n(V),F=function(e){return Object(b.jsx)("div",{className:C.a.backdrop,onClick:e.onClose})},N=function(e){return Object(b.jsx)("div",{className:C.a.modal,children:Object(b.jsx)("div",{className:C.a.content,children:e.children})})},W=document.getElementById("overlays"),B=function(e){return Object(b.jsxs)(d.a.Fragment,{children:[g.a.createPortal(Object(b.jsx)(F,{onClose:e.onClose}),W),g.a.createPortal(Object(b.jsx)(N,{children:e.children}),W)]})},k=function(e){var t=Object(u.useState)(!1),n=Object(a.a)(t,2),r=n[0],o=n[1],m=Object(u.useState)(!1),j=Object(a.a)(m,2),O=j[0],f=j[1],x=Object(u.useState)(!1),v=Object(a.a)(x,2),C=v[0],V=v[1],g=Object(u.useState)(),F=Object(a.a)(g,2),N=F[0],W=F[1],k=Object(u.useContext)(A),I="".concat(k.totalAmount.toFixed(2)),w=k.items.length>0,Y=function(e){k.removeItem(e)},K=function(e){k.addItem(Object(i.a)(Object(i.a)({},e),{},{amount:1}))},L=k.items.map((function(e){return Object(b.jsx)(h,{name:e.name,amount:e.amount,price:e.price,onRemove:Y.bind(null,e.id),onAdd:K.bind(null,e)},e.id)})),q=function(){var t=Object(s.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f(!0),t.prev=1,t.next=4,fetch("https://food-order-app-30143-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:n,orderedItems:k.items})});case 4:t.next=11;break;case 6:return t.prev=6,t.t0=t.catch(1),e.onClose(),W(t.t0.message),t.abrupt("return");case 11:f(!1),V(!0),k.clearCart();case 14:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}();if(N)return Object(b.jsx)("section",{className:l.a.httpError,children:Object(b.jsx)("p",{children:N})});var Z=Object(b.jsxs)("div",{className:l.a.actions,children:[Object(b.jsx)("button",{className:l.a["button--alt"],onClick:e.onClose,children:"Close"}),w&&Object(b.jsx)("button",{className:l.a.button,onClick:function(){o(!0)},children:"Order"})]}),y=Object(b.jsxs)(d.a.Fragment,{children:[!r&&Object(b.jsx)("ul",{className:l.a["cart-items"],children:L}),Object(b.jsxs)("div",{className:l.a.total,children:[Object(b.jsx)("span",{children:"Total Amount"}),Object(b.jsx)("span",{children:I})]}),r&&Object(b.jsx)(p,{onSubmit:q,onCancel:e.onClose}),!r&&Z]}),S=Object(b.jsx)("p",{children:"Sending order data..."}),E=Object(b.jsxs)(d.a.Fragment,{children:[Object(b.jsx)("p",{className:l.a.success,children:"Successfully sent your order!"}),Object(b.jsx)("button",{className:l.a["success-btn"],onClick:e.onClose,children:"Close"})]});return Object(b.jsxs)(B,{onClose:e.onClose,children:[!O&&!C&&y,O&&S,!O&&C&&E]})},I=n(18),w={items:[],totalAmount:0},Y=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,r=e.items.findIndex((function(e){return e.id===t.item.id})),c=e.items[r];if(c){var s=Object(i.a)(Object(i.a)({},c),{},{amount:c.amount+t.item.amount});(n=Object(I.a)(e.items))[r]=s}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o];if(!l)return;var u=e.totalAmount-l.price;u<0&&(u=0);var d=[];if(1===l.amount)d=e.items.filter((function(e){return e.id!==t.id})),console.log(d);else{var A=Object(i.a)(Object(i.a)({},l),{},{amount:l.amount-1});(d=Object(I.a)(e.items))[o]=A}return{items:d,totalAmount:u}}return t.type,w},K=function(e){var t=Object(u.useReducer)(Y,w),n=Object(a.a)(t,2),r=n[0],c=n[1],s={items:r.items,totalAmount:r.totalAmount,addItem:function(e){return function(e){c({type:"ADD",item:e})}(e)},removeItem:function(e){return function(e){c({type:"REMOVE",id:e})}(e)},clearCart:function(){c({type:"CLEAR"})}};return Object(b.jsx)(A.Provider,{value:s,children:e.children})},L=n(15),q=n.n(L),Z=n.p+"static/media/meals.1723aa8d.jpg",y=n(11),S=n.n(y),E=function(){return Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(b.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},z=function(e){var t=Object(u.useState)(!1),n=Object(a.a)(t,2),r=n[0],c=n[1],s=Object(u.useContext)(A),i=s.items.reduce((function(e,t){return e+t.amount}),0),o="".concat(S.a.button," ").concat(r?S.a.bump:""),l=s.items;return Object(u.useEffect)((function(){if(0!==l.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[l]),Object(b.jsxs)("button",{className:o,onClick:e.onClick,children:[Object(b.jsx)("span",{className:S.a.icon,children:Object(b.jsx)(E,{})}),Object(b.jsx)("span",{children:"Your Cart"}),Object(b.jsx)("span",{className:S.a.badge,children:i})]})},H=function(e){return Object(b.jsxs)(u.Fragment,{children:[Object(b.jsxs)("header",{className:q.a.header,children:[Object(b.jsxs)("h1",{children:["Foodist",Object(b.jsx)("img",{className:q.a.icon,src:"data:image/png;base64,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",alt:""})]}),Object(b.jsx)(z,{onClick:e.onCartClick})]}),Object(b.jsx)("div",{className:q.a["main-image"],children:Object(b.jsx)("img",{src:Z,alt:""})})]})},J=n(8),X=n.n(J),Q=n(19),U=n.n(Q),D=function(e){return Object(b.jsx)("div",{className:"".concat(U.a.card," ").concat(e.className),children:e.children})},T=n(20),_=n.n(T),R=n(21),G=n.n(R),M=d.a.forwardRef((function(e,t){return Object(b.jsxs)("div",{className:G.a.input,children:[Object(b.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(b.jsx)("input",Object(i.a)({ref:t},e.input))]})})),P=function(e){var t=e.id,n=e.onAddToCart,r=Object(u.useState)(!0),c=Object(a.a)(r,2),s=c[0],i=c[1],o=Object(u.useRef)();return Object(b.jsxs)("form",{className:_.a.form,onSubmit:function(e){e.preventDefault();var t=o.current.value,a=+t;0===t.trim().length||a<1||a>20?i(!1):n(a)},children:[Object(b.jsx)(M,{ref:o,label:"Amount",input:{id:"amount_"+t,type:"number",min:"1",max:"20",defaultValue:"1"}}),Object(b.jsx)("button",{children:"+ Add"}),!s&&Object(b.jsx)("p",{children:"Please enter a valid amount (1-20)."})]})},$=n(16),ee=n.n($),te=function(e){var t=Object(u.useContext)(A),n="".concat(e.price.toFixed(2));return Object(b.jsxs)("li",{className:ee.a.meal,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:e.name}),Object(b.jsx)("div",{className:ee.a.description,children:e.description}),Object(b.jsx)("div",{className:ee.a.price,children:n})]}),Object(b.jsx)("div",{children:Object(b.jsx)(P,{onAddToCart:function(n){var a={id:e.id,name:e.name,amount:n,price:e.price};t.addItem(a)}})})]})},ne=function(){var e=Object(u.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1],i=Object(u.useState)(!0),o=Object(a.a)(i,2),l=o[0],d=o[1],A=Object(u.useState)(),m=Object(a.a)(A,2),j=m[0],h=m[1];if(Object(u.useEffect)((function(){try{(function(){var e=Object(s.a)(c.a.mark((function e(){var t,n,a,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://food-order-app-30143-default-rtdb.firebaseio.com/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong!");case 5:return e.next=7,t.json();case 7:for(s in n=e.sent,a=[],n)a.push({id:s,name:n[s].name,description:n[s].description,price:n[s].price});r(a);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}catch(e){d(!1),h(e.message)}d(!1)}),[]),l)return Object(b.jsx)("section",{className:X.a.mealsLoading,children:Object(b.jsx)("p",{children:"Loading..."})});if(j)return Object(b.jsx)("section",{className:X.a.mealsError,children:Object(b.jsx)("p",{children:j})});var O=n.map((function(e){return Object(b.jsx)(te,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(b.jsx)("div",{className:X.a.container,children:Object(b.jsx)("section",{className:X.a.meals,children:Object(b.jsx)(D,{className:X.a.card,children:Object(b.jsx)("ul",{children:O})})})})},ae=n(22),re=n.n(ae),ce=function(){return Object(b.jsxs)("section",{className:re.a.summary,children:[Object(b.jsx)("h2",{children:"Delicious Food, Delivered"}),Object(b.jsx)("p",{children:"Choose from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(b.jsx)("p",{children:"All of our meals are cooked with high-quality ingredients, and prepared to order by experienced chefs."})]})},se=function(){return Object(b.jsxs)(u.Fragment,{children:[Object(b.jsx)(ce,{}),Object(b.jsx)(ne,{})]})};var ie=function(){var e=Object(u.useState)(!1),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(b.jsxs)(K,{children:[n&&Object(b.jsx)(k,{onClose:function(){r(!1)}}),Object(b.jsx)(H,{onCartClick:function(){r(!0)}}),Object(b.jsx)("main",{children:Object(b.jsx)(se,{})})]})};g.a.render(Object(b.jsx)(ie,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.02fcc0ed.chunk.js.map