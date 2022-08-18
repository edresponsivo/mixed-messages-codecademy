// setup the topic into arrays for now are being manually added to the arrays.
// topic: quotes, reference from https://dzone.com/articles/best-programming-jokes-amp-quotes
// topic: food,
// TODO: eventually will get the quotes, and food from an API
const quotes = [
  {
    quote:
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    author: 'Martin Fowler',
  },
  {
    quote: 'First, solve the problem. Then, write the code.',
    author: 'John Johnson',
  },
  {
    quote: 'Experience is the name everyone gives to their mistakes.',
    author: 'Oscar Wilde',
  },
  {
    quote: 'In order to be irreplaceable, one must always be different',
    author: 'Coco Chanel',
  },
  {
    quote: 'Java is to JavaScript what car is to Carpet.',
    author: 'Chris Heilmann',
  },
  { quote: 'Knowledge is power.', author: 'Francis Bacon' },
  {
    quote:
      'Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.',
    author: 'Dan Salomon',
  },
  {
    quote:
      'Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.',
    author: 'Antoine de Saint-Exupery',
  },
  { quote: 'Ruby is rubbish! PHP is phpantastic!', author: 'Nikita Popov' },
  {
    quote: 'Code is like humor. When you have to explain it, it’s bad.',
    author: 'Cory House',
  },
  { quote: 'Fix the cause, not the symptom.', author: 'Steve Maguire' },
  {
    quote:
      'Optimism is an occupational hazard of programming: feedback is the treatment.',
    author: 'Kent Beck',
  },
  {
    quote:
      'When to use iterative development? You should use iterative development only on projects that you want to succeed.',
    author: 'Martin Fowler',
  },
  { quote: 'Simplicity is the soul of efficiency.', author: 'Austin Freeman' },
  {
    quote: 'Before software can be reusable it first has to be usable.',
    author: 'Ralph Johnson',
  },
  { quote: 'Make it work, make it right, make it fast.', author: 'Kent Beck' },
];

const foods = [
  'Apple pie',
  'Avocado Toast',
  'Bagel',
  'Baked Beans',
  'Banana bread',
  'Banana split',
  'Barbecued Ribs',
  'Biscuits & gravy',
  'BLT',
  'Bread Pudding',
  'Buffalo Wings',
  'California Rolls',
  'Cheese Burger',
  'Chicago-Style Pizza',
  'Chicken Fried Steak',
  'Chocolate chip cookies',
  'Cioppino',
  'Cobb Salad',
  'Corn Dog',
  'Cornbread',
  'Crab cakes',
  'Egg benedicts',
  'Fajitas',
  'Grilled Cheese',
  'Hot dogs',
  'Key Lime Pie',
  'Nachos',
  'New England Clam Chowder',
  'Philly Cheese Steak',
];

const luckyNumberArr = Array(100)
  .fill(1)
  .map((n, i) => n + i);

// create a function gets a random number
const randIndexOf = function (arr) {
  let rndIndx = Math.floor(Math.random() * arr.length);
  return arr[rndIndx];
};

// Create one function that gets the random element from: quotes, foods and lucky number
function getMyMessages(qtArr, foodArr, lckyNumArr) {
  let quote = randIndexOf(qtArr);
  let food = randIndexOf(foodArr);
  let luckyNumber = randIndexOf(lckyNumArr);

  // Set an ES6 Template literal with each element randomly picked.
  const output = `Keep in mind: \n"${quote.quote}" \n\t${quote.author} \nTry something new: ${food} \nAnd your lucky number is: ${luckyNumber}`;
  return output;
}

console.log(getMyMessages(quotes, foods, luckyNumberArr));
