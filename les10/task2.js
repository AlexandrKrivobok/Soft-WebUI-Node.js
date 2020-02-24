function countdown(msecs) {
  let sign = msecs < 0 ? '-' : '+';
  let hours   = parseInt(msecs / 3600000).toString();
  hours = hours.length > 1? hours: '0' + hours;

  let minutes = parseInt(msecs % 3600000 / 60000).toString();
  minutes = minutes.length > 1? minutes: '0' + minutes;

  let seconds = parseInt(msecs % 360000 % 60000 / 1000).toString();
  seconds = seconds.length > 1? seconds: '0' + seconds;

  return `${hours}:${minutes}:${seconds}`
}

console.log(countdown(-154800000))  // return  '-43:00:00'
console.log(countdown(0)) // return  '+00:00:00'
console.log(countdown(61000))// return  '+00:01:01'
console.log(countdown(360000000))// return '+100:00:00'