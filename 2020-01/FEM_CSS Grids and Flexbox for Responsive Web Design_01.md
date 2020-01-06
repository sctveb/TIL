# CSS Grids and Flexbox for Responsive Web Design - 01

## Introduction and Setup

### Introduction

생략!



### Resources

https://github.com/jen4web/fem-layout/



### Defining Responsive Design

1. Flexible grid-based layout

2. Media queries (CSS3)

3. Images that resize - `<picture>`

   

## Floats

### Overview of Floats

table-based layout 이후의 hack

after float, must clear

major disadvantage :  equal column height



### Float Exercise Setup & Solution

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
	max-width: 250px; 
}
/* grid system */

.row::after {
    content:"";
    display: table;
    clear:both;
} 
[class*='col-'] {
	width: 92%;
	margin-left: 4%;
	margin-right: 4%;
	min-height: 1px;
}

.col-1-2, 
.col-1-4 {
	background-color: #ffc;
}
.col-2 {
	background-color: #fcf;
}
.col-3 {
	background-color: #cff;
}
.col-4 {
	background-color: #ccf;
}

/* media queries */

/* Mobile Landscape Screen Sizes */
@media only screen and (min-width: 480px)  {
	[class*='col-'] {
		margin-right: 0;
		min-height: 1px;
		float: left;
	}
	.col-1-2,
	.col-2 {
		width: 44%;
	}
	.col-1-4,
	.col-3,
	.col-4 {
		width: 92%;
	}

}
/* Desktop screen Sizes */
@media only screen and (min-width: 768px) {
	.col-1-2, 
	.col-1-4 {
		width: 20%;
	}
	.col-2 {
		width: 44%;
	}
	.col-3 {
		width: 68%;
	}
	.col-4 {
		width: 92%;
	}
}
```



## Flexbox

### introducing Flexbox

layout element but not designed to layout whole webpages

flex-container와 flex-items으로 구성

equal heights & vertical centering에 좋음

major disadvantages :  1차원만 다루기 때문에 전체 레이아웃을 한번에 다루기 어려움(결국 hack), 브라우저 지원 문제, 문법 문제

flex container는 main axis와 cross axis라는 기준을 가짐



### History and Browser Support

2009: `display: box;`

2011: `display: flexbox` (tweener 문법, IE10만 가능)

2016: `display: flex`

```css
ul {
    display: -webkit-flex; /* 크롬, 사파리 구버전용 */
    display: -ms-flexbox; /* IE10만 지원 */
    display: flex;
}
```



### Flexbox Setup

```css
body {
    font-family: Arial, Helvetica, sans-serif;
}
ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    border: 5px dotted red;
}
li {
    border: 1px solid #999;
    margin: 0.5em;
    padding: 0.5em;
}
```



### Flexbox Properties Explored

```css
body {
    font-family: Arial, Helvetica, sans-serif;
}
ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    border: 5px dotted red;
    display: flex; /* 해당 element를 flex container로 선언 */
    flex-direction: column; /* flex container의 axis, item order 설정 */
        				/* [row]; row-reverse; column; column-reverse; */
    flex-wrap: wrap; /* 최대 넓이를 넘어가는 경우, 줄바꿈 유무 체크*/ 
    				/* [nowrap]; wrap; wrap-reverse;*/
    flex-flow: row nowrap; /* flex-direction flex-wrap을 한방에 */
}
li {
    border: 1px solid #999;
    margin: 0.5em;
    padding: 0.5em;
}
```



### Flexbox Justification

```css
body {
    font-family: Arial, Helvetica, sans-serif;
}
ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    border: 5px dotted red;
    display: flex; 
    flex-flow: row wrap;
    justify-content: flex-end; /*main axis 기준 한 줄 안에 있는 items 전체 정렬 */
    /* [flex-start]; flex-end; center; space-between; space-around; space-evenly;*/
}
li {
    border: 1px solid #999;
    margin: 0.5em;
    padding: 0.5em;
}
```



### Flexbox Alignment

```css
body {
    font-family: Arial, Helvetica, sans-serif;
}
ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    border: 5px dotted red;
    display: flex; 
    flex-flow: row wrap;
    justify-content: center;
    height: 400px;
    align-items: flex-start; /* cross axis 기준 flex item 일괄 정렬 */
    /* [normal]; stretch; flex-start; flex-end; center; */
}
li {
    border: 1px solid #999;
    margin: 0.5em;
    padding: 0.5em;
}
```



### Individual flex-items

```css
body {
    font-family: Arial, Helvetica, sans-serif;
}
ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    border: 5px dotted red;
    display: flex; 
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
}
li {
    border: 1px solid #999;
    margin: 0.5em;
    padding: 0.5em;
}
.flex2 {
    border: 5px dashed blue;
    order: 2;
    flex-grow: 0; /* 다른 flex-item와 다른 비율로 변하길 원할 때 사용, 기본값 0 */
    flex-shrink: 1; /* flex-item 요소의 크기가 flex-container 요소의 크기보다 클 때 비율 설정, 기본값 1 */
    flex-basis: 25%; /* flex-item의 relative width를 결정, 제대로 flex 사용할거면 absolute width인 width 대신 flex-basis 사용 (flex-basis가 있을 경우 width 무시) */
    flex: 0 1 25%; /* flex-grow flex-shrink flex-basis 순으로 한번에 작성 */
    
}
```



### Flexbox Games and Exercise

https://flexboxfroggy.com/#ko

http://www.flexboxdefense.com/

---

2019-01-02
