# Submission Requirements
## Project Description
- A high level architectural overview of your web application. e.g. names, relationships and purposes of all components and relevant data models
![Newsroom-backend-models](/images/Newsroom-backend-models.png)

- Brief description of the architectural design pattern that you leveraged (MVC, MVP, MVVM)
- Screenshots of each View and descriptions of the overall user flow as well as any place that you made distinct design decisions.  (Screenshots can be taken via any screenshot capture application or native methods).


## Project Requirements
Please list examples of how your project meets the following requirements below:
- [ x ] Use a modern JS Library/Framework like React, Angular, etc. We suggest using React.js.
    - I used React for the frontend.

- [ x ] Create an application that can be interacted with in a minimum of three different ways by the user.
    1. Users can choose from 1 of 7 categories of news to see.
    2. Users can create a note to post on the site.
    3. Users can delete their notes.
    4. Users can login or sign up (user must be logged in to create or delete a note).

- [ x ] Use of at least one Service.
    - As of Sunday, January 10th, this requirement is no longer needed.

- [ x ] The usage of a specified architectural pattern (MVC, MVP, MVVM,  etc.)
    - I implmented a MVC architectural pattern. See above for more details.

- [ x ] Use of a [REST API](https://medium.com/@arteko/the-best-way-to-use-rest-apis-in-swift-95e10696c980).
    - I implemented the NEWS API and created a RESTful server with the information:
        - [NEWS API](https://newsapi.org/)

- [ x ] Usage of at least 5 UI components from the [material-ui/@core](https://material-ui.com/) library (if you are not using React, a comparable UI library is acceptable)
    - I used many components from Material-UI. Here are the most prominent 5:
        1. Grid and GridList
        2. Button
        3. Radio Group
        4. Dialog
        5. Container and Paper

- [ x ] An example of a reusable UI component that you have created and used in the app. This should be different than the 5 UI components from the vendor library.
    - I implemented a custom Form Input used in all forms: Login Form, Signup Form, and Create Note Form.
