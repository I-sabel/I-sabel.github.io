// I am using The Cat API
// Getting images and the breed

// Grab cards
let cards = document.querySelectorAll('.card');

// Loop over
for (i=0; i < cards.length; i++) {
    // Get current card
    let card = cards[i];

    let template = `https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1&api_key=live_TPUarq1NdZv8EO3stsfp3xHtcal2yCTP4JaP2UJPbL37OMXZnzrklrLdkrkDCWU0`;

    let maxWidth = 0;
    let maxHeight = 0;
    // Get data from API
    cat(template)
        .then(data => {
            // Set image to image from API data and breed to have breed name
            let img = card.querySelector('.card-img-top').src=data[0].url;
            let breed = card.querySelector('.cat-breed').innerHTML=`<strong>Breed: </strong>${data[0].breeds[0].name}`;

            // Show cards once updated
            card.style.display = 'flex';

        }).catch(err => {
            console.log('There has been an error', err.message);
            // Have cards say adopted if error occurs
            card.innerHTML = `<h1>${'\u00A0 \u00A0 \u00A0'}ADOPTED :)</h1>`
            // Show cards once done
            card.style.display = 'flex';
        });
};


// Function to get data 
async function cat(template) {
    try {
        let response = await fetch(template);
        let data = await response.json();
        return data;
    }
    catch (error) {
        console.log('There has been a problem with your fetch operation:', error);
    }
};

