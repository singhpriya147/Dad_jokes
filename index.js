const searchBtn = document.getElementById('btn');
console.log(searchBtn);
const getDadJokes = async () => {
  const response = await fetch('https://icanhazdadjoke.com', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  const data = await response.json();
  console.log(data);
  const jokeDiv = document.querySelector('.joke-div');
  jokeDiv.innerHTML = data.joke;
};
getDadJokes();
searchBtn.addEventListener('click', getDadJokes);