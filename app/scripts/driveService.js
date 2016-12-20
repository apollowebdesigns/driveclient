angular
    .module('app')
    .service('driveService', driveService);

driveService.$inject = ['$http', '$log'];

function driveService ($http, $log) {

    /*****************
      Motor Variables
     *****************/

    this.driveForwards = _driveForwards;
    this.driveRight = _driveRight;
    this.driveLeft = _driveLeft;
    this.driveReverse = _driveReverse;

    var uniqueIP = "192.168.1.69";

    var uniqueIPparents = "192.168.1.74";

    var local = 'localhost';

    function _driveForwards() {
        $log.info('fowards function entered');
        //connecting to java server
        $http.get("http://localhost:8899/forwards")
            .then(function(response) {
                console.log('fowards hit');
                this.requestedData = response.data;
            });
    }

    function _driveRight() {
        $log.info('fowards function entered');
        //connecting to java server
        $http.get("http://localhost:8899/right")
            .then(function(response) {
                console.log('fowards hit');
                this.requestedData = response.data;
            });
    }

    function _driveLeft() {
        $log.info('fowards function entered');
        //connecting to java server
        $http.get("http://localhost:8899/left")
            .then(function(response) {
                console.log('fowards hit');
                this.requestedData = response.data;
            });
    }

    function _driveReverse() {
        $log.info('fowards function entered');
        //connecting to java server
        $http.get("http://localhost:8899/reverse")
            .then(function(response) {
                console.log('fowards hit');
                this.requestedData = response.data;
            });
    }
}