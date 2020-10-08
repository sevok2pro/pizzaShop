project structure:
* web client (in work)
* pizza service (in work) - service for manage data about available pizza
* userData service (not started) - service for manage data about user (like addressed, name, payment, authorization)
* cart service (not started) - service for manage cart data, delivery, delivery cost (maybe later good idea for separate delivery)
* mongoDB (complete) - ready service from cloud.mongodb.com, just for store entities
* publicGateway service (not started) - service for connect with a public ethernet, broadcast webApplication artifact, proxy queries to microservices, api gateway, service for SSR

roadmap:
1. setup webpack, eslint
1. run web client "hello world"
1. add pizza service
1. connect pizza service to web application
<--------------- i`am here
1. make beautiful pizza list component
1. add cart button for buy
1. add cart service
1. connect cart button to cart service
1. add beautiful navigation bar for navigate to pizzaShop and cart
1. add beautiful cart page
1. add order cart interface and upgrade cart service for order (do not forget about delivery cost)
1. add auth component and mechanism for call it
1. add userDataService for authenticate and make login and logout
1. add user page for define delivery address, default currency
1. add autocomplete by userData on order cart
1. add orders history in cart service
1. add orders history UI
1. write one or two most critical e2e test

how to run develop
1. npm run run:pizzaService will run pizza service
1. npm run start:webClient:develop will run webpack dev server with client


how to build prod

...in process
