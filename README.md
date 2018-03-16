# Filter Customers

## Features
- Input field - customers are searchable by first or last name
- Automatic filtering on key press
- Results listing customers that match search query
- Query is updated in URL as a query parameter
- Rails + React

## Running the application

### Install

It's recommended to use Ruby 2.5.0 and NodeJS 8.10.x.

```sh
# install bundler if not available
gem install bundler

# install gem dependencies
bundle install

# install npm dependencies
npm install

# generate assets for development
npm run webpack

# OR (rebuilds on every detected change)
npm run webpack-watch

# start server
rails s
```
