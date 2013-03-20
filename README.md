#Embed gist in wordpress posts

Based on the script written by Blair Vanderhoof, this plugin allows you to input gist files directly into your wordpress posts.

## Installation

* Upload the folder gist-embed into your wordpress /plugins directory.
* Confirm that you are using jQuery version 1.7.x

## Manually adding code to your posts

### To embed the whole gist you should put this code element in your body where ever you want it to be displayed.
    <code id="gist-4672365"></code>
### To embed a single file from gist, add the data-file attribute to your code element like this.
    <code id="gist-4672365" data-file="2.java"></code>
### To embed a single line of a file from gist, add the data-line attribute to your code element like this.
    <code id="gist-4672365" data-file="2.java" data-line="5"></code>

    This will embed only line number 5.
### To embed multiple lines of a file from gist, change the data-line attribute's value to something like MS Word printing page ranges. e.g.
    <code id="gist-4672365" data-file="2.java" data-line="2-5,10-14,11,20"></code>

    This will embed line numbers 2,3,4,5,10,11,12,13,14,11,20 in the same order. If lines are duplicated then they will be duplicated in code too.

#### If you are embedding multiple lines then make sure about following points.

 - You can put a range like "2-5", or single line numbers separated with commas like "11,20", or mix of both like "2-5,11,10-14,20"
 - Spaces are not allowed in data-line value

Follow the above instructions to avoid getting any undesired results.

## Source and inspiration

* Blair Vanderhoof - https://github.com/blairvanderhoof/gist-embed
* Kashif Umair Liaqat - https://github.com/kashif-umair/gist-embed