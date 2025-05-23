import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Chart, ChartConfiguration, ChartType, registerables} from 'chart.js';
import { ApiEvaluationService } from '../services/Api/ApiEvaluation/api-evaluation.service';

Chart.register(...registerables)

@Component({
  selector: 'app-assessment',
  imports: [CommonModule , FormsModule ],
  templateUrl: './assessment.component.html',
  styleUrl: './assessment.component.css'
})
export class AssessmentComponent {

  private apiEvaluation = inject(ApiEvaluationService)
  tcom: number = 0;
tprd: number = 0;
tteam: number = 0;
dt: number[] = [];
comments: string[] = [];

chart: any;
chart2: any;

ngOnInit() {
  this.initCharts();
  this.getallEvaluations(Number(localStorage.getItem("id")));
}

initCharts() {
  this.chart = new Chart("mychart", {
    type: 'radar',
    data: {
      labels: ['Communication', 'Productivity', 'Teamwork'],
      datasets: [{
        label: 'Evaluation',
        data: this.dt,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        pointBackgroundColor: 'rgba(54, 162, 235, 1)'
      }]
    },
    options: {
      responsive: true,
      scales: {
        r: {
          min: 0,
          max: 5,
          ticks: {
            stepSize: 1
          }
        }
      }
    }
  });

  this.chart2 = new Chart("chart2", {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Auguest', 'September', 'October', 'November', 'December'],
      datasets: [{
        label: 'My Project',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1,
        data: [10, 20, 30, 40, 50, 0, 5, 0, 4, 5, 22, 3]
      }]
    },
    options: {
      scales: {
        x: {
          border: {
            color: 'red'
          }
        }
      }
    }
  });
}


getallEvaluations(id: number) {
  this.apiEvaluation.getallEvalByUser(id).subscribe({
    next: l => {
      this.tcom = 0;
      this.tprd = 0;
      this.tteam = 0;
      this.comments = [];

      l.evaluations.map(e => {
        this.tcom += e.communication;
        this.tprd += e.productivity;
        this.tteam += e.teamwork;
        this.comments.push(e.comments);
      });

      const len = l.evaluations.length;
      if (len > 0) {
        this.tcom /= len;
        this.tprd /= len;
        this.tteam /= len;
      }

      this.dt = [
        Math.floor(this.tcom),
        Math.floor(this.tprd),
        Math.floor(this.tteam)
      ];

      // 🔁 Mise à jour du radar chart
      this.chart.data.datasets[0].data = this.dt;
      this.chart.update();
    },
    error: e => alert("erreur " + e)
  });
}
  

}
