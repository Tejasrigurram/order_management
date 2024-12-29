document.getElementById('add-order-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const customerName = document.getElementById('customer-name').value;
    const status = document.getElementById('status').value;
  
    const response = await fetch('http://localhost:5000/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ customer_name: customerName, status }),
    });
  
    if (response.ok) {
      alert('Order added successfully!');
      location.reload();
    } else {
      alert('Error adding order!');
    }
  });
  
  // Fetch orders and display them
  (async () => {
    const response = await fetch('http://localhost:5000/api/orders');
    const orders = await response.json();
  
    const table = document.getElementById('orders-table');
    orders.forEach((order) => {
      const row = `<tr>
        <td>${order.id}</td>
        <td>${order.customer_name}</td>
        <td>${order.status}</td>
      </tr>`;
      table.innerHTML += row;
    });
  })();
  