const raisinAlarm = function (cookie) {
  // Put your solution here  cookie is an [] if cookies include rasion then return 'alert'
  for (let item of cookie) {
    if (item === "🍇") {
      return "Raisins Alert!";
    }
  }
  return "All good!";
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

const raisinAlarmArray = function (cookies) {
  // Put your solution here
  let result = [];
  for (let i = 0; i < cookies.length; i++) {
    result.push(raisinAlarm(cookies[i]));
  }
  return result;
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);
