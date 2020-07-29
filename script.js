"use strict";

let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];
// submissions[0]
// 2.
const addSubmission = (array, newName, newScore, newDate) => {
  let newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newSubmission);
};
// addSubmission(submissions, "Rachel", 80, "2020-01-25");

// 3. Functionality: remove the object from the array at the specified index using
// the splice method
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

// 4. Functionality: remove the object(submission in this case) from the array that has the provided name.
// Incorporate the findIndex method and the splice method.
const deleteSubmissionByName = (array, name) => {
  let index = array.findIndex((submission) => {
    return submission.name === name;
  });
  array.splice(index, 1);
};

deleteSubmissionByName(submissions, "Jane");
console.log(submissions);

// 5. Declare a function named editSubmission
// ○ Parameter(s): array, index, score
// ○ Functionality: update an object’s(submission) score in the array at the specified index. Use conditional statements to set the value for the passed property to true if the score is greater than or equal to 60 and false otherwise.
const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};

editSubmission(submissions, 2, 99);
console.log(submissions);

// 6. Parameter(s): array, name
// ○ Functionality: return the object in the -array- that has the provided name. Use the find method.
const findSubmissionByName = (array, name) => {
  let findSubName = array.find((submission) => {
    return submission.name === name;
  });
  return findSubName;
};
console.log(findSubmissionByName(submissions, "Jack"));

// 7. ○ Parameter(s): array
// ○ Functionality: return the object in the -array- that has the lowest score. Use the
// forEach method to loop through the whole array.
const findLowestScore = (array) => {
  let lowestScore = array[0];
  array.forEach((submission) => {
    if (submission.score < lowestScore.score) {
      lowestScore = submission;
    }
  });
  return lowestScore;
};

// 8. ○ Parameter(s): array
// ○ Functionality: return the average quiz score. Use a for...of loop.

const findAveragetScore = (array) => {
  let sum = 0;
  for (let averageScore of array) {
    sum += averageScore.score;
  }
  return sum / array.length;
};
console.log(findAverageScore(submissions));

// 9. ○ Parameter(s): array
// ○ Functionality: return a new array using the filter method. The filter method
// should find objects in the -array- that have passing scores.
const filterPassing = (array) => {
  let passingScores = array.filter((passing) => {
    return passing.passingScores >= 60;
  });
  return passingScores;
};

console.log(filterPassing(submissions));

// 10.

// const filter90AndAbove = (array) => {
//   let scoresGreaterThan90 = array.filter((scores) => {
//     return scores.score >= 90;
//   });
//   return scoresGreaterThan90;
// };
// console.log(filter90AndAbove(submissions));
