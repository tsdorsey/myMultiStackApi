import AWS from 'aws-sdk';

export function createPing(ip) {
  let dynamodb = new AWS.DynamoDB();

  let params = {
    Item: {
      ip: {
        S: ip,
      },
      when: {
        N: Date.now().toString(),
      },
    },
    TableName: process.env['pingsTableName'],
  };

  return dynamodb.putItem(params).promise();
}

export function getPings(ip) {
  let dynamodb = new AWS.DynamoDB();

  let params = {
    ExpressionAttributeValues: {
      ':v1': {
        S: ip,
      },
    },
    ExpressionAttributeNames: {
      '#w': 'when',
    },
    KeyConditionExpression: 'ip = :v1',
    ProjectionExpression: '#w',
    TableName: process.env['pingsTableName'],
  };

  return dynamodb
    .query(params)
    .promise()
    .then(response => response.Items.map(item => Number(item.when.N)));
}
