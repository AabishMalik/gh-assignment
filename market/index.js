let listings = document.getElementById("listings");

function addListing(title, category, image, description, price) {
  const listing = document.createElement("div");
  listing.classList.add("listing");

  const img = document.createElement("img");
  img.src = image;
  img.classList.add("listing-image");

  listing.appendChild(img);

  const titleElement = document.createElement("h2");
  titleElement.textContent = title;
  titleElement.classList.add("listing-title");

  listing.appendChild(titleElement);

  const categoryElement = document.createElement("h4");
  categoryElement.textContent = category;
  categoryElement.classList.add("listing-category");
  listing.appendChild(categoryElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = description;
  descriptionElement.classList.add("listing-description");
  listing.appendChild(descriptionElement);

  const priceElement = document.createElement("p");
  priceElement.textContent = price === 0 ? "Free" : "$" + price;
  priceElement.classList.add("listing-price");
  listing.appendChild(priceElement);

  const button = document.createElement("button");
  button.textContent = "Buy Now";
  button.classList.add("listing-button");
  listing.appendChild(button);

  listings.appendChild(listing);
}

const data = [
  {
    title: "ohnepixel",
    category: "Streamer",
    image:
      "https://preview.redd.it/best-ohnepixel-pic-ever-v0-h0yk7uqurp7b1.png?width=325&format=png&auto=webp&s=e4579e92e809d965f941ffb7710aa4638e31b497",
    description: "Gold Gold Gold",
    price: 0,
  },
  {
    title: "Slightly Used Keyboard",
    category: "Electronics",
    image:
      "https://www.shutterstock.com/image-photo/broken-keyboard-destroyed-image-computer-600w-1940237281.jpg",
    description:
      "Mechanical, only dropped once. A few keys stick but that's character.",
    price: 25,
  },
  {
    title: "Vintage Desk Lamp",
    category: "Furniture",
    image: "assets/lamp.jpg",
    description: "Gives off a warm glow. Very aesthetic. Bulb not included.",
    price: 40,
  },
  {
    title: "Mystery Box",
    category: "Other",
    image:
      "https://csspot.org/_next/image/?url=https%3A%2F%2Fcsspot.org%2Fuploads%2FDreams_and_Nightmares_Case_b811b468ad.png&w=640&q=75",
    description:
      "Could be anything. Could even be a boat! You know how much we've always wanted one.",
    price: 15,
  },
  {
    title: "Mac-10 | Heat",
    category: "Skin",
    image:
      "https://preview.redd.it/budget-mac-10-incident-v0-ghmx152gp6if1.png?width=1080&crop=smart&auto=webp&s=5aa16cd7654dc38f03c1bded5d1e66340b7c1f6b",
    description: "Factory New. Just a little bit of wear. Trust me.",
    price: 12,
  },
];

data.forEach((listing) => {
  addListing(
    listing.title,
    listing.category,
    listing.image,
    listing.description,
    listing.price,
  );
});
