import {Component, Input, OnInit} from '@angular/core';
import {DateService} from '../../services/date.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  @Input('year') year: number;
  @Input('month') month: number;
  @Input('map') map: any;

  cal: any;

  constructor(private dateServie: DateService) {
  }

  ngOnInit() {
    this.cal = this.generateCal(this.year, this.month)
  }

  getAmountOfDaysInMonth(year: number, month: number): number {
    return new Date(year, month, 0).getDate();
  }

  getPreviousDays(d: Date, count: number): Date[] {
    let result = [];
    d.setDate(d.getDate() - 1);
    for (let i = count; i > 0; i--) {
      //let prevDate = d;
      //prevDate.setDate(d.getDate() - count);
      //prevDate.setHours(12, 0, 0, 0);
      result.push(null);
    }

    return result;

  }


  generateCal(year: number, month: number) {
    let days = this.getDaysOfMonth(year, month);
    let first = new Date();
    first.setFullYear(days[0].getFullYear());
    first.setMonth(days[0].getMonth());
    first.setDate(days[0].getDate());
    first.setHours(12, 0, 0, 0);

    switch (first.getDay()) {
      case 0:
        days = this.getPreviousDays(first, 5).concat(days);
        break;
      case 1:
        break;
      default:
        days = this.getPreviousDays(first, first.getDay() - 1).concat(days);
        break
    }

    let cal = [];
    let temp = [];
    for (let i = 0; i < days.length; i++) {
      if (temp.length === 7) {
        cal.push(temp);
        temp = [];
      }

      let res = {
        date: days[i],
        key: null,
        data: null
      };

      if (res.date) {
        res.key = this.dateServie.getYYYYMMDDFromDate(days[i]);
        if (this.map && this.map[res.key]) {
          res.data = this.map[res.key];
        }
      }
      // push to array
      temp.push(res)
    }
    if (temp.length) {
      cal.push(temp);
    }

    // fill up 6 rows
    while (cal.length < 6) {
      cal.push([[]]);

    }

    return cal;
  }


  getDaysOfMonth(year: number, month: number) {
    // Since no month has fewer than 28 days
    let date = new Date(year, month, 1, 12);
    let days = [];
    // console.log('month', month, 'date.getMonth()', date.getMonth());
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }


}
