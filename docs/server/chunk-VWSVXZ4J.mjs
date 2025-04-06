import './polyfills.server.mjs';
import{c as _}from"./chunk-66WLBMGS.mjs";import{a as A}from"./chunk-MI7AC25W.mjs";import{B as f,C as p,E as n,F as t,G as l,J as x,K as o,L as m,M as u,N as v,Z as C,da as E,ea as h,h as s,pa as S,qa as y,ra as b,sa as w,u as g,v as r,va as I,w as j,wa as D,xa as P}from"./chunk-BBGEAJNI.mjs";var F=(()=>{class e{constructor(){this.title="portfolio-angular"}static{this.\u0275fac=function(a){return new(a||e)}}static{this.\u0275cmp=s({type:e,selectors:[["app-root"]],standalone:!0,features:[v],decls:1,vars:0,template:function(a,c){a&1&&l(0,"router-outlet")},dependencies:[w]})}}return e})();function L(e,d){if(e&1&&(n(0,"div",22),l(1,"img",23),t()),e&2){let i=d.$implicit;r(),p("src",i,g)}}function U(e,d){if(e&1&&(n(0,"li")(1,"strong"),o(2,"Url du projet"),t(),o(3,": "),n(4,"a",24),o(5),t()()),e&2){let i=x(2);r(4),p("href",i.project.url,g),r(),m(i.project.url)}}function z(e,d){if(e&1&&(n(0,"div")(1,"div",1),l(2,"div",2),n(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2",6),o(7),t(),n(8,"ol",7)(9,"li",8)(10,"a",9),o(11,"Accueil"),t()(),n(12,"li",10),o(13),t()()()()()(),n(14,"main",11)(15,"section",12)(16,"div",5)(17,"div",13)(18,"div",14)(19,"div",15)(20,"div",16),f(21,L,2,1,"div",17),t(),l(22,"div",18),t()(),n(23,"div",19)(24,"div",20)(25,"h3"),o(26,"Informations"),t(),n(27,"ul")(28,"li")(29,"strong"),o(30,"Cat\xE9gorie"),t(),o(31),t(),n(32,"li")(33,"strong"),o(34,"Client"),t(),o(35),t(),n(36,"li")(37,"strong"),o(38,"Date"),t(),o(39),t(),f(40,U,6,2,"li",0),t()(),n(41,"div",21)(42,"h2"),o(43),t(),n(44,"p"),o(45),t()()()()()()()()),e&2){let i=x();r(7),m(i.project.title),r(6),m(i.project.title),r(8),p("ngForOf",i.project.images),r(10),u(": ",i.project.category,""),r(4),u(": ",i.project.client,""),r(4),u(": ",i.project.date,""),r(),p("ngIf",i.project.url),r(3),m(i.project.title),r(2),m(i.project.description)}}function H(e,d){e&1&&(n(0,"div")(1,"div",25)(2,"h3"),o(3,"Projet introuvable \u{1F615}"),t(),n(4,"a",26),o(5,"Retour \xE0 l'accueil"),t()()())}var R=(()=>{class e{constructor(i){this.route=i;let a=this.route.snapshot.paramMap.get("slug");this.project=A.find(c=>c.slug===a)}ngAfterViewInit(){setTimeout(()=>{window.initPortfolioSwiper&&window.initPortfolioSwiper()},0)}static{this.\u0275fac=function(a){return new(a||e)(j(b))}}static{this.\u0275cmp=s({type:e,selectors:[["app-project-detail"]],standalone:!0,features:[v],decls:2,vars:2,consts:[[4,"ngIf"],[1,"hero","hero-single","route","bg-image",2,"background-image","url(assets/img/overlay-bg.jpg)"],[1,"overlay-mf"],[1,"hero-content","display-table"],[1,"table-cell"],[1,"container"],[1,"hero-title","mb-4"],[1,"breadcrumb","d-flex","justify-content-center"],[1,"breadcrumb-item"],["routerLink","/"],[1,"breadcrumb-item","active"],["id","main"],[1,"portfolio-details"],[1,"row","gy-4"],[1,"col-lg-8"],[1,"portfolio-details-slider","swiper"],[1,"swiper-wrapper","align-items-center"],["class","swiper-slide",4,"ngFor","ngForOf"],[1,"swiper-pagination"],[1,"col-lg-4"],[1,"portfolio-info"],[1,"portfolio-description"],[1,"swiper-slide"],["alt","",3,"src"],["target","_blank",3,"href"],[1,"container","mt-5"],["routerLink","/",1,"btn","btn-primary","mt-3"]],template:function(a,c){a&1&&f(0,z,46,9,"div",0)(1,H,6,0,"div",0),a&2&&(p("ngIf",c.project),r(),p("ngIf",!c.project))},dependencies:[E,h,P,I]})}}return e})();var T=[{path:"",loadComponent:()=>import("./chunk-E5FFDCX5.mjs").then(e=>e.HomeComponent)},{path:"projets/:slug",component:R}];var M={providers:[D(T),y()]};var N={providers:[_()]},k=C(M,N);var J=()=>S(F,k),me=J;export{me as a};
