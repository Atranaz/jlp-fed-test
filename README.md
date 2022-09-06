# UI Dev Technical Test - Dishwasher App

## Brief

Your task is to create a website that will allow customers to see the range of dishwashers John Lewis sells. This app will be a simple to use and will make use of existing John Lewis APIs.

We have started the project, but we'd like you to finish it off to a production-ready standard. Bits of it may be broken.

### Product Grid

When the website is launched, the customer will be presented with a grid of dishwashers that are currently available for customers to buy. 

For this exercise we’d be looking at only displaying the first 20 results returned by the API.

### Product Page

When a dishwasher is clicked, a new screen is displayed showing the dishwasher’s details.

### Designs

In the `/designs` folder you will find 3 images that show the desired screen layout for the app

- product-page-portrait.png
- product-page-landscape.png
- product-grid.png

### Mock Data

There is mock data available for testing in the `mockData` folder.

## Things we're looking for

- Unit tests are important. We’d like to see a TDD approach to writing the app. We've included a Jest setup.
- The website should be fully responsive, working across device sizes. We've provided you with some ipad-sized images as a guide.
- The use of third party code/SDKs is allowed, but you should be able to explain why you have chosen the third party code.
- Put all your assumptions, notes, instructions and improvement suggestions into your GitHub README.md.
- We’re looking for a solution that's as close to the designs as possible.
- We'll be assessing your coding style, how you've approached this task and whether you've met quality standards on areas such as accessibility, security and performance.
- We don't expect you to spend too long on this, as a guide 3 hours is usually enough.

---

## Getting Started

- `Fork this repo` into your own GitLab namespace (you will need a GitLab account).
- Install the NPM dependencies using `npm i`. (You will need to have already installed Node.js using version `14.x`.)
- Run the development server with `npm run dev`
- Open [http://localhost:3000](http://localhost:3000) with your browser.

## Solution by Zaheer Ahmad 

-- 
## Suggestions 

- In my opnion we can go with diffirent libraries for responsive design bootstrap is one of them but as provided test i only use media quries because for this we can easily handle with less code 


## Packages 
- react-icons - for use back arrow | only use icon that i need it.
- "@testing-library/react": "^12.1.2" - downgraded for testing purpose 13 is not compatibile with react 17
- "identity-obj-proxy": "^3.0.0" - for testing purpose
- "jest-fetch-mock": "^3.0.3" - for testing purpose 
- "react-dom": "17.0.1" - for testing

## Live APIs
- Use live api for data


# Not work on 
- We can use react-simple-image-slider for images
- read more 


