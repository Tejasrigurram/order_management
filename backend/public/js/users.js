document.getElementById('add-user-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  const response = await fetch('http://localhost:5000/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, role }),
  });

  if (response.ok) {
    alert('User added successfully!');
    location.reload();
  } else {
    alert('Error adding user!');
  }
});

// Fetch users and display them
(async () => {
  try {
    const response = await fetch('http://localhost:5000/api/users');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const users = await response.json();

    const table = document.getElementById('users-table');
    users.forEach((user) => {
      const row = `<tr>
        <td>${user.id}</td>
        <td>${user.username}</td>
        <td>${user.role}</td>
      </tr>`;
      table.innerHTML += row;
    });
  } catch (error) {
    console.error('Error fetching users:', error);
  }
})();