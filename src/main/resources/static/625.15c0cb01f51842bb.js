"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[625],{9625:(R,l,s)=>{s.r(l),s.d(l,{StudentsViewModule:()=>b});var c=s(6814),d=s(1896),m=s(3365),o=s(5313),t=s(5879),f=s(9862);let p=(()=>{var e;class n{constructor(i){this.http=i}getStudents(){return this.http.get("http://localhost:8080/api/v1/student")}}return(e=n).\u0275fac=function(i){return new(i||e)(t.LFG(f.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),n})();function h(e,n){1&e&&(t.TgZ(0,"th",13),t._uU(1," Nume "),t.qZA())}function S(e,n){if(1&e&&(t.TgZ(0,"td",14),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.hij(" ",a.lastName," ")}}function _(e,n){1&e&&(t.TgZ(0,"th",13),t._uU(1," Prenume "),t.qZA())}function w(e,n){if(1&e&&(t.TgZ(0,"td",14),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.hij(" ",a.firstName," ")}}function C(e,n){1&e&&(t.TgZ(0,"th",13),t._uU(1," Email "),t.qZA())}function v(e,n){if(1&e&&(t.TgZ(0,"td",14),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.hij(" ",a.email," ")}}function V(e,n){1&e&&(t.TgZ(0,"th",13),t._uU(1," Facultate "),t.qZA())}function y(e,n){if(1&e&&(t.TgZ(0,"td",14),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.hij(" ",a.universityName," ")}}function Z(e,n){1&e&&(t.TgZ(0,"th",13),t._uU(1," Anul "),t.qZA())}function T(e,n){if(1&e&&(t.TgZ(0,"td",14),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.hij(" ",a.year," ")}}function N(e,n){1&e&&t._UZ(0,"tr",15)}function x(e,n){1&e&&t._UZ(0,"tr",16)}const A=function(){return[20]},P=[{path:"",component:(()=>{var e;class n{constructor(i){this.studentsViewService=i,this.displayedColumns=["firstName","lastName","email","universityName","year"],this.decimalPipe=new c.JJ(navigator.language)}ngOnInit(){this.studentsViewService.getStudents().subscribe(i=>{this.dataSource=new o.by(i),this.dataSource.paginator=this.paginator})}ngAfterViewInit(){this.paginator._intl.itemsPerPageLabel="Iteme pe pagina",this.paginator._intl.firstPageLabel="Prima pagina",this.paginator._intl.lastPageLabel="Ultima pagina",this.paginator._intl.nextPageLabel="Urmatoarea pagina",this.paginator._intl.previousPageLabel="Pagina anterioara",this.paginator._intl.getRangeLabel=(i,u,r)=>`${i*u+1} - ${(i+1)*u} din ${this.decimalPipe.transform(r)}`}}return(e=n).\u0275fac=function(i){return new(i||e)(t.Y36(p))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-students-view"]],viewQuery:function(i,u){if(1&i&&t.Gf(m.NW,5),2&i){let r;t.iGM(r=t.CRH())&&(u.paginator=r.first)}},decls:22,vars:7,consts:[[1,"page"],[1,"page__top"],["mat-table","",1,"page__table",3,"dataSource"],["matColumnDef","firstName"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","lastName"],["matColumnDef","email"],["matColumnDef","universityName"],["matColumnDef","year"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"page__table__paginator",3,"hidePageSize","pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(i,u){1&i&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2," Studenti "),t.qZA(),t.TgZ(3,"table",2),t.ynx(4,3),t.YNc(5,h,2,0,"th",4),t.YNc(6,S,2,1,"td",5),t.BQk(),t.ynx(7,6),t.YNc(8,_,2,0,"th",4),t.YNc(9,w,2,1,"td",5),t.BQk(),t.ynx(10,7),t.YNc(11,C,2,0,"th",4),t.YNc(12,v,2,1,"td",5),t.BQk(),t.ynx(13,8),t.YNc(14,V,2,0,"th",4),t.YNc(15,y,2,1,"td",5),t.BQk(),t.ynx(16,9),t.YNc(17,Z,2,0,"th",4),t.YNc(18,T,2,1,"td",5),t.BQk(),t.YNc(19,N,1,0,"tr",10),t.YNc(20,x,1,0,"tr",11),t.qZA(),t._UZ(21,"mat-paginator",12),t.qZA()),2&i&&(t.xp6(3),t.Q6J("dataSource",u.dataSource),t.xp6(16),t.Q6J("matHeaderRowDef",u.displayedColumns)("matHeaderRowDefSticky",!0),t.xp6(1),t.Q6J("matRowDefColumns",u.displayedColumns),t.xp6(1),t.Q6J("hidePageSize",!0)("pageSizeOptions",t.DdM(6,A)))},dependencies:[o.BZ,o.fO,o.as,o.w1,o.Dz,o.nj,o.ge,o.ev,o.XQ,o.Gk,m.NW],styles:[".students[_ngcontent-%COMP%]{min-height:100%;padding:0 10px}.students__actions__button[_ngcontent-%COMP%]{margin-right:10px}.students__paginator[_ngcontent-%COMP%]{border-top:1px solid var(--efc-border);position:sticky;bottom:0}"]}),n})()}];let U=(()=>{var e;class n{}return(e=n).\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forChild(P),d.Bz]}),n})();var D=s(617),Y=s(2296);let b=(()=>{var e;class n{}return(e=n).\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[p],imports:[c.ez,U,o.p0,D.Ps,Y.ot,m.TU]}),n})()}}]);