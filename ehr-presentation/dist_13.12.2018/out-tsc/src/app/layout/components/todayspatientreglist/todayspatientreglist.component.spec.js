import { async, TestBed } from '@angular/core/testing';
import { TodayspatientreglistComponent } from './todayspatientreglist.component';
describe('TodayspatientreglistComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TodayspatientreglistComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TodayspatientreglistComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=todayspatientreglist.component.spec.js.map