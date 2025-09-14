{
  // Date型
  const d = new Date();
  console.log(d);
  console.log(d.getFullYear());
  console.log(d.getMonth());
  d.setFullYear(2026);
  console.log(d);

  const isoDate = new Date("2020-02-03T15:00:00+09:00");
  const timeNum = isoDate.getTime();
  console.log(timeNum);
  console.log(isoDate);
  const date2 = new Date(timeNum);
  console.log(date2);
  console.log(Date.now());
}