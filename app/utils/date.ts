export function getCurrentDate() {
  const currDate = new Date();
  let date = currDate.getDate();
  let month = currDate.getMonth() + 1;
  let year = currDate.getFullYear();

  return new Date(`${year}, ${month}, ${date}`);
}