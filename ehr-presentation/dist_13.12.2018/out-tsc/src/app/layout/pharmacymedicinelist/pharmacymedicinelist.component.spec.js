import { async, TestBed } from '@angular/core/testing';
import { PharmacymedicinelistComponent } from './pharmacymedicinelist.component';
describe('PharmacymedicinelistComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PharmacymedicinelistComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PharmacymedicinelistComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pharmacymedicinelist.component.spec.js.map