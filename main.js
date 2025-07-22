const API = "http://localhost:3000";

document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const emergency = document.getElementById("emergency").value;
  const symptoms = document.getElementById("symptoms").value;

  await fetch(`${API}/checkin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, emergency, symptoms }),
  });

  e.target.reset();
  loadPatients();
});

async function loadPatients() {
  const res = await fetch(`${API}/patients`);
  const data = await res.json();
  const body = document.getElementById("queueBody");
  body.innerHTML = "";

  data.forEach((p) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${p.name}</td>
      <td>${getPriorityText(p.priority)}</td>
      <td>${p.symptoms}</td>
      <td><button onclick="checkout(${p.id})">Check-Out</button></td>
    `;
    body.appendChild(row);
  });
}

function getPriorityText(level) {
  return level == 1 ? "Critical" : level == 2 ? "Moderate" : "Normal";
}

window.checkout = async function (id) {
  await fetch(`${API}/checkout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  loadPatients();
};

loadPatients();
