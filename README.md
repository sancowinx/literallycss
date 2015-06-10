# literallycss
A collection of css helpers class for easier styling for anyone does not (or lazy enough) like to create a lot of repeating a same css property and values.  
Just include the a css helper in a class name and it will implement styling as a css rules does, literally. 
    
# Why I make this
I want to know how to properly use css and creating stylesheet that will be easier to read or easier to understood what the css is doing by naming it as what it's do. The code should tell you literally what it really do. (Like Rails controller index,destroy,create)

**tl;dr** I'm lazy at creating a lot of css rules. So I created this. :trollface:  

#How to use
Just include the a css helper in a class name and it will implement styling as a css rules does, literally.  

For example, you want a image full width of the container (suppose the `<img>` is inside the `<div>`) you can do like this
    
      
    <img class="width-extend-fitcontatiner" src"..." alt="..." /> 


You might use it with jQuery `.addClass()` with some event or callback 
For Example:

     
     $("#someid").addClass("display-nothing");



Compartible with Bootstrap latest version.
    
Pretty much inspired by Harry Roberts' : http://cssguidelin.es/ so give credits to him. And don't forget visit Harry Roberts' css guidelines websites above. Pretty much a lot of decent CSS advice.

Credits:  
[cssguidelin.es](http://cssguidelin.es/)  
[webcreatorbox](http://www.webcreatorbox.com/en/)  


# Some possible issue
* Text. I haven't test with the non-latin language (Like Chinese Mandarin, Japanese Katakana/Hiragana/Kanji) so I don't know whether it will break on usage it or not.  


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

* `.font-os-sans-serif { font-family: 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif; }`  
Set selected text element to show the font based on client OS.  
For instance, if user using Windows 7 or newer, Segoe UI will be rendered. For OS X or iOS, Helvetica Neue will be rendered  

* `.font-opensans      { font-family: 'Open Sans', sans-serif; }`  
Set selected text element to use Open Sans.  

* `.font-style-normal    { font-style: normal; }`  
Set selected text element font style to be normal.  

* `.font-variant-normal      { font-variant: normal; }`  
Set selected text element font variant to be normal.  

* `.font-variant-small-caps  { font-variant: small-caps; }`  
Set selected text element font variant to be rendered as a small capital. First Character will be full width.  

* `.font-variant-initial     { font-variant: initial; }`  
Set selected text element font variant to be normal.  

# Documenting in progress
