import { fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutComponent } from './layout.component';
import { LayoutModule } from './layout.module';
describe('LayoutComponent', function () {
    var component;
    var fixture;
    beforeEach(fakeAsync(function () {
        TestBed.configureTestingModule({
            imports: [
                LayoutModule,
                RouterTestingModule,
                MatSidenavModule
            ],
            declarations: [LayoutComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(LayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=layout.component.spec.js.map