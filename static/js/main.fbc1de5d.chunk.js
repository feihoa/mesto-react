(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(1),c=n.n(o),s=n(6),i=n.n(s),r=(n(15),n(9)),u=n(2),l=n(7),d=n(8),p={api:new(function(){function e(t){Object(l.a)(this,e),this.options=t}return Object(d.a)(e,[{key:"getInitialCards",value:function(){return fetch(this.options.baseUrl+"/cards",{headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject(" ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"getUserInfo",value:function(){return fetch(this.options.baseUrl+"/users/me",{headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject(" ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"editProfile",value:function(e,t){return this.name=e,this.about=t,fetch(this.options.baseUrl+"/users/me",{method:"PATCH",body:JSON.stringify({name:"".concat(this.name),about:"".concat(this.about)}),headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject(" ".concat(e.status))})).then((function(e){return console.log(e),e})).catch((function(e){console.log(e)}))}},{key:"addCard",value:function(e,t){return this.name=e,this.link=t,fetch(this.options.baseUrl+"/cards",{method:"POST",body:JSON.stringify({name:"".concat(this.name),link:"".concat(this.link)}),headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject(" ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"deleteCard",value:function(e){return this.id=e,fetch(this.options.baseUrl+"/cards/"+e,{method:"DELETE",headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject(" ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"likeCard",value:function(e){return fetch(this.options.baseUrl+"/cards/like/"+e,{method:"PUT",headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject(" ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"deleteLike",value:function(e){return fetch(this.options.baseUrl+"/cards/like/"+e,{method:"DELETE",headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject(" ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"updateAvatar",value:function(e){return this.link=e,fetch(this.options.baseUrl+"/users/me/avatar",{method:"PATCH",body:JSON.stringify({avatar:"".concat(this.link)}),headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject(" ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}}]),e}())({baseUrl:"https://nomoreparties.co/cohort9",headers:{authorization:"548c5797-a590-40d0-8f9e-48d758ca9ae7","Content-Type":"application/json"}})},h=c.a.createContext(),j=n.p+"static/media/logo.fad4f8a5.svg";var b=function(){return Object(a.jsx)("header",{className:"header root__section",children:Object(a.jsx)("img",{src:j,id:"logo",alt:"mesto logo",className:"logo"})})};var f=function(e){var t=c.a.useContext(h);return Object(a.jsxs)("div",{className:"place-card",id:e.card._id,children:[Object(a.jsx)("div",{className:"place-card__image",onMouseUp:function(t){t.target.classList.contains("place-card__image")&&e.onCardClick(e.card)},style:{backgroundImage:"url("+e.card.link+")"},children:e.card.owner._id===t._id?Object(a.jsx)("button",{className:"place-card__delete-icon",onMouseUp:function(){window.confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443?")&&e.onCardDelete(e.card)}}):""}),Object(a.jsxs)("div",{className:"place-card__description",children:[Object(a.jsx)("h3",{className:"place-card__name",children:e.card.name}),Object(a.jsxs)("div",{className:"place-card__like-box",children:[Object(a.jsx)("button",{className:"place-card__like-icon ".concat(e.card.likes.some((function(e){return e._id===t._id}))?"place-card__like-icon_liked":""),onMouseUp:function(){e.onCardLike(e.card)}}),Object(a.jsx)("span",{className:"place-card__like-number",children:e.card.likes.length})]})]})]})};var m=function(e){var t=c.a.useContext(h);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{id:"profileRoot",className:"profile root__section",children:Object(a.jsxs)("div",{className:"user-info",children:[Object(a.jsx)("div",{id:"userInfoPic",className:"user-info__photo",style:{backgroundImage:"url("+t.avatar+")",cursor:"pointer"},onMouseUp:e.onEditAvatar}),Object(a.jsxs)("div",{id:"userInfoData",className:"user-info__data",children:[Object(a.jsx)("h1",{id:"userInfoName",className:"user-info__name",children:t.name}),Object(a.jsx)("p",{id:"userInfoJob",className:"user-info__job",children:t.about}),Object(a.jsx)("button",{id:"userInfoEditButton",className:"button user-info-edit__button",onMouseUp:e.onEditProfile,children:"Edit"})]}),Object(a.jsx)("button",{id:"userInfoButton",className:"button user-info__button",onMouseUp:e.onAddPlace,children:"+"})]})}),Object(a.jsx)("div",{id:"placesList",className:"places-list root__section",children:e.cards&&e.cards.map((function(t,n){return Object(a.jsx)(f,{onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete,card:t},n)}))})]})},_=n.p+"static/media/close.8a65f75d.svg";var O=function(e){return Object(a.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_is-opened":""," "),children:Object(a.jsxs)("div",{className:"popup__content",children:[Object(a.jsx)("img",{src:_,alt:"close",className:"popup__close",onMouseUp:e.onClose}),Object(a.jsx)("h3",{className:"popup__title popup__title_".concat(e.name),children:e.title}),Object(a.jsxs)("form",{id:"popupForm".concat(e.name),className:"popup__form",name:"form",noValidate:!0,onSubmit:e.onSubmit,children:[e.children,Object(a.jsx)("button",{id:"popupButton".concat(e.name),disabled:e.buttonDisabled,type:"submit",className:"button popup__button",children:""===e.buttonText?e.submitBtnTitle:e.buttonText})]})]})})};var v=function(e){var t=c.a.useState(""),n=Object(u.a)(t,2),o=n[0],s=n[1],i=c.a.useState(""),r=Object(u.a)(i,2),l=r[0],d=r[1],p=c.a.useState(""),h=Object(u.a)(p,2),j=h[0],b=h[1],f=c.a.useState(""),m=Object(u.a)(f,2),_=m[0],v=m[1],x=c.a.useState(""),g=Object(u.a)(x,2),k=g[0],C=g[1],N=c.a.useState(""),S=Object(u.a)(N,2),y=S[0],U=S[1],P=function(e){return 0===e.target.value.length?"\u042d\u0442\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435":1===e.target.value.length||e.target.value.length>=30?"\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043e\u0442 2 \u0434\u043e 30 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432":""},L=function(e){return 0===e.target.value.length?"\u042d\u0442\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435":/^((ftp|http|https):\/\/)?(www\.)?([A-Za-z\u0410-\u042f\u0430-\u044f0-9]{1}[A-Za-z\u0410-\u042f\u0430-\u044f0-9\-]*\.?)*\.{1}[A-Za-z\u0410-\u042f\u0430-\u044f0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/.test(e.target.value)?"":"\u0417\u0434\u0435\u0441\u044c \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0430"};return Object(a.jsx)(O,{onSubmit:function(t){t.preventDefault(),!j&&!y&&l&&k&&(e.onAddCard({cardName:o,cardLink:_}),d(""),C(""))},isOpen:e.isOpen,onClose:e.onClose,name:"addCardPopup",submitBtnTitle:"+",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:e.buttonText,buttonDisabled:!(!j&&!y&&l&&k),children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{id:"inputName",type:"text",name:"name",required:!0,minLength:"2",maxLength:"30",onChange:function(e){d(e.target.value),s(e.target.value),b(P(e))},className:"popup__input popup__input_type_name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(a.jsx)("span",{id:"error-inputName",className:"error",children:j}),Object(a.jsx)("input",{id:"inputLink",type:"url",name:"link",required:!0,minLength:"2",onChange:function(e){C(e.target.value),v(e.target.value),U(L(e))},className:"popup__input popup__input_type_link-url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"}),Object(a.jsx)("span",{id:"error-inputLink",className:"error",children:y})]})})};var x=function(e){var t=c.a.useContext(h),n=c.a.useState(""),o=Object(u.a)(n,2),s=o[0],i=o[1],r=c.a.useState(""),l=Object(u.a)(r,2),d=l[0],p=l[1],j=c.a.useState(""),b=Object(u.a)(j,2),f=b[0],m=b[1],_=c.a.useState(""),v=Object(u.a)(_,2),x=v[0],g=v[1],k=c.a.useState(""),C=Object(u.a)(k,2),N=C[0],S=C[1],y=c.a.useState(""),U=Object(u.a)(y,2),P=U[0],L=U[1];c.a.useEffect((function(){i(t.name),g(t.about)}),[t]);var T=function(e){return 0===e.target.value.length?"\u042d\u0442\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435":1===e.target.value.length?"\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043e\u0442 2 \u0434\u043e 30 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432":""};return Object(a.jsx)(O,{onSubmit:function(t){t.preventDefault(),!f&&!P&&d&&N&&(e.onUpdateUser({name:s,about:x}),p(""),S(""))},isOpen:e.isOpen,onClose:e.onClose,name:"editPopup",submitBtnTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:e.buttonText,buttonDisabled:!(!f&&!P&&d&&N),children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{id:"inputUserNameEdit",type:"text",minLength:"2",maxLength:"30",value:d,onChange:function(e){p(e.target.value),i(e.target.value),m(T(e))},required:!0,name:"userName",className:"popup__input popup__input_type_userName",placeholder:"\u0418\u043c\u044f"}),Object(a.jsx)("span",{id:"error-inputUserNameEdit",className:"error",children:f}),Object(a.jsx)("input",{id:"inputUserInfoEdit",type:"text",name:"userInfo",minLength:"2",value:N,onChange:function(e){S(e.target.value),g(e.target.value),L(T(e))},required:!0,className:"popup__input popup__input_type_userInfo",placeholder:"\u041e \u0441\u0435\u0431\u0435"}),Object(a.jsx)("span",{id:"error-inputUserInfoEdit",className:"error",children:P})]})})};var g=function(e){var t=c.a.useContext(h),n=c.a.useState(""),o=Object(u.a)(n,2),s=o[0],i=o[1],r=c.a.useState(""),l=Object(u.a)(r,2),d=l[0],p=l[1],j=c.a.useState(""),b=Object(u.a)(j,2),f=b[0],m=b[1],_=c.a.useRef();c.a.useEffect((function(){i(t.avatar)}),[t]);var v=function(e){return 0===e.target.value.length?"\u042d\u0442\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435":/^((ftp|http|https):\/\/)?(www\.)?([A-Za-z\u0410-\u042f\u0430-\u044f0-9]{1}[A-Za-z\u0410-\u042f\u0430-\u044f0-9\-]*\.?)*\.{1}[A-Za-z\u0410-\u042f\u0430-\u044f0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/.test(e.target.value)?"":"\u0417\u0434\u0435\u0441\u044c \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0430"};return Object(a.jsx)(O,{onSubmit:function(t){t.preventDefault(),!f&&d&&(e.onUpdateAvatar({avatar:_.current.value}),p(""))},isOpen:e.isOpen,onClose:e.onClose,name:"EditPhotoPopup",submitBtnTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:e.buttonText,buttonDisabled:!(!f&&d),children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{value:d,ref:_,onChange:function(e){p(e.target.value),i(e.target.value),m(v(e))},avatar:s,id:"inputLinkPhoto",type:"url",name:"link",required:!0,minLength:"2",className:"popup__input popup__input_type_link-url_photo",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440"}),Object(a.jsx)("span",{id:"error-inputLinkPhoto",className:"error",children:f})]})})};var k=function(e){return Object(a.jsx)("div",{id:"popupPic",className:"popup popup__pic ".concat(!1!==e.card?"popup_is-opened":""),children:Object(a.jsxs)("div",{className:"popup__content popup__content_pic",children:[Object(a.jsx)("img",{id:"popupPicOpen",src:e.card.link,className:"popup-pic__open",alt:""}),Object(a.jsx)("img",{src:_,onMouseUp:e.onClose,alt:"",id:"popupClosePic",className:"popup__close"})]})})};var C=function(){return Object(a.jsx)("footer",{className:"footer root__section",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var N=function(){var e=p.api,t=c.a.useState(!1),n=Object(u.a)(t,2),o=n[0],s=n[1],i=c.a.useState(!1),l=Object(u.a)(i,2),d=l[0],j=l[1],f=c.a.useState(!1),_=Object(u.a)(f,2),O=_[0],N=_[1],S=c.a.useState(!1),y=Object(u.a)(S,2),U=y[0],P=y[1],L=c.a.useState(""),T=Object(u.a)(L,2),E=T[0],A=T[1],I=c.a.useState(""),w=Object(u.a)(I,2),D=w[0],M=w[1],B=c.a.useState(""),z=Object(u.a)(B,2),F=z[0],J=z[1];c.a.useEffect((function(){e.getUserInfo().then((function(e){A(e)})),e.getInitialCards().then((function(e){console.log(e),M(e)}))}),[]);var Z=function(){J(""),P(!1),j(!1),s(!1),N(!1)};return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(h.Provider,{value:E,children:[Object(a.jsx)(b,{}),Object(a.jsx)(m,{onEditProfile:function(){s(!0)},onAddPlace:function(){j(!0)},onEditAvatar:function(){N(!0)},onCardClick:function(e){P(e)},cards:D,onCardLike:function(t){t.likes.some((function(e){return e._id===E._id}))?e.deleteLike(t._id).then((function(e){var n=D.map((function(n){return n._id===t._id?e:n}));M(n)})):e.likeCard(t._id).then((function(e){var n=D.map((function(n){return n._id===t._id?e:n}));M(n)}))},onCardDelete:function(t){t.owner._id===E._id&&e.deleteCard(t._id).then((function(){var e=D.filter((function(e){return e._id!==t._id}));M(e)}))}}),Object(a.jsx)(k,{card:U,onClose:Z}),Object(a.jsx)(v,{isOpen:d,onClose:Z,onAddCard:function(t){J("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),e.addCard(t.cardName,t.cardLink).then((function(e){M([].concat(Object(r.a)(D),[e])),Z()}))},buttonText:F}),Object(a.jsx)(x,{isOpen:o,onClose:Z,onUpdateUser:function(t){J("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),e.editProfile(t.name,t.about).then((function(e){A(e),Z()}))},buttonText:F}),Object(a.jsx)(g,{isOpen:O,onClose:Z,onUpdateAvatar:function(t){J("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),e.updateAvatar(t.avatar).then((function(e){A(e),Z()}))},buttonText:F}),Object(a.jsx)(C,{})]})})};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.fbc1de5d.chunk.js.map