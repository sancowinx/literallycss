# literallycss
A collection of css helpers class for anyone does not (or too lazy) like to create a lot of repeating a same css property and values. Just include the a css helper in a class name and it will implement styling as a css rules does, literally. 
    
# Why I make this
**tl;dr** I'm lazy at creating a lot of css rules. So I created this. :trollface:  

#How to use
Just include the a css helper in a class name and it will implement styling as a css rules does, literally.  
For example, you want a image full width of the container (suppose the `<img>` is inside the `<div>`) you can do like this
    
      
    <img class="width-fitcontent" src"..." alt="..." /> 

  Will make this `<img>` extend to fit the wrapper

You might use it with jQuery `.addClass()` with some event or callback 
For Example:

     
     $("#someid").addClass("display-nothing");



Compartible with Bootstrap latest version.
    
For a naming of all css classes, syntax and format was pretty much inspired by Harry Roberts' http://cssguidelin.es/.

Credits to these following awesome guides:  
[cssguidelin.es](http://cssguidelin.es/)  
[webcreatorbox](http://www.webcreatorbox.com/en/)  
[css-tricks](https://css-tricks.com/)

# Some possible issue
* I haven't test with the non-latin language (Like Chinese Mandarin, Japanese Katakana/Hiragana/Kanji).


---

# STYLESHEET GUIDES

There are nine section of css helpers:
 * GENERAL FONTS SETTINGS -         Offers a rules for setting a font based on OS of client.
                                    Or use Open Sans.
 * BACKGROUNDS  -                   Generic Background helpers
 * IMAGE UTILITIES -                Image utilities class
 * MARGIN-PADDING UTILS -           presets of margin,padding utilities class
                                    locked at 15px
 * BORDER -                         All border setting
 * POSITIONING & WIDTH-HEIGHT -     Positioning, Width and height helpers
 * TEXT ALIGNMENT & MANIPULATION -  Text alignment: left, right, center, justify, inherit;
                                    also manipulation like no selection
 * DISPLAY HELPERS -                Including display type, visibility, and overflow
 * HTML ELEMENTS -                  html, body, header, footer, section etc.

--- 
## GENERAL FONTS SETTINGS  
Offers a rules for setting a font based on OS of client. Or use Open Sans.  

* `.font-os-sans-serif`  
Set selected text element to show the font based on client OS.  
For instance, if user using Windows 7 or newer, Segoe UI will be rendered. For OS X or iOS, Helvetica Neue will be rendered  

* `.font-opensan`  
Set selected text element to use Open Sans.  

* `.font-style-normal`  
Set selected text element font style to be normal.  

* `.font-variant-normal`  
Set selected text element font variant to be normal.  

* `.font-variant-small-caps`  
Set selected text element font variant to be rendered as a small capital. First Character will be full width.  

* `.font-variant-initial`  
Set selected text element font variant to be normal.  


## BACKGROUNDS 
Generally, you might add these following class to the wrapper (supposely `<div>` or `<article>` or `<sections>`) of the text elements inside. Actually the following classes will set exactly what you will see here.  

`.bg-white`  
White colored with black text

`.bg-black`  
Black colored background with white text

`.bg-grey`  
Background grey with white text  

`.bg-bashgreenblack`  
Add vintage, unix terminal style background and text


## IMAGE UTILITIES
Set of image utilities classes, including making background image responsive and image filtering  

`.image-bg-responsive`  
Set the selected image to be rendered responsive. However you need to define the image source using with positioning like `background: url(...Your image url...) top center`  

`.image-filter-opacity-half`  
Set image filtering to render with half inage opacity

`.image-filter-opacity-none`  
Set image filtering to render with no opacity at all

`.image-filter-grayscale`  
Set image filtering grayscale

`.image-filter-sepia`  
Set image filtering sepia

# Documenting in progress
