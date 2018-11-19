function search() {
	$(".chart").show();
}

function reset() {
	$(".checkbox").prop("checked", false);
	$(".chart").hide();
}

function getQuestions() {
	var questionArray = [];
	var questionText = firebase.database().ref
}

// ??
var myArray = [];
var i = 0;
var userDataRef = firebase.database().ref('1/0').orderByKey();
userDataRef.once('value').then(function(snapshot) {
	snapshot.forEach(function(childSnapshot) {
		var key = childSnapshot.key;
		var name_val = childSnapshot.val();
		myArray.push(name_val);
		// alert(myArray[i]);
		var node = document.createElement('li');
		var textnode = document.createTextNode(name_val);
		node.appendChild(textnode);
		document.getElementById('data').appendChild(node);
		i++;
	});
});

// draws the chart for answers
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: myArray,
		datasets: [{
			label: '# of Votes',
			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)'
			],
			borderColor: [
			'rgba(255,99,132,1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)'
			],
			borderWidth: 1
		}]
	},
	options: {
		responsive: false,
		maintainAspectRatio: false,
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		}
	}
});