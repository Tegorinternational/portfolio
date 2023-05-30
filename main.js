
 fetch("projects.json")
  .then((response) => response.json())
  .then((data) => {
    // Get the div element to append the cards to
    const cardsDiv = document.getElementById("cards");
    // Loop through the card data and create HTML for each card
    data.forEach((card) => {
      // Create the card element
      const cardElement = document.createElement("div");
      cardElement.classList.add("p-4", "w-full", "md:w-1/2");

      // Add the card content
      cardElement.innerHTML = `
 <!-- card1 -->
               <div class="bg-blue-100/70 w-full h-full flex flex-row p-2 rounded-lg">
                 <div class="aspect-square h-32 mr-3">
                   <img class="aspect-square object-cover my-auto object-center w-full h-full rounded-md" src="${card.image}" alt="${card.title}">
                 </div>
                 <div class="text-left my-auto">
                   <h3 class="text-lg leading-5 mb-2 text-gray-900 font-medium line-clamp">${card.title}</h3>
                   <p class="leading-4 text-gray-600 line-clamp">${card.description}</p>
                   <div class="flex flex-row justify-between mt-3 pr-2">
                   <button class="px-5 py-2 bg-blue-600 text-white rounded-full">View project</button>
                   <button class="my-auto  border-2 border-blue-600 h-8 w-8 text-center rounded-full">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-github w-full h-full mx-auto my-auto bg-blue-600 rounded-full aspect-square text-white" viewBox="0 0 16 16">
                     <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                   </svg>
                   </button>
                   </div>
                 </div>
               </div>
               `;

      // Append the card element to the cards div
      cardsDiv.appendChild(cardElement);
    });
  })
  .catch((error) => {
    console.log("An error occurred while fetching data:", error);
  });
