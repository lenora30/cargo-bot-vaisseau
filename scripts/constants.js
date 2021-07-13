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
    2: 'Transporteur',
    3: 'Empiler',
    4: 'Échanger',
    5: 'Récursion',
    6: 'Diviser',
    7: 'Inverseur',
    8: 'D\'en bas',
    9: 'La Trieuse',
    10: 'Translation',
    11: 'Traduction des couleurs',
    12: 'Aller à gauche',
    13: 'Double Flip',
    14: 'Aller à gauche 2',
    15: 'Tri aléatoire',
    16: 'Distanciation sociale',
    17: 'Tri par couleur',
    18: 'Piles marchantes',
    19: 'Inverseur répété',
    20: 'Double tri',
    21: 'Mirroir',
    22: 'Étalez-le',
    23: 'L\'empileur',
    24: 'Clarté',
    25: 'Se rassembler',
    26: 'Se rassembler 2',
    27: 'Les verts',
    28: 'Remplir les blancs',
    29: 'Compter les bleus',
    30: 'Tri multiple',
    31: 'Diviser par deux',
    32: 'La fusion',
    33: 'Même les impairs',
    34: 'Code génétique',
    35: 'Tri multiple 2',
    36: 'L\'échange',
    37: 'Remettre l\'ordre',
    38: 'Changer de place',
    39: 'Échange de palettes',
    40: 'Mirroir 2',
    41: 'Changer de place 2',
    42: 'Tri vertical'
  }