(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{1:function(e,t,a){e.exports={box_data:"box_box_data__3l4TA",box_total:"box_box_total__3iBB5",box_positive:"box_box_positive__2rwVv",box_secure:"box_box_secure__36wee",box_death:"box_box_death__2FKna",box_title:"box_box_title__QVVCz",box_title_total:"box_box_title_total__2slg-",box_title_positive:"box_box_title_positive__NzEIB",box_title_secure:"box_box_title_secure__2yudY",box_title_death:"box_box_title_death__3Dll6",big_number:"box_big_number__20RD0",small_number:"box_small_number__2QLyR",number_total:"box_number_total__1Ym61",number_positive:"box_number_positive__3Vrqb",number_secure:"box_number_secure__tCDdq",number_death:"box_number_death__112ub"}},17:function(e,t,a){e.exports={title_home:"title_title_home__3wT3F",date:"title_date__37RW1",mb_60:"title_mb_60__2yRiT"}},176:function(e,t,a){},177:function(e,t,a){},179:function(e,t,a){"use strict";a.r(t);var o=a(0),c=a(2),l=a.n(c),n=a(54),s=a.n(n),i=(a(60),a(61),a(4)),b=a(28),r=a.n(b),d=a(8),u=a.n(d),_=a(29),x=a(17),h=a.n(x);function m(e){return Object(o.jsxs)("div",{className:"".concat(h.a.mb_60),children:[Object(o.jsx)("h1",{className:"text-center ".concat(h.a.title_home),children:e.name}),Object(o.jsxs)("h2",{className:"".concat(h.a.date),children:["Terakhir update ",e.date]})]})}var j=a(1),f=a.n(j);function p(e){return Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col-lg d-flex flex-column ".concat(f.a.box_data," ").concat(f.a.box_total),children:[Object(o.jsx)("h3",{className:"".concat(f.a.box_title," ").concat(f.a.box_title_total),children:"Total Kasus"}),Object(o.jsx)("h2",{className:"d-flex flex-wrap ".concat(f.a.big_number," ").concat(f.a.number_total),children:e.cases.toLocaleString("id-ID")}),Object(o.jsxs)("h4",{className:f.a.small_number,children:["+",e.plusCases.toLocaleString("id-ID")]})]}),Object(o.jsxs)("div",{className:"col-lg d-flex flex-column ".concat(f.a.box_data," ").concat(f.a.box_positive),children:[Object(o.jsx)("h3",{className:"".concat(f.a.box_title," ").concat(f.a.box_title_positive),children:"Positif"}),Object(o.jsx)("h2",{className:"d-flex flex-wrap ".concat(f.a.big_number," ").concat(f.a.number_positive),children:e.positive.toLocaleString("id-ID")}),Object(o.jsxs)("h4",{className:f.a.small_number,children:["+",e.plusPositive.toLocaleString("id-ID")]})]}),Object(o.jsxs)("div",{className:"col-lg d-flex flex-column ".concat(f.a.box_data," ").concat(f.a.box_secure),children:[Object(o.jsx)("h3",{className:"".concat(f.a.box_title," ").concat(f.a.box_title_secure),children:"Sembuh"}),Object(o.jsx)("h2",{className:"d-flex flex-wrap ".concat(f.a.big_number," ").concat(f.a.number_secure),children:e.secure.toLocaleString("id-ID")}),Object(o.jsxs)("h4",{className:f.a.small_number,children:["+",e.plusSecure.toLocaleString("id-ID")]})]}),Object(o.jsxs)("div",{className:"col-lg d-flex flex-column ".concat(f.a.box_data," ").concat(f.a.box_death),children:[Object(o.jsx)("h3",{className:"".concat(f.a.box_title," ").concat(f.a.box_title_death),children:"Meninggal Dunia"}),Object(o.jsx)("h2",{className:"d-flex flex-wrap ".concat(f.a.big_number," ").concat(f.a.number_death),children:e.death.toLocaleString("id-ID")}),Object(o.jsxs)("h4",{className:f.a.small_number,children:["+",e.plusDeath.toLocaleString("id-ID")]})]})]})}a(176),a(177);var g=a(178);function O(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),a=t[0],l=t[1],n=Object(c.useState)(0),s=Object(i.a)(n,2),b=s[0],d=s[1],x=Object(c.useState)(0),h=Object(i.a)(x,2),j=h[0],f=h[1],g=Object(c.useState)(0),O=Object(i.a)(g,2),v=O[0],S=O[1],N=Object(c.useState)(0),C=Object(i.a)(N,2),k=C[0],L=C[1],w=Object(c.useState)(0),D=Object(i.a)(w,2),T=D[0],F=D[1],y=Object(c.useState)(0),I=Object(i.a)(y,2),P=I[0],Q=I[1],M=Object(c.useState)(0),B=Object(i.a)(M,2),A=B[0],E=B[1],K=Object(c.useState)(null),R=Object(i.a)(K,2),z=R[0],V=R[1],q=Object(c.useState)({labels:[],datasets:[{label:"Covid - 19 Indonesia",data:[0,0,0]}]}),J=Object(i.a)(q,2),W=J[0],Y=J[1],Z=Object(c.useState)({labels:[],datasets:[{label:"Covid - 19 Indonesia",data:[0,0,0]}]}),G=Object(i.a)(Z,2),H=G[0],U=G[1],X=Object(c.useState)([]),$=Object(i.a)(X,2),ee=$[0],te=$[1],ae={tooltips:{backgroundColor:"rgba(0, 0, 0, 0.9)",titleFontFamily:"Quicksand",bodyFontFamily:"Quicksand",footerMarginTop:16,footerFontFamily:"Quicksand",xPadding:12,yPadding:12,borderColor:"#fff",caretSize:10,multiKeyBackground:"#00000000",callbacks:{footer:function(e,t){var a=e[0].label,o=t.labels,c="";return o.forEach((function(e,t){a===e&&(c=ee[t])})),c}}},scales:{yAxes:[{ticks:{fontFamily:"Quicksand",fontColor:"white"}}],xAxes:[{ticks:{fontFamily:"Quicksand",fontColor:"white"}}]},legend:{labels:{fontFamily:"Quicksand",fontColor:"#ffffff",fontSize:16,boxWidth:20}},responsive:!0,maintainAspectRatio:!1},oe="https://apicovid19indonesia-v2.vercel.app/api/indonesia";return Object(c.useEffect)((function(){r.a.get("".concat(oe,"/harian")).then((function(e){var t=[],a=e.data.length-1-7,o=e.data.length-1,c=e.data,l=[],n=[],s=[],i=[],b=[],r=[],d=[],_=[],x=[];c.forEach((function(e,c){var h=e.tanggal.split("T");c>a&&c<=o&&(l.push(u()(h[0]).format("dddd")),n.push(e.positif_kumulatif),s.push(e.dirawat_kumulatif),i.push(e.sembuh_kumulatif),b.push(e.meninggal_kumulatif),r.push(e.positif),d.push(e.dirawat),_.push(e.sembuh),x.push(e.meninggal),t.push(u()(h[0]).format("ll")))})),te(t),Y({labels:l,datasets:[{label:"Total Kasus",data:n,fill:!1,borderColor:"#589bf3"},{label:"Positif",data:s,fill:!1,borderColor:"#f0f358"},{label:"Sembuh",data:i,fill:!1,borderColor:"#72ee62"},{label:"Meninggal",data:b,fill:!1,borderColor:"#ee6262"}]}),U({labels:l,datasets:[{label:"Total Kasus",data:r,fill:!1,borderColor:"#589bf3"},{label:"Positif",data:d,fill:!1,borderColor:"#f0f358"},{label:"Sembuh",data:_,fill:!1,borderColor:"#72ee62"},{label:"Meninggal",data:x,fill:!1,borderColor:"#ee6262"}]})})),r.a.get("".concat(oe,"/more")).then((function(e){var t=e.data;l(t.total.positif),f(t.total.sembuh),L(t.total.meninggal),Q(t.total.dirawat),d(t.penambahan.positif),S(t.penambahan.sembuh),F(t.penambahan.meninggal),E(t.penambahan.dirawat),function(e){var t=e.split("T"),a=t[1].split(".000Z"),o="".concat(t[0]," ").concat(a[0]);V(u()(o).format("LLLL"))}(t.penambahan.created),console.log(t)})).catch((function(e){console.log(e.response)}))}),[]),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(m,{name:"Data Covid - 19 Indonesia Ter-update",date:z}),Object(o.jsx)(p,{cases:a,plusCases:b,secure:j,plusSecure:v,death:k,plusDeath:T,positive:P,plusPositive:A}),Object(o.jsx)("hr",{}),Object(o.jsx)("h3",{className:"subtitle",children:"Total 1 Minggu Terakhir"}),Object(o.jsx)("div",{className:"mb30",children:Object(o.jsx)(_.Line,{data:W,height:300,options:ae})}),Object(o.jsx)("h3",{className:"subtitle",children:"Penambahan 1 Minggu Terakhir"}),Object(o.jsx)("div",{className:"mb30",children:Object(o.jsx)(_.Line,{data:H,height:300,options:ae})}),Object(o.jsx)("hr",{})]})}u.a.locale("id",g);var v=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(O,{})})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,180)).then((function(t){var a=t.getCLS,o=t.getFID,c=t.getFCP,l=t.getLCP,n=t.getTTFB;a(e),o(e),c(e),l(e),n(e)}))};s.a.render(Object(o.jsx)(l.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),S()},60:function(e,t,a){},61:function(e,t,a){}},[[179,1,2]]]);
//# sourceMappingURL=main.6089fb9a.chunk.js.map