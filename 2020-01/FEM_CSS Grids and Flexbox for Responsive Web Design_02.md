# CSS Grids and Flexbox for Responsive Web Design - 02

## Flexbox Grid

### Practical Use of Flexbox in a Grid System

http://flexboxgrid.com/



### Exercise Solution for Desktop

```css
/* Border box declaration 
https://www.paulirish.com/2012/box-sizing-border-box-ftw/ */
html {
  box-sizing: border-box;
}
/* inherit border-box on all elements in the universe and before and after
 */
*, 
*:before, 
*:after {
  box-sizing: inherit;
}

body {
	font-family: Arial, Geneva, sans-serif;
}
a {
	color: #2772B0;
}
.wrapper {
	width: 97%;
	max-width: 1200px;
	margin: 0 auto;
	float: none;
	background-color: #fff;
}

div img {
	width: 100%;
	max-width: 225px; 
}

/* grid system -- mobile first! */
.row {
	display: flex;
	flex-flow: row wrap;
}
[class*="col-"] {
	margin-left: 4%;
	flex: 0 0 92%;	
}
.col-1-2,
	.col-1-4{
	background-color: #ffc;
}
.col-2 {
	background-color: #ccf;
}
.col-3 {
	background-color: #fcf;
}
.col-4 {
	background-color: #cff;
}

/* Desktop screen Sizes */
@media only screen and (min-width: 768px) {
	.col-1-2,
	.col-1-4 {
		flex: 0 0 20%;
	}
	.col-2 {
		flex: 0 0 44%;
	}
	.col-3 {
		flex: 0 0 68%;
	}
	.col-4 {
		flex: 0 0 92%;
	}
}
```



### Exercise Solution for Responsive

```css
/* Mobile Landscape Screen Sizes */
@media only screen and (min-width: 480px)  {
	.col-1-2,
	.col-2 {
		flex: 0 0 44%;
	}
	.col-1-4,
	.col-3,
	.col-4 {
		flex: 0 0 92%;
	}
}
```



## Flexbox Exercises

### Content Manipulation + Solution

```css
/* Mobile Landscape Screen Sizes */
@media only screen and (min-width: 480px) {
	.col-1-2,
	.col-2 {
		flex: 0 0 44%;
	}
	.col-1-4,
	.col-3,
	.col-4 {
		flex: 0 0 92%;
	}
	.col-3-6 {
		flex: 0 0 44%;
	}
	.col-6-3 {
		flex: 0 0 92%;
		order: -1;
	}

}
/* Desktop screen Sizes */
@media only screen and (min-width: 768px) {
	.col-1-2,
	.col-1-4 {
		flex: 0 0 20%;
	}
	.col-2 {
		flex: 0 0 44%;
	}
	.col-3 {
		flex: 0 0 68%;
	}
	.col-4 {
		flex: 0 0 92%;
	}
	.col-3-6 {
		flex: 0 0 20%;
	}
	.col-6-3 {
		flex: 0 0 44%;
		order: 0;
	}
}
```



### Re-ordering Content and Layout

```css
/* Desktop screen Sizes */
@media only screen and (min-width: 768px) {
	.col-1-2,
	.col-1-4 {
		flex: 0 0 20%;
	}
	.col-2 {
		flex: 0 0 44%;
	}
	.col-3 {
		flex: 0 0 68%;
	}
	.col-4 {
		flex: 0 0 92%;
	}
	.col-3-6 {
		flex: 0 0 20%;
	}
	.col-6-3 {
		flex: 0 0 44%;
		order: 0;
	}
	.reverse {
		flex-direction: row-reverse;		
	}
	.reverse [class*="col-"] {
		margin-left: 0%;
		margin-right: 4%;
	}
}
```

### Image Gallery + Solution

```css
html {
  box-sizing: border-box;
}
*, 
*:before, 
*:after {
  box-sizing: inherit;
}
body {
	font-family: Arial, Helvetica, sans-serif;
}
ul {
	margin: 0;
	padding: 0;
	list-style-type: none;
	display: flex;
	flex-flow: row wrap;
}
li {
	/* flex: auto; */
	flex: 0 0 100%;
}
img {
	width: 100%;
}
@media (min-width: 550px) {
	li {
		flex: 0 0 50%;
	}
}
@media (min-width: 910px) {
	li {
		flex: 0 0 33%;
	} 
}
```



## Responsive Images

### Introducing Responsive Images

화면 크기에 따라서 이미지 크기가 달라져야 함

1. 서버사이드
2. 자바스크립트를 통한 선택
3. `<picture>`태그 활용

### Responsive Images Application

```html
<picture>
    <source srcset="moar_big.jpg" media="(min-width: 1200px)">
    <source srcset="moar_middle.jpg" media="(min-width: 800px)">
    <img src="basic.jpg" alt="basic image">
</picture>
```



### Picturefill for Older Browser Compatibility

https://scottjehl.github.io/picturefill/



### Image Downloads and Performance

https://timkadlec.com/2012/04/media-query-asset-downloading-results/

```css
@media all and (min-width: 601px) {
    background-image: url(`image.jpg`);
    width: 200px;
    height: 75px;
}
```

(링크의 내용은 옛날것 = 더 찾아보는게 필요)

### Background Images

```css
@media (min-width: 1px) {
    .bkgdimg {
        background: url(img/mon-300.jpg) no-repeat;
        height: 50px;
    }
}
@media (min-width: 500px) {
    .bkgdimg {
        background: url(img/mon-767.jpg) no-repeat;
        height: 50px;
    }
}
@media (min-width: 1000px) {
    .bkgdimg {
        background: url(img/mon-1000.jpg) no-repeat;
        height: 50px;
    }
}
```


2010/01/03