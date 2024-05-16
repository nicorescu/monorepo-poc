import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsFeatureComponent } from './products-feature.component';

describe('ProductsFeatureComponent', () => {
  let component: ProductsFeatureComponent;
  let fixture: ComponentFixture<ProductsFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
