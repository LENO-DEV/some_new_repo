const AWS = require('aws-sdk');
AWS.config.region = 'ap-south-1';
const DynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports.functionOne = async (event) => {
  return new Promise((res, rej) => {
    var Params = {
      TableName: 'Project_Data' 
    }
    DynamoDB.scan(Params, (err, data) => {
      if (err) rej(err); :
      else {
        const response = {
          body:   JSON.stringify(data,null)
        }
        res(response);
      }
    });
  });
};