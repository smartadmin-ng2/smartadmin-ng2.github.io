"use strict";
var testing_1 = require('@angular/core/testing');
var activities_service_1 = require('./activities.service');
testing_1.describe('Activities Service', function () {
    testing_1.beforeEachProviders(function () { return [activities_service_1.ActivitiesService]; });
    testing_1.it('should ...', testing_1.inject([activities_service_1.ActivitiesService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=activities.service.spec.js.map