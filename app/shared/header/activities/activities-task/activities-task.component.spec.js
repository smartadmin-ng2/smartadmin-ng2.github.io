"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/compiler/testing');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var activities_task_component_1 = require('./activities-task.component');
testing_1.describe('Component: ActivitiesTask', function () {
    var builder;
    testing_1.beforeEachProviders(function () { return [activities_task_component_1.ActivitiesTaskComponent]; });
    testing_1.beforeEach(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) {
        builder = tcb;
    }));
    testing_1.it('should inject the component', testing_1.inject([activities_task_component_1.ActivitiesTaskComponent], function (component) {
        testing_1.expect(component).toBeTruthy();
    }));
    testing_1.it('should create the component', testing_1.inject([], function () {
        return builder.createAsync(ActivitiesTaskComponentTestController)
            .then(function (fixture) {
            var query = fixture.debugElement.query(platform_browser_1.By.directive(activities_task_component_1.ActivitiesTaskComponent));
            testing_1.expect(query).toBeTruthy();
            testing_1.expect(query.componentInstance).toBeTruthy();
        });
    }));
});
var ActivitiesTaskComponentTestController = (function () {
    function ActivitiesTaskComponentTestController() {
    }
    ActivitiesTaskComponentTestController = __decorate([
        core_1.Component({
            selector: 'test',
            template: "\n    <sa-activities-task></sa-activities-task>\n  ",
            directives: [activities_task_component_1.ActivitiesTaskComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ActivitiesTaskComponentTestController);
    return ActivitiesTaskComponentTestController;
}());
//# sourceMappingURL=activities-task.component.spec.js.map