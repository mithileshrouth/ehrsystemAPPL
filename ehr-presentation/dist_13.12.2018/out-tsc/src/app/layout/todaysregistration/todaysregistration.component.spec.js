import { async, TestBed } from '@angular/core/testing';
import { TodaysregistrationComponent } from './todaysregistration.component';
describe('TodaysregistrationComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TodaysregistrationComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TodaysregistrationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=todaysregistration.component.spec.js.map