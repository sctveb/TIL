# Mastering Chrome Developer Tools - 01

## Auditing

https://www.webpagetest.org/

https://developers.google.com/web/tools/lighthouse/

https://sonarwhal.com/

## Node.js Profiling

### The --inspect Flag

node --inspect `관찰대상` 하면 Devtool로 노드관련된 정보를 볼 수 있다.

이를 통해 성능에 부정적인 영향을 주는 자바스크립트 코드를 찾을 수 있다.

## Performance Monitoring

### The Performance API

https://developer.mozilla.org/en-US/docs/Web/API/Performance

```js
// Old Approach

const start = new Date().getTime();
// 관찰할 대상
const end = new Date().getTime();
const time = end - start;

// Performance API

performance.mark('start');
// 관찰할 대상
performance.mark('end');
performance.measure('Our Measurement', 'start', 'end');
performance.getEntriesByType('measure');
```

Performance API를 활용할 경우, 객체로 다양한 정보를 쉽게 받을 수 있고 Devtool의 Performance 탭에서 시각화된 정보를 확인가능.



## Image Performance

### Querying By Size

```html
<img src="large.jpg"
     srcset="small.jpg 300w, medium.jpg 800w, large.jpg 1200w" />
```

srcset을 이용해 화면 크기에 따른 조건부 이미지 다운로드가 가능하다. (화면크기 변경시 자동으로 필요한 이미지 다운로드)

## Page Jank

### Page Jank

1초에 60frame으로 화면을 출력하는 웹 브라우저가 매끄럽지 못하게 화면을 출력하는 현상

(작업량이 과다해지면 발생함)

https://www.koalastothemax.com/

### Performance Panel

초록색 + 낮은 위치 = 원활한 프로세스 (이를 모니터링 하고 문제가 되는 부분을 확인할 것)

## Memony

### Causes of Memony Leaks

1. Accidental Global
2. Forgotten Timer
3. DOM and not the DOM

메모리의 cycle :  Allocate -> Use -> Release

= 계단형으로 계속 올라가는 구조는 나쁨, 물결치듯이 cycle에 맞춰서 메모리 관리가 되야함

### Chrome Task Manager & Snapshots

Task Manager로 간단하게 실시간으로 메모리 usage 확인가능 (대강 상황 파악에 좋음)

Performance 탭에서 Memory를 enable 하고 조사가능

자세하게 Memory를 모니터링 하기 위해선 Memory 탭에서 아래의 옵션들을 활용해서 조사가능

1. Heap snapshot
2. Allocation instrumentation on timeline
3. Allocation sampling

2020/01/10