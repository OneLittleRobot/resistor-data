# Resistor Data [![NPM version][npm-image]][npm-url] [![CI][ci-image]][ci-url]

A simple module to calculate properties for resistors.

* Convert resistor bands to standard resistor notation
* Convert standard resistor notation to resistor bands
* Convert a number to standard resistor notation
* Convert standard resistor notation to a number

## Install

```sh
npm install resistor-data
```

## Usage

### JavaScript

```js
const { bandsToNotation, notationToBands, notationToValue, valueToNotation } = require('resistor-data');

bandsToNotation(['red', 'yellow', 'black', 'brown', 'brown']); // ['2k4', 1]
notationToBands(['2k4', 1], 5);                                // ['red', 'yellow', 'black', 'brown', 'brown']

notationToValue('2k4');  // 2400
valueToNotation(2400);   // '2k4'
```

### TypeScript

```ts
import {
    bandsToNotation,
    notationToBands,
    notationToValue,
    valueToNotation,
} from 'resistor-data';
import type { ResistorColor, ResistorTolerance, ResistorData, BandCount } from 'resistor-data';

// ResistorData is [notation: string, tolerance: ResistorTolerance]
const result: ResistorData = bandsToNotation(['red', 'yellow', 'black', 'brown', 'brown']);
// result => ['2k4', 1]

const bands: ResistorColor[] = notationToBands(['2k4', 1], 5);
// bands => ['red', 'yellow', 'black', 'brown', 'brown']

const value: number = notationToValue('2k4');  // 2400
const notation: string = valueToNotation(2400); // '2k4'
```

## API

### `bandsToNotation(bands: string[]): ResistorData`

Converts an array of 4 or 5 resistor band colour names into `[notation, tolerance]`.

```ts
bandsToNotation(['orange', 'orange', 'black', 'red', 'brown']); // ['33k', 1]
```

### `notationToBands(data: [string, ResistorTolerance?], bands?: BandCount): ResistorColor[]`

Converts a `[notation, tolerance]` pair into an array of colour names. `bands` defaults to `5`.

```ts
notationToBands(['33k', 1], 4); // ['orange', 'orange', 'orange', 'brown']
notationToBands(['33k', 1], 5); // ['orange', 'orange', 'black', 'red', 'brown']
```

### `notationToValue(notation: string): number`

Converts standard resistor notation to a numeric value.

```ts
notationToValue('5k');   // 5000
notationToValue('5k5');  // 5500
notationToValue('1M2');  // 1200000
```

### `valueToNotation(value: number | string): string`

Converts a numeric value to standard resistor notation.

```ts
valueToNotation(3000);    // '3k'
valueToNotation(3300);    // '3k3'
valueToNotation(1000000); // '1m'
```

## Types

| Type | Description |
|---|---|
| `ResistorColor` | Union of valid band colour strings (`'black'`, `'brown'`, `'red'`, ...) |
| `ResistorTolerance` | Union of valid tolerance values (`0.05`, `0.1`, `0.25`, `0.5`, `1`, `2`, `5`, `10`, `20`) |
| `ResistorData` | Tuple returned by `bandsToNotation`: `[notation: string, tolerance: ResistorTolerance]` |
| `BandCount` | `4 \| 5` |

[ci-url]: https://github.com/OneLittleRobot/resistor-data/actions/workflows/ci.yml
[ci-image]: https://github.com/OneLittleRobot/resistor-data/actions/workflows/ci.yml/badge.svg
[npm-url]: https://npmjs.org/package/resistor-data
[npm-image]: https://badge.fury.io/js/resistor-data.svg
