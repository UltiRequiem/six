// deno-lint-ignore-file no-explicit-any

export default function setIntervalX(
  callback: (...args: any[]) => any,
  delay: number,
  repetitions: number,
  ...args: any[]
) {
  let x = 0;
  const intervalID = setInterval(() => {
    callback(...args);

    if (++x === repetitions) {
      clearInterval(intervalID);
    }
  }, delay);

  return intervalID;
}
