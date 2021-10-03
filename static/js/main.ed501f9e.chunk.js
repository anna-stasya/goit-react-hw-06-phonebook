(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={filter:"Filter_filter__nsRTK",label:"Filter_label__1xdgL",text:"Filter_text__1qtjn",input:"Filter_input__1hiJQ"}},15:function(t,e,n){t.exports={app:"App_app__B88Bl",title:"App_title__3H7LS",titleContacts:"App_titleContacts__3thIz"}},32:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),s=n(12),o=n.n(s),l=n(4),i=n(14),u=n(3),b=n(21),j=n.n(b),d=n(6),m=n(2),O="ADD_CONTACT",f="GET_CONTACT",p="DELETE_CONTACT",_=Object(u.c)([],(a={},Object(d.a)(a,O,(function(t,e){return[].concat(Object(i.a)(t),[e.payload])})),Object(d.a)(a,p,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),a)),h=Object(u.c)("",Object(d.a)({},f,(function(t,e){return e.payload}))),x=Object(m.b)({items:_,filter:h}),C=[].concat(Object(i.a)(Object(u.d)()),[j.a]),N=Object(u.a)({reducer:x,middleware:C,devtools:!0}),g=(n(32),n(9)),v=n(19),A=n(22),y=n.n(A),L=Object(u.b)(O,(function(t){return{payload:Object(v.a)(Object(v.a)({id:y.a.generate()},t),{},{completed:!1})}})),S=Object(u.b)(f),T=Object(u.b)(p),w=n(7),z=n.n(w),D=n(1),F=function(t,e){var n=e.toLowerCase();return console.log(t),t.filter((function(t){return t.name.toLowerCase().includes(n)}))},k=Object(l.b)((function(t){return{contacts:F(t.items,t.filter)}}),(function(t){return{onDeleteContacts:function(e){return t(T(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContacts;return Object(D.jsx)("ul",{className:z.a.contacts,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(D.jsxs)("li",{className:z.a.item,children:[Object(D.jsx)("p",{className:z.a.name,children:a}),Object(D.jsx)("p",{className:z.a.tel,children:c}),Object(D.jsx)("button",{className:z.a.btnDel,onClick:function(){return n(e)},children:"Delete"})]},e)}))})})),J=n(10),E=n.n(J),B=Object(l.b)((function(t){return{value:t.filter}}),(function(t){return{onChange:function(e){return t(S(e.currentTarget.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(D.jsx)("div",{className:E.a.filter,children:Object(D.jsxs)("label",{className:E.a.label,children:[Object(D.jsx)("p",{className:E.a.text,children:"Find contacts by name"}),Object(D.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:n,className:E.a.input})]})})})),Z=n(5),q=n.n(Z);var I=Object(l.b)(null,(function(t){return{onSubmit:function(e){return t(L(e))}}}))((function(t){var e=t.onSubmit,n=Object(c.useState)(""),a=Object(g.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)(""),l=Object(g.a)(o,2),i=l[0],u=l[1],b=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":s(a);break;case"number":u(a);break;default:return}};return Object(D.jsxs)("form",{className:q.a.form,onSubmit:function(t){t.preventDefault(),e({name:r,number:i}),s(""),u("")},children:[Object(D.jsxs)("label",{className:q.a.label,children:["Name",Object(D.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,onChange:b,className:q.a.input})]}),Object(D.jsxs)("label",{className:q.a.label,children:["Number",Object(D.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:i,onChange:b,className:q.a.input})]}),Object(D.jsx)("button",{type:"sabmit",className:q.a.btnAdd,children:"Add contact"})]})})),M=(n(20),n(42),n(43),n(15)),H=n.n(M);var K=function(){var t=Object(c.useState)([]),e=Object(g.a)(t,2),n=e[0],a=e[1];return Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem("contacts"));console.log(t),t&&a(t)}),[]),Object(c.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]),Object(D.jsxs)("div",{className:H.a.app,children:[Object(D.jsx)("h1",{className:H.a.title,children:"Phonebook"}),Object(D.jsx)(I,{submit:function(t){n.some((function(e){return e.name.toLowerCase()===t.name.toLowerCase()}))&&alert("".concat(t.name," is already in contacts"))}}),Object(D.jsx)("h2",{className:H.a.titleContacts,children:"Contacts"}),Object(D.jsx)(B,{}),Object(D.jsx)(k,{})]})};o.a.render(Object(D.jsx)(r.a.StrictMode,{children:Object(D.jsx)(l.a,{store:N,children:Object(D.jsx)(K,{})})}),document.getElementById("root"))},5:function(t,e,n){t.exports={form:"ContactForm_form__9tFx8",label:"ContactForm_label__2X8mw",input:"ContactForm_input__2T9rM",btnAdd:"ContactForm_btnAdd__3lggd"}},7:function(t,e,n){t.exports={contacts:"ContactList_contacts__j0lBN",item:"ContactList_item__1HHdO",name:"ContactList_name__Xn2Kn",tel:"ContactList_tel__2sz89",btnDel:"ContactList_btnDel__JhYN-"}}},[[44,1,2]]]);
//# sourceMappingURL=main.ed501f9e.chunk.js.map