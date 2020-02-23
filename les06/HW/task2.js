console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4)); // [0, 1, 3]
console.log(meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5)); // [0, 0, 1, 2, 2]
console.log(meeting([['XX', 5], ['XXXX', 10], ['XXXXX', 4]], 7)); // [3, 4]
console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 33)); // 'Not enough!'

function meeting(arrOfRooms, chairsNeed) {
  let counter = 0;
  let result = [];

  if (chairsNeed === 0) return 'Game On';

  arrOfRooms.forEach(room => {
    if (counter >= chairsNeed) return;

    const people = room[0].length;
    const chairs = room[1];

    if (people < chairs) {
      if (chairs - people > chairsNeed - counter) { // та самая строчка
        result.push(chairsNeed - counter);
        counter += chairsNeed - counter; 
      } else {
        result.push(chairs - people);
        counter += chairs - people;
      }
    } else {
      result.push(0);
    }
  });

  return counter === chairsNeed ? result : 'Not enough!';
}