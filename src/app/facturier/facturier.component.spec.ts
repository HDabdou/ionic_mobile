import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FacturierComponent } from './facturier.component';

describe('FacturierComponent', () => {
  let component: FacturierComponent;
  let fixture: ComponentFixture<FacturierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturierComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FacturierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
