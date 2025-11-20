// console.log("JS test loaded - ASSET FILE");

console.log(
  "%c[TEST] Heavy Script: STARTING...",
  "color: red; font-weight: bold;",
);

const startTime = performance.now();
const duration = 3000;

let result = 0;
while (performance.now() - startTime < duration) {
  result += Math.random() * Math.sin(Math.random());
}

const endTime = performance.now();
console.log(
  `%c[TEST] Heavy Script: FINISHED. Blocked for ${Math.round(endTime - startTime)}ms.`,
  "color: red; font-weight: bold;",
);
