async function getData() {
  const URL = "http://localhost:9000/employees";
  const response = await fetch(URL);
  if (!response.ok) {
    console.log("Server error!");
  }
  const result = await response.json();
  return result;
}

async function printResult() {
  const result = await getData();
  let parent = document.getElementById("d1");
  let table = document.createElement("table");
  for (let emp of result) {
    let row = document.createElement("tr");
    for (let key in emp) {
      let child = document.createElement("td");
      let textNode = document.createTextNode(emp[key]);
      child.appendChild(textNode);
      row.appendChild(child);
    }

    table.appendChild(row);
  }
  parent.appendChild(table);

  // console.log(result);
}
printResult();

async function insertData() {
  const URL = "http://localhost:9000/employees";
  const response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify({
      id: "aks01",
      firstName: "Anika",
      lastName: "Kalaiselvan",
    }),
  });
  if (response.ok) console.log(response.json());
  else {
    console.log("Error");
  }
}
// insertData();
