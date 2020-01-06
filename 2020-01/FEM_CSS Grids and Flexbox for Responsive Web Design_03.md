# CSS Grids and Flexbox for Responsive Web Design - 03

## CSS Grid

### Introducing CSS Grid

`Grid`는 2차원 구조를 위한 레이아웃,  하지만 UI 레이아웃을 위해 `flexbox`도 사용함

### CSS Grid: Browser Compatibility

최신 브라우저(안드로이드, IOS 기본 브라우저 포함)는 지원하지만 나머지는 부분지원, 혹은 지원 안하는 경우도 많음

### Mondrian Painting & Solution

```css
@media (min-device-width: 750px) and (max-device-width: 950px){
    .wrapper {
        width: 600px;
        height: 600px;
        background: url(painting.jpg) no-repeat;
        display: grid;
        grid-gap: 30px 20px;
        grid-template-rows: 170px 210px 61px 61px;
        grid-template-columns: 124px 376px 42px;
    }
    div {
        border: 1px solid black;
        background-color: white;
        opacity: 0.5;
    }
    .a {
        grid-row: 1/2;
        grid-column: 1/2;
    }
    .b {
        grid-row: 2/3;
        grid-column: 1/2;
    }
    .c {
        grid-row: 1/3;
        grid-column: 2/4;
    }
    .d {
        grid-row: 3/5;
        grid-column: 1/2;
    }
    .e {
        grid-row: 3/5;
        grid-column: 2/3;
    }
    .f {
        grid-row: 3/4;
        grid-column: 3/4;
    }
    .g {
        grid-row: 4/5;
        grid-column: 3/4;
    }
}
```



### CSS Grid: Practical Application

```css
@media only screen and (min-width: 480px) {
    .wrapper {
        grid-template-column: repeat(4, 1fr);
        grid-tempalte-column: repeat(5, auto);
    }
    .r1c1 {
        grid-column: 1/3;
    }
    .r1c2 {
        grid-column: 3/5;
    }
    .r1c3 {
        grid-column: 1/3;
    }
    .r1c4 {
        grid-column: 3/5;
    }    
    
}
@media only screen and (min-width: 768px) {
    .wrapper {
        grid-template-columns: repeat(4, 1fr);
        grid-tempalte-rows: repeat(5, auto);
    }
    .r1c1 {
        grid-column: 1/2;
    }
    .r1c2 {
        grid-column: 2/3;
    }
    .r1c3 {
        grid-column: 3/4;
    }
    .r1c4 {
        grid-column: 4/5;
    }    
}
```



### Properties Review

```css
.css {
    display: grid | inline-grid;
    grid-template-columns: [col1] 40px [col2] 3fr;
    grid-tempalte-rows: 50% 25vh auto;
    grid-gap: grid-column-gap grid-row-gap;
}
.css2 {    
    grid-template-columns: repeat(2, 350px [name]) 10%;
}
.css3 {
    grid-template-rows: 350px [name] 350px [name] 10%;
}
.item1 {
  grid-row-start: 2;
  grid-row-end: span 3;
}
.item1 {
  grid-row: 2 / span 3;
}
.item1 {
  grid-row: 2 / 5;
}
.item2 {
  grid-row-start: span 3;
  grid-row-end: 4;
}
.item2 {
  grid-row: span 3 / 4;
}
.item2 {
  grid-row: 1 / 4;
}
```

span을 사용하면 특정 포인트를 지정하는게 아닌 지정한 만큼 길이를 더하고 빼는 개념으로 사용가능



### Grid-area Introduction

```css
.class1 {
    grid-area: header;
}
.class2 {
    grid-area: article;
}
.class3 {
    grid-area: aside;
}
.wrapper {
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto;
    grid-tempalte-areas:
        "header header header header"
        "aside . article article"
}
```



2020/01/06

