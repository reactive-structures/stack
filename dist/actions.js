"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StackActions;
(function (StackActions) {
    StackActions["PUSH"] = "[Stack] Push item";
    StackActions["POP"] = "[Stack] Pop item";
    StackActions["CLEAR"] = "[Stack] Clear stack";
})(StackActions = exports.StackActions || (exports.StackActions = {}));
var Push = /** @class */ (function () {
    function Push(payload) {
        this.payload = payload;
        this.type = StackActions.PUSH;
    }
    return Push;
}());
exports.Push = Push;
var Pop = /** @class */ (function () {
    function Pop() {
        this.type = StackActions.POP;
    }
    return Pop;
}());
exports.Pop = Pop;
var Clear = /** @class */ (function () {
    function Clear() {
        this.type = StackActions.CLEAR;
    }
    return Clear;
}());
exports.Clear = Clear;
