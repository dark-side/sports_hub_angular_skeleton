import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ai-news-feed',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterLink],
  templateUrl: './news-feed.component.html',
  styleUrl: './news-feed.component.scss'
})
export class NewsFeedComponent {
  articles = [
    {
      link: 'main1',
      image: 'photo/main1.png',
      title: 'Rugby World Cup 2019 Trophy Tour reunites rugby legends in South Africa',
      content: 'Hundreds of rugby fans and a host of Springbok legends joined the celebration of rugby in South Africa this week on the 14th stop of the Rugby World Cup 2019 Trophy Tour.'
    },
    {
      link: 'main2',
      image: 'photo/main2.png',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      link: 'main3',
      image: 'photo/main3.png',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      link: 'main4',
      image: 'photo/main4.png',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];

  popular = [
    {
      link: 'popular1',
      image: 'photo/popular1.png',
      title: 'Lorem ipsum',
      content: 'Lorem ipsum dolor sit amet, consectetur'
    },
    {
      link: 'popular2',
      image: 'photo/popular2.png',
      title: 'Lorem ipsum',
      content: 'Lorem ipsum dolor sit amet, consectetur'
    },
    {
      link: 'popular3',
      image: 'photo/popular3.png',
      title: 'Lorem ipsum',
      content: 'Lorem ipsum dolor sit amet, consectetur'
    }
  ];

  commented = [
    {
      link: 'commented1',
      image: 'photo/commented1.png',
      title: 'Lorem ipsum',
      content: 'Lorem ipsum dolor sit amet, consectetur'
    },
    {
      link: 'commented2',
      image: 'photo/commented2.png',
      title: 'Lorem ipsum',
      content: 'Lorem ipsum dolor sit amet, consectetur'
    },
    {
      link: 'commented3',
      image: 'photo/commented3.png',
      title: 'Lorem ipsum',
      content: 'Lorem ipsum dolor sit amet, consectetur'
    }
  ];
}
