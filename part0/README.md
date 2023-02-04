# Exercise 0.2 - Single Page App Diagram

Create a diagram depicting the situation where the user goes to the single-page app version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa.

## Exercise 0.2 - Solution

```mermaid
  sequenceDiagram
  participant browser
  activate server
  server-->>browser: status code 304 Not Modified, JSON data
  deactivate server
```

# Exercise 0.3 - New Note in Single Page App Diagram
Create a diagram depicting the situation where the user creates a new note using the single-page version of the app.

## Exercise 0.3 - Solution
```mermaid
  sequenceDiagram
  participant browser
  participant server
  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
  activate server
  server-->>browser: status code 304 Not Modified, the spa.js file
  deactivate server
  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
  activate server
  server-->>browser: status code 200 OK, the HTML document
  deactivate server
  browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
  activate server
  server-->>browser: status code 201 Created, JSON file with the content
  deactivate server
  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa/main.css
  activate server
  server-->>browser: status code 304 Not Modified, the CSS file
  deactivate server
  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
  activate server
  server-->>browser: status code 304 Not Modified, JSON data
  deactivate server
```