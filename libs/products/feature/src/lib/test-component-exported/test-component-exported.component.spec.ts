import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestComponentExportedComponent } from './test-component-exported.component';

describe('TestComponentExportedComponent', () => {
  let component: TestComponentExportedComponent;
  let fixture: ComponentFixture<TestComponentExportedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponentExportedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponentExportedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
