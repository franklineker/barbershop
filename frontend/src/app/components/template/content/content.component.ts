import { Component, Injectable, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout'

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit  {

  constructor(private breakpointObserver: BreakpointObserver){

  }

  ngOnInit(): void {

  }
  toggleMenu(): void {
    $('nav').attr('visibility', function(index, oldValue){
      return oldValue == "true" ? "false" : "true"
    })
  }

}
