/**
 * @fileoverview All level data, where the vast majority is a clone of
 *     https://github.com/ruilov/CargoBot/blob/master/Levels.lua.
 *
 * @author elynnlee@cs.utexas.edu (Elynn Lee)
 *
 */

goog.provide('cn.LevelData');
goog.provide('cn.LevelData.levelpacks');
goog.provide('cn.LevelData.levels');

goog.require('cn.model.CargoColor');
goog.require('goog.array');



/**
 * @param {number} botPosition The initial bot position.
 * @param {!Array.<number>} stars A three-element array representing the minimum
 *     number of registers required to attain one, two, and three stars.
 * @param {!Array.<number>} functions The lengths of each available function.
 * @param {!Array.<string>} toolbox The available commands and conditionals.
 * @param {!Array.<!Array.<string>>} initial The initial cargo configuration.
 * @param {!Array.<!Array.<string>>} goal The final cargo configuration.
 * @param {string} hint A tip about the current level.
 * @constructor
 */
cn.LevelData = function (
  botPosition, stars, functions, toolbox, initial, goal, hint) {
  /** @type {number} */
  this.botPosition = botPosition - 1;

  /** @type {!Array.<number>} */
  this.stars = stars;

  /** @type {!Array.<number>} */
  this.functions = functions;

  /** @type {!Array.<string>} */
  this.toolbox = toolbox;

  /** @type {!Array.<!Array.<!cn.model.CargoColor>>} */
  this.initial = cn.LevelData.mapStacks_(initial);

  /** @type {!Array.<!Array.<!cn.model.CargoColor>>} */
  this.goal = cn.LevelData.mapStacks_(goal);

  /** @type {string} */
  this.hint = hint;
};


/**
 * @param {!Array.<!Array.<string>>} colors Stacks of colors (as implemented
 *     from the aforementioned source).
 * @return {!Array.<!Array.<!cn.model.CargoColor>>} The stack of colors as
 *     implemented in this rendition of Cargo-Bot.
 * @private
 */
cn.LevelData.mapStacks_ = function (colors) {
  return goog.array.map(
    colors,
    function (stack) {
      return goog.array.map(
        stack,
        function (color) {
          switch (color) {
            case 'red': return cn.model.CargoColor.RED;
            case 'green': return cn.model.CargoColor.GREEN;
            case 'blue': return cn.model.CargoColor.BLUE;
            case 'yellow': return cn.model.CargoColor.YELLOW;
            default: throw Error('no cargo implementation for: ' + color);
          }
        });
    });
};


/**
 * @type {Object.<string, !Array.<string>>}
 * @const
 */
cn.LevelData.levelpacks = {
  'Tutorial 1': [
    'Cargo 101',
    'Transporteur',
    'Empiler',
    'Échanger',
    'Récursion',
    'Diviser'
  ],
  'Tutorial 2': [
    'Inverseur',
    'D\'en bas',
    'La Trieuse',
    'Translation',
    'Translation des couleurs',
    'Aller à gauche'
  ],
  'Easy': [
    'Double flip',
    'Aller à gauche 2',
    'Tri aléatoire',
    'Distanciation sociale',
    'Tri par couleur',
    'Piles marchantes'
  ],
  'Medium': [
    'Inverseur répété',
    'Double tri',
    'Mirroir',
    'Étalez-le',
    'L\'empileur',
    'Clarté'
  ],
  'Hard': [
    'Se rassembler',
    'Se rassembler 2',
    'Les verts',
    'Remplir les blancs',
    'Compter les bleus',
    'Tri multiple'
  ],
  'Crazy': [
    'Diviser par deux',
    'La fusion',
    'Même les impairs',
    'Code génétique',
    'Tri multiple 2',
    'L\'échange'
  ],
  'Impossible': [
    'Remettre l\'ordre',
    'Changer de place',
    'Échange de palettes',
    'Mirroir 2',
    'Changer de place 2',
    'Tri vertical'
  ]
  // ,
  //   'Champo': [
  // 'Bouton d\'arrêt',
  // 'Roumanie',
  // 'Permutation circulaire',
  // 'Chèvre deviendra barbichette',
  // 'Spain',
  // 'Ella',
  // 'Inversion',
  // 'Aure',
  // 'Demis',
  // 'Jean Baptiste'
  // ]
};


/**
 * @type {Object.<string, !cn.LevelData>}
 * @const
 */
