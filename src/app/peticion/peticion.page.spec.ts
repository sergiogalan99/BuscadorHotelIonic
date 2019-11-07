import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticionPage } from './peticion.page';

describe('PeticionPage', () => {
  let component: PeticionPage;
  let fixture: ComponentFixture<PeticionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeticionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeticionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
