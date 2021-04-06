const fs = require('fs');
let objectData;
let team = {};
let applicants = {};
var outputData = {"scoredApplicants": []};

function jsonReader(filePath, callback) {
  fs.readFile('./input.json', 'utf-8', (err, fileData) => {
    if (err) {
      return callback && callback(err);
    } else {
      try {
        objectData = JSON.parse(fileData);
        let tIntAvg = 0;
        let tStrAvg = 0;
        let tEndAvg = 0;
        let tSpicyAvg = 0;
        for (let i = 0; i < objectData.team.length; i++) {
          team = objectData.team[i];
          const teamInt = team.attributes.intelligence;
          const teamStr = team.attributes.strength;
          const teamEnd = team.attributes.endurance;
          const teamSpicy = team.attributes.spicyFoodTolerance;
          const intSum = parseInt(teamInt);
          tIntAvg += intSum;
          const strSum = parseInt(teamStr);
          tStrAvg += strSum;
          const endSum = parseInt(teamEnd);
          tEndAvg += endSum;
          const spicySum = parseInt(teamSpicy);
          tSpicyAvg += spicySum;
        }
        tIntAvg = ((tIntAvg/10)/3).toFixed((2));
        tStrAvg = ((tStrAvg/10)/3).toFixed((2));
        tEndAvg = ((tEndAvg/10)/3).toFixed((2));
        tSpicyAvg = ((tSpicyAvg/10)/3).toFixed((2));

        for (let j = 0; j < objectData.applicants.length; j++) {
          applicants = objectData.applicants[j]
          let int = applicants.attributes.intelligence;
          let str = applicants.attributes.strength;
          let end = applicants.attributes.endurance;
          let spicy = applicants.attributes.spicyFoodTolerance;
          int = parseInt(int);
          str = parseInt(str);
          end = parseInt(end);
          spicy = parseInt(spicy);
          int = (int/10).toFixed((2));
          str= (str/10).toFixed((2));
          end = (end/10).toFixed((2));
          spicy = (spicy/10).toFixed((2));

          let comp = (1 - (((110 * Math.abs(((int - tIntAvg) / ((parseFloat(int) + parseFloat(tIntAvg)) / 2))
              + 110 * Math.abs((str - tStrAvg) / ((parseFloat(str) + parseFloat(tStrAvg)) / 2))
              + 110 * Math.abs((end - tEndAvg) / ((parseFloat(end) + parseFloat(tEndAvg)) / 2))
              + 70 * Math.abs((spicy - tSpicyAvg) / ((parseFloat(spicy) + parseFloat(tSpicyAvg)) / 2))
          )) / 4) / 10000)).toFixed((2));
          console.log(applicants.name + "'s score: \n" + comp);

          var jsonInfo = {};
          for(let k = 0; k < objectData.applicants.length; k++) {
            jsonInfo["name"] = applicants.name;
            jsonInfo["score"] = comp;
          }
          outputData["scoredApplicants"].push(jsonInfo);
        }
        return callback && callback(null, objectData);
      } catch (err) {
        return callback && callback(err);
      }
    }
  });
}

//writes to json
jsonReader('./input.json', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile('./output.json', JSON.stringify(outputData, null, 2), err => {
      if (err) {
        console.log(err);
      }
    });
  }
});
