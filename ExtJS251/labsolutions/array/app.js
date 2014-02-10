var studentScores = [ {
    name : 'Beatrix',
    score : 67
}, {
    name : 'Clive',
    score : 84
}, {
    name : 'Julia',
    score : 95
}, {
    name : 'Bruno',
    score : 42
}, {
    name : 'Hubert',
    score : 87
} ];

var names = Ext.Array.pluck(studentScores, 'name');
Ext.Array.sort(names);
alert('Students in alphabetical order: ' + names); // Alerts [Beatrix, Bruno, Clive, Hubert, Julia]

var compareScores = function(o1, o2) {
    return -(o1.score - o2.score);
};
Ext.Array.sort(studentScores, compareScores);
names = Ext.Array.pluck(studentScores, 'name');
alert('Students in score order: ' + names); // Alerts [Julia, Hubert, Clive, Beatrix, Bruno]

var s = '';
Ext.Array.forEach(studentScores, function(score){
   s += '\n' + score.name + '=' + score.score; 
});
alert('Student names and scores: ' + s);

var average = Ext.Array.mean(Ext.Array.pluck(studentScores, 'score'));
console.log('Average = ' + average);
var squareDifferenceArray = [];
Ext.Array.map(studentScores, function(score) {
    var difference = (score.score - average);
    var squareDifference = (difference * difference);
    squareDifferenceArray.push({
        name : score.name,
        squareDifference : squareDifference
    });
});
console.log('squareDifferenceArray = ' + squareDifferenceArray);

var sumOfDifferences = Ext.Array.sum(Ext.Array.pluck(squareDifferenceArray, 'squareDifference'));
var variance = ( sumOfDifferences / squareDifferenceArray.length );
console.log(variance);
alert('The standard deviation is ' + Math.sqrt(variance));