cn.LevelData.levels = {
  /*** Pos initial, Etoiles, Registres, opérations, départ (de bas en haut), arrivée, hint ***/
  /***
      'Toto': new cn.LevelData(
          2,
          [30, 30, 30],
          [8, 8, 8, 5],
          ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'red',
          'blue', 'green', 'yellow', 'none', 'any'],
          [[], [], []],
          [[], [], []],
  'Niveau proposé par '
      ),
  ***/
  'Jean Baptiste': new cn.LevelData(
    1,
    [30, 30, 30],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'red',
      'green', 'none', 'any'],
    [['green', 'red'], ['green', 'red'], ['green', 'red'], ['red', 'green'], ['red', 'green']],
    [['green', 'green', 'green', 'green', 'green'], [], [], [], ['red', 'red', 'red', 'red', 'red']],
    'Niveau proposé par Jean-Baptiste'
  ),
  'Demis': new cn.LevelData(
    1,
    [15, 11, 11],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3',
      'blue', 'yellow', 'none', 'any'],
    [['blue'], ['blue'], ['yellow'], ['blue'], ['blue'], ['yellow']],
    [['yellow'], ['blue'], ['blue'], ['yellow'], ['blue'], ['blue']],
    'Niveau proposé par Demis'
  ),
  'Aure': new cn.LevelData(
    1,
    [20, 16, 16],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3',
      'blue', 'green', 'none', 'any'],
    [['blue', 'green', 'green'], [], []],
    [['green', 'green', 'blue'], [], []],
    'Niveau proposé par Aure'
  ),
  'Inversion': new cn.LevelData(
    3,
    [16, 16, 16],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3',
      'blue', 'yellow', 'none', 'any'],
    [[], [], ['yellow', 'blue', 'yellow', 'blue', 'yellow', 'blue'], [], []],
    [[], [], ['blue', 'yellow', 'blue', 'yellow', 'blue', 'yellow'], [], []],
    'Niveau proposé par Jérémy'
  ),
  'Ella': new cn.LevelData(
    2,
    [30, 30, 30],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3',
      'blue', 'green', 'none', 'any'],
    [[], ['green', 'blue'], []],
    [[], ['blue', 'green'], []],
    'Niveau proposé par Ella'
  ),
  'Evasion': new cn.LevelData(
    2,
    [30, 30, 30],
    [10, 10, 10, 8, 8, 8],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'red',
      'blue', 'green', 'yellow', 'none', 'any'],
    [['blue', 'red', 'blue'], ['yellow', 'green', 'yellow'], [], []],
    [['yellow', 'blue', 'yellow', 'blue'], [], ['green', 'red'], []],
    'Niveau proposé par Laure, Axelle et Clotilde'
  ),
  'Trier par couleurs': new cn.LevelData(
    3,
    [40, 40, 40],
    [8, 8, 8, 8, 5, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'none', 'any'],
    [['yellow', 'green', 'red'], [], [], ['red', 'yellow', 'green'], ['blue']],
    [['blue'], ['red', 'red'], ['green', 'green'], [], ['yellow', 'yellow']],
    'Niveau proposé par Margot et Clémence'
  ),
  'Rassemblement': new cn.LevelData(
    1,
    [40, 40, 40],
    [10, 10, 10, 10, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'f4', 'red',
      'blue', 'green', 'yellow', 'none', 'any'],
    [['yellow'], ['green'], ['blue', 'red']],
    [[], ['blue', 'yellow', 'green', 'red'], []],
    'Niveau proposé par Tess'
  ),
  'May the odds be ever in your favour': new cn.LevelData(
    5,
    [50, 50, 50],
    [10, 10, 10, 10, 10],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'f4', 'red',
      'green', 'yellow', 'none', 'any'],
    [['green'], ['green', 'green', 'red'], [],
    ['red', 'red', 'red'], ['green', 'red', 'green'], ['red', 'red', 'red'],
    [], ['green', 'green', 'yellow'], ['green']],
    [['green', 'green', 'green'], ['green'], [],
    ['red', 'red', 'red'], ['red', 'yellow', 'red'], ['red', 'red', 'red'],
    [], ['green', 'green', 'green'], ['green']],
    'Niveau proposé par L&R'
  ),
  'Spain': new cn.LevelData(
    3,
    [30, 30, 30],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'red',
      'yellow'],
    [['red', 'yellow'], ['red'], [], ['red'], ['yellow']],
    [['red'], ['yellow'], ['red'], ['yellow'], ['red']],
    'Niveau proposé par Thomas et Martin'
  ),
  'Chèvre deviendra barbichette': new cn.LevelData(
    1,
    [30, 30, 30],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3',
      'green', 'yellow', 'none', 'any'],
    [['yellow', 'yellow', 'yellow'], ['yellow', 'green', 'yellow'], [], [], []],
    [[], [], ['green'], ['yellow', 'yellow'], ['yellow', 'yellow', 'yellow']],
    'Niveau proposé par Nathalie, Lise et Mathilde'
  ),
  'Permutation circulaire': new cn.LevelData(
    1,
    [28, 13, 13],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'red',
      'blue', 'green', 'none', 'any'],
    [['green'], ['blue'], ['red']],
    [['blue'], ['red'], ['green']],
    'Niveau proposé par Robin'
  ),
  'Roumanie': new cn.LevelData(
    4,
    [30, 30, 30],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'none'],
    [['blue', 'blue'], ['yellow', 'yellow'], ['red', 'red'], [], []],
    [[], [], ['blue', 'blue'], ['yellow', 'yellow'], ['red', 'red']],
    'Niveau proposé par Philémon'
  ),
  'Bouton d\'arrêt': new cn.LevelData(
    1,
    [30, 30, 30],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'red',
      'green', 'none', 'any'],
    [[], ['green'], ['green'], ['green'], ['red']],
    [['green', 'green', 'green'], [], [], [], ['red']],
    'Niveau proposé par Lucien'
  ),
  'Empiler': new cn.LevelData(
    2,
    [8, 8, 7],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3'],
    [['blue'], [], ['red']],
    [[], ['blue', 'red'], []],
    'Détaillez la suite d\'instructions à effectuer.\n\nVous pouvez "revenir à la ligne" en appelant un autre programme\n\nLa plus courte solution utilise 4 registres'
  ),
  'Échanger': new cn.LevelData(
    2,
    [20, 15, 10],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3'],
    [[], ['blue', 'red'], []],
    [[], ['red', 'blue'], []],
    'Réutilisez les idées du niveau précédent...\n\nLa plus courte solution utilise 5 registres'
  ),
  'La Trieuse': new cn.LevelData(
    1,
    [20, 14, 12],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'red',
      'green', 'yellow', 'none', 'any'],
    [['yellow', 'green', 'red', 'yellow', 'red'], [], [], []],
    [[], ['yellow', 'yellow'], ['green'], ['red', 'red']],
    'Cherchez une solution générale plutôt qu\'une solution particulière' + '\n\nLa plus courte solution connue utilise 12 registres.'
  ),
  'Diviser': new cn.LevelData(
    2,
    [15, 10, 9],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3'],
    [[], ['yellow', 'yellow', 'yellow', 'yellow'], []],
    [['yellow', 'yellow'], [], ['yellow', 'yellow']],
    'Alternez gauche et droite, et utilisez les programmes pour raccourcir votre ' +
    'solution.\n\nLa plus courte solution utilise 9 registres.'
  ),
  'Translation': new cn.LevelData(
    1,
    [10, 6, 4],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'red', 'none'], [[], ['red', 'red', 'red'], [], ['red', 'red', 'red', 'red', 'red'], [], ['red', 'red'], ['red', 'red', 'red', 'red'], []], [['red', 'red', 'red'], [], ['red', 'red', 'red', 'red', 'red'], [], ['red', 'red'], ['red', 'red', 'red', 'red'], [], []],
    'Utilisez les étiquettes pour savoir si vous avez fini de déplacer une pile, puis passez à la suivante.\n\nLa plus courte solution utilise 4 registres.'
  ),
  'Translation des couleurs': new cn.LevelData(
    1,
    [9, 5, 4],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'green', 'none', 'any'],
    [['green'],
    ['blue', 'blue'], ['green'],
    [],
    ['blue', 'blue', 'blue'],
    ['green'],
    ['blue', 'blue'],
    ['blue', 'blue']],
    [['green', 'blue', 'blue'], [], ['green'],
    ['blue', 'blue', 'blue'], [], ['green', 'blue', 'blue'], ['blue', 'blue'], []],
    'Très similaire au précédent, mais il faut tenir compte des couleurs.\n\nLa plus courte solution utilise 4 registres'
  ),
  'Cargo 101': new cn.LevelData(
    1,
    [3, 3, 3],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3'],
    [['yellow'], []],
    [[], ['yellow']],
    'Bas, Droite, Bas\n\nLa plus courte solution utilise 3 registres.'
  ),
  'Transporteur': new cn.LevelData(
    1,
    [5, 5, 4],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3'],
    [['yellow'], [], [], []],
    [[], [], [], ['yellow']],
    'Réutilisez et adaptez la solution du premier niveau.\n\nLa plus courte solution utilise 4 registres.'
  ),
  'Récursion': new cn.LevelData(
    1,
    [10, 5, 5],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3'],
    [['yellow', 'yellow', 'yellow', 'yellow'], []],
    [[],
    ['yellow', 'yellow', 'yellow', 'yellow']],
    'Déplacez une caisse vers la droite, revenez, et recommencez.\n\nLa plus courte solution utilise 5 registres.'
  ),
  'Inverseur': new cn.LevelData(
    1,
    [15, 10, 10],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3'],
    [['blue', 'red', 'green', 'yellow'], [], [], [], [], []],
    [[], [], [], [], [], ['yellow', 'green', 'red', 'blue']],
    'Déplacez les quatre blocs vers la droite et recommencez.\n\nLa ' +
    'plus courte solution utilise 10 registres.'
  ),
  'D\'en bas': new cn.LevelData(
    1,
    [8, 6, 5],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'yellow',
      'none', 'any'],
    [['yellow', 'blue', 'blue', 'blue', 'blue'], [], []],
    [[], ['blue', 'blue', 'blue', 'blue'], ['yellow']],
    'À droite une fois pour les bleus, deux fois pour le jaune : utilisez les étiquettes !' + 
    '\nUne instruction ne s\'exécutera que si la pince contient un bloc de la couleur indiquée par l\'étiquette.' + 
    '\n\nLa plus courte solution utilise 5 registres.'
  ),
  'Aller à gauche': new cn.LevelData(
    1,
    [15, 9, 9],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3'],
    [[], ['red', 'red', 'red'], ['green', 'green', 'green'],
    ['blue', 'blue', 'blue']],
    [['red', 'red', 'red'], ['green', 'green', 'green'],
    ['blue', 'blue', 'blue'], []],
    'Déplacez chaque pile vers la gauche et recommencez.\n\nLa plus courte solution utilise 9 ' +
    'registres.'
  ),
  'Double flip': new cn.LevelData(
    1,
    [12, 6, 5],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'red',
      'green', 'yellow', 'none', 'any'],
    [['blue', 'red', 'green', 'yellow'], [], []],
    [[], [], ['blue', 'red', 'green', 'yellow']],
    'Allez à droite une fois si vous tenez un bloc, deux fois si vous tenez un bloc bleu et allez à gauche ' +
    'si vous ne tenez pas de bloc. Répéter\n\nLa plus courte solution utilise 5 registres'
  ),
  'Aller à gauche 2': new cn.LevelData(
    1,
    [8, 6, 4],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'red',
      'green', 'none', 'any'],
    [[], ['red', 'red', 'red'], ['blue', 'blue', 'blue'],
    ['green', 'green', 'green']],
    [['red', 'red', 'red'], ['blue', 'blue', 'blue'],
    ['green', 'green', 'green'], []],
    'Allez à droite si vous ne tenez pas de bloc et allez à gauche si vous en tenez un. Répétez.\n\nThe ' +
    'La plus courte solution utilise 4 registres'
  ),
  'Tri aléatoire': new cn.LevelData(
    2,
    [15, 10, 9],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3'],
    [[], ['blue', 'yellow', 'blue', 'yellow', 'blue', 'yellow'], []],
    [['blue', 'blue', 'blue'], [], ['yellow', 'yellow', 'yellow']],
    'Alternez gauche et droite et utilisez P2 pour raccourcir votre' +
    'solution.\n\nLa plus courte solution utilise 9 registres'
  ),
  'Distanciation sociale': new cn.LevelData(
    1,
    [12, 6, 4],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'red', 'yellow',
      'none', 'any'],
    [['yellow'], ['yellow'], ['yellow'], ['yellow'], ['yellow'], ['yellow'],
    [], ['red', 'red', 'red', 'red']],
    [['yellow'], ['yellow'], ['yellow'], ['yellow'], ['yellow'], ['yellow'],
    ['red', 'red', 'red', 'red'], []],
    'Allez à droite si vous ne tenez pas de bloc et allez à gauche si vous en tenez un rouge. Répétez.\n\n' +
    'La plus courte solution utilise 4 registres'
  ),
  'Tri par couleur': new cn.LevelData(
    2,
    [14, 10, 8],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'red', 'green',
      'none', 'any'],
    [[], ['green', 'green', 'red', 'green', 'red', 'red'], []],
    [['red', 'red', 'red'], [], ['green', 'green', 'green']],
    'Passez en revue chacune des 3 piles et déposez ou ramassez les blocs en fonction de la couleur. ' +
    'Au-dessus de la pile de gauche, déposez si le bloc est rouge. Au-dessus de la pile de droite ' +
    'déposez si le bloc est vert.\n\nLa plus courte solution utilise 8 registres. '
  ),
  'Piles marchantes': new cn.LevelData(
    1,
    [13, 11, 9],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'none'],
    [['blue', 'blue', 'blue', 'blue'], ['blue', 'blue', 'blue', 'blue'],
    ['blue', 'blue', 'blue', 'blue'], [], [], [], []],
    [[], [], [], [], ['blue', 'blue', 'blue', 'blue'],
    ['blue', 'blue', 'blue', 'blue'], ['blue', 'blue', 'blue', 'blue']],
    'Pour une solution compact, déplacez chaque pile de 3 emplacements vers la droite et ' +
    'répétez. Cette solution peut être implémentée en 10 registres.\n\nLa ' +
    'plus courte solution utilise 9 registres (Avec une approche ' +
    'très spécifique à cette configuration)'
  ),
  'Inverseur répété': new cn.LevelData(
    1,
    [9, 7, 5],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'red',
      'green', 'yellow', 'none', 'any'],
    [['yellow', 'red', 'green', 'blue'], [],
    ['yellow', 'red', 'green', 'blue'], [],
    ['yellow', 'red', 'green', 'blue'], []],
    [[], ['blue', 'green', 'red', 'yellow'], [],
    ['blue', 'green', 'red', 'yellow'], [],
    ['blue', 'green', 'red', 'yellow']],
    'Ce niveau peut être réalisé en 5 registres avec une utilisation intelligente ' +
    'des conditions.'
  ),
  'Double tri': new cn.LevelData(
    2,
    [20, 14, 11],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'yellow',
      'none', 'any'],
    [[], ['blue', 'blue', 'yellow', 'yellow'],
    ['yellow', 'blue', 'yellow', 'blue'], []],
    [['blue', 'blue', 'blue', 'blue'], [], [],
    ['yellow', 'yellow', 'yellow', 'yellow']],
    'Triez, allez à droite, triez, allez à gauche. Répétez.\n\n' +
    'La plus courte solution utilise 11 registres.'
  ),
  'Mirroir': new cn.LevelData(
    1,
    [9, 7, 6],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'green', 'yellow',
      'none', 'any'],
    [['yellow', 'yellow', 'yellow', 'yellow'], ['green', 'green'], ['green'],
    ['green'], ['green', 'green'], []],
    [[], ['green', 'green'], ['green'], ['green'], ['green', 'green'],
    ['yellow', 'yellow', 'yellow', 'yellow']],
    'La plus courte solution utilise 6 registres.'
  ),
  'Étalez-le': new cn.LevelData(
    1,
    [13, 9, 7],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'green', 'none'],
    [['green', 'green', 'green', 'green', 'green', 'green'], [], [], [], [],
    []],
    [['green'], ['green'], ['green'], ['green'], ['green'], ['green']],
    'Déplacez la pile d\'un emplacement vers la droite et ramenez un bloc' +
    'vers la gauche.\n\nLa plus courte solution utilise 7 registres.'
  ),
  'L\'empileur': new cn.LevelData(
    5,
    [12, 10, 8],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'yellow', 'none'],
    [[], ['yellow'], ['yellow'], ['yellow'], ['yellow'], ['yellow'],
    ['yellow'], []],
    [[], [], [], [], [], [], [],
    ['yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow']],
    'Allez à gauche jusqu\'à ce que vous trouviez un emplacement vide ensuite déplacez la dernière' +
    'pile jaune d\'un emplacement vers la droite. Répétez.\n\nLa plus courte solution ' +
    'utilise 8 registres'
  ),
  'Clarté': new cn.LevelData(
    1,
    [9, 7, 6],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'red', 'green',
      'none', 'any'],
    [['green', 'red', 'green'], ['green', 'green', 'green', 'red', 'green'],
    ['red', 'green', 'red', 'green'], ['red', 'green', 'green'], []],
    [['green', 'red'], ['green', 'green', 'green', 'red'],
    ['red', 'green', 'red'], ['red'],
    ['green', 'green', 'green', 'green', 'green']],
    'Une version déguisée de mirroir\n\nLa plus courte solution utilise 6 registres.'
  ),
  'Se rassembler': new cn.LevelData(
    1,
    [15, 9, 7],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'yellow', 'none'],
    [[], [], ['yellow', 'yellow', 'yellow'], ['yellow'], [], [],
    ['yellow', 'yellow']],
    [['yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow'], [], [], [],
    [], [], []],
    'Vous pouvez aller à droite et trouver un bloc jaune mais quand vous revenez ' +
    'comment faites vous pour ne pas vous prendre le mur ?' +
    '\n\nDans P2, utilisez la pile de programmation pour compter le nombre de' +
    'fois que vous allez à droite jusqu\'à ce que vous trouviez un bloc jaune, ensuite ' +
    'retournez à gauche le même nombre de fois. Une autre manière de voir les choses : ' +
    'P2 est une fonction récursive qui va à droite jusqu\'à ce qu\'elle trouve un' +
    'bloc, elle revient ensuite à sa position initiale. P2 peut être ' +
    'implémenter en 4 registres.\n\nLa plus courte solution utilise un total de 7 registres. '
  ),
  'Se rassembler 2': new cn.LevelData(
    1,
    [12, 10, 8],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'green', 'yellow',
      'none', 'any'],
    [[], ['yellow'], ['yellow', 'green', 'green'], ['yellow'],
    ['yellow', 'green'], ['yellow'], ['green', 'green', 'green', 'green']],
    [['green', 'green', 'green', 'green', 'green', 'green', 'green'],
    ['yellow'], ['yellow'], ['yellow'], ['yellow'], ['yellow'], []],
    'Un autre niveau de pile. Ré-utilisez la solution du niveau précédent ' +
    'avec une petite modification.\n\nLa plus courte solution utilise 8 registres. '
  ),
  'Les verts': new cn.LevelData(
    1,
    [12, 9, 7],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'green',
      'none', 'any'],
    [['green'], ['blue', 'blue'], ['green'], [], ['blue', 'blue', 'blue'],
    ['green'], ['blue', 'blue'], ['blue', 'blue']],
    [['green', 'blue', 'blue'], [], ['green', 'blue', 'blue', 'blue'], [], [],
    ['green', 'blue', 'blue', 'blue', 'blue'], [], []],
    'Très similaire aux deux niveaux précédents mais laissez la pile se dérouler et ' +
    'réinitialisez lorsque vous trouvez un bloc vert. Pour ce faire, allez à gauche si vous tenez ' +
    'un bloc bleu.\n\nLa plus courte solution utilise 7 registres.'
  ),
  'Remplir les blancs': new cn.LevelData(
    1,
    [20, 14, 11],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'red', 'green',
      'none', 'any'],
    [['green', 'green', 'green', 'green'], ['red'], [], ['red'], [], [],
    ['red'], []],
    [[], ['red'], ['green'], ['red'], ['green'], ['green'], ['red'],
    ['green']],
    'Déplacer la pile entière d\'un emplacement vers la droite ' +
    'et ramnenez une caisse vers la gauche sauf dans la première ' +
    'itération.\n\nLa plus courte solution utilise 11 registres.'
  ),
  'Compter les bleus': new cn.LevelData(
    1,
    [15, 12, 9],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'yellow',
      'none', 'any'],
    [['yellow', 'blue', 'blue'], [], [], [], ['yellow', 'blue'], [], []],
    [[], ['blue', 'blue'], [], ['yellow'], [], ['blue'], ['yellow']],
    'Un autre niveau de pile. Le nombre de blocs bleus indique le nombre de fois ' +
    'qu\'il faut aller à droite avec le bloc jaune.\n\nLa plus courte solution utilise 9 registres.'
  ),
  'Tri multiple': new cn.LevelData(
    1,
    [16, 11, 11],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'yellow',
      'none', 'any'],
    [[], ['blue', 'yellow'], [], ['yellow', 'yellow', 'blue'],
    ['yellow', 'blue', 'yellow', 'blue'], ['blue', 'yellow'], ['blue'], []],
    [['yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow'], [], [], [],
    [], [], [], ['blue', 'blue', 'blue', 'blue', 'blue', 'blue']],
    'Avancez jusqu\'à ce que vous trouviez ' +
    'un bloc. Si le bloc est bleu, déplacez le un bloc plus loin et revenez ' +
    '(en utilisant la pile) sans bloc dans la pince. Si le bloc est jaune, ramenez ' +
    'le et lâchez le. Répétez.\n\nLa plus courte solution utilise 11 registres.'
  ),
  'Diviser par deux': new cn.LevelData(
    1,
    [20, 14, 12],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'none'],
    [['blue', 'blue', 'blue', 'blue'], [], ['blue', 'blue'], [],
    ['blue', 'blue', 'blue', 'blue', 'blue', 'blue'], [],
    ['blue', 'blue', 'blue', 'blue'], []],
    [['blue', 'blue'], ['blue', 'blue'], ['blue'], ['blue'],
    ['blue', 'blue', 'blue'], ['blue', 'blue', 'blue'], ['blue', 'blue'],
    ['blue', 'blue']],
    'Emplilez la pile tout les deux blocs. Ramenez un bloc à chaque fois ' +
    'que la pile se dépile.\n\nLa plus courte solution utilise 12 registres.'
  ),
  'La fusion': new cn.LevelData(
    1,
    [9, 7, 6],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'red', 'none',
      'any'],
    [['blue', 'blue', 'blue'], [], ['red', 'red', 'red']],
    [[], ['blue', 'red', 'blue', 'red', 'blue', 'red'], []],
    'Utilisez la pile pour chaque bloc bleu, et déroulez la pour chaque bloc rouge.\n\n' +
    'La plus courte solution utilise 6 registres.'
  ),
  'Même les impairs': new cn.LevelData(
    1,
    [13, 11, 10],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'red',
      'green', 'yellow', 'none', 'any'],
    [['green', 'green', 'green', 'green', 'green'], [], ['red', 'red'], [],
    ['blue', 'blue', 'blue'], [], ['yellow', 'yellow', 'yellow', 'yellow'],
    []],
    [['green'], ['green', 'green', 'green', 'green'], [], ['red', 'red'],
    ['blue'], ['blue', 'blue'], [],
    ['yellow', 'yellow', 'yellow', 'yellow']],
    'Si la pile a un nombre impair de blocs, laissez-en un derrière, ' +
    'sinon déplacez les tous. Utilisez une séquence de mouvements qui s\'annule ' +
    'toute seule lorsqu\'elle est répétée pour déplacer les blocs à droite, et ' +
    's\'éxecute un nombre pair de fois.\n\nLa plus courte solution utilise 10 registres.'
  ),
  'Code génétique': new cn.LevelData(
    1,
    [29, 20, 17],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'green', 'yellow',
      'none', 'any'],
    [['green', 'yellow', 'yellow', 'green', 'yellow', 'green'], [],
    ['yellow', 'yellow', 'yellow'], [], ['green', 'green', 'green']],
    [[], ['green', 'yellow', 'green', 'yellow', 'yellow', 'green'], [],
    ['green', 'yellow', 'yellow', 'green', 'yellow', 'green'], []],
    'La pile de gauche donne les instructions sur la façon de construire la pile de droite. ' +
    'Emplilez toute la pile à gauche et dépilez la à droite.\n\n' +
    'La plus courte solution utilise 17 registres.'
  ),
  'Tri multiple 2': new cn.LevelData(
    1,
    [25, 17, 17],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'red',
      'green', 'yellow', 'none', 'any'],
    [[], ['blue', 'yellow', 'red', 'green', 'yellow'], [],
    ['red', 'blue', 'blue', 'green', 'green', 'yellow'], [],
    ['red', 'green', 'yellow', 'red', 'blue'], []],
    [['blue', 'blue', 'blue', 'blue'], [], ['red', 'red', 'red', 'red'], [],
    ['green', 'green', 'green', 'green'], [],
    ['yellow', 'yellow', 'yellow', 'yellow']],
    'Passez en revue chaque pile et soit vous ramassez si vous êtes au dessus ' +
    'd\'un emplacement pair soit vous déposez sur la couleur correspondant si ' +
    'vous êtes au dessus d\'un emplacement impair.\n\nLa plus courte solution utilise 17 registres.'
  ),
  'L\'échange': new cn.LevelData(
    2,
    [15, 12, 10],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'red', 'green',
      'none', 'any'],
    [['red', 'red', 'red'], [], ['green', 'green', 'green']],
    [['green', 'green', 'green'], [], ['red', 'red', 'red']],
    'Fusionnez les piles au milieu, changez la parité et annulez la fusion.\n\n' +
    'La plus courte solution utilise 10 registres.'
  ),
  'Remettre l\'ordre': new cn.LevelData(
    1,
    [29, 20, 16],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'red', 'none',
      'any'],
    [[], ['blue', 'red', 'blue', 'blue'], ['red', 'blue', 'red', 'blue'],
    ['blue', 'blue', 'blue'], ['red'], ['red', 'blue'], ['blue'], []],
    [[], ['blue', 'blue', 'blue'], ['blue', 'blue'], ['blue', 'blue', 'blue'],
    [], ['blue'], ['blue'], ['red', 'red', 'red', 'red', 'red']],
    'Pour chaque pile, déplacez les blocs rouges d\'une case vers la droite et les blocs bleus ' +
    'd\'une case vers la gauche tout en empilant la pile pour ' +
    'les blocs bleus pour que vous puissiez les remettre après. Répétez ' +
    'pour chaque pile.\n\nLa plus courte solution utilise 16 registres.'
  ),
  'Changer de place': new cn.LevelData(
    1,
    [20, 18, 17],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'red', 'green',
      'none', 'any'],
    [['red'], ['red', 'red', 'red'], ['green', 'green', 'green'], [],
    ['red', 'red', 'red', 'red'], ['red', 'red'],
    ['green', 'green', 'green', 'green'], ['green']],
    [['red', 'red', 'red'], ['red'], [], ['green', 'green', 'green'],
    ['red', 'red'], ['red', 'red', 'red', 'red'], ['green'],
    ['green', 'green', 'green', 'green']],
    'Échangez chaque paire de piles. D\'abord, déplacez la pile de gauche ' +
    'vers la droite, empilez la pile. Ensuite, déplacez tout les blkocs sur l\'emplacement de gauche. ' +
    'Enfin, dépilez la pile en déplacant un bloc vers la droite à chaque fois ' +
    '\n\nLa plus courte solution utilise 17 registres.'
  ),
  'Échange de palettes': new cn.LevelData(
    2,
    [29, 18, 15],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'red', 'none',
      'any'],
    [[], ['red', 'blue'], ['blue', 'red', 'blue', 'red'], ['blue', 'red'],
    ['blue', 'red', 'blue', 'red'], [],
    ['blue', 'red', 'blue', 'red', 'blue', 'red'], []],
    [[], ['blue', 'red'], ['red', 'blue', 'red', 'blue'], ['red', 'blue'],
    ['red', 'blue', 'red', 'blue'], [],
    ['red', 'blue', 'red', 'blue', 'red', 'blue'], []],
    'Allez à gauche et allez à droite. Empilez la pile à chaque fois. Lorsqu\'il n\’y ' +
    'a plus de blocs à gauche, dépilez la pile en allant à gauche et ' +
    'à droite. Répétez. \n\nLa plus courte solution utilise 15 registres.'
  ),
  'Mirroir 2': new cn.LevelData(
    1,
    [20, 15, 12],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'yellow', 'none'],
    [['yellow', 'yellow', 'yellow'], ['yellow', 'yellow'], ['yellow'], []],
    [[], ['yellow'], ['yellow', 'yellow'], ['yellow', 'yellow', 'yellow']],
    'Déplacez le bloc du dessus de la 2ème pile vers la droite et ramenez ' +
    'la pile de gauche tout à droite.\n\nLa plus courte solution ' +
    'utilise 12 registres'
  ),
  'Changer de place 2': new cn.LevelData(
    1,
    [25, 19, 16],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'red', 'none'],
    [['red'], ['red', 'red', 'red'], ['red'],
    ['red', 'red', 'red', 'red', 'red'], [], ['red', 'red'],
    ['red', 'red', 'red', 'red'], ['red', 'red', 'red']],
    [['red', 'red', 'red'], ['red'], ['red', 'red', 'red', 'red', 'red'], [],
    ['red', 'red'], ['red', 'red', 'red', 'red'], ['red', 'red', 'red'],
    ['red']],
    'Comme dans Changer de place, échanger les piles. Faire ceci pour chaque paire ' +
    'de piles consécutives et c\'est bon.\n\nLa plus courte solution' +
    'utilise 16 registres.'
  ),
  'Tri vertical': new cn.LevelData(
    2,
    [29, 29, 20],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'green',
      'none', 'any'],
    [[], ['green', 'blue', 'green', 'blue', 'blue'],
    ['blue', 'green', 'blue'], ['green', 'blue', 'blue', 'green'],
    ['blue', 'green'], ['blue', 'green', 'green', 'green', 'blue'], []],
    [[], ['green', 'green', 'blue', 'blue', 'blue'],
    ['green', 'blue', 'blue'], ['green', 'green', 'blue', 'blue'],
    ['green', 'blue'], ['green', 'green', 'green', 'blue', 'blue'], []],
    'Utilisez les idées des autres niveaux de tri.\n\nLa plus courte solution utilise 20 registres.'
  ),
  'Count in Binary': new cn.LevelData(
    1,
    [29, 23, 17],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'green', 'none'],
    [['green', 'green', 'green', 'green', 'green', 'green'], [], [], [], [],
    [], []],
    [['green', 'green'], [], ['green'], ['green'], ['green'], [], ['green']],
    'Count up all the numbers in binary: 1, 10, 11, 100,...'
  ),
  'Equalizer': new cn.LevelData(
    1,
    [40, 40, 40],
    [10, 10, 10, 10, 6],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'f4', 'blue', 'red',
      'none', 'any'],
    [[], ['blue', 'blue'], ['blue'], ['blue', 'blue', 'blue', 'blue', 'blue'],
    [], ['blue', 'blue'], ['blue', 'blue', 'blue', 'blue'], ['red']],
    [['blue', 'blue'], ['blue', 'blue'], ['blue', 'blue'], ['blue', 'blue'],
    ['blue', 'blue'], ['blue', 'blue'], ['blue', 'blue'], ['red']],
    ''
  ),
  'Parting the Sea': new cn.LevelData(
    1,
    [17, 17, 17],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'none'],
    [[], ['blue', 'blue'], ['blue', 'blue'], ['blue', 'blue'],
    ['blue', 'blue'], ['blue', 'blue'], []],
    [['blue', 'blue', 'blue', 'blue', 'blue'], [], [], [], [], [],
    ['blue', 'blue', 'blue', 'blue', 'blue']],
    ''
  ),
  'The Trick': new cn.LevelData(
    2,
    [20, 14, 11],
    [8, 8, 8, 5],
    ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'red', 'yellow',
      'none', 'any'],
    [['yellow', 'red'], [], ['red', 'yellow']],
    [['red', 'yellow'], [], ['yellow', 'red']],
    'Bring the right pile to the middle, then the left pile to the middle. ' +
    'Finally unmerge the piles to their respective sides. \n\nThe ' +
    'shortest known solution uses 11 registers.'
  )
};
