const transaction = [
  {
    user_id: 1,
    transaction: [
      { id: 1, status: "selesai" },
      { id: 2, status: "proses" },
    ],
  },
  {
    user_id: 2,
    transaction: [
      { id: 1, status: "selesai" },
      { id: 2, status: "batal" },
    ],
  },
];

const detailTransaction = [
  { id: 1, productName: "kopi", qty: 3, totalAmount: 3000 },
  { id: 2, productName: "kopi manis", qty: 2, totalAmount: 3000 },
];

function processTransaction(details, callback) {
  setTimeout(() => {
    const processedDetails = details.map((detail) => {
      const { id, productName, qty, totalAmount } = detail;
      return {
        id,
        productName,
        qty,
        totalAmount,
      };
    });
    callback(null, processedDetails);
  }, 1000);
}

function displayTransactionDetails(error, details) {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Transaction details:", details);
  }
}

processTransaction(detailTransaction, displayTransactionDetails);
