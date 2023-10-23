let time = prompt("Enter the number of hours, Sir:");
if (!isNaN(time)) {
  let second = time * 3600;
  alert(`At ${time} hours ${second} seconds `);
  alert("Goodbye");
} else {
  alert("Enter the number of hours,Sir");
}
