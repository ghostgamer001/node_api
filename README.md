# node_api
This code creates a Node.js server that exposes 4 APIs:

/initialize_database: This API fetches the JSON from the third party API and initializes the database with seed data.
/statistics: This API returns the statistics for the selected month.
/bar_chart: This API returns a bar chart of the number of items sold in each price range for the selected month.
/pie_chart: This API returns a pie chart of the number of items in each category for the selected month.
/combined_data: This API fetches the data from the statistics, bar chart, and pie chart APIs and combines it into a single JSON response.
To run the code, you can save it as a file called app.js and then run the following command in your terminal:

node api.js or nodemon api.js

This will start the Node.js server on port 3000. You can then access the APIs by visiting the following URLs in your browser:

http://localhost:3000/initialize_database
http://localhost:3000/statistics?month=January
http://localhost:3000/bar_chart?month=January
http://localhost:3000/pie_chart?month=January
http://localhost:3000/combined_data?month=January
The code uses the following dependencies:

express: This is a web framework for Node.js.
axios: This is a library for making HTTP requests.
db: This is a file that contains the database code.
