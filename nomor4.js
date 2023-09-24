fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      console.log('Response Ok!!')
    }
    return response.json();
  })
  .then(data => {
    const names = data.map(user => user.name);
    console.log(names);
  })
  .catch(error => {
    console.error('Error:', error);
  });
