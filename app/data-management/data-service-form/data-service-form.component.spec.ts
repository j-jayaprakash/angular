import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataServiceFormComponent } from './data-service-form.component';

describe('DataServiceFormComponent', () => {
  let component: DataServiceFormComponent;
  let fixture: ComponentFixture<DataServiceFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataServiceFormComponent]
    });
    fixture = TestBed.createComponent(DataServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
