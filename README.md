# Meet App

This project is a serverless progressive web application built with React using the Google Calendar API to fetch events.  The app was built with a Test-Driven Development approach which included using Jest for unit amd integrated tests, Cucumber for Behavior Driven test, Puppeteer for end-to-end tests.

## Dependencies

  - "@testing-library/jest-dom": "^5.14.1",
  - "@testing-library/react": "^11.2.7",
  - "@testing-library/user-event": "^12.8.3",
  - "react": "^17.0.2",
  - "react-dom": "^17.0.2",
  - "react-scripts": "4.0.3",
  - "web-vitals": "^0.2.4",
  - "workbox-background-sync": "^5.1.4",
  - "workbox-broadcast-update": "^5.1.4",
  - "workbox-cacheable-response": "^5.1.4",
  - "workbox-core": "^5.1.4",
  - "workbox-expiration": "^5.1.4",
  - "workbox-google-analytics": "^5.1.4",
  - "workbox-navigation-preload": "^5.1.4",
  - "workbox-precaching": "^5.1.4",
  - "workbox-range-requests": "^5.1.4",
  - "workbox-routing": "^5.1.4",
  - "workbox-strategies": "^5.1.4",
  - "workbox-streams": "^5.1.4"

## Dev-Dependencies

  - "gh-pages": "^3.2.3"
  - "esLint"

## Key Features
1) Filter events by city.
2) Show/hide event details.
3) Specify number of events.
4) Use the app when offline.
5) Add an app shortcut to the home screen.
6) View a chart showing the number of upcoming events by city.


## User Stories & Secnarios

1.	Show/Hide an Event’s Details - As a user, I should be able to expand or collapse data about events so that I can easily get more info on only the events I am interested in.

  -	Scenario 1: An event element is collapsed by default
    -	Given: The main page is loaded
    -	When: The user is looking through events
    -	Then: The  event’s details will be collapsed

  -	Scenario 2: User can expand an event to see its details
    -	Given: The user is looking through the events
    -	When: The user clicks a “show details” button
    -	Then: Details for the event are expanded

  -	Scenario 3: User can collapse an event to hide it’s details
    -	Given: The user has expanded an event’s details
    -	When: The user clicks a “hide details” button
    -	Then: The Event details will collapse


2.	Specify Number of Events – As a user I should be able to choose how many events show up on a given page so that I can enjoy browse better based on my preferences.

  -	Scenario 1: When a user hasn’t specified a number, 32 is the default number
    -	Given: The user is browsing some list of events
    -	When: The user has not specified the number of events to show
    -	Then: The number of events to show will default to 32

  -	Scenario 2: The user can change the number of events they want to see
    -	Given: The user is browsing a list of events
    -	When: The user clicks on a dropdown box and makes a selection
    -	Then: The number of events showing will change to the selected number


3.	Use the App when Offline -As a user, I should be able to view events when offline so that I can still see info on events I am interested in even if I lose service or am unable to connect to the Internet

  -	Scenario 1: Show cached data when there’s no internet connection
    -	Given: The user has used the app before and has cached data
    -	When: The user is unable to connect to the Internet but tries to view the app anyways
    -	Then: The user will be able to view the cached data

  -	Scenario 2: Show an error when the user changes the settings (city, time, range)
    -	Given: The user is not connected to the Internet
    -	When: The user tries to change their settings
    -	Then: The user will receive an error


4.	Data Visualization – As a user, I should be able to see the number of events coming in each city so that I know what areas hold more events and can make plans for myself accordingly.

  -	Scenario 1: Show a chart with the number of upcoming events in each city
    -	Given: The user is looking at events for multiple cities
    -	When: They click a “view chart” button
    -	Then: A chart will pop up with the number of events upcoming in each city

