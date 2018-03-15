# Full Stack Software Engineer, Coding Challenge

The goal is to implement and write tests the User Interface and Backend for a feature to filter a list of customers based on first name, and last name. It is a classic Use Case that we use everyday,
for example, in Github.com you can filter Pull Requests or Issues using a similar user experience.

## Evaluation
1. Send us a link to your Github or Bitbucket repo. Use Github or Bitbucket Issues to break down clearly the main use case into deliverable tasks.  
2. Use Ruby on Rails for the backend, and ReactJS or AngularJS for the frontend.
3. We expect you to write tests for both the modules in the frontend (such as components, directives, and services) and in the backend (API controllers).
4. Make it easy to review: write a useful and verified README.md covering setup instructions, dependencies, and configuration as needed.
5. Focus on small, well tested, incremental changes that are easy to test and demo.

Remember that, this prototype will be used as a starting point to continue working on it during your on-site interview:
  - You will demo the main use case,
  - You will spend the day with the engineering team pairing to build out some features specified below in the Additional Scenarios section.

## Use Case: Filter Customers

1. I am a user and I open the "Filter Customers" page, and the system presents me with a text field.
2. As I type text in the input field:
  - the system displays, below the text field, a list of customers whose first name or
  last name matches the text entered.
  - the system persists the text in the URL as a query param, in such a way that I can search a particular with a coworker.

## Additional Scenarios
We will pair with you for a couple of hours during your on site interview. We will likely
write these feature and additional scenarios.

- Pagination. You can use a Name generator to seed your UI's data source. https://github.com/stympy/faker
- Instrument User Activity happening in the page.
- Implement a basic A/B test with Optimizely.
- Search customers by the name of the company they work for, or their address.
