# Resistor Data

A simple module to calculate properties for resistors. 

* convert resistor bands to standard resistor notation
* convert standard resistor notation to resistor bands
* convert a number to standard resistor notation
* convert standard resistor notation to a number

Install Resistor Data:

```sh
npm install resistor-data
```

```js
var resistorData = require('resistor-data');

resistorData.bandsToNotation(['red', 'yellow', 'black', 'brown', 'brown'], 5); //['2k4', 1]
resistorData.notationToBands(['2k4', 1], 5); //['red', 'yellow', 'black', 'brown', 'brown']

resistorData.notationToValue('2k4'); //2400
resistorData.valueToNotation(2400); //'2k4'

```

