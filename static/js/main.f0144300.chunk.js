(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var s=n(0),o=n(1),c=n.n(o),a=n(4),i=n.n(a),r=(n(12),n(2)),u=n.p+"static/media/logo.fad4f8a5.svg";var p=function(){return Object(s.jsx)("header",{className:"header root__section",children:Object(s.jsx)("img",{src:u,id:"logo",alt:"mesto logo",className:"logo"})})},l=n(5),d=n(6),h={api:new(function(){function e(t){Object(l.a)(this,e),this.options=t}return Object(d.a)(e,[{key:"getInitialCards",value:function(){return fetch(this.options.baseUrl+"/cards",{headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject(" ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"getUserInfo",value:function(){return fetch(this.options.baseUrl+"/users/me",{headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject(" ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"editProfile",value:function(e,t){return this.name=e.value,this.about=t.value,fetch(this.options.baseUrl+"/users/me",{method:"PATCH",body:JSON.stringify({name:"".concat(this.name),about:"".concat(this.about)}),headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject(" ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"addCard",value:function(e,t){return this.name=e,this.link=t,fetch(this.options.baseUrl+"/cards",{method:"POST",body:JSON.stringify({name:"".concat(this.name),link:"".concat(this.link)}),headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject(" ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"deleteCard",value:function(e){return this.id=e,fetch(this.options.baseUrl+"/cards/"+e,{method:"DELETE",headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject(" ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"likeCard",value:function(e){return fetch(this.options.baseUrl+"/cards/like/"+e,{method:"PUT",headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject(" ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"deleteLike",value:function(e){return fetch(this.options.baseUrl+"/cards/like/"+e,{method:"DELETE",headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject(" ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"updateAvatar",value:function(e){return this.link=e,fetch(this.options.baseUrl+"/users/me/avatar",{method:"PATCH",body:JSON.stringify({avatar:"".concat(this.link)}),headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject(" ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}}]),e}())({baseUrl:"https://nomoreparties.co/cohort9",headers:{authorization:"548c5797-a590-40d0-8f9e-48d758ca9ae7","Content-Type":"application/json"}})};var j=function(e){return Object(s.jsxs)("div",{className:"place-card",id:e.card._id,children:[Object(s.jsx)("div",{className:"place-card__image",onMouseUp:function(){e.onCardClick(e.card)},style:{backgroundImage:"url("+e.card.link+")"}}),Object(s.jsxs)("div",{className:"place-card__description",children:[Object(s.jsx)("h3",{className:"place-card__name",children:e.card.name}),Object(s.jsxs)("div",{className:"place-card__like-box",children:[Object(s.jsx)("button",{className:"place-card__like-icon ${liked}"}),Object(s.jsx)("span",{className:"place-card__like-number",children:e.card.likes.length})]})]})]})};var m=function(e){var t=c.a.useState(""),n=Object(r.a)(t,2),o=n[0],a=n[1],i=c.a.useState(""),u=Object(r.a)(i,2),p=u[0],l=u[1],d=c.a.useState(""),m=Object(r.a)(d,2),b=m[0],f=m[1],_=c.a.useState([]),O=Object(r.a)(_,2),x=O[0],N=O[1];return c.a.useEffect((function(){h.api.getUserInfo().then((function(e){a(e.name),l(e.about),f(e.avatar)})),h.api.getInitialCards().then((function(e){N(e)}))}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{id:"profileRoot",className:"profile root__section",children:Object(s.jsxs)("div",{className:"user-info",children:[Object(s.jsx)("div",{id:"userInfoPic",className:"user-info__photo",style:{backgroundImage:"url("+b+")",cursor:"pointer"},onMouseUp:e.onEditAvatar}),Object(s.jsxs)("div",{id:"userInfoData",className:"user-info__data",children:[Object(s.jsx)("h1",{id:"userInfoName",className:"user-info__name",children:o}),Object(s.jsx)("p",{id:"userInfoJob",className:"user-info__job",children:p}),Object(s.jsx)("button",{id:"userInfoEditButton",className:"button user-info-edit__button",onMouseUp:e.onEditProfile,children:"Edit"})]}),Object(s.jsx)("button",{id:"userInfoButton",className:"button user-info__button",onMouseUp:e.onAddPlace,children:"+"})]})}),Object(s.jsx)("div",{id:"placesList",className:"places-list root__section",children:x.map((function(t,n){return Object(s.jsx)(j,{onCardClick:e.onCardClick,card:t},n)}))})]})},b=n.p+"static/media/close.8a65f75d.svg";var f=function(e){return Object(s.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_is-opened":""," "),children:Object(s.jsxs)("div",{className:"popup__content",children:[Object(s.jsx)("img",{src:b,alt:"close",className:"popup__close",onMouseUp:e.onClose}),Object(s.jsx)("h3",{className:"popup__title popup__title_".concat(e.name),children:e.title}),Object(s.jsxs)("form",{id:"popupForm".concat(e.name),className:"popup__form",name:"form",noValidate:!0,children:[e.children,Object(s.jsx)("button",{id:"popupButton".concat(e.name),type:"submit",className:"button popup__button",children:e.submitBtnTitle})]})]})})};var _=function(e){return Object(s.jsx)(f,{isOpen:e.isOpen,onClose:e.onClose,name:"addCardPopup",submitBtnTitle:"+",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",children:Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{id:"inputName",type:"text",name:"name",required:!0,minLength:"2",maxLength:"30",className:"popup__input popup__input_type_name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(s.jsx)("span",{id:"error-inputName",className:"error"}),Object(s.jsx)("input",{id:"inputLink",type:"url",name:"link",required:!0,minLength:"2",className:"popup__input popup__input_type_link-url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"}),Object(s.jsx)("span",{id:"error-inputLink",className:"error"})]})})};var O=function(e){return Object(s.jsx)(f,{isOpen:e.isOpen,onClose:e.onClose,name:"editPopup",submitBtnTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",children:Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{id:"inputUserNameEdit",type:"text",minLength:"2",maxLength:"30",required:!0,name:"userName",className:"popup__input popup__input_type_userName",placeholder:"\u0418\u043c\u044f"}),Object(s.jsx)("span",{id:"error-inputUserNameEdit",className:"error"}),Object(s.jsx)("input",{id:"inputUserInfoEdit",type:"text",name:"userInfo",minLength:"2",maxLength:"30",required:!0,className:"popup__input popup__input_type_userInfo",placeholder:"\u041e \u0441\u0435\u0431\u0435"}),Object(s.jsx)("span",{id:"error-inputUserInfoEdit",className:"error"})]})})};var x=function(e){return Object(s.jsx)(f,{isOpen:e.isOpen,onClose:e.onClose,name:"EditPhotoPopup",submitBtnTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",children:Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{id:"inputLinkPhoto",type:"url",name:"link",required:!0,minLength:"2",className:"popup__input popup__input_type_link-url_photo",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440"}),Object(s.jsx)("span",{id:"error-inputLinkPhoto",className:"error"})]})})};var N=function(e){return Object(s.jsx)("div",{id:"popupPic",className:"popup popup__pic ".concat(!1!==e.card?"popup_is-opened":""),children:Object(s.jsxs)("div",{className:"popup__content popup__content_pic",children:[Object(s.jsx)("img",{id:"popupPicOpen",src:e.card.link,className:"popup-pic__open",alt:""}),Object(s.jsx)("img",{src:b,onMouseUp:e.onClose,alt:"",id:"popupClosePic",className:"popup__close"})]})})};var k=function(){return Object(s.jsx)("footer",{className:"footer root__section",children:Object(s.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var g=function(){var e=c.a.useState(!1),t=Object(r.a)(e,2),n=t[0],o=t[1],a=c.a.useState(!1),i=Object(r.a)(a,2),u=i[0],l=i[1],d=c.a.useState(!1),h=Object(r.a)(d,2),j=h[0],b=h[1],f=c.a.useState(!1),g=Object(r.a)(f,2),v=g[0],y=g[1],C=function(){y(!1),l(!1),o(!1),b(!1)};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(p,{}),Object(s.jsx)(m,{onEditProfile:function(){o(!0)},onAddPlace:function(){l(!0)},onEditAvatar:function(){b(!0)},onCardClick:function(e){y(e)}}),Object(s.jsx)(N,{card:v,onClose:C}),Object(s.jsx)(_,{isOpen:u,onClose:C}),Object(s.jsx)(O,{isOpen:n,onClose:C}),Object(s.jsx)(x,{isOpen:j,onClose:C}),Object(s.jsx)(k,{})]})};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.f0144300.chunk.js.map