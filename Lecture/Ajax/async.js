const whereAmI = async function (country) {
  const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
  console.log(res);
  const data = await res.json();
  console.log(data);
  // (same)
  // fetcs(`https://restcountries.eu/rest/v2/name/${country}`).then((res) => console.log(res));
};

whereAmI("portugal");
console.log("Firsst!!!");

// Firsst!!!
// Promise
