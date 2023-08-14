# Bookmarker

# About 
A single page app with the following functionalities:
- Create a bookmark
- Store bookmark to localstorage
- Delete a bookmark

# Approach
The basic approach for this project is to have a user input details in input fields of a form and submit. The clicking the submit button triggers a submit event. This saves the details input to the event. In this case, the input fields are for the Name and the URL. These values can be pulled and saved to local storage by using “localStorage.setItem” and the arguments should contain a key and the stringified version of the input details which were initially a javascript object. The Items saved in the local storage is then fetched using “localStorage.getItem” and used to build the bookmarks. A parsed version of the details is used to populate the built DOM elements. To delete a bookmark, the bookmarks array is looped over to find the object index that matches the index of the bookmark clicked. That particular object is then removed from the array using the splice method and returns a new array of objects without the clicked object.

# Lessons Learnt

- The Submit event and handling data from form
- “.Includes” method – used to check if the values input in the url field includes “http:// or https://” before taking the specified appropriate action.
- Regular expressions – Used to check if the input text matches a specified pattern. In this case it was used to check if the input text matches  the pattern for a URL.
- “.splice” method – used to add or remove elements from an array. It takes arguments of the index (position) and how many items to add or remove.
- Writing to local storage – Used to store input from the form and retrieve inputs. Storing these inputs ensures that upon reload or revisit, the previous data entered remains unchanged. 
- Form Validation: To validate the form, it will be checked to see if both fields are have entries and also check if the url entered matches a url pattern using regex before the form can be validated.


# Tech used
I used HTML, CSS and Javascript for this project

# Live Link
- [Bookmarker](https://kb-jr.github.io/Bookmarker/)

# Acknoledgement
## Tutor
- Jacinto Wong



 
