angular
    .module('app')
    .controller('AppController', AppController);

AppController.$inject = ['ledService', 'driveService'];

function AppController(ledService, driveService) {

    var vm = this;
    vm.requestedData = '';

    vm.getData = ledService.getData;
    vm.driveForwards = driveService.driveForwards;
    vm.driveRight = driveService.driveRight;
    vm.driveLeft = driveService.driveLeft;
    vm.driveReverse = driveService.driveReverse;

}