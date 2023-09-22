// async function init() {
// //   const topic = "indiansports";
//   const topic = "space";   
//   const rssUrl = `https://flipboard.com/topic/${topic}.rss`;
//   const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
//     rssUrl
//   )}`;
//   let data = await fetchData(apiUrl);
//   console.log(data.items);
//   if (data && data.items) {
//     displayData(data.items);
//   }
// }
async function init() {
    try {
        const topic1 = "politics";
        const topic2 = "space";
        const topic3 = "sports"; // Change this to the third topic you want to display

        const rssUrl1 = `https://flipboard.com/topic/${topic1}.rss`;
        const rssUrl2 = `https://flipboard.com/topic/${topic2}.rss`;
        const rssUrl3 = `https://flipboard.com/topic/${topic3}.rss`;

        const apiUrl1 = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl1)}`;
        const apiUrl2 = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl2)}`;
        const apiUrl3 = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl3)}`;

        const data1 = await fetchData(apiUrl1);
        const data2 = await fetchData(apiUrl2);
        const data3 = await fetchData(apiUrl3);

        if (data1 && data1.items) {
            displayData(data1.items, "one"); // Pass 1 to indicate the first accordion
        }

        if (data2 && data2.items) {
            displayData(data2.items, "two"); // Pass 2 to indicate the second accordion
        }

        if (data3 && data3.items) {
            displayData(data3.items, "three"); // Pass 3 to indicate the third accordion
        }
    } catch (error) {
        console.error("Error initializing data: ", error);
    }
}

function displayData(items, accordionNumber) {
    const fillAccordion = document.querySelector(`#panelsStayOpen-collapse${accordionNumber} .accordion-body`);
    addCarousel(fillAccordion, items, accordionNumber);
}


async function fetchData(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data: ", error);
        return null;
    }
}

function formatDate(inputDate) {
    const date = new Date(inputDate);

    // Get the day, month, and year components
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed, so add 1
    const year = date.getFullYear().toString().substr(-2); // Get the last 2 digits of the year

    return `${month}/${day}/${year}`;
}

function addCarousel(accordionBody, items, accordionNumber) {
    const carouselId = `carouselExample${accordionNumber}`;
    const carouselInner = document.createElement("div");
    carouselInner.classList.add("carousel-inner");
    console.log(items);

    items.forEach((item, index) => {
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");
        if (index === 0) {
            carouselItem.classList.add("active");
        }

        carouselItem.innerHTML = `
      <a href=${item.link} target="_blank">
        <img src="${item.enclosure.link}" class="d-block w-100" alt="...">
        <h4>${item.title}</h4>
        <h6 id="subheading">
          ${item.author}
          <span id="dot">
            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
              <circle cx="2.5" cy="2.5" r="2.5" fill="#586069"/>
            </svg>
          </span>
          <span>${formatDate(item.pubDate)}</span>
        </h6>
        <p>${item.content}</p>
      </a>
    `;

        carouselInner.appendChild(carouselItem);
    });

    accordionBody.innerHTML = `
    <div id="${carouselId}" class="carousel slide">
      ${carouselInner.outerHTML}
      <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  `;

    // Initialize the Bootstrap carousel for this specific accordion
    const carousel = new bootstrap.Carousel(document.getElementById(carouselId));
}






export { init, fetchData };
