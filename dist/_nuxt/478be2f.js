(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{297:function(t,e,o){var content=o(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(45).default)("5392b042",content,!0,{sourceMap:!1})},306:function(t,e,o){"use strict";o(297)},307:function(t,e,o){var n=o(44)(!1);n.push([t.i,"@media screen and (max-width:770px){.row[data-v-5dd17780]{flex-direction:column}}.work[data-v-5dd17780]{margin:70px 0}h2[data-v-5dd17780]{font-family:Orbitron,sans-serif;font-style:normal;font-weight:700;font-size:70px;line-height:120%;color:#e60000}@media screen and (max-width:771px){h2[data-v-5dd17780]{font-style:normal;font-weight:700;font-size:30px;line-height:120%}}hr[data-v-5dd17780]{width:200px;margin-top:50px;margin-bottom:50px;border:1px solid #e60000}@media screen and (max-width:771px){hr[data-v-5dd17780]{display:none}}@media screen and (max-width:771px){.content .sidebar[data-v-5dd17780]{width:100%;overflow-x:scroll}}.content .sidebar ul[data-v-5dd17780]{width:200px}@media screen and (max-width:771px){.content .sidebar ul[data-v-5dd17780]{display:flex;grid-gap:20px;gap:20px;width:-webkit-max-content;width:-moz-max-content;width:max-content}}.content .sidebar ul .active[data-v-5dd17780]{list-style-image:url(/img/ArrowRight.png);margin-left:30px}@media screen and (max-width:771px){.content .sidebar ul .active[data-v-5dd17780]{list-style-image:none;margin-left:0}}.content .sidebar ul li[data-v-5dd17780]{cursor:pointer;margin-bottom:30px;font-style:normal;font-weight:400;font-size:16px;line-height:150%}.content .sidebar ul .active span[data-v-5dd17780]{display:flex;align-items:center;height:100%;font-style:normal;font-weight:700;font-size:16px;line-height:150%}.content .promo[data-v-5dd17780]{margin-left:216px;width:100%}@media screen and (max-width:771px){.content .promo[data-v-5dd17780]{margin-left:0}.content .promo .photo[data-v-5dd17780]{width:100%;overflow-x:scroll}.content .promo .main[data-v-5dd17780],.content .promo .side[data-v-5dd17780]{width:265px!important;height:404px!important;-o-object-fit:cover;object-fit:cover}}.content .promo .photo[data-v-5dd17780]{display:flex;flex-wrap:nowrap}.content .promo .photo img[data-v-5dd17780]{background:grey}.content .promo .photo .main[data-v-5dd17780]{width:40%;height:-webkit-max-content;height:-moz-max-content;height:max-content;-o-object-fit:cover;object-fit:cover}.content .promo .photo .side[data-v-5dd17780]{width:25%;height:300px;margin-left:5%;-o-object-fit:cover;object-fit:cover}.content .promo .video[data-v-5dd17780]{width:100%}.content .promo .video iframe[data-v-5dd17780]{width:100%;height:560px}",""]),t.exports=n},318:function(t,e,o){"use strict";o.r(e);var n={name:"Work-albin",data:function(){return{active:"chosenPhoto",activeType:"photo",status:{chosenPhoto:!0,chosenVideo:!1,ads:!1,teaser:!1,reportage:!1,marriage:!1},video:{chosenVideo:"https://www.youtube.com/embed/DzrFit3OW8Q",ads:"https://www.youtube.com/embed/PwBH-ly9gsY",teaser:"https://www.youtube.com/embed/SRDFEx7rpFc"},photos:{chosenPhoto:["./img/custom/14.jpg","./img/custom/FtlybgonSb0.jpeg","./img/custom/pm0RB4ZoZhs.jpg"],reportage:["./img/funny/5YxNCXE1Ofs.jpeg","./img/funny/7R205508.jpg","./img/funny/7R205839.jpg"],marriage:["./img/marriage/7R204403.jpg","./img/marriage/7R208496.jpg","./img/marriage/IMG_2488.jpeg"],chosenVideo:"",ads:"",teaser:""}}},methods:{changeActive:function(t){switch(t){case"chosenPhoto":case"reportage":case"marriage":this.activeType="photo",console.log("photo");break;default:console.log("video"),this.activeType="video"}this.status[this.active]=!1,this.status[t]=!0,this.active=t}}},r=(o(306),o(34)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"work",attrs:{id:"work"}},[o("h2",[t._v("OUR WORK")]),t._v(" "),o("hr"),t._v(" "),o("div",{staticClass:"content row"},[o("div",{staticClass:"sidebar"},[o("ul",[o("li",{class:t.status.chosenPhoto?"active":"",attrs:{id:"chosen_photo"},on:{click:function(e){return t.changeActive("chosenPhoto")}}},[o("span",[t._v("Фотопортфолио")])]),t._v(" "),o("li",{class:t.status.chosenVideo?"active":"",attrs:{id:"chosen_video"},on:{click:function(e){return t.changeActive("chosenVideo")}}},[o("span",[t._v("Видеопортфолио")])]),t._v(" "),o("li",{class:t.status.ads?"active":"",attrs:{id:"ads"},on:{click:function(e){return t.changeActive("ads")}}},[o("span",[t._v("Рекламные ролики")])]),t._v(" "),o("li",{class:t.status.teaser?"active":"",attrs:{id:"teaser"},on:{click:function(e){return t.changeActive("teaser")}}},[o("span",[t._v("Тизеры")])]),t._v(" "),o("li",{class:t.status.reportage?"active":"",attrs:{id:"reportage"},on:{click:function(e){return t.changeActive("reportage")}}},[o("span",[t._v("Корпоративы и вечеринки")])]),t._v(" "),o("li",{class:t.status.marriage?"active":"",attrs:{id:"marriage"},on:{click:function(e){return t.changeActive("marriage")}}},[o("span",[t._v("Свадебные сьемки")])])])]),t._v(" "),o("div",{staticClass:"promo"},[o("div",{directives:[{name:"show",rawName:"v-show",value:"photo"==t.activeType,expression:"activeType == 'photo'"}],staticClass:"photo"},[o("img",{staticClass:"main",attrs:{src:t.photos[t.active][0],alt:""}}),t._v(" "),o("img",{staticClass:"side",attrs:{src:t.photos[t.active][1],alt:""}}),t._v(" "),o("img",{staticClass:"side",attrs:{src:t.photos[t.active][2],alt:""}})]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:"video"==t.activeType,expression:"activeType == 'video' "}],staticClass:"video"},[o("iframe",{attrs:{height:"560",src:t.video[t.active],title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])])])}),[],!1,null,"5dd17780",null);e.default=component.exports}}]);