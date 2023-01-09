import { Component, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  showFiller = false;

  today: number = Date.now();

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  
  chart: any;
 
  chartOptions = {
    animationEnabled: true,
    data: [{
      type: "stackedColumn",
      name: "Vocabullary",
      showInLegend: true,
      dataPoints: [
        { label: "Mon", y: 60 },
        { label: "Tue", y: 120 },
        { label: "Wed", y:  500 },
        { label: "Thus", y: 90 },
        { label: "Fri", y: 50 },
        { label: "Sat", y: 10 },
        { label: "Sun", y: 20 }
      ]
    }, {
        type: "stackedColumn",
        name: "Grammer",
        showInLegend: true,
        dataPoints: [
          { label: "Mon", y: 90 },
          { label: "Tue", y: 100 },
          { label: "Wed", y: 130 },
          { label: "Thus", y: 90},
          { label: "Fri", y: 30},
          { label: "Sat", y: 110 },
          { label: "Sun", y: 210 }
        ]
    }, {
        type: "stackedColumn",
         name: "Listening",
        showInLegend: true,
        dataPoints: [
          { label: "Mon", y: 130},
          { label: "Tue", y: 110},
          { label: "Wed", y: 120 },
          { label: "Thus", y: 120},
          { label: "Fri", y: 110 },
          { label: "Sat", y: 110 },
          { label: "Sun", y: 110}
        ]
    }, {
      type: "stackedColumn",
       name: "Writing",
      showInLegend: true,
      dataPoints: [
        { label: "Mon", y: 120},
        { label: "Tue", y: 130},
        { label: "Wed", y: 120 },
        { label: "Thus", y: 110},
        { label: "Fri", y: 140 },
        { label: "Sat", y: 170},
        { label: "Sun", y: 150}
      ]
  }
  ]
  }	

  ngOnInit(): void {
  }

}
