import { TestBed } from '@angular/core/testing';
import { PatientService } from './patient.service';
describe('PatientService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(PatientService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=patient.service.spec.js.map