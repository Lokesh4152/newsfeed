# RSS Carousel App

This is a simple web application that displays news articles from different topics using RSS feeds. It utilizes the [Flipboard](https://flipboard.com) RSS feeds and the [RSS2JSON API](https://rss2json.com/) to convert the RSS data into a JSON format for easy consumption. The app is designed to display news articles in a carousel format for three different topics: politics, space, and sports. You can easily customize the topics and add more as needed.

## Features

- Displays news articles from three different topics: politics, space, and sports.
- Utilizes Bootstrap for responsive design and carousel functionality.
- Fetches RSS data from Flipboard using the RSS2JSON API.
- Clicking on a news article opens it in a new tab.

## Installation and Setup

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/rss-carousel-app.git
   ```

2. Open the `index.html` file in a web browser or serve it using a local development server.

## Usage

1. Open the web application in your web browser.

2. You will see three different accordions labeled as "Politics," "Space," and "Sports." Each accordion displays news articles related to the respective topic.

3. Click on the arrow buttons in the carousel to navigate through the news articles for each topic.

4. Click on a news article's title or image to open the full article in a new tab.

## Customization

You can customize the topics and add more as needed by modifying the `init` function in the `index.js` file:

```javascript
async function init() {
    try {
        const topic1 = "politics"; // Change this to the first topic you want to display
        const topic2 = "space";    // Change this to the second topic you want to display
        const topic3 = "sports";   // Change this to the third topic you want to display

        // ...

        const apiUrl1 = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl1)}`;
        const apiUrl2 = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl2)}`;
        const apiUrl3 = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl3)}`;

        // ...
    } catch (error) {
        console.error("Error initializing data: ", error);
    }
}
```

Simply replace the values of `topic1`, `topic2`, and `topic3` with the topics you want to display. Make sure to update the corresponding RSS feed URLs as well.

## Credits

- [Bootstrap](https://getbootstrap.com/) - Front-end framework for responsive design.
- [Flipboard](https://flipboard.com) - Source of RSS feeds for news articles.
- [RSS2JSON API](https://rss2json.com/) - API for converting RSS feeds to JSON format.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
