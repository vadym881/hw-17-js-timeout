randomDelayPrint("hello");

function randomDelayPrint(message) {
  let timerId;
  for (const letter of message) {
    const timeout = Math.random().toFixed(1) * 1000;
    console.log(letter, " -> ", timeout);
    timerId = setTimeout(console.log, timeout, letter);
  }
  clearTimeout(timerId);
}
