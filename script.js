const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const day = document.getElementById("day");

const monthName = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function updateClock() {
  const today = new Date();

  let h = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();
  const meridiem = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12; // Convert to 12-hour format

  hour.innerHTML = `${h.toString().padStart(2, "0")} <span>${meridiem}</span>`;
  minute.innerText = min.toString().padStart(2, "0");
  second.innerText = sec.toString().padStart(2, "0");

  const d = today.getDate();
  const m = today.getMonth();
  const y = today.getFullYear();
  day.innerText = `${d} ${monthName[m]}, ${y}`;
}

function formatTime(date) {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} <span>${meridiem}</span>`;
}

function updateWorldClocks() {
  const now = new Date();
  const options = { hour12: false, timeZone: "" };

  options.timeZone = "America/New_York";
  const ny = new Date(now.toLocaleString("en-US", options));
  document.getElementById("newyork-time").innerHTML = formatTime(ny);

  options.timeZone = "Europe/London";
  const london = new Date(now.toLocaleString("en-US", options));
  document.getElementById("london-time").innerHTML = formatTime(london);

  options.timeZone = "Asia/Tokyo";
  const tokyo = new Date(now.toLocaleString("en-US", options));
  document.getElementById("tokyo-time").innerHTML = formatTime(tokyo);
}

setInterval(() => {
  updateClock();
  updateWorldClocks();
}, 1000);

updateClock();
updateWorldClocks();
