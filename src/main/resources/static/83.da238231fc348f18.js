"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[83],{6083:(q,B,r)=>{r.r(B),r.d(B,{SportBasesViewModule:()=>j});var p=r(6814),w=r(1896),h=r(3365),c=r(5313),Z=r(8337),d=r(6223),m=r(7700),t=r(5879),f=r(2296),_=r(9157),T=r(2032);function D(e,s){1&e&&(t.ynx(0),t._uU(1," Editeaza baza sportiva "),t.BQk())}function N(e,s){1&e&&t._uU(0," Adauga baza sportiva ")}let b=(()=>{var e;class s{constructor(o,a,i){this.formBuilder=o,this.dialogRef=a,this.data=i}ngOnInit(){this.sportBaseForm=this.formBuilder.group({name:[this.data?.name?this.data?.name:"",[d.kI.required]],address:[this.data?.address?this.data?.address:""]})}close(){this.dialogRef.close({event:"cancel"})}save(){this.dialogRef.close({event:"save",data:this.data?.id?{id:this.data?.id,...this.sportBaseForm.getRawValue()}:this.sportBaseForm.getRawValue()})}}return(e=s).\u0275fac=function(o){return new(o||e)(t.Y36(d.qu),t.Y36(m.so),t.Y36(m.WI))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-sport-base-add"]],decls:20,vars:4,consts:[[1,"dialog"],[1,"dialog__title"],[4,"ngIf","ngIfElse"],["noData",""],[1,"dialog__content"],[3,"formGroup"],["matInput","","formControlName","name"],["matInput","","formControlName","address"],[1,"dialog__content__buttons"],["type","button","mat-button","",3,"click"],["mat-button","",3,"disabled","click"]],template:function(o,a){if(1&o&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,D,2,0,"ng-container",2),t.YNc(3,N,1,0,"ng-template",null,3,t.W1O),t.qZA(),t.TgZ(5,"div",4)(6,"form",5)(7,"mat-form-field")(8,"mat-label"),t._uU(9,"Nume"),t.qZA(),t._UZ(10,"input",6),t.qZA(),t.TgZ(11,"mat-form-field")(12,"mat-label"),t._uU(13,"Adresa"),t.qZA(),t._UZ(14,"textarea",7),t.qZA(),t.TgZ(15,"div",8)(16,"button",9),t.NdJ("click",function(){return a.close()}),t._uU(17,"ANULEAZA"),t.qZA(),t.TgZ(18,"button",10),t.NdJ("click",function(){return a.save()}),t._uU(19,"SALVEAZA"),t.qZA()()()()()),2&o){const i=t.MAs(4);t.xp6(2),t.Q6J("ngIf",null==a.data?null:a.data.id)("ngIfElse",i),t.xp6(4),t.Q6J("formGroup",a.sportBaseForm),t.xp6(12),t.Q6J("disabled",a.sportBaseForm.invalid)}},dependencies:[p.O5,f.lW,d._Y,d.Fj,d.JJ,d.JL,d.sg,d.u,_.KE,_.hX,T.Nt]}),s})();var v=r(9397),S=r(6306),C=r(8504),J=r(2447),R=r(9862);const u="http://localhost:8080/api/v1/courseLocation";let x=(()=>{var e;class s{constructor(o){this.http=o}getCourseLocations(){return this.http.get(u)}createCourseLocation(o){return this.http.post(u,o)}updateCourseLocation(o){return this.http.put(u,o)}deleteCourseLocation(o){return this.http.delete(u,{body:o})}}return(e=s).\u0275fac=function(o){return new(o||e)(t.LFG(R.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),s})();var k=r(3528),V=r(617),U=r(5986),g=r(6311);function y(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"div",15)(1,"button",16),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.openAddDialog())}),t.TgZ(2,"mat-icon"),t._uU(3,"add"),t.qZA(),t._uU(4," ADAUGA "),t.qZA(),t.TgZ(5,"button",17),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.openDeleteDialog())}),t.TgZ(6,"mat-icon"),t._uU(7,"delete"),t.qZA(),t._uU(8," STERGE "),t.qZA()()}if(2&e){const n=t.oxw();t.xp6(5),t.Q6J("disabled",n.isDeleteDisabled())}}function E(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"th",18)(1,"mat-checkbox",19),t.NdJ("change",function(a){t.CHM(n);const i=t.oxw();return t.KtG(a?i.toggleAllRows():null)}),t.qZA()()}if(2&e){const n=t.oxw();t.xp6(1),t.Q6J("checked",n.selection.hasValue()&&n.isAllSelected())("indeterminate",n.selection.hasValue()&&!n.isAllSelected())}}function Y(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"td",20)(1,"mat-checkbox",21),t.NdJ("click",function(a){return a.stopPropagation()})("change",function(a){const l=t.CHM(n).$implicit,A=t.oxw();return t.KtG(a?A.selection.toggle(l):null)}),t.qZA()()}if(2&e){const n=s.$implicit,o=t.oxw();t.xp6(1),t.Q6J("checked",o.selection.isSelected(n))}}function M(e,s){1&e&&(t.TgZ(0,"th",18),t._uU(1," Nume "),t.qZA())}function Q(e,s){if(1&e&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&e){const n=s.$implicit;t.xp6(1),t.hij(" ",n.name," ")}}function F(e,s){1&e&&(t.TgZ(0,"th",18),t._uU(1," Adresa "),t.qZA())}function L(e,s){if(1&e&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&e){const n=s.$implicit;t.xp6(1),t.hij(" ",n.address," ")}}function I(e,s){1&e&&(t.TgZ(0,"th",22),t._uU(1,"\xa0"),t.qZA())}function G(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"td",20)(1,"mat-icon",23,24),t._uU(3,"more_vert"),t.qZA(),t.TgZ(4,"mat-menu",null,25)(6,"button",26),t.NdJ("click",function(){const i=t.CHM(n).$implicit,l=t.oxw();return t.KtG(l.openEditDialog(i))}),t.TgZ(7,"mat-icon"),t._uU(8,"edit"),t.qZA(),t._uU(9," EDITEAZA "),t.qZA(),t.TgZ(10,"button",26),t.NdJ("click",function(){const i=t.CHM(n).$implicit,l=t.oxw();return t.KtG(l.openDeleteDialog(i))}),t.TgZ(11,"mat-icon"),t._uU(12,"delete"),t.qZA(),t._uU(13," STERGE "),t.qZA()()()}if(2&e){const n=t.MAs(5);t.xp6(1),t.Q6J("matMenuTriggerFor",n)}}function P(e,s){1&e&&t._UZ(0,"tr",27)}function z(e,s){1&e&&t._UZ(0,"tr",28)}const H=function(){return[20]},K=[{path:"",component:(()=>{var e;class s{isAllSelected(){const o=this.selection?.selected?.length,a=this.dataSource?.data?.length;return o===a}toggleAllRows(){this.isAllSelected()?this.selection.clear():this.selection.select(...this.dataSource.data)}constructor(o,a,i){this.sportBasesService=o,this.dialog=a,this.tokenService=i,this.displayedColumns=[...this.isUserAdmin()?["select"]:[],"name","address",...this.isUserAdmin()?["actions"]:[]],this.selection=new Z.Ov(!0,[]),this.decimalPipe=new p.JJ(navigator.language)}ngOnInit(){this.refreshData()}ngAfterViewInit(){this.paginator._intl.itemsPerPageLabel="Iteme pe pagina",this.paginator._intl.firstPageLabel="Prima pagina",this.paginator._intl.lastPageLabel="Ultima pagina",this.paginator._intl.nextPageLabel="Urmatoarea pagina",this.paginator._intl.previousPageLabel="Pagina anterioara",this.paginator._intl.getRangeLabel=(o,a,i)=>`${o*a+1} - ${(o+1)*a} din ${this.decimalPipe.transform(i)}`}isUserAdmin(){return this.tokenService.isUserAdmin()}openAddDialog(){this.dialog.open(b,{data:{}}).afterClosed().subscribe(a=>{"save"==a?.event&&this.sportBasesService.createCourseLocation(a.data).pipe((0,v.b)(()=>this.refreshData()),(0,S.K)(i=>(0,C._)(()=>i))).subscribe()})}openEditDialog(o){this.dialog.open(b,{data:o}).afterClosed().subscribe(i=>{"save"==i?.event&&this.sportBasesService.updateCourseLocation(i.data).pipe((0,v.b)(()=>this.refreshData()),(0,S.K)(l=>(0,C._)(()=>l))).subscribe()})}openDeleteDialog(o){this.dialog.open(J.o,{data:{title:"Stergere Baze Sportive",content:["Urmeaza sa stergeti urmatoarele baze sportive: "+(()=>o?.id?o?.name:this.selection.selected.map(i=>i.name).join(", "))()+".","Doriti sa continuati?"]}}).afterClosed().subscribe(i=>{"save"==i?.event&&this.sportBasesService.deleteCourseLocation(o?.id?[o?.id]:this.selection.selected.map(l=>l.id)).pipe((0,v.b)(()=>this.refreshData()),(0,S.K)(l=>(0,C._)(()=>l))).subscribe()})}refreshData(){this.sportBasesService.getCourseLocations().subscribe(o=>{this.dataSource=new c.by(o),this.dataSource.paginator=this.paginator,this.selection=new Z.Ov(!0,[])})}isDeleteDisabled(){return 0===this.selection.selected.length}}return(e=s).\u0275fac=function(o){return new(o||e)(t.Y36(x),t.Y36(m.uw),t.Y36(k.i))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-sport-bases-view"]],viewQuery:function(o,a){if(1&o&&t.Gf(h.NW,5),2&o){let i;t.iGM(i=t.CRH())&&(a.paginator=i.first)}},decls:21,vars:7,consts:[[1,"page"],[1,"page__top"],["class","page__top__actions",4,"ngIf"],[1,"page__table"],["mat-table","",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","address"],["matColumnDef","actions"],["mat-header-cell","","aria-label","row actions",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"page__table__paginator",3,"hidePageSize","pageSizeOptions"],[1,"page__top__actions"],["mat-button","",1,"page__top__actions__button",3,"click"],["mat-button","",1,"page__top__actions__button",3,"disabled","click"],["mat-header-cell",""],[3,"checked","indeterminate","change"],["mat-cell",""],[3,"checked","click","change"],["mat-header-cell","","aria-label","row actions"],[1,"page__table__row-icon",3,"matMenuTriggerFor"],["menuTrigger",""],["menu","matMenu"],["mat-menu-item","",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(o,a){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2," Baze sportive "),t.YNc(3,y,9,1,"div",2),t.qZA(),t.TgZ(4,"div",3)(5,"table",4),t.ynx(6,5),t.YNc(7,E,2,2,"th",6),t.YNc(8,Y,2,1,"td",7),t.BQk(),t.ynx(9,8),t.YNc(10,M,2,0,"th",6),t.YNc(11,Q,2,1,"td",7),t.BQk(),t.ynx(12,9),t.YNc(13,F,2,0,"th",6),t.YNc(14,L,2,1,"td",7),t.BQk(),t.ynx(15,10),t.YNc(16,I,2,0,"th",11),t.YNc(17,G,14,1,"td",7),t.BQk(),t.YNc(18,P,1,0,"tr",12),t.YNc(19,z,1,0,"tr",13),t.qZA(),t._UZ(20,"mat-paginator",14),t.qZA()()),2&o&&(t.xp6(3),t.Q6J("ngIf",a.isUserAdmin()),t.xp6(2),t.Q6J("dataSource",a.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns),t.xp6(1),t.Q6J("hidePageSize",!0)("pageSizeOptions",t.DdM(6,H)))},dependencies:[p.O5,c.BZ,c.fO,c.as,c.w1,c.Dz,c.nj,c.ge,c.ev,c.XQ,c.Gk,V.Hw,f.lW,h.NW,U.oG,g.VK,g.OP,g.p6]}),s})()}];let O=(()=>{var e;class s{}return(e=s).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[w.Bz.forChild(K),w.Bz]}),s})();var $=r(9876);let j=(()=>{var e;class s{}return(e=s).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[x],imports:[p.ez,O,c.p0,V.Ps,f.ot,h.TU,U.p9,m.Is,d.u5,d.UX,_.lN,T.c,$.L,g.Tx]}),s})()}}]);