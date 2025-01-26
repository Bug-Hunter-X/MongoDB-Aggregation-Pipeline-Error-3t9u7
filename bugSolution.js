```javascript
//Corrected aggregation pipeline
db.collection.aggregate([
  {$match: { /* filter criteria */ }},
  {$group: {_id: "$fieldName", sum: {$sum: '$anotherFieldName'}}}, //Corrected field name and usage of $sum operator
  {$sort: {sum: -1}},
  {$limit: 10}
]);
```