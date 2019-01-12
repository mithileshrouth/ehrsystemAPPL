import { fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SidebarComponent } from './sidebar.component';
import { LayoutModule } from '../../layout.module';
import { MatSidenavModule } from '@angular/material/sidenav';
describe('SidebarComponent', function () {
    var component;
    var fixture;
    beforeEach(fakeAsync(function () {
        TestBed.configureTestingModule({
            imports: [
                LayoutModule,
                RouterTestingModule,
                MatSidenavModule
            ],
            declarations: [SidebarComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SidebarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=sidebar.component.spec.js.map