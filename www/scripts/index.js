// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        document.getElementById('templom').addEventListener('click', function () {
            changeView("Budapest, Árpádházi Szent Erzsébet templom, Rózsák tere 8, 1074")
        }, false);
        document.getElementById('lagzi').addEventListener('click', function () {
            changeView("Budapest, Flashback Studio, Bogdáni út 1, 1033")
        }, false);
    };

    function changeView(coordinates) {

        //launchnavigator.getAppsForPlatform(launchnavigator.PLATFORM.ANDROID).forEach(function (app) {
        //    console.log(launchnavigator.getAppDisplayName(app) + " is supported");
        //});

        launchnavigator.navigate(coordinates, {
            //app: launchnavigator.APP.USER_SELECT
            //app: launchnavigator.APP.GEO
            app: launchnavigator.APP.GOOGLE_MAPS
        });

    };
    var onSuccess = function (position) {
        alert('onSuccess()');
        launchnavigator.navigate("47.501365,19.0759258", false);
        launchnavigator.isAppAvailable('WAZE', wazeAvailable, wazeNOTAvailable);
    };

    function wazeAvailable(a) {
        alert('Nincs Waze vaze! ' + a);
    };

    function wazeNOTAvailable() {
        alert('WAZEEE vaze!');
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: ' + error.code + '\n' +
            'message: ' + error.message + '\n');
    }

    function onFail() {
        var b = 1;
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();