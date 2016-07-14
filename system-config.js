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
    'select2': 'vendor/select2/dist/js/select2.min.js',
    'summernote': 'vendor/summernote/dist/summernote.min.js',
};
/** User packages configuration. */
var packages = {
    '@ngrx/core': {
        main: 'index.js',
        defaultExtension: 'js',
        format: 'cjs'
    },
    '@ngrx/store': {
        main: 'index.js',
        defaultExtension: 'js',
        format: 'cjs'
    },
    'ng2-bootstrap': {
        main: 'bundles/ng2-bootstrap.js',
        defaultExtension: 'js',
        format: 'cjs'
    },
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
    'app/+dashboard',
    'app/+social',
    'app/shared/footer',
    'app/shared/header',
    'app/shared/header/recent-projects',
    'app/shared/header/full-screen',
    'app/shared/header/collapse-menu',
    'app/shared/navigation',
    'app/shared/demo-states',
    'app/shared/ribbon',
    'app/+smartadmin/+app-layouts',
    'app/+smartadmin/+prebuilt-skins',
    'app/+smartadmin/prebuilt-skins',
    'app/shared/i18n',
    'app/shared/i18n/language-selector',
    'app/shared/navigation/minify-menu',
    'app/shared/header/activities',
    'app/shared/forms',
    'app/shared/api',
    'app/shared/utils',
    'app/shared/header/activities/activities-message',
    'app/shared/header/activities/activities-notification',
    'app/shared/header/activities/activities-task',
    'app/shared/widgets',
    'app/shared/widgets/widget',
    'app/shared/widgets/widgets-grid',
    'app/+widgets-showcase',
    'app/+outlook',
    'app/+outlook/shared',
    'app/+outlook/folder',
    'app/+outlook/details',
    'app/+outlook/replay',
    'app/+outlook/compose',
    'app/+maps',
    'app/+maps/shared',
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