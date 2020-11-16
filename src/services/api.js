export default function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: `fetchId${+new Date()}`,
        text: 'fetchData',
        done: false,
      });
    }, 1000);
  });
}
