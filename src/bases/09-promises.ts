const myPromise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(100);
    //reject('Se perdio el dinero');
  }, 2000);
});

myPromise
  .then((myMoney) => {
    console.log(`Tengo mi dinero : ${myMoney}`);
  })
  .catch((reason) => {
    console.warn(reason);
  })
  .finally(() => {
    console.log('Promise has been settled (either resolved or rejected).');
  });