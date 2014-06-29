/**
 * Created by maxime on 6/11/14.
 */

/**
 *
 * @param {Wireworld} wireworld
 * @param {HTMLCanvasElement} htmlCanvasElement
 * @param {number} cellWidth
 * @constructor
 */
var WireworldCanvas = function (wireworld, htmlCanvasElement, cellWidth) {
    /**  @type {HTMLCanvasElement} */
    this.htmlCanvasElement  = htmlCanvasElement;
    htmlCanvasElement.addEventListener('contextmenu', function (event) {
        event.preventDefault();
    });
    /**  @type {CanvasRenderingContext2D} */
    this.ctx                = this.htmlCanvasElement.getContext('2d');
    /** @type {number} */
    this.width              = htmlCanvasElement.width;
    /** @type {number} */
    this.height             = htmlCanvasElement.height;
    /** @type {Wireworld} */
    this.wireworld          = wireworld;
    /** @type {number} */
    this.cellWidth          = cellWidth;

}

/**
 *
 * @param width
 * @param height
 * @param id
 * @returns {HTMLElement}
 */
WireworldCanvas.createCanvasElement = function(width, height, id) {
    var e = document.createElement('canvas');
    e.setAttribute('width', width);
    e.setAttribute('height', height);
    e.id = id;

    return e;
}

/**
 * Draws an instance of wireworld to the given Canvas.
 */
WireworldCanvas.prototype.draw = (function() {
    var buffer = null;

    return function () {
        if (buffer != null) {
            this.ctx.putImageData(buffer, 0, 0);
        } else {
            for (var i=0; i<this.wireworld.columns; i++) {
                for (var j=0; j<this.wireworld.rows; j++) {
                    this.drawCell(i, j, this.wireworld.cells[i][j]);
                }
            }
            buffer = this.ctx.getImageData(0, 0, this.width, this.height);
        }
    }
})();


/**
 *
 * @param i
 * @param j
 * @returns {{x: number, y: number, w: (number|*), h: *}}
 */
WireworldCanvas.prototype.getCellRect = function (i, j) {
    return {
        x: i * this.cellWidth,
        y: j * this.cellWidth,
        w: this.cellWidth,
        h: this.cellWidth
    };
}


/**
 *
 * @param i
 * @param j
 * @param state
 */
WireworldCanvas.prototype.drawCell = function (i, j, state) {
    var ctx = this.ctx;
    var rect = this.getCellRect(i, j);

    ctx.beginPath();
    ctx.strokeStyle = '#3C3737';
    switch (state) {
        case CircuitBoard.WW_COPPER:
            ctx.fillStyle = '#FF9900';
            break;

        case CircuitBoard.WW_EHEAD:
            ctx.fillStyle = '#000099';
            break;

        case CircuitBoard.WW_ETAIL:
            ctx.fillStyle = '#0099FF';
            break;

        case CircuitBoard.WW_BLACK:
        default:
            ctx.fillStyle = '#4C4747';
            break;
    }
    ctx.rect(rect.x+0.5, rect.y+0.5, rect.w, rect.h);
    ctx.fill();
    ctx.stroke();
};

/**
 *
 * @param event
 * @returns {{i: number, j: number}}
 */
WireworldCanvas.prototype.getPosFromMouseEvent = function (event) {
    var x = event.clientX - this.htmlCanvasElement.getBoundingClientRect().left;
    var y = event.clientY - this.htmlCanvasElement.getBoundingClientRect().top;
    return {
        i: Math.floor(x/this.cellWidth),
        j: Math.floor(y/this.cellWidth)
    };
};
