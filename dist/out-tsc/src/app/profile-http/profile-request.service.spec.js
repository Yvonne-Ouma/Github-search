import { TestBed, inject } from '@angular/core/testing';
import { ProfileRequestService } from './profile-request.service';
describe('ProfileRequestService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [ProfileRequestService]
        });
    });
    it('should be created', inject([ProfileRequestService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=profile-request.service.spec.js.map