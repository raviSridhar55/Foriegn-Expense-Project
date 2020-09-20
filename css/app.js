document.getElementById("button-1").addEventListener("click", loadExpese);

// Load Single Customer
function loadExpese(e) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "expense.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      //   console.log(this.responseText);

      const customer = JSON.parse(this.responseText);

      //   const output = `
      //     <ul>
      //       <li>ID: ${customer.id}</li>
      //       <li>Name: ${customer.name}</li>
      //       <li>Company: ${customer.company}</li>
      //       <li>Phone: ${customer.phone}</li>
      //     </ul>
      //   `;

      document.getElementById("expense").value = `${customer.expense}`;
    }
  };

  xhr.send();
}
