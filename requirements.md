# Submission Requirements
## Project Description
- A high level architectural overview of your web application. e.g. names, relationships and purposes of all components and relevant data models

### Backend Models
![Newsroom-backend-models](/images/Newsroom-backend-models.png)

My backend consists of 3 models. 
1. The news articles, which are coming from an external API and have no true relationship with the user. The API gives us a lot of information: author, title, source name, description, URL, image, published date and time, and content.

2. The users, which consist of a unique ID and aa unique name. A user has many notes.

3. The notes, which belong to the user. They consist of a unique ID, text, user ID, and an article title.

### Frontend Component Tree
![Newsroom-component-tree](/images/Newsroom-component-tree.png)

My frontend consists of 2 main containers and multiple components. 
#### Containers
**News Container**
The news container is the most prominent part of the application. This is where the newsfeed is. It renders the News Card component that has the information for each individual article.

**Notes Container**
The notes container is the next most prominent part. This is where users can add comments about random articles they read in the News Container. The Notes Container renders each note as it's own card. Logged in users will see a button to be able to delete their own cards. To add a note, a user clicks on the 'Add Note' Button that opens up a Modal with the form to create a new Note. The form uses the reusable FormInput component. This persists and shows on the page immediately after hitting 'Submit'. 

#### Components
**Navbar**
The navigation bar consists of a 'logo' and buttons to Login, Signup and the main page, News.

**Login/Signup** 
These forms use the reusable FormInput component. After logging in, users have the functionality of creating and deleting notes.

**News Search Form**
This form is rendered in the App because I wanted it to have functionality over the News Container, rather than be within it. You could argue that the search form should be a component of the News Container. With this form, users can choose what category of news they would like to see. The articles change the moment users click 'Submit'.

**News Card and Note Card**
These cards render individual instances of their respective container. The News Card also, when clicked, shows a Modal with the actual news article. That way, users can click back to the app and have not lost their spot on the application.

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
