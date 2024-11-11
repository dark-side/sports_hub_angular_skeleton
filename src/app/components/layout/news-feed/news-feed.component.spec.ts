import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsFeedComponent } from './news-feed.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

describe('NewsFeedComponent', () => {
  let component: NewsFeedComponent;
  let fixture: ComponentFixture<NewsFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NewsFeedComponent,
        RouterModule.forRoot([{ path: '**', component: NewsFeedComponent }]),
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
