This project provides a GraphQL API for a restaurant menu, allowing clients to query different sections of the menu such as appetizers, entrees, sandwiches, and more.

Assuming Node is already installed.

Clone the Repository

Navigate to the project directory and install the required npm packages using:
-> npm install

after that, run the following command.

-> node server.js

After the server is running, go to this URL: http://localhost:4000/graphql

Example queries: 

Querying appetizers:

query {
  appetizers {
    name
    description
    price
  }
}

Querying Entrees:

query {
  entrees {
    name
    description
    price
  }
}
