import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TajerSwitchButtonComponent } from './tajer-switch-button.component';

describe('TajerSwitchButtonComponent', () => {
  let component: TajerSwitchButtonComponent;
  let fixture: ComponentFixture<TajerSwitchButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TajerSwitchButtonComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TajerSwitchButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
