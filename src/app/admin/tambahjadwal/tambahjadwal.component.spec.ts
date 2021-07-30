import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahjadwalComponent } from './tambahjadwal.component';

describe('TambahjadwalComponent', () => {
  let component: TambahjadwalComponent;
  let fixture: ComponentFixture<TambahjadwalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahjadwalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahjadwalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
