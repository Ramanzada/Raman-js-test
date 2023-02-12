const url = "https://reqres.in/api/users";

fetch(url)
  .then(response => response.json())
  .then(data => {
    const users = data.data.slice(0, 3);
    users.forEach(user => {
      const h2 = document.createElement("h2");
      h2.innerHTML = user.first_name;
      document.body.appendChild(h2);

      const img = document.createElement("img");
      img.src = user.avatar;
      document.body.appendChild(img);
    });
  })
  .catch(error => console.error(error));
