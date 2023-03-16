import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotasComponentComponent } from './rotas-component.component';

describe('RotasComponentComponent', () => {
  let component: RotasComponentComponent;
  let fixture: ComponentFixture<RotasComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotasComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
