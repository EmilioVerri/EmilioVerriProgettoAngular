import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FigurineColorComponent } from './figurine-color.components';

describe('FigurineColorComponent', () => {
  let component: FigurineColorComponent;
  let fixture: ComponentFixture<FigurineColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FigurineColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FigurineColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});