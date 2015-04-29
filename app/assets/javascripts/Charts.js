// This is where the skills charts are written

// Doughnut Charts 
var htmlDoughnutData = [
	{
		value: 85,
		color:"#F7464A",
		highlight: "#FF5A5E",
		label: "85%"
	},
	{
		value: 15,
		color: "#F8F8F8",
		highlight: "#F8F8F8",
		label: "a"
	}

];

var javaqueryDoughnutData = [
	{
		value: 70,
		color: "#F7464A",
		highlight: "#F7464A",
		label: "70%"
	},
	{
		value: 30,
		color: "#F8F8F8",
		highlight: "#F8F8F8",
		label: "70%",
	}
];

var rubyRailsDoughnutData = [
	{
		value: 65,
		color: "#F7464A",
		highlight: "#F7464A",
		label: "65%"
	},
	{
		value: 35,
		color: "#F8F8F8",
		highlight: "#F8F8F8",
		label: "35%",
	}
];

window.onload = function(){
	var ctx  = document.getElementById("chart-html").getContext("2d");
	var ctx2 = document.getElementById("chart-javaquery").getContext("2d");
	var ctx3 = document.getElementById("chart-rubyrails").getContext("2d");
	window.myJavaqueryDoughnut = new Chart(ctx2).Doughnut(javaqueryDoughnutData, {responsive: true});
	window.myHtmlDoughnut      = new Chart(ctx).Doughnut(htmlDoughnutData, {responsive : true});
	window.myRubyRailsDoughnut = new Chart(ctx3).Doughnut(rubyRailsDoughnutData, {response: true}); 
};











