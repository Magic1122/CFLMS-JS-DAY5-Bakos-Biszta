console.log('Js runs...')

/* Based on the following two Objects definitions:

var sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;
var fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;
print the following message within the browser: My favorite sandwich is a Hamburger which has approximately 260 calories, along with it I enjoy eating Large French Fries which have about 570 calories.


 */

 /* Using Object notation */

const sandwiches = { "sandwich": "hamburger", "calories": "260" };
const fries = { "fries_size": "Large French Fries", "calories": "570" };


document.getElementById('text').innerHTML = `My favorite sandwich is a ${sandwiches.sandwich} which has approximately ${sandwiches.calories} calories, along with it I enjoy eating ${fries.fries_size} which have about ${fries.calories} calories.`




/* Using destructuring */

const sandwiches1 = { "sandwich": "hamburger", "calories": "260" };
const fries1 = { "fries_size": "Large French Fries", "calories": "570" };

const { sandwich, calories: caloriesHam } = sandwiches1
const { fries_size, calories: caloriesFries } = fries1

document.getElementById('text1').innerHTML = `My favorite sandwich is a ${sandwich} which has approximately ${caloriesHam} calories, along with it I enjoy eating ${fries_size} which have about ${caloriesFries} calories.`

