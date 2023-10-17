const Transaction = require('../models/transaction');

exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.render('index', { transactions });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
};

exports.addTransaction = async (req, res) => {
    try {
        const transaction = new Transaction(req.body);
        await transaction.save();
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
};
