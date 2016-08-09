---
category: Components
type: Form Controls
title: Radio
---

Radio.

## When to use

- Used to select a single state in multiple options.
- The different between Select, Radio is visbile to user, it can facilitate users in the comparison of choice. So, when you want to use Radio, option should not be too much.


## API

### Radio

| Property           | Description                                     | Type       |  optional | Default |
|----------------|------------------------------------------|------------|---------|--------|
| checked        | Specifies whether the current is selected                         | Boolean    |         | false  |
| defaultChecked | Initial whether or not selected                             | Boolean    |         | false  |
| value          | According to value for comparison, to determine whether the selected        | String     |         | none     |

### RadioGroup

radio group，wrap a group of `Radio`。

| Property           | Description                             | Type              | optional | Default |
|----------------|----------------------------------|-------------------|--------|--------|
| onChange       | The callback function when the options change             | Function(e:Event) | none     | none     |
| value          | Used to set the current selected value             | String            | none     | none     |
| defaultValue   | Default selected value                     | String            | none     | none     |
| size           | Size, only on radio style           | String            | `large` `default` `small` | `default` |
