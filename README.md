jQuery ReStable 0.1.2
========

**jQuery ReStable** is a very simple and lightweight (~1Kb) jQuery plugin that make tables responsive making them collapse into ul lists.You can find some examples in the included demo or [here](http://codeb.it/restable/).

To use it you just have to include jQuery and a copy of the plugin in your head or footer:

```html
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
<script type="text/javascript" src="jquery.restable.min.js"></script>
<link rel="stylesheet" href="jquery.restable.min.css">
```

Let's say this is your table:

```html
<table class="mytable">
    <thead>
        <tr>
            <td>Period</td>
            <td>Full Board</td>
            <td>Half Board</td>
            <td>Bed and Breakfast</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>01/10/12 - 02/10/12</td>
            <td>20 €</td>
            <td>30 €</td>
            <td>40 €</td>
        </tr>
        <tr>
            <td>03/10/12 - 04/10/12</td>
           <td>40 €</td>
            <td>50 €</td>
            <td>60 €</td>
        </tr>
        <tr>
            <td>05/10/12 - 06/10/12</td>
            <td>70 €</td>
            <td>80 €</td>
            <td>90 €</td>
        </tr>
    </tbody>
</table>
```
Now the only thing to do is to trigger the action with:

```js
$(document).ready(function () {
    $.ReStable();
});
```

This will target automatically all the tables in the page but you can, off course, target one or more elements with:

```js
$(document).ready(function () {
    $('.mytable').ReStable();
});
```

If you need more control here's the plugin settings:

```js
$('.mytable').ReStable({
    rowHeaders: true, // Table has row headers?
    maxWidth: 480, // Size to which the table become responsive
    keepHtml: false // Keep the html content of cells
});
```

## Credits and contacts

ReStable has been made by [me](http://codeb.it). You can contact me at micc83@gmail.com or [twitter](https://twitter.com/Micc1983) for any issue or feature request.
