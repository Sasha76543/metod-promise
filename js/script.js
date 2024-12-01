//1
const delayedPromise = ((value, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value)
        }, delay)
    })
})

const promises = [
    delayedPromise("Promise 1", 1000),
    delayedPromise("Promise 2", 2000),
    delayedPromise("Promise 3", 3000),
    delayedPromise("Promise 4", 4000),
    delayedPromise("Promise 5", 5000),
  ];

  Promise.all(promise)
    .then((results) => {
        console.log("Всі проміси виконані")
        console.log(results)
    })
    .catch((error) => {
     console.log("Пpоміс відхилено", error)
    })

    //2
    const randomDelay = ((value) => {
        const delay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000; 
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(value);
          }, delay);
        });
    })

    const promise = [
        randomDelay("Promise 1"),
        randomDelay("Promise 2"),
        randomDelay("Promise 3"),
        randomDelay("Promise 4"),
        randomDelay("Promise 5"),
      ];

      Promise.race(promises)
  .then((result) => {

    console.log("Найшвидший ппроміс виконаний", result);
  })
  .catch((error) => {

    console.error("Помилка", error);
  });