import express from 'express';
import {graphql} from 'graphql';
import Sequelize from 'sequelize';
import bodyParser from 'body-parser';
import Schema from './data/schema';

let app = express();

app.use(express.static('client'));
app.use(bodyParser.urlencoded());

async function graphQLHandler(req, res){
  const {query, variables = {}} = req.body;
  console.log(query, variables);
  const result = await graphql(
    Schema,
    query,
    {},
    variables
  );
  res.send(result);
}

app.use('/', graphQLHandler);

app.listen(process.env.PORT ||  3000, function(){
  console.log('Server is listening on port 3000');
});

module.exports = app;
