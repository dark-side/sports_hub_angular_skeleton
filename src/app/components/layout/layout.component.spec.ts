import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutComponent } from './layout.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { IconModule } from '../../services/svg-register.service';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LayoutComponent,
        NoopAnimationsModule,
        IconModule,
        RouterModule.forRoot([{ path: '**', component: LayoutComponent }]),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
