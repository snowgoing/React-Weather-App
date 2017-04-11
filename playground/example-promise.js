function getTempCallback(location, callback) {
  callback(undefined, 80); // Success
  callback('City not found')  //Error
  // Both callbacks will fire
};

getTempCallback('Miami', function(err, temp) {
  if(err) {
    return console.log(err);
  }
  console.log(temp);
});

function getTempPromise(location) {
  return new Promise(function(resolve, reject) {
    resolve(90);  // Only one can fire
    reject('City not found');  // Will fire if resolve fails
  });
};

getTempPromise('Miami').then(function(temp) {
  console.log(temp);
}, function(e) {
  console.log(e);
});


function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      reject('Parameters must be numbers')
    }
    resolve(a + b);
  });
};

addPromise(4, 6).then(function(res) {
  console.log(res);
}, function(e) {
  console.log(e);
});

addPromise('Lucy', 5).then(function(res) {
  console.log(res);
}).catch(function(e) {
  console.log(e);
});
