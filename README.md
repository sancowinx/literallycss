# literallycss
A collection of css helpers class for easier styling for anyone does not (or lazy enough) like to create a lot of repeating a same css property and values.  
Just include the a css helper in a class name and it will implement styling as a css rules does, literally. 
    
For example, you want a image full width of the container (suppose the `<img>` is inside the `<div>`) you can do like this
    
    `<img class="width-extend-fitcontatiner" src"..." alt="..." />`
    
  
You might use it with jQuery `.addClass()`.  
For Example:

`$("#someid").addClass("width-fitparent");`  

Compartible with Bootstrap latest version.
    
Pretty much inspired by Harry Roberts' : http://cssguidelin.es/ so give credits to him. And don't forget visit Harry Roberts' css guidelines websites above. Pretty much a lot of decent CSS advice.

Credits:  
[cssguidelin.es](http://cssguidelin.es/)  
[webcreatorbox](http://www.webcreatorbox.com/en/)  


# STYLESHEET GUIDES

There are nine section of css helpers:
* GENERAL FONTS SETTINGS - all headings, paragraphs, pre, and blockquote set a font to show according to the Users' Operating System. e.g. if OS X => Helvetica Neue, if Windows => Segoe UI (This can be overridden)
* BACKGROUNDS  - Generic Background helpers
* IMAGE BACKGROUND - Image background class
* MARGIN-PADDING UTILS - presets of margin,padding utilities class locked at 15px
* BORDER - All border setting
* POSITIONING & WIDTH-HEIGHT - Positioning, Width and height helpers 
* TEXT ALIGNMENT & MANIPULATION - Text alignment: left, right, center, justify, inherit; also manipulation like no selection
* DISPLAY HELPERS - Including display type, visibility, and overflow
* HTML ELEMENTS - html, body, header, footer, section etc.

## Documenting in progress