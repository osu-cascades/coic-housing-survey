myData = [];
barColor = [];
borderColor = [];
$(".checkbox").attr('checked', true);

async function search() {
 	var a = await getData();
    createChart();
}

function reset() {
    history.go(0);
}

function initializeDatabase() {
	var config = {
        apiKey: "AIzaSyCZb-6UCAIZh7jxXM5aN0Zc3_l0KQRKFDs",
        authDomain: "test-database-c192c.firebaseapp.com",
        databaseURL: "https://test-database-c192c.firebaseio.com",
        projectId: "test-database-c192c",
        storageBucket: "test-database-c192c.appspot.com",
        messagingSenderId: "296041543266"
  };
  firebase.initializeApp(config);
}

function getQuestions() {}


async function getData() {
    // gets data from database
    myArray = {};
    var i = 0;
    var selected = document.getElementById("question-select").value;
    switch(selected) {
        case "question-1":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        //if parent contains checkbox values
                        if(query.startsWith("1-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-2":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("2-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-3":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("3-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-4":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("4-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-5":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("5-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-6":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("6-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-7":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("7-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-8":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("8-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-9":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("9-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-10":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("10-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-11":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("11-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-12":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("12-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-13":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("13-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-14":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("14-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-15":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("15-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-16":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("16-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-17":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("17-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-18":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("18-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-19":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("19-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-20":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("20-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-21":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("21-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-22":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("22-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-23":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("23-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-24":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("24-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-25":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("25-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-26":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("26-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-27":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("27-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-28":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("28-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-29":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("29-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-30":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("30-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-31":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("31-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-32":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("32-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-33":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("33-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-34":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("34-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-35":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("35-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-36":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("36-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-37":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("37-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-38":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("38-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-39":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("39-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-40":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("40-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-41":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("41-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-42":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("42-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-43":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("43-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-44":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("44-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-45":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("45-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-46":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("46-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-47":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("47-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-48":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("48-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-49":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("49-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-50":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("50-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-51":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("51-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-52":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("52-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-53":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("53-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-54":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("54-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-55":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("55-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-56":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("56-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-57":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("57-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-58":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("58-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;

        case "question-59":
            var userDataRef = firebase.database().ref('responses/').orderByKey();
            return userDataRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(snapshot2) {
                    snapshot2.forEach(function(childSnapshot) {
                        var query = childSnapshot.key;
                        name_val = childSnapshot.val();
                        if(query.startsWith("59-")) {
                            console.log(name_val);
                            if(myArray.hasOwnProperty(name_val) == false) {
                                myArray[name_val] = 1;
                                barColor.push('rgba(255, 99, 132, 0.2)');
                                borderColor.push('rgba(255, 99, 132, 1)');
                            }
                            else {
                                myArray[name_val]++;
                            }
                        }
                    });
                });
            });
        break;
    }
    return myArray;
    //createChart(); I don't understand why it won't work here
}

function printArray(array) {
    array.forEach(function(item) {
        alert(item);
    });
}

function createChart() {
    // draws the chart for answers
    myArray2 = Object.keys(myArray);
    myData = Object.values(myArray);
    //console.log(myData);
    var ctx = $("#myChart");
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            // labels: ["foo", "bar", "baz"],
            labels: myArray2,
            datasets: [{
                label: "Responses",
                data: myData,
                backgroundColor: barColor,
                /*[
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],*/
                borderColor: borderColor,
                /*[
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                */
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    ticks: {
                        display: false //this will remove only the label
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}