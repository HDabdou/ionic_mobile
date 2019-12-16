import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AirtimeComponent } from './airtime.component';

describe('AirtimeComponent', () => {
  let component: AirtimeComponent;
  let fixture: ComponentFixture<AirtimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirtimeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AirtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
