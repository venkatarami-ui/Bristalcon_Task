"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var CalculatorComponent = (function () {
    function CalculatorComponent() {
        this.operation = ['', '', ''];
        this.display = '';
        this.subDisplay = '';
        this.activeBuildingNumber = '';
    }
    CalculatorComponent.prototype.buildNumber = function (num) {
        this.activeBuildingNumber += num;
        // if operator is defined, set second variable
        if (this.operation[1].length) {
            this.operation[2] = this.activeBuildingNumber;
        }
        else {
            this.operation[0] = this.activeBuildingNumber;
            this.subDisplay = '';
        }
        this.renderDisplay();
    };
    // render display
    CalculatorComponent.prototype.renderDisplay = function () {
        this.display = this.operation.join(' ');
    };
    //
    CalculatorComponent.prototype.selectOperator = function (operator) {
        if (!this.operation[0].length) {
            this.displayError();
            this.subDisplay = 'Enter number before operation';
            return;
        }
        this.operation[1] = operator;
        this.activeBuildingNumber = '';
        this.renderDisplay();
    };
    CalculatorComponent.prototype.showResult = function () {
        if (this.confirmInputs()) {
            var val = this.calculateResult();
            this.display = '' + val;
            this.subDisplay = this.operation.join(' ');
            this.resetOperation();
        }
    };
    CalculatorComponent.prototype.resetOperation = function () {
        this.operation = ['', '', ''];
        this.activeBuildingNumber = '';
    };
    CalculatorComponent.prototype.displayError = function () {
        this.display = 'Error!';
    };
    CalculatorComponent.prototype.confirmInputs = function () {
        if (!this.operation[0].length) {
            this.displayError();
            this.subDisplay = 'Enter First Number';
            return false;
        }
        else if (!this.operation[1].length) {
            this.displayError();
            this.subDisplay = 'Enter Operator';
            return false;
        }
        else if (!this.operation[1].length) {
            this.displayError();
            this.subDisplay = 'Enter Second Number';
            return false;
        }
        return true;
    };
    CalculatorComponent.prototype.calculateResult = function () {
        switch (this.operation[1]) {
            case '*':
                return parseFloat(this.operation[0]) * parseFloat(this.operation[2]);
            case "+":
                return parseFloat(this.operation[0]) + parseFloat(this.operation[2]);
            case "-":
                return parseFloat(this.operation[0]) - parseFloat(this.operation[2]);
        }
    };
    return CalculatorComponent;
}());
CalculatorComponent = __decorate([
    core_1.Component({
        selector: 'my-calculator',
        templateUrl: './calculator.component.html',
        styleUrls: ['./calculator.component.css']
    })
], CalculatorComponent);
exports.CalculatorComponent = CalculatorComponent;
//# sourceMappingURL=calculator.component.js.map