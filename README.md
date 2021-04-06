# CompPredictor

The way my program takes input is: 

  It reads the uploaded JSON file (input.json) and grabs the object, grabs the array in the object, and then grabs the information from the object within the array. Although not finished, I was creating a form in HTML in which it takes user input and the information is fetched and put into a JSON file.
  
The way my program generates outputs is: 

  The way my program takes an output is it first reads the JSON file searching through the team first. It iterates through the team members, adds up and averages intelligence, then str, etc. Afterwards, it iterates through the applicants this time and gets the value for their attributes, gets the percentage relative difference, and b/c lower difference = more compatability a lower value would have been better so I subtracted our difference value from 1. Now the highest the score, the higher the compatability value. I was adjusting the weight (multiplication of math.floor) of specifically the spicyFoodTolerance as I thought that was the least important but the ranking remained the same. 
  
  To generate the output, run the input.js and it should write to output.json.
