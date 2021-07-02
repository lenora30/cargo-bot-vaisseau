/**
 * @fileoverview All game constants in one file.
 *
 * @author joseph@cs.utexas.edu (Joe Tessler)
 */

goog.provide('cn.constants');


/** @type {number} @const */
cn.constants.GAME_WIDTH = 750;


/** @type {number} @const */
cn.constants.GAME_HEIGHT = 300;

/** @type {number} @const */
cn.constants.SCAN_WIDTH = 1280;


/** @type {number} @const */
cn.constants.SCAN_HEIGHT = 720;

/** @type {number} @const */
cn.constants.GAME_MARGIN = 1;


/** @type {string} @const */
cn.constants.GAME_COLOR = 'white';


/** @type {number} @const */
cn.constants.GOAL_WIDTH = 500;


/** @type {number} @const */
cn.constants.GOAL_HEIGHT = 200;


/** @type {number} @const */
cn.constants.GOAL_MARGIN = 150;


/** @type {string} @const */
cn.constants.BOT_COLOR = '#909090';


/** @type {number} @const */
cn.constants.BOT_SPEED_MIN = 3;


/** @type {number} @const */
cn.constants.BOT_SPEED_MAX = 20;


/** @type {number} @const */
cn.constants.LEVEL_HEIGHT = 10;


/** @type {string} @const */
cn.constants.LEVEL_COLOR = cn.constants.BOT_COLOR;


/** @type {number} @const */
cn.constants.STACK_WIDTH = 40;


/** @type {number} @const */
cn.constants.STACK_HEIGHT = 10;


/** @type {string} @const */
cn.constants.STACK_COLOR = cn.constants.LEVEL_COLOR;


/** @type {number} @const */
cn.constants.CARGO_SIZE = 20;


/** @type {string} @const */
cn.constants.GAME_UI_CLASS_NAME = goog.getCssName('cn-game-ui');


/** @type {string} @const */
cn.constants.GAME_LOGO_CLASS_NAME = goog.getCssName('cn-game-logo');


/** @type {string} @const */
cn.constants.HEADING_CLASS_NAME = goog.getCssName('cn-heading');


/** @type {string} @const */
cn.constants.GAME_CANVAS_CLASS_NAME = goog.getCssName('cn-game-canvas');


/** @type {string} @const */
cn.constants.GAME_CANVAS_CONTAINER =
    goog.getCssName('cn-game-canvas-container');


/** @type {string} @const */
cn.constants.ANIMATED_GAME_CANVAS_CLASS_NAME =
    goog.getCssName('cn-game-canvas-animated');


/** @type {string} @const */
cn.constants.LEVEL_SELECTOR_CLASS_NAME = goog.getCssName('cn-level-selector');


/** @type {string} @const */
cn.constants.LEVEL_SELECTOR_CONTAINER =
    goog.getCssName('cn-level-selector-container');


/** @type {string} @const */
cn.constants.CONTROLS_CLASS_NAME = goog.getCssName('cn-controls');


/** @type {string} @const */
cn.constants.CONDITION_CLASS_NAME = goog.getCssName('cn-condition');


/** @type {string} @const */
cn.constants.COMMAND_CLASS_NAME = goog.getCssName('cn-command');

/** @type {string} @const */
cn.constants.HSLEVELS_CLASS_NAME = goog.getCssName('cn-hideshow-levels');

/** @type {string} @const */
cn.constants.HSGOAL_CLASS_NAME = goog.getCssName('cn-hideshow-goal');

/** @type {string} @const */
cn.constants.GOAL_CLASS_NAME = goog.getCssName('cn-goal');

/**
 * Enum of CSS class names for all possible program commands.
 * @enum {string}
 */
cn.constants.COMMAND_CLASS_NAMES = {
  LEFT: goog.getCssName('cn-command-left'),
  RIGHT: goog.getCssName('cn-command-right'),
  DOWN: goog.getCssName('cn-command-down'),
  F0: goog.getCssName('cn-command-f0'),
  F1: goog.getCssName('cn-command-f1'),
  F2: goog.getCssName('cn-command-f2'),
  F3: goog.getCssName('cn-command-f3')
};


/**
 * Enum of CSS class names for all possible program conditionals.
 * @enum {string}
 */
cn.constants.CONDITION_CLASS_NAMES = {
  NONE: goog.getCssName('cn-condition-none'),
  ANY: goog.getCssName('cn-condition-any'),
  RED: goog.getCssName('cn-condition-red'),
  GREEN: goog.getCssName('cn-condition-green'),
  BLUE: goog.getCssName('cn-condition-blue'),
  YELLOW: goog.getCssName('cn-condition-yellow')
};


/** @type {string} @const */
cn.constants.TOOLBOX_CLASS_NAME = goog.getCssName('cn-toolbox');


/** @type {string} @const */
cn.constants.FULL_TOOLBOX_CLASS_NAME = goog.getCssName('cn-full-toolbox');


/** @type {string} @const */
cn.constants.TOOLBOX_CONTAINER = goog.getCssName('cn-toolbox-container');


/** @type {string} @const */
cn.constants.HINT_BUTTON_CLASS_NAME = goog.getCssName('cn-hint-button');


/** @type {string} @const */
cn.constants.PROGRAM_EDITOR_CLASS_NAME = goog.getCssName('cn-program-editor');


/** @type {string} @const */
cn.constants.FUNCTION_EDITOR_CLASS_NAME = goog.getCssName('cn-function-editor');

/** @type {string} @const */
cn.constants.SCANNER_CLASS_NAME = goog.getCssName('cn-scanner');


/** @type {Array.<string>} @const */
cn.constants.FUNCTION_CLASS_NAMES = [
  goog.getCssName('cn-register-f0'),
  goog.getCssName('cn-register-f1'),
  goog.getCssName('cn-register-f2'),
  goog.getCssName('cn-register-f3')
];


/** @type {string} @const */
cn.constants.REGISTER_CLASS_NAME = goog.getCssName('cn-register');


/** @type {string} @const */
cn.constants.CONDITION_REGISTER_CLASS_NAME =
    goog.getCssName('cn-condition-register');


/** @type {string} @const */
cn.constants.COMMAND_REGISTER_CLASS_NAME =
    goog.getCssName('cn-command-register');


cn.constants.LEVEL_CODE = {
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
  //Wrong level name after 13
  13: 'REPEAT INVERTER',
  14: 'DOUBLE SORT',
  15: 'MIRROR',
  16: 'LAY IT OUT',
  17: 'THE STACKER',
  18: 'CLARITY',
  19: 'COME TOGETHER',
  20: 'COME TOGETHER 2',
  21: 'UP THE GREENS',
  22: 'FILL THE BLANKS',
  23: 'COUNT THE BLUES',
  24: 'MULTI SORT',
  25: 'DIVIDE BY TWO',
  26: 'THE MERGER',
  27: 'EVEN THE ODDS',
  28: 'GENETIC CODES',
  29: 'MULTI SORT 2',
  30: 'THE SWAP',
  31: 'RESTORING ORDER',
  32: 'CHANGING PLACES',
  33: 'PALETTE SWAP',
  34: 'MIRROR 2',
  35: 'CHANGING PLACES 2',
  36: 'VERTICAL SORT'
}