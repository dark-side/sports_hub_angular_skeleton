import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SideCardComponent } from './side-card.component';
import { RouterModule } from '@angular/router';

describe('NavbarComponent', () => {
  let component: SideCardComponent;
  let fixture: ComponentFixture<SideCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SideCardComponent,
        RouterModule.forRoot([{ path: '**', component: SideCardComponent }]),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
