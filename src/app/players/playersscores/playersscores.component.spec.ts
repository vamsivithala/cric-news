import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersscoresComponent } from './playersscores.component';

describe('PlayersscoresComponent', () => {
  let component: PlayersscoresComponent;
  let fixture: ComponentFixture<PlayersscoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersscoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersscoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
