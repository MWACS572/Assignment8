let bankAccount: { money: number; deposit(value: any): void; } = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};

let myself: { name: string; bankAccount: { money: number; deposit(value: any): void; }; hobbies: string[]; }
    = {
        name: "Assad",
        bankAccount: bankAccount,
        hobbies: ["Violine", "Cooking"]
    };

myself.bankAccount.deposit(3000);
console.log(myself);