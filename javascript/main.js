// function search() {
// 	$(".chart").show();
// }

// function reset() {
//     $(".checkbox").prop("checked", false);
//     $(".chart").hide();
// }

function initializeDatabase() {
	var config = {
		apiKey: "AIzaSyDCi495s5IkhDiD77yvTWInQVyRwUMS0sw",
		authDomain: "coic-housing-survey.firebaseapp.com",
		databaseURL: "https://coic-housing-survey.firebaseio.com",
		projectId: "coic-housing-survey",
		storageBucket: "coic-housing-survey.appspot.com",
		messagingSenderId: "795413976729"
	};
	firebase.initializeApp(config);
}

function getQuestions() {}


function getData() {
    // gets data from database
    myArray = [];
    var i = 0;
    var userDataRef = firebase.database().ref('1/0').orderByKey();
    userDataRef.once('value').then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var key = childSnapshot.key;
            name_val = childSnapshot.val();
            myArray.push(name_val);
            var node = document.createElement('li');
            var textnode = document.createTextNode(name_val);
            node.appendChild(textnode);
            document.getElementById('data').appendChild(node);
        });
    });
}

function printArray(array) {
    array.forEach(function(item) {
        alert(item);
    });
}

function createChart() {
    // draws the chart for answers
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            // labels: ["foo", "bar", "baz"],
            labels: myArray,
            datasets: [{
                label: "Responses",
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
}