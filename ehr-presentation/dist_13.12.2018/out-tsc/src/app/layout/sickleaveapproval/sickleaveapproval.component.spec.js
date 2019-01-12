import { async, TestBed } from '@angular/core/testing';
import { SickleaveapprovalComponent } from './sickleaveapproval.component';
describe('SickleaveapprovalComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SickleaveapprovalComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SickleaveapprovalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=sickleaveapproval.component.spec.js.map