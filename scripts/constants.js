/**
 * Enum of difficulty number for each difficulty code.
 * @enum {string}
 */
const DIFFICULTY = { 
    "205": 0,
    "211": 1,
    "213": 2,
    "217": 3,
    "227": 4,
    "229": 5,
    "233": 6,
    "241": 7,
    "271": 8
};

/**
 * Enum of level number for each level code.
 * @enum {string}
 */
const LEVEL = {
    "279": 1,
    "283": 2,
    "285": 3,
    "295": 4,
    "299": 5,
    "301": 6
};

/**
 * Minimal code for a command
 * @type {number} @const 
 */
const CODE_MIN_COMMAND = 103;

/** @type {number} @const */
const CODE_MAX_COMMAND = 143;

/** @type {number} @const */
const CODE_MIN_CONDITION = 157;

/** @type {number} @const */
const CODE_MAX_CONDITION = 181;

/** @type {number} @const */
const CODE_MIN_DIFFICULTY = 205;

/** @type {number} @const */
const DIFFICULTY_FONCTION = 3;

/** @type {number} @const */
const DIFFICULTY_INDEX = 6;

/** @type {number} @const */
const LEVEL_FONCTION = 3;

/** @type {number} @const */
const LEVEL_INDEX = 7;

/**
 * Enum of code for all the corners.
 * @enum {number}
 */
const CORNER = {
    top_left: 59,
    top_right: 55,
    bottom_left: 61,
    bottom_right: 47
};

/**
 * Enum of corners coordinates for the quadrilateral destination for the perspective transformation.
 * @enum {number}
 */
const DST_CORNER  = {
    top_left_x : 0,
    top_left_y : 0,
    top_right_x : 1200,
    top_right_y : 0,
    bottom_right_x : 1200,
    bottom_right_y : 800,
    bottom_left_x : 0,
    bottom_left_y : 800
};

/**
 * Enum of all the levels
 * @enum {string}
 */
const LEVEL_CODE = {
    1: 'Cargo 101',
    2: 'Transporter',
    3: 'Stack',
    4: 'Swap',
    5: 'Re-Curses',
    6: 'Split',
    7: 'Inverter',
    8: 'From Beneath',
    9: 'La Trieuse',
    10: 'Translation',
    11: 'Color Translate',
    12: 'Go Left',
    13: 'Double Flip',
    14: 'Go Left 2',
    15: 'Shuffle Sort',
    16: 'Go the Distance',
    17: 'Color Sort',
    18: 'Walking Piles',
    19: 'Repeat Invert',
    20: 'Double Sort',
    21: 'Mirror',
    22: 'Lay it out',
    23: 'The Stacker',
    24: 'Clarity',
    25: 'Come Together',
    26: 'Come Together 2',
    27: 'Up The Greens',
    28: 'Fill The Blanks',
    29: 'Count The Blues',
    30: 'Multi Sort',
    31: 'Divide by two',
    32: 'The Merger',
    33: 'Even the Odds',
    34: 'Genetic Code',
    35: 'Multi Sort 2',
    36: 'The Swap',
    37: 'Restoring Order',
    38: 'Changing Places',
    39: 'Palette Swap',
    40: 'Mirror 2',
    41: 'Changing Places 2',
    42: 'Vertical Sort',
    43: 'Bouton d\'arrêt',
    44: 'Roumanie',
    45: 'Permutation circulaire',
    46: 'Chèvre deviendra barbichette',
    47: 'Spain',
    48: 'Ella',
    49: 'Inversion',
    50: 'Aure',
    51: 'Demis',
    52: 'Jean Baptiste'
  }