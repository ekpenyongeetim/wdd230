const requestURL = "https://ekpenyongeetim.github.io/wdd230/data/data.json";
const cards = document.querySelector(".card-view");

fetch(requestURL)
	.then(function (response) {
		return response.json();
	})
	.then(function (jsonObject) {
		console.table(jsonObject);
		// temporary checking for valid response and data parsing
		const businesses = jsonObject['businesses'];
		businesses.forEach(displayBusinesses);
	});



function displayBusinesses(businesses) {
	// Create elements to add to the document
	let card = document.createElement('section');
	let h3 = document.createElement('h3');
    let h4 = document.createElement('h4');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
	let portrait = document.createElement('img');

	// Change the textContent property of the h2 element to contain the prophet's full name
	h3.innerHTML = `${businesses.name}`;
    h4.innerHTML = `${businesses.address}`;
    p1.innerHTML = `<span class="highlight">${businesses.description}</span>`;
    p2.innerHTML = `${businesses.phone}`;
    p3.innerHTML = `${businesses.website}`;

	// Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
	portrait.setAttribute('src', businesses.image);
	portrait.setAttribute('alt', `${businesses.name} logo`);
	portrait.setAttribute('loading', 'lazy');

	// Add/append the section(card) with the h2 element
    card.appendChild(portrait);
	card.appendChild(h3);
    card.appendChild(h4);
    card.appendChild(p1);
	card.appendChild(p2);
    card.appendChild(p3);
	// Add/append the existing HTML div with the cards class with the section(card)
	document.querySelector('.card-view').appendChild(card);
}

const cardButton = document.getElementById('card-btn');
const listButton = document.getElementById('list-btn');

listButton.addEventListener("click", ()=> {
    cards.classList.replace("card-view", "list-view")
});

cardButton.addEventListener("click", ()=> {
    cards.classList.replace("list-view", "card-view")
});



/*
const requestURL = "https://ekpenyongeetim.github.io/wdd230/data/data.json"
const cards = document.querySelector('div.cards');
const listButton = document.querySelector("#list-btn");
const cardButton = document.querySelector("#card-btn");


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const businesses = jsonObject['businesses'];
        // console.table(jsonObject);
        businesses.forEach(displayBusinesses);
    });

function displayBusinesses(business) {
  let card = document.createElement('section');

  //img
  let image = document.createElement('img');
  image.src = business.image;
  image.setAttribute('alt', business.name);
  card.appendChild(image);

  //h2 name
  let h3 = document.createElement('h3');
  h3.textContent = business.name;
  card.appendChild(h3);

  //p address
  let p1 = document.createElement('p');
  p1.textContent = business.address;
  card.appendChild(p1);

  //p phone
  let p2 = document.createElement('p');
  p2.textContent = business.phone;
  card.appendChild(p2);

  //p website
  let p3 = document.createElement('p');
  p3.textContent = business.website;
  card.appendChild(p3);

  cards.appendChild(card);

}

listButton.addEventListener("click", ()=> {
    cards.classList.replace("card-view", "list-view")
});

cardButton.addEventListener("click", ()=> {
    cards.classList.replace("list-view", "card-view")
});

*/