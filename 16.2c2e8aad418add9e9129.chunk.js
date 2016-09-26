webpackJsonp([16,53],{1166:function(n,e,a){"use strict";var t=a(0),i=a(9),r=a(1332),s=a(1245),o=a(509),d=a(1391);a.d(e,"MorrisChartsModule",function(){return p});var c=this&&this.__decorate||function(n,e,a,t){var i,r=arguments.length,s=r<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,a):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(n,e,a,t);else for(var o=n.length-1;o>=0;o--)(i=n[o])&&(s=(r<3?i(s):r>3?i(e,a,s):i(e,a))||s);return r>3&&s&&Object.defineProperty(e,a,s),s},l=this&&this.__metadata||function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},p=function(){function n(){}return n=c([a.i(t.NgModule)({imports:[i.CommonModule,r.a,o.a,d.a],declarations:[s.a]}),l("design:paramtypes",[])],n)}()},1245:function(n,e,a){"use strict";var t=a(0),i=a(510);a.d(e,"a",function(){return o});var r=this&&this.__decorate||function(n,e,a,t){var i,r=arguments.length,s=r<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,a):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(n,e,a,t);else for(var o=n.length-1;o>=0;o--)(i=n[o])&&(s=(r<3?i(s):r>3?i(e,a,s):i(e,a))||s);return r>3&&s&&Object.defineProperty(e,a,s),s},s=this&&this.__metadata||function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},o=function(){function n(n){this.jsonApiService=n}return n.prototype.ngOnInit=function(){var n=this;this.jsonApiService.fetch("/graphs/morris.json").subscribe(function(e){return n.morrisDemoData=e})},n.prototype.barColorsDemo=function(n,e,a){if("bar"===a){var t=Math.ceil(150*n.y/8);return"rgb("+t+",0,0)"}return"#000"},n.prototype.percentageFormat=function(n){return n+"%"},n.prototype.dateFormat=function(n){return n.getMonth()+1+"/"+n.getDate()+"/"+n.getFullYear()},n=r([a.i(t.Component)({selector:"sa-morris-charts",template:a(1473)}),s("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.a&&i.a)&&e||Object])],n);var e}()},1332:function(n,e,a){"use strict";var t=a(73),i=a(1245);a.d(e,"a",function(){return s});var r=[{path:"",component:i.a}],s=t.a.forChild(r)},1390:function(n,e,a){"use strict";var t=a(0);a.d(e,"a",function(){return s});var i=this&&this.__decorate||function(n,e,a,t){var i,r=arguments.length,s=r<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,a):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(n,e,a,t);else for(var o=n.length-1;o>=0;o--)(i=n[o])&&(s=(r<3?i(s):r>3?i(e,a,s):i(e,a))||s);return r>3&&s&&Object.defineProperty(e,a,s),s},r=this&&this.__metadata||function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},s=function(){function n(n){this.el=n}return n.prototype.ngAfterContentInit=function(){var n=this;a.e(32).then(a.bind(null,1614)).then(function(){return a.e(44).then(a.bind(null,1566))}).then(function(){switch(e.element=n.el.nativeElement.children[0],e.data=n.data,n.type){case"area":Morris.Area(e);break;case"bar":Morris.Bar(e);break;case"line":Morris.Line(e);break;case"donut":Morris.Donut(e)}});var e=this.options||{}},i([a.i(t.Input)(),r("design:type",Object)],n.prototype,"data",void 0),i([a.i(t.Input)(),r("design:type",Object)],n.prototype,"options",void 0),i([a.i(t.Input)(),r("design:type",String)],n.prototype,"type",void 0),n=i([a.i(t.Component)({selector:"sa-morris-graph",template:'\n     <div class="chart no-padding" ></div>\n  ',styles:[]}),r("design:paramtypes",["function"==typeof(e="undefined"!=typeof t.ElementRef&&t.ElementRef)&&e||Object])],n);var e}()},1391:function(n,e,a){"use strict";var t=a(0),i=a(9),r=a(1390);a.d(e,"a",function(){return d});var s=this&&this.__decorate||function(n,e,a,t){var i,r=arguments.length,s=r<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,a):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(n,e,a,t);else for(var o=n.length-1;o>=0;o--)(i=n[o])&&(s=(r<3?i(s):r>3?i(e,a,s):i(e,a))||s);return r>3&&s&&Object.defineProperty(e,a,s),s},o=this&&this.__metadata||function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},d=function(){function n(){}return n=s([a.i(t.NgModule)({imports:[i.CommonModule],declarations:[r.a],exports:[r.a]}),o("design:paramtypes",[])],n)}()},1473:function(n,e){n.exports='<div id="content">\n  <div class="row">\n    <sa-big-breadcrumbs [items]="[\'Morris Charts\']" class="col-xs-12 col-sm-7 col-md-7 col-lg-4"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n  <sa-widgets-grid>\n    <div class="row" *ngIf="morrisDemoData">\n\n      <article class="col-sm-12 col-md-12 col-lg-12">\n        <sa-widget editbutton={false}>\n          <header>\n            <span class="widget-icon"> <i class="fa fa-bar-chart-o"></i> </span>\n            <h2>Sales Graphs</h2>\n          </header>\n          <div>\n            <div class="widget-body no-padding">\n              <sa-morris-graph [data]="morrisDemoData.sales"\n                               type="area"\n                               [options]="{\n                              xkey: \'period\',\n                              ykeys: [\'iphone\', \'ipad\', \'itouch\'],\n                              labels: [\'iPhone\', \'iPad\', \'iPod Touch\'],\n                              pointSize: [2],\n                              hideHover: \'auto\'\n                           }"\n              ></sa-morris-graph>\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n\n      <article class="col-xs-12 col-sm-6">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class="widget-icon"> <i class="fa fa-bar-chart-o"></i> </span>\n\n            <h2>Area Graph</h2>\n          </header>\n\n          <div>\n            <div class="widget-body no-padding">\n              <sa-morris-graph [data]="morrisDemoData[\'area-demo\']"\n                               type="area"\n                               [options]="{\n                              xkey: \'x\',\n                              ykeys: [\'y\', \'z\'],\n                              labels: [\'Y\', \'Z\']\n\n              }"></sa-morris-graph>\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n\n      <article class="col-xs-12 col-sm-6">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class="widget-icon"> <i class="fa fa-bar-chart-o"></i> </span>\n\n            <h2>Bar Graph</h2>\n          </header>\n\n          <div>\n            <div class="widget-body no-padding">\n              <sa-morris-graph [data]="morrisDemoData[\'bar-demo\']"\n                               type="bar"\n                               [options]="{\n                              xkey: \'x\',\n                              ykeys: \'y\',\n                              labels: \'Y\',\n                              barColors: barColorsDemo\n\n              }"></sa-morris-graph>\n\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n\n      <article class="col-xs-12 col-sm-6">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class="widget-icon"> <i class="fa fa-bar-chart-o"></i> </span>\n\n            <h2>Normal Bar Graph</h2>\n          </header>\n\n          <div>\n            <div class="widget-body no-padding">\n\n              <sa-morris-graph [data]="morrisDemoData[\'normal-bar-demo\']"\n                               type="bar"\n                               [options]="{\n                              xkey: \'x\',\n                              ykeys: [\'y\', \'z\', \'a\'],\n                              labels: [\'Y\', \'Z\', \'A\']\n\n              }"></sa-morris-graph>\n\n\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n\n      <article class="col-xs-12 col-sm-6">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class="widget-icon"> <i class="fa fa-bar-chart-o"></i> </span>\n\n            <h2>Stacked Bar Graph</h2>\n          </header>\n          <div>\n            <div class="widget-body no-padding">\n\n              <sa-morris-graph [data]="morrisDemoData[\'stacked-bar-demo\']"\n                               type="bar"\n                               [options]="{\n                              xkey: \'x\',\n                              ykeys: [\'y\', \'z\', \'a\'],\n                              labels: [\'Y\', \'Z\', \'A\'],\n                              staked: true\n\n              }"></sa-morris-graph>\n\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n\n      <article class="col-xs-12 col-sm-6">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class="widget-icon"> <i class="fa fa-bar-chart-o"></i> </span>\n\n            <h2>Year Graph</h2>\n          </header>\n\n          <div>\n            <div class="widget-body no-padding">\n              <sa-morris-graph [data]="morrisDemoData[\'line-year-demo\']"\n                               type="line"\n                               [options]="{\n                              xkey: \'period\',\n                              ykeys: [\'licensed\', \'sorned\'],\n                              labels: [\'Licensed\', \'SORN\']\n              }"></sa-morris-graph>\n\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n      <article class="col-xs-12 col-sm-6">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class="widget-icon"> <i class="fa fa-bar-chart-o"></i> </span>\n\n            <h2>Donut Graph</h2>\n          </header>\n\n          <div>\n            <div class="widget-body no-padding">\n              <sa-morris-graph [data]="morrisDemoData[\'donut-demo\']"\n                               type="donut"\n                               [options]="{\n                              formater: percentageFormat\n              }"></sa-morris-graph>\n\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n      <article class="col-xs-12 col-sm-6">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class="widget-icon"> <i class="fa fa-bar-chart-o"></i> </span>\n\n            <h2>Time Graph</h2>\n          </header>\n\n          <div>\n            <div class="widget-body no-padding">\n\n              <sa-morris-graph [data]="morrisDemoData[\'line-time-demo\']"\n                               type="line"\n                               [options]="{\n                              xkey: \'period\',\n                              ykeys: [\'licensed\', \'sorned\'],\n                              labels: [\'Licensed\', \'SORN\'],\n                              events: [\'2011-04\', \'2011-08\']\n              }"></sa-morris-graph>\n\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n      <article class="col-xs-12 col-sm-6">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class="widget-icon"> <i class="fa fa-bar-chart-o"></i> </span>\n\n            <h2>Line Graph A</h2>\n          </header>\n\n          <div>\n            <div class="widget-body no-padding">\n              <sa-morris-graph [data]="morrisDemoData[\'line-graph-a-demo\']"\n                               type="line"\n                               [options]="{\n                              xkey: \'period\',\n                              ykeys: [\'a\'],\n                              labels: [\'Series A\'],\n                              units: \'%\'\n              }"></sa-morris-graph>\n\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n      <article class="col-xs-12 col-sm-6">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class="widget-icon"> <i class="fa fa-bar-chart-o"></i> </span>\n\n            <h2>Line Graph B</h2>\n          </header>\n\n          <div>\n            <div class="widget-body no-padding">\n              <sa-morris-graph [data]="morrisDemoData[\'line-graph-b-demo\']"\n                               type="line"\n                               [options]="{\n                              xkey: \'period\',\n                              ykeys: [\'licensed\', \'sorned\', \'other\'],\n                              labels: [\'Licensed\', \'SORN\', \'Other\'],\n                              xLabels: \'day\',\n                              xLabelFormat: dateFormat\n              }"></sa-morris-graph>\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n      <article class="col-xs-12 col-sm-6">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class="widget-icon"> <i class="fa fa-bar-chart-o"></i> </span>\n\n            <h2>No Grid Graph</h2>\n          </header>\n\n          <div>\n            <div class="widget-body no-padding">\n              <sa-morris-graph [data]="morrisDemoData[\'no-grid-demo\']"\n                               type="line"\n                               [options]="{\n                              xkey: \'period\',\n                              ykeys: [\'licensed\', \'sorned\'],\n                              labels: [\'Licensed\', \'SORN\'],\n                              grid: false\n              }"></sa-morris-graph>\n\n\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n      <article class="col-xs-12 col-sm-12">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class="widget-icon"> <i class="fa fa-bar-chart-o"></i> </span>\n\n            <h2>Line Graph C</h2>\n          </header>\n\n          <div>\n            <div class="widget-body no-padding">\n              <sa-morris-graph [data]="morrisDemoData[\'line-graph-c-demo\']"\n                               type="line"\n                               [options]="{\n                              xkey: \'elapsed\',\n                              ykeys: [\'value\'],\n                              labels: [\'value\'],\n                              parseTime: false\n              }"></sa-morris-graph>\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n\n    </div>\n  </sa-widgets-grid>\n</div>\n'}});