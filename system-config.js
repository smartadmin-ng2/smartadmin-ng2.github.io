/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    'rxjs/Rx': 'vendor/rxjs/bundles/Rx.umd.js',
    '@ngrx': 'vendor/@ngrx',
    'moment': 'vendor/moment/moment.js',
    'jquery': 'vendor/jquery/dist/jquery.js',
    'jquery-migrate': 'vendor/jquery-migrate/dist/jquery-migrate.js',
    'jquery-ui': 'vendor/jquery-ui-npm/jquery-ui.js',
    'ng2-bootstrap': 'vendor/ng2-bootstrap',
    'symbol-observable': 'vendor/symbol-observable/lib/ponyfill.js',
    // 'lodash': 'vendor/lodash',
    'smart-widgets': 'vendor/smartadmin-plugins/smartwidgets/jarvis.widget.min.js',
    'smart-notification': 'vendor/smartadmin-plugins/notification/SmartNotification.min.js',
    'smart-chat': 'vendor/smartadmin-plugins/chat/chat.box.js',
    // 'full-calendar': 'vendor/smartadmin-plugins/fullcalendar/jquery.fullcalendar.min.js',
    'fullcalendar': 'vendor/smartadmin-plugins/bower_components/fullcalendar/dist/fullcalendar.js',
    'jquery.sparkline': 'vendor/smartadmin-plugins/bower_components/relayfoods-jquery.sparkline/dist/jquery.sparkline.min.js',
    'select2': 'vendor/select2/dist/js/select2.min.js',
    'summernote': 'vendor/summernote/dist/summernote.min.js',
    'jquery.easy-pie-chart': 'vendor/smartadmin-plugins/bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js',
    'highcharts': 'vendor/highcharts/highcharts.js',
    'highchart-table': 'vendor/smartadmin-plugins/bower_components/highchartTable/jquery.highchartTable.js',
    'dygraphs': 'vendor/dygraphs',
    'flot-bundle': 'vendor/smartadmin-plugins/flot-bundle/flot-bundle.js',
    'raphael': 'vendor/raphael/raphael.min.js',
    'morris.js': 'vendor/morris.js/morris.min.js',
    'chart.js': 'vendor/chart.js/dist/Chart.min.js',
    'datatables.net': 'vendor/datatables.net/js/jquery.dataTables.js',
    'datatables.net-bs': 'vendor/datatables.net-bs/js/dataTables.bootstrap.js',
    'datatables.net-buttons': 'vendor/datatables.net-buttons/js/dataTables.buttons.js',
    'datatables.net-buttons-colVis': 'vendor/datatables.net-buttons/js/buttons.colVis.js',
    'datatables.net-buttons-flash': 'vendor/datatables.net-buttons/js/buttons.flash.js',
    'datatables.net-buttons-html5': 'vendor/datatables.net-buttons/js/buttons.html5.js',
    'datatables.net-buttons-print': 'vendor/datatables.net-buttons/js/buttons.print.js',
    'datatables.net-buttons-bs': 'vendor/datatables.net-buttons-bs/js/buttons.bootstrap.js',
    'datatables.net-colreorder': 'vendor/datatables.net-colreorder/js/dataTables.colReorder.js',
    'datatables.net-responsive': 'vendor/datatables.net-responsive/js/dataTables.responsive.js',
    'datatables.net-responsive-bs': 'vendor/datatables.net-responsive-bs/js/responsive.bootstrap.js',
    'jquery-validation': 'vendor/jquery-validation/dist/jquery.validate.js',
    'jquery.maskedinput': 'vendor/jquery.maskedinput/src/jquery.maskedinput.js',
    'dropzone': 'vendor/dropzone/dist/dropzone-amd-module.js',
    'bootstrap-validator': 'vendor/smartadmin-plugins/bower_components/bootstrapvalidator/dist/js/bootstrapValidator.min.js',
};
/** User packages configuration. */
var packages = {
    '@angular/core': {
        main: 'bundles/core.umd.js',
        defaultExtension: 'js',
        format: 'cjs'
    },
    '@angular/platform-browser': {
        main: 'bundles/platform-browser.umd.js',
        defaultExtension: 'js',
        format: 'cjs'
    },
    '@angular/platform-browser-dynamic': {
        main: 'bundles/platform-browser-dynamic.umd.js',
        defaultExtension: 'js',
        format: 'cjs'
    },
    '@angular/http': {
        main: 'bundles/http.umd.js',
        defaultExtension: 'js',
        format: 'cjs'
    },
    '@angular/common': {
        main: 'bundles/common.umd.js',
        defaultExtension: 'js',
        format: 'cjs'
    },
    '@angular/compiler': {
        main: 'bundles/compiler.umd.js',
        defaultExtension: 'js',
        format: 'cjs'
    },
    '@angular/forms': {
        main: 'bundles/forms.umd.js',
        defaultExtension: 'js',
        format: 'cjs'
    },
    'ng2-bootstrap': {
        main: 'bundles/ng2-bootstrap.js',
        defaultExtension: 'js',
        format: 'cjs'
    },
    'dygraphs': {
        main: 'dygraph-combined.js',
        defaultExtension: 'js',
        format: 'global'
    },
    'highcharts': {
        format: 'global'
    },
    'chart.js': {
        format: 'global'
    },
    'raphael': {
        format: 'global'
    },
};
// var packageNames = [
//   '@angular/common',
//   '@angular/compiler',
//   '@angular/core', // <--------
//   '@angular/http',
//   '@angular/platform-browser',
//   '@angular/platform-browser-dynamic',
//   '@angular/router',
//   '@angular/router-deprecated',
//   '@angular/testing',
//   '@angular/upgrade',
// ];
//
// packageNames.forEach(function(pkgName) {
//   packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
// });
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'app',
    'app/shared',
    'app/shared/user',
    'app/shared/layout',
    'app/shared/layout/footer',
    'app/shared/layout/header',
    'app/shared/layout/header/recent-projects',
    'app/shared/layout/header/full-screen',
    'app/shared/layout/header/collapse-menu',
    'app/shared/layout/header/activities',
    'app/shared/layout/header/activities/activities-message',
    'app/shared/layout/header/activities/activities-notification',
    'app/shared/layout/header/activities/activities-task',
    'app/shared/layout/navigation',
    'app/shared/layout/navigation/minify-menu',
    'app/shared/layout/navigation/big-breadcrumbs',
    'app/shared/layout/ribbon',
    'app/shared/layout/utils',
    'app/shared/i18n',
    'app/shared/i18n/language-selector',
    'app/shared/header/activities',
    'app/shared/forms',
    'app/shared/api',
    'app/shared/utils',
    'app/shared/graphs',
    'app/shared/graphs/inline',
    'app/shared/graphs/dygraph',
    'app/shared/graphs/highcharts',
    'app/shared/widgets',
    'app/shared/widgets/widget',
    'app/shared/widgets/widgets-grid',
    'app/shared/stats',
    'app/+dashboard',
    'app/+smartadmin/+app-layouts',
    'app/+smartadmin/+prebuilt-skins',
    'app/+social',
    'app/+widgets-showcase',
    'app/+outlook',
    'app/+outlook/shared',
    'app/+outlook/folder',
    'app/+outlook/details',
    'app/+outlook/replay',
    'app/+outlook/compose',
    'app/+maps',
    'app/+maps/shared',
    'app/+graphs/sparklines',
    'app/+graphs/easy-pie-charts',
    'app/+graphs/dygraphs',
    'app/+graphs/highchart-tables',
    'app/+graphs/flot-charts',
    'app/+graphs/morris-charts',
    'app/+graphs/chart-js-showcase',
    'app/shared/user/login-info',
    'app/shared/layout/shortcut',
    'app/shared/graphs/chart-js',
    'app/shared/graphs/morris-graph',
    'app/shared/graphs/flot-chart',
    'app/+app-views/+forum/general-view',
    'app/+app-views/+forum/topic-view',
    'app/+app-views/+forum/post-view',
    'app/+app-views/+profile',
    'app/+calendar',
    'app/+calendar/shared',
    'app/+calendar/add-event',
    'app/+calendar/draggable-event',
    'app/+calendar/calendar-widget',
    'app/+calendar/external-events',
    'app/+tables/normal-tables',
    'app/+tables/datatables-showcase',
    'app/+tables/shared',
    'app/+tables/shared/datatable',
    'app/+forms/shared',
    'app/+forms/shared/common',
    'app/+forms/shared/input',
    'app/+forms/shared/validation',
    'app/+forms/+form-elements',
    'app/+forms/+form-layouts/checkout-form',
    'app/+forms/+form-layouts/checkout-form',
    'app/+forms/+form-layouts/registration-form',
    'app/+forms/+form-layouts/review-form',
    'app/+forms/+form-layouts/order-form',
    'app/+forms/shared/input/file-input',
    'app/+forms/+form-layouts/comment-form',
    'app/+forms/+form-layouts/contact-form',
    'app/+forms/form-validation',
    'app/+forms/dropzone-showcase',
    'app/+forms/shared/dropzone',
    'app/+forms/bootstrap-elements',
    'app/+forms/bootstrap-validation',
    'app/+forms/+bootstrap-validation/movie-form',
    'app/+forms/+bootstrap-validation/toggling-form',
    'app/+forms/+bootstrap-validation/attribute-form',
    'app/+forms/+bootstrap-validation/button-group-form',
    'app/+forms/+bootstrap-validation/product-form',
    'app/+forms/+bootstrap-validation/profile-form',
    'app/+forms/+bootstrap-validation/contact-form',
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map