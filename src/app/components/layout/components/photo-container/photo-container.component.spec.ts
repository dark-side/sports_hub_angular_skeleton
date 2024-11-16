import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoContainerComponent } from './photo-container.component';
import { IconModule } from '../../../../services/svg-register.service';
import { RouterModule } from '@angular/router';

describe('PhotoContainerComponent', () => {
  let component: PhotoContainerComponent;
  let fixture: ComponentFixture<PhotoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PhotoContainerComponent,
        IconModule,
        RouterModule.forRoot([{ path: '**', component: PhotoContainerComponent }])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
