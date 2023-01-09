import { Component } from '@angular/core';

@Component({
  selector: 'animated-chart',
  templateUrl: 'chart.component.html',
})
export class AnimatedChartComponent {

	chartOptions = {
	  animationEnabled: true,
	  theme: "dark2",
	  exportEnabled: true,
	  title: {
		text: "Developer Work Week"
	  },
	  subtitles: [{
		text: "Median hours/week"
	  }],
	  data: [{
		type: "pie", //change type to column, line, area, doughnut, etc
		indexLabel: "{name}: {y}%",
		dataPoints: [
			{ name: "Overhead", y: 9.1 },
			{ name: "Problem Solving", y: 3.7 },
			{ name: "Debugging", y: 36.4 },
			{ name: "Writing Code", y: 30.7 },
			{ name: "Firefighting", y: 20.1 }
		]
	  }]
	}
}
