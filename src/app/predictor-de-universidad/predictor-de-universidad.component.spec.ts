import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PredictorDeUniversidadComponent } from './predictor-de-universidad.component';

describe('PredictorDeUniversidadComponent', () => {
  let component: PredictorDeUniversidadComponent;
  let fixture: ComponentFixture<PredictorDeUniversidadComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictorDeUniversidadComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PredictorDeUniversidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
