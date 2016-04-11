# easyTaggedTextbox
Tags inputs provided to a text given a div item. It is a plugin of JQuery, so you can use the JQuery syntax to use it.

## How to implement
After copying the two files that are in the src folder, within this repository, add the following lines to your web page:
```
<link rel="stylesheet" href="/yourcssdir/easyTaggedTextbox.css"/>
<script src="/yourjsdir/easyTaggedTextbox.js"></script>
```

## Dependencies
* JQuery
* Bootstrap

## How to use
After adding the references to your web page, you will need a div item in your page.
```
<div class="my-class1"></div>
```
Then add the following script to implement the input tags functionality
```javascript
$('.my-class1').taggedTextbox();
```
After that you can now add text to a textbox that is rendered in the div element and by pressing 'enter' you can add tags to the taggedTextbox.

## Additional functions
The easyTaggedTextbox has a few methods that are used to handle some behavior and access some important elements. Those methods can only be called after creating the taggedTextbox as explained before.
### GetElements
Allows retrieve all the tags that have been inserted in the taggedTextbox.
```javascript
var data = $('.my-class1').taggedTextbox("getElements");
```
It returns an array of string with all the tags given to the control.
### Add
Allows add tags to the taggedTextbox from an exteral source.
```javascript
$('.my-class1').taggedTextbox("add", 'sample');
```
This adds the word 'sample' to the taggedTextbox.
### Clear
Removes all the elements from the taggedTextbox.
```javascript
$('.my-class1').taggedTextbox("clear");
```
### GetTextbox
Retrieves the textbox control that is created in the taggedTextbox. It allows to perform certain custom validations, methods or actions over the taggedTextbox that are not provided yet by the current API. For example:
```javascript
 var item = $('.my-class1').taggedTextbox("getTextbox");
 $(item).focus();
```
In this example we are setting the focus on the textbox of the taggedTextbox.
## Run Example
In this repository there is an example inside the "example" folder. To be able to try out the taggedTextbox, copy the content of example folder to your local environment and run the following commands from the command line:
```
npm install
bower install
node app
```
For this you will require to have installed NodeJS and the utility "bower".
Then you can test the UI control with your browser accessing the following address: http://localhost:5000
