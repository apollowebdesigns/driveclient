describe('app', function () {
    var test;

    var driveService;

    beforeEach(module('app'));
    beforeEach(inject(function($injector) {
        driveService = $injector.get('driveService');
    }));

    it('test that we are hitting the service', function() {
        expect(driveService.driveTest()).toBe(2);
    });

    it('test that 1+1=2', function() {
        expect(1+1).toBe(2);
    });
});