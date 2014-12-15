/**
 * Created 7/3/14
 * by Maxime
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

WireworldLevelData.getLevel = function (levelName) {
    return WireworldLevelData.level[levelName];
};

WireworldLevelData.level =
{
    "1" : {
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
                "count" : 1
            }, {
                "cells" : [
                    [2]
                ],
                "count" : 1
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
        "message" : "Now this is for Dummies. You may choose cells from the box on the right. Place them on any of the darkly colored cells. To put a cell back in the box press the right mouse button. To move to the next level, electrify the two right-most copper cells."
    },

    "2" : {
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
                "count" : 2
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

    "3" : {
        "cells" : [ //12 x 8
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,4,4,4,4,4,4,4,4,4,4,0],
            [0,4,4,4,4,4,4,4,4,4,4,0],
            [0,4,2,1,1,1,4,4,4,4,4,0],
            [0,4,4,4,4,4,4,2,1,1,4,0],
            [0,4,4,4,4,4,4,4,4,4,4,0],
            [0,4,4,4,4,4,4,4,4,4,4,0],
            [0,0,0,0,0,0,0,0,0,0,0,0]
        ],
        "blueprints" : [
            {
                "cells" : [
                    [1]
                ],
                "count" : 1
            }, {
                "cells" : [
                    [3]
                ],
                "count" : 1
            }
        ],
        "rules" : [
            {
                "coordinates" : {"i" : 9, "j" : 4},
                "generation" : {"from":0, "to":3},
                "must" : Wireworld.WW_EHEAD
            }, {
                "coordinates" : {"i" : 9, "j" : 4},
                "generation" : {"from":3, "to":100},
                "must" : Wireworld.WW_EHEAD
            }
        ],
        "message" : "Make both signals reach the right end of the wire."
    },

    "4" : {
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
                "count" : 99
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

    "5" : {
        "cells" : [ //18 x 12
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ],
        "blueprints" : [
            {
                "cells" : [
                    [1]
                ],
                "count" : 99
            }
        ],
        "rules" : [
            {
                "coordinates" : {"i" : 16, "j" : 6},
                "generation" : {"from":2, "to":100},
                "must" : Wireworld.WW_EHEAD
            }
        ],
        "message" : "I will give you some bigger building blocks. Have fun. Electrify the right-most copper cell."
    },

    "6" : {
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
                "count" : 99
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

    "7" : {
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
                "count" : 4
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
        "message" : "So you discovered diodes. Quite good. Now find a way to enlighten the cell at the right multiple times. But make sure the signal never goes back to its origin!"
    },

    "8" : {
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
                "count" : 99
            }, {
                "cells" : [
                    [1,1,0],
                    [1,0,1],
                    [1,1,0]
                ],
                "count" : 4
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

    "9" : {
        "cells" : [ //54 x 36
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [2,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,4,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [2,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,4,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [2,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ],
        "blueprints" : [
            {
                "cells" : [
                    [1]
                ],
                "count" : 99
            }, {
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
                "count" : 4
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
                "count" : 5
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
                "count" : 4
            }
        ],
        "rules" : [
            {
                "coordinates" : {"i" : 1, "j" : 9},
                "generation" : {"from" : 21, "to": 10000},
                "must_not" : Wireworld.WW_EHEAD
            }
        ],
        "message" : "Place the gates properly."
    },

    "sandbox" : {
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
                "count" : 384
            }, {
                "cells" : [
                    [2]
                ],
                "count" : 384
            }, {
                "cells" : [
                    [3]
                ],
                "count" : 384
            }, {
                "cells" : [
                    [0]
                ],
                "count" : 384
            }
        ],
        "rules" : [ ],
        "message" : "Playground for testing level ideas."
    }
};

