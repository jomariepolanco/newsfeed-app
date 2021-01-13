# Newsroom

## Overview
Welcome to Newsroom. Here, you can browse the top headlines in 7 differnt categories. Login or sign up to add notes with highlights from your favorite articles! If you change your mind after adding your note, go ahead and delete it!

**7 categories: Business, Entertainment, General, Health, Science, Sports, Technology**

## 
![App](/images/App.gif)

### User Stories
1. A user can see real-time, top headline news that is refreshed daily for 7 different categories.
2. A user can filter news articles by topic.
3. A user can add a note about any article.
4. A user can delete their notes.
5. A user can login and sign up.

## To Run
**To start the Client:**
```cd client
npm install or yarn
npm start or  yarn
```
The client is running on http://localhost:3000/

**To start the Server:**
```cd server
npm install
npm run schema:sync
npm start
```
The server is running on:
 http://localhost:8080/api/users<br />
 http://localhost:8080/api/notes<br />
 http://localhost:8080/api/news/{category}<br />

 **Example of /api/news/entertainment**
 ![api-call](/images/apiCall.png)

 **Example of /api/notes**
 ![notes-server](/images/notesCall.png)

