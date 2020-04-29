import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HelloCatComponent } from './hello-cat.component';

describe('HelloCatComponent', () => {
  let component: HelloCatComponent;
  let fixture: ComponentFixture<HelloCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloCatComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HelloCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
