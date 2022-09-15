### About
<br>
Creat a webpage of one focused, larger image and a selection bar of thumbnail sized images under it. When you select a thumbnail image it becomes the focused picture. Have a button that will apply a darkened shade effect on the picture when pressed and will take the effect off when pressed again.
<br>
<br>

## Variables 
<br>

* **Pictures**
    - Stored in their own folder
    - Must be showing on the page at all times in the thumbnail
    - Must become the larger image when clicked on
    
        *Properties*
        * image

* **Alt Text**
    - Used to give each image a title and for screen readers to reference
    - Must match up to the correct picture

* **Button**
    - When clicked, must put on and then take off a darken effect on the image
<br>

## Functionality
<br>

imgArr equals an array of the image files
altArr equals an object of the images alt text

FOR each picture
    create an element that displays it in the thumb-bar, along with its alt text

WHEN a user clicks an image in the thumb-bar
    that image needs to become the full-size picture on the screen

WHEN a user clicks the darken button
    the darken overlay needs to be applied to the full-size image

WHEN a user clicks the darken button again
    the darken overlay needs to be taken off