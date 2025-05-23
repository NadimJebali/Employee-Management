import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-calender',
  imports: [CommonModule],
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.css'
})
export class CalenderComponent {

  @Output() datecalender = new EventEmitter<string>() ;

  monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  currentMonth = new Date().getMonth();
  currentYear = new Date().getFullYear();
  selectedDay: number | null = new Date().getDate();

  get calendarDays(): (number | '')[] {
    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    const firstDayOfWeek = new Date(this.currentYear, this.currentMonth, 1).getDay(); // 0=Sun

    const offset = (firstDayOfWeek + 6) % 7; // start with Monday

    const days = Array(offset).fill('');
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  }

  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.selectedDay = null;
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.selectedDay = null;
  }

  selectDay(day: number | '') {
    if (typeof day === 'number') {
      this.selectedDay = day;
      this.datecalender.emit(this.getSelectedDate());
    }
  }

  getSelectedDate(): string {
    
  
    const day = ('0' + this.selectedDay).slice(-2);
    const month = ('0' + (this.currentMonth + 1)).slice(-2);
    const year = this.currentYear;
  
    return `${year}-${month}-${day}`; // format YYYY-MM-DD
  }
  
}
