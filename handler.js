'use strict';

module.exports.hello = (event, context, callback) => {
	let appStage = process.env.APP_STAGE
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Current lambda function env ${appStage}`,
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
