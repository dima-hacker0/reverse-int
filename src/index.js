module.exports = function reverse (n) {
  if(n < 0) n *= -1;
  let cifr = 0;
  let a = n;
  while(a> 9)
  {
      cifr++;
      a /= 10;
  }
  cifr++;
  let del = 1;
  for(let i = 0; i < cifr - 1; i++)
  {
      del = del * 10;
  }
  let delOsn = del;
  let deln = del;
  let arr = [];
  for(let i = 0; i < cifr; i++)
  {
    let temp = n;
    for(let j = 0; j < i; j++){
      temp -= arr[j]*del;
      del /=10;
    }
    temp /= delOsn;
    delOsn /= 10;
    temp = Math.trunc(temp);
    arr[i] = temp;
    del = deln;
  }
  let sum = 0;
  for(let i = cifr - 1; i != -1; i--)
  {
    sum += arr[i] * deln;
    deln /= 10;
  }
  return sum;
}
