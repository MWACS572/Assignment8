"use strict";
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Assad",
    bankAccount: bankAccount,
    hobbies: ["Violine", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
