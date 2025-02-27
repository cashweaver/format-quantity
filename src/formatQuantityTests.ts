import { FormatQuantityTests } from './types';

const nullTolerance: any = null;

export const formatQuantityTests: FormatQuantityTests = [
  [
    'returns null for NaN and non-numeric strings',
    [
      [NaN, null],
      ['NaN', null],
    ],
  ],
  [
    'returns blank string for zero',
    [
      [0, ''],
      [1 - 1, ''],
    ],
  ],
  [
    'handles integers',
    [
      [1, '1'],
      [1 + 1, '2'],
      [1, '1', true],
      [100, '100'],
    ],
  ],
  [
    'handles negative values',
    [
      [-1, '-1'],
      [1 - 3, '-2'],
      [-1, '-1', true],
      [-1.5, '-1 1/2'],
      [-1.5, '-1½', true],
      [-0.5, '-1/2'],
      [-0.5, '-½', true],
      [-0.5, '-1⁄2', { fractionSlash: true }],
    ],
  ],
  [
    'returns most decimal values as-is',
    [
      [1.45, '1.45'],
      [-1.45, '-1.45'],
    ],
  ],
  [
    'handles halves',
    [
      [1.51, '1.51'],
      [1.5, '1 1/2'],
      [1 + 1 / 2, '1 1/2'],
      [1.50001, '1 1/2'],
      [1.49999, '1 1/2'],
      [1.5, '1½', true],
      [1.52, '1.52'],
    ],
  ],
  [
    'handles thirds',
    [
      [1.32, '1 5/16'],
      [1.33, '1 1/3'],
      [1 + 1 / 3, '1 1/3'],
      [1.33, '1⅓', true],
      [1.3333333333333333, '1 1/3'],
      [1.34, '1.34'],
      [1.66, '1 2/3'],
      [1 + 2 / 3, '1 2/3'],
      [1.66, '1⅔', true],
      [1.667, '1 2/3'],
      [1.6666666666666666, '1 2/3'],
      [1.67, '1.67'],
    ],
  ],
  [
    'handles quarters',
    [
      [1.25, '1 1/4'],
      [1 + 1 / 4, '1 1/4'],
      [1.25, '1¼', true],
      [-1.25, '-1 1/4'],
      [1.75, '1 3/4'],
      [1 + 3 / 4, '1 3/4'],
      [1.75, '1¾', true],
      [-1.75, '-1 3/4'],
    ],
  ],
  [
    'handles fifths',
    [
      [0.2, '1/5'],
      [0.2, '⅕', true],
      [1.2, '1 1/5'],
      [1 + 1 / 5, '1 1/5'],
      [1.2, '1⅕', true],
      [0.4, '2/5'],
      [1.4, '1 2/5'],
      [1 + 2 / 5, '1 2/5'],
      [1.4, '1⅖', true],
      [0.6, '3/5'],
      [1.6, '1 3/5'],
      [1 + 3 / 5, '1 3/5'],
      [1.6, '1⅗', true],
      [0.8, '4/5'],
      [1.8, '1 4/5'],
      [1 + 4 / 5, '1 4/5'],
      [1.8, '1⅘', true],
    ],
  ],
  [
    'handles sixths',
    [
      [1 + 1 / 6, '1 1/6'],
      [1.166, '1⅙', true],
      [1 + 5 / 6, '1 5/6'],
      [1.833, '1⅚', true],
    ],
  ],
  [
    'handles sevenths',
    [
      [1 + 1 / 7, '1 1/7'],
      [1.1428, '1⅐', true],
    ],
  ],
  [
    'handles eighths',
    [
      [1.125, '1 1/8'],
      [1 + 1 / 8, '1 1/8'],
      [1.125, '1⅛', true],
      [1.375, '1 3/8'],
      [1 + 3 / 8, '1 3/8'],
      [1.375, '1⅜', true],
      [1.625, '1 5/8'],
      [1 + 5 / 8, '1 5/8'],
      [1.625, '1⅝', true],
      [1.875, '1 7/8'],
      [1 + 7 / 8, '1 7/8'],
      [1.875, '1⅞', true],
    ],
  ],
  [
    'handles ninths',
    [
      [1 + 1 / 9, '1 1/9'],
      [1.11111, '1⅑', true],
    ],
  ],
  [
    'handles tenths',
    [
      [1 + 1 / 10, '1 1/10'],
      [1.1, '1⅒', true],
    ],
  ],
  [
    'handles sixteenths',
    [
      [1 + 1/16, '1 1/16'],
      [1 + 1/16, '1​1⁄16', true],
      [1 + 3/16, '1 3/16'],
      [1 + 3/16, '1​3⁄16', true],
      [1 + 5/16, '1 5/16'],
      [1 + 5/16, '1​5⁄16', true],
      [1 + 7/16, '1 7/16'],
      [1 + 7/16, '1​7⁄16', true],
      [1 + 9/16, '1 9/16'],
      [1 + 9/16, '1​9⁄16', true],
      [1 + 11/16, '1 11/16'],
      [1 + 11/16, '1​11⁄16', true],
      [1 + 13/16, '1 13/16'],
      [1 + 13/16, '1​13⁄16', true],
      [1 + 15/16, '1 15/16'],
      [1 + 15/16, '1​15⁄16', true],
    ],
  ],
  ['handles empty options object', [[1.5, '1 1/2', {}]]],
  [
    'handles vulgarFractions option',
    [
      [1.5, '1 1/2', { vulgarFractions: false }],
      [1.5, '1½', { vulgarFractions: true }],
    ],
  ],
  [
    'handles fractionSlash option',
    [
      [1.5, '1 1/2', { fractionSlash: false }],
      [1.5, '1 1⁄2', { fractionSlash: true }],
      [1.5, '1½', { fractionSlash: true, vulgarFractions: true }],
    ],
  ],
  [
    'handles tolerance option',
    [
      [1.3, '1.3', { tolerance: nullTolerance }],
      [1.3, '1 1/3', { tolerance: 0.1 }],
      [1.1428, '1.1428', { tolerance: 0.000001 }],
    ],
  ],
];
