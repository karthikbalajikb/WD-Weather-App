# WD Weather App [![Build Status](https://travis-ci.org/karthikbalajikb/WD-Weather-App.svg?branch=master)](https://travis-ci.org/karthikbalajikb/WD-Weather-App)

![wd](https://user-images.githubusercontent.com/8594076/36646017-c340bf96-1a97-11e8-99da-d4d5e48ba2e6.png)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Development server

Run `yarn start` or `npm start` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Build

Run `yarn build` or `npm run build` to build the project. The build artifacts will be stored in the `build` directory.

## Lint

Run `yarn lint` or `npm run lint` to check linting error in terminal .

## Test

Run `yarn test` or `npm run test` to run the test scripts (unit test and snapshot test) . Test scripts are written using [jest](https://github.com/facebook/jest) and [enzyme](https://github.com/airbnb/enzyme) .

## Style Guide

Code follows Airbnb's React style guide [Airbnb style guide](https://github.com/airbnb/javascript/tree/master/react)

## Hosting

It is hosted on Amazon EC2 instance with node + express web server . It is running at http://ec2-54-146-169-247.compute-1.amazonaws.com:9000/

## Current Features

* Get dynamic 5 days weather forecast based on the city selected
* Dropdown with auto search enabled
* Swipable UI when used on touch screens

## What could be done in more time

1.  USER INTERFACE

* Changing background image or color based on climate
* Graphical Report

2.  FUNCTIONALITY

* Add more filters for search based on country,city,geolocation .
* Adding google maps .
* Showing up weather report in multiple temparture format ex: celsius,fahrenheit .
* Pictorial represenation with graphs , charts for temperature vs time
