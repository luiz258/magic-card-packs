import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenPackageListComponent } from './open-package-list.component';

describe('OpenPackageListComponent', () => {
  let component: OpenPackageListComponent;
  let fixture: ComponentFixture<OpenPackageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenPackageListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenPackageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
