import{Ja as x,La as l,Pb as w,Qb as b,Ya as s,_a as p,aa as v,ab as t,bb as i,cb as m,db as _,eb as h,gb as S,hb as f,kb as C,lb as r,mb as a,nb as u,ob as E,sb as I}from"./chunk-6UJFCXUF.js";function y(n,c){if(n&1&&(_(0),t(1,"div",7)(2,"div",8)(3,"small",9),r(4),i(),t(5,"h5",10),r(6),i(),t(7,"h6",9),r(8),i(),t(9,"p"),r(10),i()()(),t(11,"div",11),m(12,"div",12),i(),m(13,"div",13),h()),n&2){let e=f().$implicit;l(4),a(e.date),l(2),a(e.titre),l(2),u("@",e.lieu,""),l(2),a(e.description)}}function T(n,c){if(n&1&&(m(0,"div",13),t(1,"div",11),m(2,"div",12),i(),t(3,"div",14)(4,"div",15)(5,"small",9),r(6),i(),t(7,"h5",10),r(8),i(),t(9,"h6",9),r(10),i(),t(11,"p"),r(12),i()()()),n&2){let e=f().$implicit;l(6),a(e.date),l(2),a(e.titre),l(2),u("@",e.lieu,""),l(2),a(e.description)}}function O(n,c){if(n&1&&(t(0,"div",5),s(1,y,14,4,"ng-container",6)(2,T,13,4,"ng-template",null,0,I),i()),n&2){let e=c.index,o=C(3);l(),p("ngIf",e%2===0)("ngIfElse",o)}}var M=(()=>{class n{constructor(){this.experiences=[{date:"Septembre. 2023 - Aujourd'hui",titre:"Ing\xE9nieur logiciel",lieu:"Inetum, France",description:"D\xE9veloppement d\u2019applications Java/Angular."},{date:"Avril 2021 - Ao\xFBt 2023",titre:"Ing\xE9nieur logiciel",lieu:"Capgemini Nantes",description:"D\xE9veloppement d\u2019applications Java/Angular."},{date:"Septembre 2019 - Ao\xFBt 2023",titre:"Etudiant",lieu:"Universit\xE9 de Rennes",description:"Licence + Master en g\xE9nie logiciel."},{date:"2019 - 2023",titre:"Co-fondateur & CTO",lieu:"Gui-Plus",description:"D\xE9veloppement d'applications"}]}ngAfterViewInit(){this.revealOnScroll()}onScroll(){this.revealOnScroll()}revealOnScroll(){document.querySelectorAll(".timeline-card").forEach(o=>{let d=o.getBoundingClientRect().top,g=window.innerHeight;d<g-100&&o.classList.add("reveal")})}static{this.\u0275fac=function(o){return new(o||n)}}static{this.\u0275cmp=v({type:n,selectors:[["app-time-line"]],hostBindings:function(o,d){o&1&&S("scroll",function(){return d.onScroll()},!1,x)},standalone:!0,features:[E],decls:5,vars:1,consts:[["rightBlock",""],["id","parcours",1,"container","my-5"],[1,"title-a","text-center","mb-5"],[1,"position-relative","timeline-line"],["class","row timeline-block mb-5 align-items-center",4,"ngFor","ngForOf"],[1,"row","timeline-block","mb-5","align-items-center"],[4,"ngIf","ngIfElse"],[1,"col-md-5","d-flex","justify-content-end"],[1,"card","shadow-sm","p-3","timeline-card","text-end"],[1,"text-muted"],[1,"fw-bold","mt-1"],[1,"col-md-2","d-flex","justify-content-center","position-relative"],[1,"timeline-dot","bg-primary"],[1,"col-md-5"],[1,"col-md-5","d-flex"],[1,"card","shadow-sm","p-3","timeline-card","text-start"]],template:function(o,d){o&1&&(t(0,"section",1)(1,"h3",2),r(2,"Parcours"),i(),t(3,"div",3),s(4,O,4,2,"div",4),i()()),o&2&&(l(4),p("ngForOf",d.experiences))},dependencies:[w,b],styles:['.timeline-line[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;bottom:0;left:50%;width:4px;background:#007bff;transform:translate(-50%);z-index:0}.timeline-dot[_ngcontent-%COMP%]{width:16px;height:16px;border-radius:50%;margin-top:8px;z-index:1}.timeline-card[_ngcontent-%COMP%]{max-width:100%;width:100%}.timeline-card[_ngcontent-%COMP%]{opacity:0;transform:translateY(20px);transition:all .6s ease-out}.timeline-card.reveal[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}']})}}return n})();export{M as a};
