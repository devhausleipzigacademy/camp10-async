function isGoodExplanation(bool: boolean) {
  return new Promise<string>((resolve, reject) => {
    if (bool) {
      resolve("nice works");
    } else {
      reject("was no good explanation");
    }
  });
}

/* isGoodExplanation(true)
  .then((resolved) => {
    console.log(resolved);
    if (typeof resolved !== "string") {
      throw new Error("custom error");
    }
    return resolved;
  })
  .then((resolvedTwo) => {
    console.log("hello Im synchronous again");
    console.log(resolvedTwo);
  })
  .catch((rejected) => {
    console.log(rejected);
  }); */

console.log("hello");

function promOne() {
  return new Promise<string>((resolve, reject) => {
    resolve("promOne");
  });
}

function promTwo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promTwo");
    }, 5000);
  });
}

function promthree() {
  return new Promise((resolve, reject) => {
    resolve("promthree");
  });
}

/* Promise.all([promOne(), promTwo(), promthree()]).then((resolved) => {
  console.log(resolved);
}); */

/* Promise.race([promOne(), promTwo(), promthree()]).then((resolved) => {
  console.log(resolved);
}); */

/* isGoodExplanation(true)
  .then((res) => {
    console.log(res);
    promOne()
      .then((resolve) => {
        console.log(resolve);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });
 */

async function promiseWrapper() {
  try {
    const explanationResult = await isGoodExplanation(true);
    const resultOne = await promOne();
    return [explanationResult, resultOne];
  } catch (err) {
    console.log(err);
  }
}

/* promiseWrapper()
  .then((resolved) => {
    console.log(resolved);
  })
  .catch(); */

async function init() {
  const test = await promiseWrapper();
  console.log(test);
}
init();
