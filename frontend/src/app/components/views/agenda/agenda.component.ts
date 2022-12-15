import { Component } from '@angular/core';
import { loadCldr, L10n, setCulture } from '@syncfusion/ej2-base';

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

  selected: Date | null;

}
