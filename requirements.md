# Submission Requirements
## Project Description
![App](/images/App.gif)
## Architectural Overview of Application
### Backend Models
![Newsroom-backend-models](/images/Newsroom-backend-models.png)

My backend consists of 3 models. 
1. The news articles, which are coming from an external API and have no true relationship with the user. The API gives us a lot of information: author, title, source name, description, URL, image, published date and time, and content.

2. The users, which consist of a unique ID and aa unique name. A user has many notes.

3. The notes, which belong to the user. They consist of a unique ID, text, user ID, and an article title.

### Frontend Component Tree
![Newsroom-component-tree](/images/Newsroom-component-tree.png)

My frontend consists of 2 main containers and multiple components:

## Containers

### News Container
![News-container](/images/News-container.gif)
The news container is the most prominent part of the application. This is where the newsfeed is. It renders the News Card component that has the information for each individual article.

The News Container scrolls separately from the rest of the main page. This was done so that the search form is still in sight when viewing the articles. If a user finds no articles interesting in a particular category, it is very easy for them to get back to the Search Form to find a new category to search through.

### Notes Container
![Notes-container](/images/Notes-container.png)
The notes container is the next most prominent part. This is where users can add comments about random articles they read in the News Container. The Notes Container renders each note as it's own card. Logged in users will see a button to be able to delete their own cards. To add a note, a user clicks on the 'Add Note' Button that opens up a Modal with the form to create a new Note. The form uses the reusable FormInput component. This persists and shows on the page immediately after hitting 'Submit'. 

The notes are in card form rather than comments. This way, they are more readable and become more of interest to the user.

## Components

### Navbar
![Navbar](/images/Navbar.png)
![Routing](/images/Routing.png)

The navigation bar consists of a 'logo' and buttons to Login, Signup and the main page, News.

### Login/Signup
![Signup/Login](/images/Signup:login.png)

These forms use the reusable FormInput component. After logging in, users have the functionality of creating and deleting notes.

### News Search Form
![News-Search](/images/NewsSearchForm.gif)
This form is rendered in the App because I wanted it to have functionality over the News Container, rather than be within it. You could argue that the search form should be a component of the News Container. With this form, users can choose what category of news they would like to see. The articles change the moment users click 'Submit'.

Design played an important role here. Users must be able to choose a category before the News Container shows just in case they want to switch the category first. I made the categories Radio Buttons so only one can be selected at a time, and kept it big and taking up most of the screen for readability.

### News Card and Note Card
![NewsCard](/images/NewsCard.png)
![NoteCard](/images/NoteCard.png)
These cards render individual instances of their respective container. The News Card also, when clicked, shows a Modal with the actual news article. That way, users can click back to the app and have not lost their spot on the application.

The News Card into a Full Screen modal was another design decision that had to do with accessibility and readability. At first, I just had the news card showing the picture and the title. A user could click on the image to go to the full article's page. Adding in more information into a modal lets users see the content better; if they really want to read the article they can click "Read More..." to continue. If not, users can exit out of the modal and back to the application to view more articles.

## Architectural Design Pattern

### MVC
For this app, I implemented Object-oriented Programming and the Model-View-Controller design patterns.

#### Model
![Notes-model](/images/Notes-model.png)

The models are the 'engine'. Here is where the app's data and logic are. My models are Note, User, and News Articles (API). These are on my server. I used TypeORM to build the models with separation of concerns as well as create the relationship between User and Note.

#### View
![News-view](/images/News-view.png)
The view is my component tree. Each component is responsible for taking the information gathered from the models and display them the way they see fit. The models don't know about the Notes Container and the Notes Container doesn't have the models' attributes memorized.

#### Controller
![User-controller](/images/User-controller.png)
The models and views don't know anything about each other, so I implemented controllers to be the liason between them. Again, using TypeORM, I created controllers for each model (Note, User and News Articles) to get the information from the model to the view.


## Project Requirements
Please list examples of how your project meets the following requirements below:
- [x] Use a modern JS Library/Framework like React, Angular, etc. We suggest using React.js.
    - I used React for the frontend.

- [x] Create an application that can be interacted with in a minimum of three different ways by the user.
    1. Users can choose from 1 of 7 categories of news to see.
    2. Users can create a note to post on the site.
    3. Users can delete their notes.
    4. Users can login or sign up (user must be logged in to create or delete a note).

- [x] Use of at least one Service.
    - As of Sunday, January 10th, this requirement is no longer needed.

- [x] The usage of a specified architectural pattern (MVC, MVP, MVVM,  etc.)
    - I implmented a MVC architectural pattern. See above for more details.

- [x] Use of a [REST API](https://medium.com/@arteko/the-best-way-to-use-rest-apis-in-swift-95e10696c980).
    - I implemented the NEWS API and created a RESTful server with the information:
        - [NEWS API](https://newsapi.org/)

- [x] Usage of at least 5 UI components from the [material-ui/@core](https://material-ui.com/) library (if you are not using React, a comparable UI library is acceptable)
    - I used many components from Material-UI. Here are the most prominent 5:
        1. Grid and GridList
        2. Button
        3. Radio Group
        4. Dialog
        5. Container and Paper

- [x] An example of a reusable UI component that you have created and used in the app. This should be different than the 5 UI components from the vendor library.
    - I implemented a custom Form Input used in all forms: Login Form, Signup Form, and Create Note Form.
