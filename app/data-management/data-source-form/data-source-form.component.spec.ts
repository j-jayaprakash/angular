import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSourceFormComponent } from './data-source-form.component';

describe('DataSourceFormComponent', () => {
  let component: DataSourceFormComponent;
  let fixture: ComponentFixture<DataSourceFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataSourceFormComponent]
    });
    fixture = TestBed.createComponent(DataSourceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
