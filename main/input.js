const fs = require('fs');
var objectData;
var team = {};
var applicants = {};
var outputData = {};

function jsonReader(filePath, callback) {
  fs.readFile('./input.json', 'utf-8', (err, fileData) => {
    if (err) {
      return callback && callback(err);
    } else {
      try {
        objectData = JSON.parse(fileData);
        var tIntAvg = 0;
        var tStrAvg = 0;
        var tEndAvg = 0;
        var tSpicyAvg = 0;
        for (var i = 0; i < objectData.team.length; i++) {
          team = objectData.team[i];
          //console.log(team.name);
          var teamInt = team.attributes.intelligence;
          var teamStr = team.attributes.strength;
          var teamEnd = team.attributes.endurance;
          var teamSpicy = team.attributes.spicyFoodTolerance;
          var intSum = parseInt(teamInt);
          tIntAvg += intSum;
          var strSum = parseInt(teamStr);
          tStrAvg += strSum;
          var endSum = parseInt(teamEnd);
          tEndAvg += endSum;
          var spicySum = parseInt(teamSpicy);
          tSpicyAvg += spicySum;
          //console.log("team int: " + teamInt + "\n " + "team str: " + teamStr + "\n " + "team endurance: " + teamEnd + "\n " + "team spicy: " + teamSpicy);
        }
        console.log('Team avg: ');
        tIntAvg = ((tIntAvg/10)/3).toFixed((2));
        console.log(tIntAvg);
        tStrAvg = ((tStrAvg/10)/3).toFixed((2));
        console.log(tStrAvg);
        tEndAvg = ((tEndAvg/10)/3).toFixed((2));
        console.log(tEndAvg);
        tSpicyAvg = ((tSpicyAvg/10)/3).toFixed((2));
        console.log(tSpicyAvg);

        for (var j = 0; j < 1; j++) {
          applicants = objectData.applicants[0];
          var johnInt = applicants.attributes.intelligence;
          var johnStr = applicants.attributes.strength;
          var johnEnd = applicants.attributes.endurance;
          var johnSpicy = applicants.attributes.spicyFoodTolerance;
          johnInt = parseInt(johnInt);
          johnStr = parseInt(johnStr);
          johnEnd = parseInt(johnEnd);
          johnSpicy = parseInt(johnSpicy);
        }
        // console.log("JOHN AVGS:");
        johnInt = (johnInt/10).toFixed((2));
        // console.log(johnInt);
        johnStr= (johnStr/10).toFixed((2));
        // console.log(johnStr);
        johnEnd = (johnEnd/10).toFixed((2));
        // console.log(johnEnd);
        johnSpicy = (johnSpicy/10).toFixed((2));
        // console.log(johnSpicy);
        //Get relative difference through percentages between each value and then average it all. B/C lower difference is better, subtract by 1
        var johnComp = ( 1 - (((100*Math.abs(( (johnInt-tIntAvg)/( (parseFloat(johnInt)+parseFloat(tIntAvg))/2) )
            +100*Math.abs((johnStr-tStrAvg)/( (parseFloat(johnStr)+parseFloat(tStrAvg))/2) )
            +100*Math.abs((johnEnd-tEndAvg)/( (parseFloat(johnStr)+ parseFloat(tEndAvg))/2) )
            +100*Math.abs( (johnSpicy-tSpicyAvg)/( (parseFloat(johnSpicy)+parseFloat(tSpicyAvg))/2) )
        ))/4)/10000) ).toFixed((2));
        console.log("John's P \n" + johnComp);

        // console.log("Jane's Stuff");
        for (var k = 0; k < 1; k++) {
          applicants = objectData.applicants[1];
          var janeInt = applicants.attributes.intelligence;
          var janeStr = applicants.attributes.strength;
          var janeEnd = applicants.attributes.endurance;
          var janeSpicy = applicants.attributes.spicyFoodTolerance;
          janeInt = parseInt(janeInt);
          // console.log(janeInt);
          janeStr = parseInt(janeStr);
          // console.log(janeStr);
          janeEnd = parseInt(janeEnd);
          // console.log(janeEnd);
          janeSpicy = parseInt(janeSpicy);
          // console.log(janeSpicy);
        }
        // console.log("JANE's AVGS:");
        janeInt = (janeInt/10).toFixed((2));
        // console.log(janeInt);
        janeStr= (janeStr/10).toFixed((2));
        // console.log(janeStr);
        janeEnd = (janeEnd/10).toFixed((2));
        // console.log(janeEnd);
        janeSpicy = (janeSpicy/10).toFixed((2));
        // console.log(janeSpicy);
        //Get relative difference through percentages between each value and then average it all. B/C lower difference is better, subtract by 1
        var janeComp = ( 1 - (((100*Math.abs(( (janeInt-tIntAvg)/( (parseFloat(janeInt)+parseFloat(tIntAvg))/2) )
            +100*Math.abs((janeStr-tStrAvg)/( (parseFloat(janeStr)+parseFloat(tStrAvg))/2) )
            +100*Math.abs((janeEnd-tEndAvg)/( (parseFloat(janeStr)+parseFloat(tEndAvg))/2) )
            +100*Math.abs( (janeSpicy-tSpicyAvg)/( (parseFloat(janeSpicy)+parseFloat(tSpicyAvg))/2) )
        ))/4)/10000) ).toFixed((2));
        console.log("Jane's P \n" + janeComp);

        // console.log("Joe's Stuff");
        for (var l = 0; l < 1; l++) {
          applicants = objectData.applicants[2];
          var joeInt = applicants.attributes.intelligence;
          var joeStr = applicants.attributes.strength;
          var joeEnd = applicants.attributes.endurance;
          var joeSpicy = applicants.attributes.spicyFoodTolerance;
          joeInt = parseInt(joeInt);
          // console.log(joeInt);
          joeStr = parseInt(joeStr);
          // console.log(joeStr);
          joeEnd = parseInt(joeEnd);
          // console.log(joeEnd);
          joeSpicy = parseInt(joeSpicy);
          // console.log(joeSpicy);
        }
        // console.log("joe's AVGS:");
        joeInt = (joeInt/10).toFixed((2));
        // console.log(joeInt);
        joeStr= (joeStr/10).toFixed((2));
        // console.log(joeStr);
        joeEnd = (joeEnd/10).toFixed((2));
        // console.log(joeEnd);
        joeSpicy = (joeSpicy/10).toFixed((2));
        // console.log(joeSpicy);
        //Get relative difference through percentages between each value and then average it all. B/C lower difference is better, subtract by 1
        var joeComp = ( 1- (((100*Math.abs(( (joeInt-tIntAvg)/( (parseFloat(joeInt)+parseFloat(tIntAvg))/2) )
            +100*Math.abs((joeStr-tStrAvg)/( (parseFloat(joeStr)+parseFloat(tStrAvg))/2) )
            +100*Math.abs((joeEnd-tEndAvg)/( (parseFloat(joeStr)+parseFloat(tEndAvg))/2) )
            +100*Math.abs( (joeSpicy-tSpicyAvg)/( (parseFloat(joeSpicy)+parseFloat(tSpicyAvg))/2) )
        ))/4)/10000)).toFixed((2));
        console.log("joe's P \n" + joeComp);

        outputData = {
          "scoredApplicants": [
            {
              "name": objectData.applicants[0].name,
              "score": johnComp,
            }, {
              "name": objectData.applicants[1].name,
              "score": janeComp,
            }, {
              "name": objectData.applicants[2].name,
              "score": joeComp,
            }
          ]
        }
        return callback && callback(null, objectData);
      } catch (err) {
        return callback && callback(err);
      }
    }
  });
}

// function change(teamInt) {
//   //console.log(teamInt);
//   sum = teamInt+teamInt;
//   console.log(sum);
// }
// change();

//writes to json
jsonReader('./input.json', (err, data) => {
  if (err) {
    console.log(err);
  } else {
      fs.writeFile('./output.json', JSON.stringify(outputData, null, 2), err => {
    // fs.writeFile('./output.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.log(err);
      }
    });
  }
});
