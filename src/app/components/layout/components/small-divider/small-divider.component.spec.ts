import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmallDividerComponent } from './small-divider.component';

describe('NavbarComponent', () => {
  let component: SmallDividerComponent;
  let fixture: ComponentFixture<SmallDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallDividerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
