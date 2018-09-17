"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("@reactive-redux/store");
var actions_1 = require("./actions");
var reducers_1 = require("./reducers");
var Stack = /** @class */ (function (_super) {
    __extends(Stack, _super);
    function Stack(initialStack) {
        if (initialStack === void 0) { initialStack = []; }
        var _this = _super.call(this, initialStack, reducers_1.reducerMap) || this;
        _this.initialStack = initialStack;
        _this.peek$ = _this.state$.pipe(store_1.select(function (stack) { return stack[0]; }));
        _this.size$ = _this.state$.pipe(store_1.select(function (stack) { return stack.length; }));
        _this.isEmpty$ = _this.state$.pipe(store_1.select(function (stack) { return stack.length === 0; }));
        return _this;
    }
    Stack.prototype.push = function (data) {
        this.dispatch(new actions_1.Push(data));
    };
    Stack.prototype.pop = function () {
        this.dispatch(new actions_1.Pop());
    };
    Stack.prototype.clear = function () {
        this.dispatch(new actions_1.Clear());
    };
    return Stack;
}(store_1.Store));
exports.Stack = Stack;
