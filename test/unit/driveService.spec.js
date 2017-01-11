describe('app', function () {

    var driveService;

    beforeEach(module('app'));
    beforeEach(inject(function($injector) {
        driveService = $injector.get('driveService');
    }));

    it('should drive forwards', function() {
        expect(driveService.driveForwards()).toBe(undefined);
    });

    it('should drive right', function() {
        expect(driveService.driveRight()).toBe(undefined);
    });

    it('should drive left', function() {
        expect(driveService.driveLeft()).toBe(undefined);
    });

    it('should drive reverse', function() {
        expect(driveService.driveReverse()).toBe(undefined);
    });

});