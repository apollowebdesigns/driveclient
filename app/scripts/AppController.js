angular
    .module('app')
    .controller('AppController', AppController);

AppController.$inject = ['ledService', 'driveService'];

function AppController(ledService, driveService) {

    var vm = this;
    vm.requestedData = 'test data';
    vm.getData = ledService.getData;
    vm.driveForwards = driveService.driveForwards;
    vm.driveData = driveService.driveData;

    vm.driveData = driveService.driveData;

}