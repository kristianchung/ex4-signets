(this["webpackJsonpex4-signets"]=this["webpackJsonpex4-signets"]||[]).push([[0],{157:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},179:function(e,t,a){},287:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(14),s=a.n(i),r=(a(157),a(47)),o=a(28),l=a(17),u=(a(158),a(159),a(339)),d=a(326),j=a(9),b=a(7);function O(e){var t=e.utilisateur;return Object(b.jsxs)("header",{className:"Entete",children:[Object(b.jsxs)("div",{className:"logo",children:["Signets",Object(b.jsx)(d.a,{variant:"outlined",size:"small",className:"btn-deconnexion",onClick:function(){return j.a.auth().signOut()},children:"D\xe9connexion"})]}),Object(b.jsxs)("div",{className:"utilisateur",children:[t.displayName," ",Object(b.jsx)(u.a,{className:"avatar",alt:t.displayName,src:t.photoURL})]})]})}var h=a(96),m=a.n(h),f=a(132),x=(a(166),a(167),a(330)),p=a(133),g=a.n(p),v=a(134),N=a.n(v),D=a(143),A=a(340),C=a.p+"static/media/couverture.2dc9ece9.webp";function I(e){e.id;var t=e.nom,a=e.couleur,n=e.datemodif,i=e.couverture,s=Object(c.useState)(null),r=Object(l.a)(s,2),o=r[0],u=r[1],d=function(){u(null)};return Object(b.jsxs)("article",{className:"Dossier",style:{backgroundColor:a},children:[Object(b.jsxs)("div",{className:"couverture",children:[Object(b.jsx)(x.a,{className:"deplacer","aria-label":"d\xe9placer",disableRipple:!0,children:Object(b.jsx)(g.a,{})}),Object(b.jsx)("img",{src:i||C,alt:t})]}),Object(b.jsxs)("div",{className:"info",children:[Object(b.jsx)("h2",{children:t}),Object(b.jsxs)("p",{children:["Modifi\xe9 : ",k(n)]})]}),Object(b.jsx)(x.a,{className:"modifier",onClick:function(e){u(e.currentTarget)},"aria-label":"modifier",size:"small",children:Object(b.jsx)(N.a,{})}),Object(b.jsxs)(D.a,{id:"simple-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:d,children:[Object(b.jsx)(A.a,{onClick:d,children:"Modifier"}),Object(b.jsx)(A.a,{onClick:d,children:"Supprimer"})]})]})}function k(e){var t=e?new Date(1e3*e.seconds):new Date;return"".concat(t.getDate()," ").concat(["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","ao\xfbt","septembre","octobre","novembre","d\xe9cembre"][t.getMonth()]," ").concat(t.getFullYear())}var S=a(135);a(289);j.a.apps.length||j.a.initializeApp({apiKey:"AIzaSyAa2kXE8-eIgameFydI2Du48Fl3eQSbQ-I",authDomain:"cdem-react-b7425.firebaseapp.com",projectId:"cdem-react-b7425",storageBucket:"cdem-react-b7425.appspot.com",messagingSenderId:"286643345861",appId:"1:286643345861:web:76be1542f9d5ffe96a53ac"});var y=new S.a.AuthUI(j.a.auth()),w=j.a.firestore();function E(e){var t=e.utilisateur,a=e.etatDossiers,n=Object(l.a)(a,2),i=n[0],s=n[1];return Object(c.useEffect)((function(){function e(){return(e=Object(f.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,w.collection("utilisateurs-ex4").doc(t.uid).collection("dossiers").get();case 3:e.sent.forEach((function(e){a.push(Object(r.a)({id:e.id},e.data()))})),s(a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),""!=i?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("ul",{className:"ListeDossiers",children:i.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(I,Object(r.a)({},e))},e.id)}))})}):Object(b.jsx)("div",{className:"noteVideDossier",children:" Votre liste de dossiers est vide."})}var F=a(334),R=a(141),V=a.n(R);a(179),a(180);function P(){return Object(c.useEffect)((function(){return y.start("#firebaseui-widget",{signInOptions:[j.a.auth.GoogleAuthProvider.PROVIDER_ID,j.a.auth.FacebookAuthProvider.PROVIDER_ID,j.a.auth.GithubAuthProvider.PROVIDER_ID],signInFlow:"popup"},[])})),Object(b.jsxs)("div",{className:"Accueil",children:[Object(b.jsxs)("h3",{className:"logo",children:["Signets ",Object(b.jsx)("span",{children:"beta"})]}),Object(b.jsxs)("h2",{className:"amorce",children:["Organisez vos signets Web, ",Object(b.jsx)("br",{}),"Simple comme bonjour !"]}),Object(b.jsx)("h4",{className:"connexion-etiquette",children:"Connexion \xe0 Signets"}),Object(b.jsx)("div",{id:"firebaseui-widget"})]})}var z=a(335),M=a(337),B=a(333),T=a(332),W=a(338),_=a(142);function G(e){var t=e.ouvert,a=e.setOuvert,n=e.gererAjout,i=Object(c.useState)(""),s=Object(l.a)(i,2),r=s[0],o=s[1],u=Object(c.useState)(""),j=Object(l.a)(u,2),O=j[0],h=j[1],m=Object(c.useState)("#537169"),f=Object(l.a)(m,2),x=f[0],p=f[1];function g(){o(""),h(""),p("#537169")}return Object(b.jsx)("div",{className:"AjouterDossier",children:Object(b.jsxs)(M.a,{open:t,onClose:function(){return a(!1)},"aria-labelledby":"form-dialog-title",children:[Object(b.jsx)(W.a,{id:"form-dialog-title",children:"Ajouter un dossier"}),Object(b.jsxs)(T.a,{children:[Object(b.jsx)(z.a,{autoFocus:!0,margin:"dense",id:"nomDossier",label:"Nom du dossier",type:"text",fullWidth:!0,onChange:function(e){return o(e.target.value)},defaultValue:r}),Object(b.jsx)(z.a,{margin:"normal",id:"urlImage",label:"Adresse de l'image de couverture",type:"text",fullWidth:!0,onChange:function(e){return h(e.target.value)},defaultValue:O}),Object(b.jsx)(_.a,{width:"100%",triangle:"hide",onChangeComplete:function(e,t){return p(e.hex)},color:x,colors:["#32a89e","#6332a8","#a8324e","#323aa8","#46a832","#a86d32"]})]}),Object(b.jsxs)(B.a,{children:[Object(b.jsx)(d.a,{onClick:function(){a(!1),g()},style:{backgroundColor:"red",color:"white"},children:"Annuler"}),Object(b.jsx)(d.a,{onClick:function(){""!==r&&n(r,O,x),g()},style:{backgroundColor:"green",color:"white"},children:"Ajouter"})]})]})})}function J(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)([]),s=Object(l.a)(i,2),u=s[0],d=s[1],h=Object(c.useState)(!1),m=Object(l.a)(h,2),f=m[0],x=m[1];return Object(c.useEffect)((function(){j.a.auth().onAuthStateChanged((function(e){n(e),e&&w.collection("utilisateurs-ex4").doc(e.uid).set({nom:e.displayName,courriel:e.email,datecompte:j.a.firestore.FieldValue.serverTimestamp()},{merge:!0})}))}),[]),Object(b.jsx)("div",{className:"Appli",children:a?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O,{utilisateur:a}),Object(b.jsxs)("section",{className:"contenu-principal",children:[Object(b.jsx)(E,{utilisateur:a,etatDossiers:i}),Object(b.jsx)(G,{ouvert:f,setOuvert:x,gererAjout:function(e,t,c){var n={nom:e,couverture:t,couleur:c,datemodif:j.a.firestore.FieldValue.serverTimestamp(),signets:[]};w.collection("utilisateurs-ex4").doc(a.uid).collection("dossiers").add(n).then((function(e){e.get().then((function(e){return d([].concat(Object(o.a)(u),[Object(r.a)(Object(r.a)({},e.data()),{},{id:e.id})]))})),x(!1)}))}}),Object(b.jsx)(F.a,{onClick:function(){return x(!0)},className:"ajoutRessource",color:"primary","aria-label":"Ajouter dossier",children:Object(b.jsx)(V.a,{})})]})]}):Object(b.jsx)(P,{})})}s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(J,{})}),document.getElementById("racine"))}},[[287,1,2]]]);
//# sourceMappingURL=main.a382cdb3.chunk.js.map