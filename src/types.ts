export type ResistorColor =
    | 'black' | 'brown' | 'red' | 'orange' | 'yellow'
    | 'green' | 'blue' | 'violet' | 'grey' | 'white'
    | 'gold' | 'silver' | 'none';

export type BandCount = 4 | 5;

export type ResistorTolerance = 0.05 | 0.1 | 0.25 | 0.5 | 1 | 2 | 5 | 10 | 20;

export type ResistorData = [notation: string, tolerance: ResistorTolerance];
