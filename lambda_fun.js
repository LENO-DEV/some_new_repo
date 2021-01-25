module.exports.functionOne = async (event) => {
  return new Promise((res, rej) => {
    var a = 5, b = 6;
    var sum = a + b;
    if (sum) {
      res("wow " + sum);
    }
    else rej('Ooops! something went wrong!!!');
  });
}
// fun().then((el) => console.log(el));