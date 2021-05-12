import { TIMEOUT_SEC } from './config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const fetchPromise = fetch(url);
    const res = await Promise.race([fetchPromise, timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    // console.log(data);
    if (!res.ok) {
      throw new Error(`${data.message} (${res.status})`);
    }
    return data;
  } catch (err) {
    throw err; // 여기서 re-throw 해준다. // 위의 throw new Error일때 model의 error로 전파하지 않으므로
  }
};
