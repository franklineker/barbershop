import { ContentComponent } from './../content/content.component';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver,
    private content: ContentComponent) {

  }

  showMenuIcon = true

  ngOnInit(): void {

    this.breakpointObserver.observe(['(min-width: 576px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          $('nav').attr('visibility', function(index, oldValue){
            return oldValue = 'false'
          })

          this.showMenuIcon = false

        }else {
          this.showMenuIcon = true
        }

      })
  }

  toggleMenu() {
    this.content.toggleMenu()
  }
}
