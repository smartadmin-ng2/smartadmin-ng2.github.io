webpackJsonp([10],{1297:function(t,n,e){"use strict";var o=e(0),r=e(9),u=e(1519),i=e(1518),l=function(){function t(){}return t}();l=__decorate([o.NgModule({imports:[r.CommonModule,u.routing],declarations:[i.AuthComponent]}),__metadata("design:paramtypes",[])],l),n.AuthModule=l},1518:function(t,n,e){"use strict";var o=e(0),r=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();r=__decorate([o.Component({selector:"app-auth",template:"<router-outlet></router-outlet>"}),__metadata("design:paramtypes",[])],r),n.AuthComponent=r},1519:function(t,n,e){"use strict";var o=e(36);n.routes=[{path:"login",loadChildren:function(){return e.e(62).then(e.bind(null,1515)).then(function(t){return t.LoginModule})}},{path:"register",loadChildren:function(){return e.e(61).then(e.bind(null,1517)).then(function(t){return t.RegisterModule})}},{path:"forgot-password",loadChildren:function(){return e.e(63).then(e.bind(null,1511)).then(function(t){return t.ForgotModule})}},{path:"locked",loadChildren:function(){return e.e(49).then(e.bind(null,1513)).then(function(t){return t.LockedModule})}}],n.routing=o.RouterModule.forChild(n.routes)}});