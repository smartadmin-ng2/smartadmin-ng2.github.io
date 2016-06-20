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
var core_1 = require('@angular/core');
var activities_service_1 = require("./activities.service");
var moment_pipe_1 = require("../../utils/moment.pipe");
var activities_message_component_1 = require("./activities-message/activities-message.component");
var activities_task_component_1 = require("./activities-task/activities-task.component");
var activities_notification_component_1 = require("./activities-notification/activities-notification.component");
var ActivitiesComponent = (function () {
    function ActivitiesComponent(activitiesService, el) {
        this.activitiesService = activitiesService;
        this.el = el;
        this.active = false;
        this.loading = false;
        this.activities = [];
        this.count = 0;
        this.lastUpdate = new Date();
    }
    ActivitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activitiesService.getActivities().subscribe(function (data) {
            _this.activities = data;
            _this.count = data.reduce(function (sum, it) { return sum + it.data.length; }, 0);
            _this.currentActivity = data[0];
        });
    };
    ActivitiesComponent.prototype.setActivity = function (activity) {
        this.currentActivity = activity;
    };
    ActivitiesComponent.prototype.onToggle = function () {
        var dropdown = $('.ajax-dropdown', this.el.nativeElement);
        this.active = !this.active;
        if (this.active) {
            dropdown.fadeIn();
        }
        else {
            dropdown.fadeOut();
        }
    };
    ActivitiesComponent.prototype.update = function () {
        var _this = this;
        this.loading = true;
        setTimeout(function () {
            _this.lastUpdate = new Date();
            _this.loading = false;
        }, 1000);
    };
    ActivitiesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sa-activities',
            templateUrl: 'activities.component.html',
            directives: [activities_message_component_1.ActivitiesMessageComponent, activities_task_component_1.ActivitiesTaskComponent, activities_notification_component_1.ActivitiesNotificationComponent],
            providers: [activities_service_1.ActivitiesService],
            pipes: [moment_pipe_1.MomentPipe]
        }), 
        __metadata('design:paramtypes', [activities_service_1.ActivitiesService, core_1.ElementRef])
    ], ActivitiesComponent);
    return ActivitiesComponent;
}());
exports.ActivitiesComponent = ActivitiesComponent;
//# sourceMappingURL=activities.component.js.map