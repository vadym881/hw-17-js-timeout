const one = () => console.log("one");
const two = () => console.log("two");
const three = () => console.log("three");
const array = [one, two, three];
const res = intervalRace(array, 1000);
console.log(res)

function intervalRace(arr, t) {
  const resArray = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    const timeout = t * (i + 1);
    resArray.push([arr[i], timeout])
    console.log(arr[i], " -> ", timeout);
    setTimeout(arr[i], timeout);
  }
  return resArray
}
