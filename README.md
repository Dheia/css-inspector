# CSS Inspector

A script to analyze, copy and edit the CSS of elements on the page.

## How to use it

- Press 'alt + s' to  start or stop the inspection.
- Hover over the element and press left click to pause the scan.
- Once the scan is  paused, you can edit, inspect and copy the properties of the element.
- Click outside the box to resume to scan again.
- If you click on the `Copy` button, the css properties of the element will get copied.
- If you click on the `Copy All` button, the css properties of the element as well of its children will get copied.

![](https://i.imgur.com/nThTxPf.png)

## Issues

- To display which element is being hovered on, I am setting the `outline` property of the element. The problem with the `outline` property is that it does show on sides which are touching the end of the screen which sometimes makes it difficult to know which element is being targeted.
- Whenever the `background-color` property is not being set on any element, by default the browser evaluates it to be `rgba(0, 0, 0, 0)`
- CSS Styles of some websites affect the appearance of the CSS Scan Box. Please report a bug whenever you notice one as I cannot test the script on each and every website.