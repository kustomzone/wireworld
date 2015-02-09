/**
 * Created 7/3/14
 * by Maxime
 *
 * WW_BLACK    = 0;
 * WW_COPPER   = 1;
 * WW_EHEAD    = 2;
 * WW_ETAIL    = 3;
 *
 * With a resolution of 648x432 pixels the following level sizes are possible without blurred
 * rendering:
 *
 * 3 x 2
 * 4 x 3
 * 6 x 4
 * 9 x 6
 * 12 x 8
 * 18 x 12
 * 24 x 16
 * 27 x 18
 * 36 x 24
 * 54 x 36
 * 72 x 48
 * 81 x 54
 * 108 x 72
 * 162 x 108
 * 216 x 144
 * 324 x 216
 */

var WireworldLevelData = {};

WireworldLevelData.getLevel = function (numLevel) {
    return WireworldLevelData.level[numLevel];
};

WireworldLevelData.level = [
    {
        "cells" : [ //12 x 8
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,4,4,4,4,0,0,0],
            [0,2,1,1,1,4,4,4,4,1,1,0],
            [0,0,0,0,0,4,4,4,4,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0]
        ],
        "blueprints" : [
            {
                "cells" : [
                    [1]
                ],
                "count" : 2,
                "tip": "A copper cell changes to Electron Head state if on or two of its neighbors are in Electron Head state"
            }, {
                "cells" : [
                    [3]
                ],
                "count" : 2,
                "tip": "An Electron Tail cell becomes a Copper cell"
            }
        ],
        "rules" : [
            {
                "coordinates" : {"i" : 10, "j" : 4},
                "generation" : {"from":0, "to":100},
                "must" : Wireworld.WW_EHEAD
            }
        ],
        "message" : "Hover your mouse over one of the cells in the box to the right to learn about it. Click on it to select " +
                    "it. Right-click to put it back into the box. Place the cell on any of the darkly colored cells in " +
                    "the grid on the left. Press 'play' when you are done. To move to the next level, let the signal go " +
                    "all the way to the right."
    },

    {
        "cells" : [ //12 x 8
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,4,4,4,4,4,4,4,4,4,4,0],
            [0,4,4,1,1,1,1,1,1,1,4,0],
            [0,4,4,4,4,4,4,4,4,4,4,0],
            [0,4,4,4,4,4,4,4,4,4,4,0],
            [0,4,3,2,1,4,1,1,1,1,4,0],
            [0,4,4,4,4,4,4,4,4,4,4,0],
            [0,0,0,0,0,0,0,0,0,0,0,0]
        ],
        "blueprints" : [
            {
                "cells" : [
                    [1]
                ],
                "count" : 1,
                "tip": "A copper cell changes to Electron Head state if on or two of its neighbors are in Electron Head state"
            }, {
                "cells" : [
                    [2]
                ],
                "count" : 1,
                "tip": "An Electron Head cell becomes an Electron Tail"
            }
        ],
        "rules" : [
            {
                "coordinates" : {"i" : 9, "j" : 2},
                "generation" : {"from":0, "to":100},
                "must" : Wireworld.WW_EHEAD
            }, {
                "coordinates" : {"i" : 9, "j" : 5},
                "generation" : {"from":0, "to":100},
                "must" : Wireworld.WW_EHEAD
            }
        ],
        "message" : "Now this is for Dummies. To move to the next level, electrify the two right-most copper cells."
    },

    {
        "cells" : [ //12 x 8
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,4,4,4,4,4,4,4,4,4,4,0],
            [0,4,2,3,1,4,1,1,1,1,4,0],
            [0,4,4,4,4,4,4,4,4,4,4,0],
            [0,4,4,4,4,4,4,4,4,4,4,0],
            [0,4,3,2,1,4,1,1,1,1,4,0],
            [0,4,4,4,4,4,4,4,4,4,4,0],
            [0,0,0,0,0,0,0,0,0,0,0,0]
        ],
        "blueprints" : [
            {
                "cells" : [
                    [1]
                ],
                "count" : 2,
                "tip": "A copper cell changes to Electron Head state if on or two of its neighbors are in Electron Head state"
            }
        ],
        "rules" : [
            {
                "coordinates" : {"i" : 9, "j" : 2},
                "generation" : {"from":0, "to":100},
                "must" : Wireworld.WW_EHEAD
            }, {
                "coordinates" : {"i" : 9, "j" : 5},
                "generation" : {"from":0, "to":100},
                "must" : Wireworld.WW_EHEAD
            }
        ],
        "message" : "Electrify the two right-most copper cells."
    },

    {
        "cells" : [ //12 x 8
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,4,4,4,4,4,4,4,4,4,4,0],
            [0,4,4,4,4,4,4,4,4,4,4,0],
            [0,4,4,4,4,4,4,4,4,4,4,0],
            [0,4,2,1,1,4,2,1,1,1,4,0],
            [0,4,4,4,4,4,4,4,4,4,4,0],
            [0,4,4,4,4,4,4,4,4,4,4,0],
            [0,0,0,0,0,0,0,0,0,0,0,0]
        ],
        "blueprints" : [
            {
                "cells" : [
                    [1]
                ],
                "count" : 1,
                "tip": "A copper cell changes to Electron Head state if on or two of its neighbors are in Electron Head state"
            }, {
                "cells" : [
                    [3]
                ],
                "count" : 1,
                "tip": "An Electron Tail cell becomes a Copper cell"
            }
        ],
        "rules" : [
            {
                "coordinates" : {"i" : 9, "j" : 4},
                "generation" : {"from":0, "to":3},
                "must" : Wireworld.WW_EHEAD
            }, {
                "coordinates" : {"i" : 9, "j" : 4},
                "generation" : {"from":4, "to":100},
                "must" : Wireworld.WW_EHEAD
            }
        ],
        "message" : "Make both signals reach the right end of the wire."
    },

    {
        "cells" : [ //12 x 8
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,4,4,4,4,4,0],
            [0,0,0,0,0,0,4,1,1,1,1,0],
            [0,0,0,0,0,0,4,4,4,4,4,0],
            [0,0,0,0,0,0,4,4,4,4,4,0],
            [0,2,1,1,1,1,4,1,1,1,1,0],
            [0,0,0,0,0,0,4,4,4,4,4,0],
            [0,0,0,0,0,0,0,0,0,0,0,0]
        ],
        "blueprints" : [
            {
                "cells" : [
                    [1]
                ],
                "count" : 6,
                "tip": "A copper cell changes to Electron Head state if on or two of its neighbors are in Electron Head state"
            }
        ],
        "rules" : [
            {
                "coordinates" : {"i" : 9, "j" : 2},
                "generation" : {"from":0, "to":100},
                "must" : Wireworld.WW_EHEAD
            }, {
                "coordinates" : {"i" : 9, "j" : 5},
                "generation" : {"from":0, "to": 11},
                "must_not" : Wireworld.WW_EHEAD
            }
        ],
        "message" : "Do you remember how the laws of Wireworld make cells change their state? An overstimulated copper cell will remain silent. Let the signal take the upper path, but not the lower one."
    },

    {
        "cells" : [ //18 x 12
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,4,4,4,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,4,4,4,1,1,1,1,1,1,0],
            [0,0,0,0,0,0,0,0,4,4,4,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,4,4,4,0,0,0,0,0,0,0],
            [0,2,1,1,1,1,1,1,4,4,4,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,4,4,4,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ],
        "blueprints" : [
            {
                "cells" : [
                    [0,0,0],
                    [0,1,1],
                    [0,1,0]
                ],
                "count" : 1
            }, {
                "cells" : [
                    [0,1,0],
                    [1,1,0],
                    [0,0,0]
                ],
                "count" : 1
            }
        ],
        "rules" : [
            {
                "coordinates" : {"i" : 16, "j" : 4},
                "generation" : {"from":2, "to":100},
                "must" : Wireworld.WW_EHEAD
            }
        ],
        "message" : "I will give you some bigger building blocks. Have fun. Electrify the right-most copper cell."
    },

    {
        "cells" : [ //18 x 12
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,4,4,4,4,4,4,0,0,0,0],
            [0,0,0,0,0,0,0,0,4,4,4,4,4,4,0,0,0,0],
            [0,0,0,0,0,0,0,0,4,4,4,4,4,4,0,0,0,0],
            [0,0,0,0,0,0,0,0,4,4,4,4,4,4,0,0,0,0],
            [0,2,1,1,1,1,1,1,4,4,4,4,4,4,1,1,1,0],
            [0,0,0,0,0,0,0,0,4,4,4,4,4,4,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ],
        "blueprints" : [
            {
                "cells" : [
                    [0,1,0],
                    [0,1,1],
                    [0,0,0]
                ],
                "count" : 1
            }, {
                "cells" : [
                    [0,1,0],
                    [0,1,0],
                    [1,1,0],
                    [0,0,0]
                ],
                "count" : 1
            }, {
                "cells" : [
                    [1,0,0],
                    [1,1,1],
                    [0,0,0],
                ],
                "count" : 1
            }, {
                "cells" : [
                    [0,1,1],
                    [0,1,0],
                ],
                "count" : 1
            }
        ],
        "rules" : [
            {
                "coordinates" : {"i" : 16, "j" : 7},
                "generation" : {"from":2, "to":100},
                "must" : Wireworld.WW_EHEAD
            }
        ],
        "message" : "Can you do it again?"
    },

    {
        "cells" : [ //18 x 12
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,4,4,4,4,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,4,4,4,4,0,0,0,0],
            [0,2,1,1,1,1,1,1,1,1,4,4,4,4,1,1,2,0],
            [0,0,0,0,0,0,0,0,0,0,4,4,4,4,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,4,4,4,4,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ],
        "blueprints" : [
            {
                "cells" : [
                    [1]
                ],
                "count" : 20,
                "tip": "A copper cell changes to Electron Head state if on or two of its neighbors are in Electron Head state"
            }
        ],
        "rules" : [
            {
                "coordinates" : {"i" : 16, "j" : 6},
                "generation" : {"from":2, "to":100},
                "must" : Wireworld.WW_EHEAD
            }
        ],
        "message" : "You are bored, right? I can see it in your face. Let's move to something more interesting. Build something that lets the signal pass from left to right, but not from right to left."
    },

    {
        "cells" : [
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0],
            [0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0],
            [0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0],
            [0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0],
            [0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0],
            [0,2,1,1,1,1,1,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1,0],
            [0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0],
            [0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0],
            [0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0],
            [0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0],
            [0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0],
            [0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ],
        "blueprints" : [
            {
                "cells" : [
                    [1,1,1,1]
                ],
                "count" : 4
            }, {
                "cells" : [
                    [1],
                    [1],
                    [1],
                    [1]
                ],
                "count" : 4
            }, {
                "cells" : [
                    [0,0,1,0,0],
                    [0,1,1,1,0],
                    [0,1,0,1,0],
                    [0,0,1,0,0]
                ],
                "count" : 4,
                "tip": "A diode, it lets the signal pass from top to bottom but not from bottom up"
            }
        ],
        "rules" : [
            {
                "coordinates" : {"i" : 22, "j" : 7},
                "generation" : {"from" : 0, "to": 40},
                "must" : Wireworld.WW_EHEAD
            }, {
                "coordinates" : {"i" : 22, "j" : 7},
                "generation" : {"from" : 40, "to" : 100},
                "must" : Wireworld.WW_EHEAD
            }, {
                "coordinates" : {"i" : 1, "j" : 7},
                "generation" : {"from" : 2, "to" : 100},
                "must_not" : Wireworld.WW_EHEAD
            }
        ],
        "message" : "So you discovered diodes. Quite good. Now use them to enlighten the cell at the right multiple times. But make sure the signal never goes back to its origin!"
    },

    {
        "cells" : [ //36 x 24
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,3,0,1,0,3,0,1,0,1,0,1,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,2,0,1,0,2,0,1,0,1,0,1,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0],
            [0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0],
            [0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0],
            [0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,1,1,1,1,1,0,0,0],
            [0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0],
            [0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0],
            [0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0],
            [0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0],
            [0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,2,0,1,0,1,0,1,0,2,0,1,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,3,0,1,0,1,0,1,0,3,0,1,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ],
        "blueprints" : [
            {
                "cells" : [
                    [1]
                ],
                "count" : 50,
                "tip": "A copper cell changes to Electron Head state if on or two of its neighbors are in Electron Head state"
            }, {
                "cells" : [
                    [1,1,0],
                    [1,0,1],
                    [1,1,0]
                ],
                "count" : 4,
                "tip": "A diode, it lets the signal pass from left to right, but not from right to left"
            }
        ],
        "rules" : [
            {
                "coordinates" : {"i" : 32, "j" : 11},
                "generation" : {"from" : 21, "to": 21},
                "must_not" : Wireworld.WW_EHEAD
            }, {
                "coordinates" : {"i" : 32, "j" : 11},
                "generation" : {"from" : 37, "to" : 37},
                "must" : Wireworld.WW_EHEAD
            }, {
                "coordinates" : {"i" : 32, "j" : 11},
                "generation" : {"from" : 53, "to" : 53},
                "must" : Wireworld.WW_EHEAD
            }, {
                "coordinates" : {"i" : 32, "j" : 11},
                "generation" : {"from" : 69, "to" : 69},
                "must_not" : Wireworld.WW_EHEAD
            }
        ],
        "message" : "Ok, that was enough fooling around. Now build a XOR gate. You know what that is right? The signal shall pass if and only if it is alone."
    },

    {
        "cells" : [ //54 x 36
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,1,1,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,2,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,4,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,1,1,1,1,1,1,4,4,4,4,4,4,4,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0],
            [0,0,0,0,2,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,4,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,1,1,4,4,4,4,4,4,4,0,0,0,0,0,0,4,4,4,4,4,4,4,1,1,1,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,4,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,2,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ],
        "blueprints" : [
            {
                "cells" : [ //This is an AND gate for n>4
                    [0,0,0,0,0,0,0],
                    [1,0,0,0,0,0,0],
                    [0,1,0,0,0,0,0],
                    [0,1,0,0,0,0,0],
                    [0,1,0,1,0,1,1],
                    [1,1,1,1,1,0,0],
                    [0,1,0,1,0,1,0],
                    [0,1,0,0,0,1,0],
                    [0,0,1,1,1,0,0],
                    [0,1,0,0,0,0,0],
                    [1,0,0,0,0,0,0]
                ],
                "count" : 2,
                "tip": "AND, OR or XOR..."
            }, {
                "cells" : [ //This is an OR gate
                    [0,1,1,0,0,0,0],
                    [1,1,0,1,1,0,0],
                    [0,1,1,0,0,1,0],
                    [0,0,0,0,1,0,0],
                    [0,0,0,0,1,0,0],
                    [0,0,0,0,0,1,1],
                    [0,0,0,0,1,0,0],
                    [0,0,0,0,1,0,0],
                    [0,1,1,0,0,1,0],
                    [1,1,0,1,1,0,0],
                    [0,1,1,0,0,0,0]
                ],
                "count" : 1,
                "tip": "AND, OR or XOR..."
            }, {
                "cells" : [ //This is an XOR gate (has to be slowed down by 2 steps to synch with other gates)
                    [1,1,1,0,0,0,0],
                    [0,0,0,1,0,0,0],
                    [0,0,0,1,0,0,0],
                    [0,0,1,0,0,0,0],
                    [0,1,1,1,1,0,0],
                    [0,1,0,0,1,1,1],
                    [0,1,1,1,1,0,0],
                    [0,0,1,0,0,0,0],
                    [0,0,0,1,0,0,0],
                    [0,0,0,1,0,0,0],
                    [1,1,1,0,0,0,0]
                ],
                "count" : 1,
                "tip": "AND, OR or XOR..."
            }
        ],
        "rules" : [
            {
                "coordinates" : {"i" : 49, "j" : 22},
                "generation" : {"from" : 21, "to": 10000},
                "must" : Wireworld.WW_EHEAD
            }
        ],
        "message" : "The blocks you got are AND, XOR and OR gates. Find out which is which and place them in a way that lets the signal pass."
    },

    {
        "cells" : [
            [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
            [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
            [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
            [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
            [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
            [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
            [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
            [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
            [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
            [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
            [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
            [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
            [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
            [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
            [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
            [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]
        ],
        "blueprints" : [
            {
                "cells" : [
                    [1]
                ],
                "count" : 384,
                "tip": "A copper cell changes to Electron Head state if on or two of its neighbors are in Electron Head state"
            }, {
                "cells" : [
                    [2]
                ],
                "count" : 384,
                "tip": "An Electron Head cell becomes an Electron Tail"
            }, {
                "cells" : [
                    [3]
                ],
                "count" : 384,
                "tip": "An Electron Tail cell becomes a Copper cell"
            }, {
                "cells" : [
                    [0]
                ],
                "count" : 384,
                "tip": "A Black cell never changes its state"
            }
        ],
        "rules" : [ ],
        "message" : "What a surprise! You finished the game. I did not think you would come this far. Remember that this was " +
                    "just a quick glance into the Wireworld. It's possibilities are endless. In fact it is quite " +
                    "probable that the Wireworld is complex enough to simulate our entire universe. " +
                    "<a href=\"http://www.quinapalus.com/wi-index.html\">At least if you believe that turing-completeness is " +
                    "enough to do so.</a>"
    }
];

