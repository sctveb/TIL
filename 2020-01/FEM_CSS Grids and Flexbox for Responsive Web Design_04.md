# CSS Grids and Flexbox for Responsive Web Design - 04

## CSS Grid

### Grid-area Exercise & Solution

```css
.wrapper {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-template-area:
        "sidebar header header header"
        "sidebar . article article"
}
```



### Nesting CSS Grids

`display: grid`는 바로 자기 아래 자식만 grid item으로 인식한다. 고로 nested grid는 귀찮더라도 사용하고자 하는 element를 잘 확인하고 직접 추가해야한다. (하는건 쉬워)

### Grid Fallbacks

https://rachelandrew.co.uk/css/cheatsheets/grid-fallbacks

### 

2020/01/07