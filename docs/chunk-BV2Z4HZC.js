import{a as _,c as x}from"./chunk-5OESOFJX.js";import{a as b}from"./chunk-S2ZC4UBW.js";import{f as M,h as y,j as v}from"./chunk-BZCAI3YK.js";import{Ha as g,La as o,Ma as u,Qb as C,Ya as c,_a as a,aa as s,ab as i,bb as r,cb as l,hb as d,lb as m,mb as p,ob as f}from"./chunk-6UJFCXUF.js";function O(e,h){if(e&1&&l(0,"img",12),e&2){let t=d(2);a("src",t.article.image,g)}}function P(e,h){if(e&1&&(i(0,"div",1)(1,"div",2),c(2,O,1,1,"img",3),i(3,"p",4),m(4),r(),i(5,"h1",5),m(6),r(),i(7,"p",6),m(8,"Publi\xE9 sur le blog personnel"),r()(),i(9,"div",7),l(10,"markdown",8),r(),i(11,"div",9)(12,"a",10),l(13,"i",11),m(14," Retour \xE0 l'accueil "),r()()()),e&2){let t=d();o(2),a("ngIf",t.article.image),o(2),p(t.article.date),o(2),p(t.article.titre),o(4),a("src","assets/articles/"+t.article.slug+".md")}}var T=(()=>{class e{constructor(t){this.route=t,this.slug=this.route.snapshot.paramMap.get("slug"),this.article=b.find(n=>n.slug===this.slug)}formatTitre(t){return t.replace(/-/g," ").replace(/\b\w/g,n=>n.toUpperCase())}static{this.\u0275fac=function(n){return new(n||e)(u(M))}}static{this.\u0275cmp=s({type:e,selectors:[["app-article-detail"]],standalone:!0,features:[f],decls:1,vars:1,consts:[["class","container my-5",4,"ngIf"],[1,"container","my-5"],[1,"py-5","px-3","text-center"],["class","card-img-top","alt","Image article",3,"src",4,"ngIf"],[1,"mb-1"],[1,"fw-bold"],[1,"lead"],[1,"container"],[3,"src"],[1,"text-center","mt-4"],["routerLink","/",1,"btn","btn-primary"],[1,"bi","bi-arrow-left"],["alt","Image article",1,"card-img-top",3,"src"]],template:function(n,w){n&1&&c(0,P,15,4,"div",0),n&2&&a("ngIf",w.article)},dependencies:[x,_,C,v,y],styles:[".markdown-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .markdown-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .markdown-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:700;margin-top:2rem}.markdown-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.1rem;line-height:1.8}.markdown-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:1.5rem}.markdown-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;border-radius:6px;margin:1rem 0}"]})}}return e})();export{T as ArticleDetailComponent};
