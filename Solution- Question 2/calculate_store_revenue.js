db.sales.aggregate([
  // Step 1: Unwind the items array
  {
    $unwind: "$items"
  },
  // Step 2: Add a month field by extracting year and month from the date
  {
    $addFields: {
      month: {
        $dateToString: { format: "%Y-%m", date: "$date" }
      }
    }
  },
  // Step 3: Group by store and month, calculate total revenue and sum of prices and quantities
  {
    $group: {
      _id: { store: "$store", month: "$month" },
      totalRevenue: { $sum: { $multiply: ["$items.quantity", "$items.price"] } },
      totalQuantity: { $sum: "$items.quantity" },
      totalPrice: { $sum: "$items.price" }
    }
  },
  // Step 4: Calculate the average price
  {
    $addFields: {
      averagePrice: { $divide: ["$totalPrice", "$totalQuantity"] }
    }
  },
  // Step 5: Project the desired fields and structure the output
  {
    $project: {
      _id: 0,
      store: "$_id.store",
      month: "$_id.month",
      totalRevenue: 1,
      averagePrice: 1
    }
  },
  // Step 6: Sort the result by store and month in ascending order
  {
    $sort: { store: 1, month: 1 }
  }
])