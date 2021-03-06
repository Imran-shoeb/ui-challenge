import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { SeedService } from '../services/seed.service';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let seedService: SeedService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      providers: [
        {provide: SeedService}
      ]    
    })
    .compileComponents();

    //injecting services to test
    seedService = TestBed.inject(SeedService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //testing header title
  it('should render header title in a h1 tag', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Popular Products');
  });

  //testing service call
  it('should call seedService once when document loads', () => {
    expect(seedService.getAllProducts.call.length)
      .withContext('getAllProducts method was called once')
      .toBe(1);
  });

  //validating the data
  it('getAllProducts() should return valid data', () => {
    let productList = seedService.getAllProducts();
    expect(typeof productList).toBe('object');
    expect(typeof productList[0].id).toBe('number');
  });

  //testing the vote count increment button and function call
  it('vote button clicked and increment function called', fakeAsync(() => {
    spyOn(component, 'increment');
    let button = fixture.debugElement.nativeElement.querySelector('.vote');
    button.click();
    tick();
    expect(component.increment).toHaveBeenCalled();
  }));
});
