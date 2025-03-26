// document.addEventListener('DOMContentLoaded', () => {
//     // DOM references
//     const benefitList = document.getElementById('benefit-list');
//     const benefitForm = document.getElementById('benefit-form');
//     const searchInput = document.getElementById('search-input');
  
//     // GET existing benefits on page load
//     getBenefits();
  
//     //3event form submission to POST a new benefit
//     benefitForm.addEventListener('submit', handleFormSubmit);
  
//     // 3. EVENT: search/filter as user types (advanced feature)
//     searchInput.addEventListener('input', handleSearch);
  
//     // GET - retrieve benefits from server
//     function getBenefits() {
//       fetch('http://localhost:3000/benefits') // adjust URL as needed
//         .then(response => response.json())
//         .then(benefitsArray => {
//           benefitsArray.forEach(renderBenefit);
//         })
//         .catch(error => console.error('Error fetching benefits:', error));
//     }
  
//     // POST - create a new benefit on server
//     function createBenefit(benefitObj) {
//       fetch('http://localhost:3000/benefits', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(benefitObj)
//       })
//         .then(response => response.json())
//         .then(newBenefit => {
//           // Add the newly created benefit to the DOM
//           renderBenefit(newBenefit);
//         })
//         .catch(error => console.error('Error creating benefit:', error));
//     }
  
//     // DELETE - remove a benefit on server
//     function deleteBenefit(id, benefitCard) {
//       fetch(`http://localhost:3000/benefits/${id}`, {
//         method: 'DELETE'
//       })
//         .then(() => {
//           // Remove the item from the DOM after success
//           benefitCard.remove();
//         })
//         .catch(error => console.error('Error deleting benefit:', error));
//     }

//     // Render a single benefit as a card
//     function renderBenefit(benefit) {
//       const card = document.createElement('div');
//       card.className = 'benefit-card'; 
//       card.innerHTML = `
//         <h3>${benefit.title}</h3>
//         <button class="delete-btn">Delete</button>
//       `;
  
//       // Delete event listener
//       card.querySelector('.delete-btn').addEventListener('click', () => {
//         deleteBenefit(benefit.id, card);
//       });
  
//       benefitList.append(card);
//     }
  
//     // Handle form submission to add a new benefit
//     function handleFormSubmit(event) {
//       event.preventDefault();
//       const newBenefitObj = {
//         title: event.target.title.value
//       };
//       createBenefit(newBenefitObj);
//       event.target.reset();
//     }
  
//     // search benefits (filter)
//     function handleSearch(event) {
//       const query = event.target.value.toLowerCase();
//       const benefitCards = document.querySelectorAll('.benefit-card');
      
//       benefitCards.forEach(card => {
//         const title = card.querySelector('h3').textContent.toLowerCase();
//         card.style.display = title.includes(query) ? '' : 'none';
//       });
//     }
//   });
  