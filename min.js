const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

if (userTimeZone === "Asia/Ho_Chi_Minh" || userTimeZone === "Asia/Saigon") {
  var to = "https://github.com/KateIvesDev/QueenBee";
  window.location.href = to;
}
