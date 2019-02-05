# react-native-group-checkbox
A more concise way to create checkboxes by passing in an array of ```labels``` property without having to creating individual checkbox

![Alt Text](https://i.imgur.com/SQlTP54.gif)

## Installation
```npm install react-native-group-checkbox```

## Getting started
```
import CheckBoxes from 'react-native-group-checkbox'

<Checkboxes
  labels={ ['option1', 'option2'] }
  onChange={ ({ checkboxes }) => console.log(checkboxes) } // Return an array of checked boxes
/>
```

## API
| Props    | Type   | Description    | Default    |
| -------- |:------:|:--------------:|:----------:|
| checked  | array  | keep track of checked boxes  | []         |
| onChange | function | callback function when check and uncheck | null |


## Contribute
Pull requests and Issues are more than welcomed to enhance and better the component.
