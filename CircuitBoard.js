/**
 * @author Maxime Wegesin
 *
 * @requires Wireworld.js
 */


/**
 * Creates a new instance of a Wireworld Circuitboard. This is an extension of
 * Wireworld, accepting a new cell state
 *
 * @augments Wireworld
 * @this {CircuitBoard}
 * @params {Array} cells A 2-dimensional rectangular array, giving initial values of the cells
 * @constructor
 */
var CircuitBoard = function(cells) {
    Wireworld.call(this, cells);
    this.circuits = {};
};

copyProperties(CircuitBoard, Wireworld); //Copy static properties
copyPrototype(CircuitBoard, Wireworld);

CircuitBoard.WW_EMPTY = 4;

/**
 * Places circuit at given position.
 *
 * @param {number} i
 * @param {number} j
 * @param {Wireworld} wireworld
 * @return {number} Id of the placed circuit
 */
CircuitBoard.prototype.placeCircuit = (function () {
    var id=1;
    return function (i, j, wireworld) {
        this.circuits[id++] = {
            wireworld: wireworld,
            i: i,
            j: j,
        };
        return id;
    }
})();


/**
 * If there is a circuit covering cell (i,j) return its id.
 *
 * @param i
 * @param j
 * @return Circuit id if there is any circuit, null otherwise
 */
CircuitBoard.prototype.getCircuitAtPos = function (i, j) {
    for (var id in this.circuits) {
        var circuit = this.circuits[id];
        if (circuit.i <= i
            && circuit.i + circuit.wireworld.columns > i
            && circuit.j <= j
            && circuit.j + circuit.wireworld.rows > j) {
                return id;
        }
    }
    return null;
}


/**
 * Remove circuit with given id.
 *
 * @param id
 */
CircuitBoard.prototype.removeCircuit = function (id) {
    delete this.circuits[id];
}