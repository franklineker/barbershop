import { ElementRef } from '@angular/core';
import { Component } from '@angular/core';
import { loadCldr, L10n, setCulture } from '@syncfusion/ej2-base';
import * as $ from 'jquery'
import db from '../../../../../../barbearia/src/config/db.json'


declare var require: any;

loadCldr(
  require('cldr-data/main/pt/ca-gregorian.json'),
  require('cldr-data/main/pt/numbers.json'),
  require('cldr-data/main/pt/timeZoneNames.json')
)

L10n.load({
  pt: {
    calendar: {
      today: "hoje"
    }
  }
});

setCulture("pt")



@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent {

  constructor(private elementRef: ElementRef) {

  }

  dateSelected: Date | null;


  hourButtonSelected(id: string): void {

    $(`.row button`).removeAttr('is-selected')
    $(`#${id}`).attr('is-selected', function () {
      return $(this).attr('is-selected') === 'true' ? 'false' : 'true';
    })

    console.log($(`.row button`).attr('is-selected'))
  };


  bookAppointment(): void {

    //console.log(this.elementRef.nativeElement.getAttribute('id'))
    // id:3
    // client: 'Juliano'
    // barber: 'Adriano'
    // chair: 2
    // day: $('.mat-calendar-body-active').attr('aria-label')
    // hour: $('.row button[is-selected="true"]').text()

    console.log($('.mat-calendar-body-active').attr('aria-label'))
    console.log($('.row button[is-selected="true"]').text())

    db.appointments.push(
      {
        id:3,
        client: 'Juliano',
        barber: 'Adriano',
        chair: 2,
        day: `${$('.mat-calendar-body-active').attr('aria-label')}`,
        hour: $('.row button[is-selected="true"]').text()
      }
    )

  }


}
