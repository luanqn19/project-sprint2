import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {ScriptLoaderService} from '../service/script-loader.service';
declare var $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
@HostListener('unloaded')
export class HomePageComponent implements OnInit, OnDestroy {
  constructor(private scriptLoaderService : ScriptLoaderService) {
    // this.scriptLoaderService.load('assets/js/main-index.js').subscribe();
  }

  ngOnInit(): void {
    $(window).on('loaded', function () {
      console.log('ready...');
    })
    $(window).on('load', function () {
      console.log('loading...');
    });
  }

  ngOnDestroy(): void {
    console.log('Cleared');
  }
}
