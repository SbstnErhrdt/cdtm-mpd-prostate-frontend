import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() {
  }

  public getToday() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!

    let yyyy = today.getFullYear();
    let dd_str = '';
    let mm_str = '';
    if (dd < 10) {
      dd_str = '0' + dd;
    } else {
      dd_str = '' + dd;
    }
    if (mm < 10) {
      mm_str = '0' + mm;
    } else {
      mm_str = '' + mm;
    }
    return dd_str + '.' + mm_str + '.' + yyyy;
  }

  public getUnixTimeStamp(dateString: string) {

    const dateParts = dateString.split(".");

    const dateObject = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]), 12);

    const result = Number(dateObject) / 1000;
    console.log(dateString, result);
    return result
  }

  public getYYYYMMDD(dateString: string) {
    const dateParts = dateString.split(".");
    return dateParts[2] + "-" + dateParts[1] + "-" + dateParts[0];
  }

  public getYYYYMMDDFromDate(date: Date) {
    let dd = date.getDate();
    let mm = date.getMonth() + 1; //January is 0!
    let yyyy = date.getFullYear();
    let dd_str = '';
    let mm_str = '';
    if (dd < 10) {
      dd_str = '0' + dd;
    } else {
      dd_str = '' + dd;
    }
    if (mm < 10) {
      mm_str = '0' + mm;
    } else {
      mm_str = '' + mm;
    }
    return yyyy + '-' + mm_str + '-' + dd_str;
  }

  public getNowUnixTime() {
    return Math.floor(Date.now() / 1000);
  }

  public getNowYYYYMMDD() {
    let now = new Date();
    return now.getFullYear() + "-" + now.getMonth() + 1 + "-" + now.getDate();
  }

}
