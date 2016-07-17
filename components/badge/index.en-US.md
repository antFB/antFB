---
category: Components
type: Views
english: Badge
---

Small numerical value or status descriptors for UI elements.

## When to use

Badge normally appears in proximity to notification or head picture with eye-catching appeal, typically displaying unread messages count.

## API

```jsx
<Badge count={5}>
  <a href="#" className="head-example"></a>
</Badge>
```


```jsx
<Badge count={5} />
```

| Property       | Description             | Type       | Default |
|----------------|-------------------------|------------|---------|
| count          | Number to show in badge | Number     |         |
| overflowCount  | Max count to show       | Number     | 99      |
| dot            | whether to show red dot without number | Boolean | false  |
