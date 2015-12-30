import Sequelize from 'sequelize';

import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql';

var sequelize = new Sequelize('postgres://localhost/starwars');

// Sequelize
let User = sequelize.define('users', {
  name : {type : Sequelize.STRING},
  species : {type : Sequelize.STRING},
  gender : {type : Sequelize.STRING},
  birthyear : {type : Sequelize.STRING},
  homeworld : {type : Sequelize.STRING}
});

User.sync();
User.belongsToMany(User, {through: 'friends_table', as: 'friends'});

//GraphQL
let userType = new GraphQLObjectType({
    name: 'user', //TODO: Force user to give same name as table name
    description: 'this is the user type',
    fields : ()=>({
      'name' : {type: GraphQLString},
      'species' : {type: GraphQLString},
      'gender' : {type: GraphQLString},
      'birthyear' : {type: GraphQLString},
      'homeworld' : {type: GraphQLString},
      'friends' : {
        type: new GraphQLList(userType),
        description: 'Returns friends of the user. Returns empty array if user has no friends',
        resolve: (root)=> {
          return User.findOne({where: {name : root.name}})
            .then(function(user){
                return user.getFriends();
            })
        }
      }
    })
});

let Query = new GraphQLObjectType({
  name: 'query',
  description: 'this is the root query',
  fields: {
    getUser: {
      type: userType,
      description: 'get user object with provided name',
      args: {
        'name' : {type: GraphQLString},
        'species' : {type: GraphQLString},
        'gender' : {type: GraphQLString},
        'birthyear' : {type: GraphQLString},
        'homeworld' : {type: GraphQLString},
      },
      resolve: (root, args)=>{
        return User
          .findOne({
            where: args
          })
      }
    },
    getUsers: {
      type: new GraphQLList(userType),
      description: 'get user object with provided name',
      args: {
        'name' : {type: GraphQLString},
        'species' : {type: GraphQLString},
        'gender' : {type: GraphQLString},
        'birthyear' : {type: GraphQLString},
        'homeworld' : {type: GraphQLString},
      },
      resolve: (root, args)=>{
        return User
          .findAll({
            where: args
          })
      }
    }
  }
});

let Mutation = new GraphQLObjectType({
  name: 'mutation',
  description: 'this is the root mutation',
  fields: {
    addUser:{
      type: userType,
      args: {
        'name' : {type: GraphQLString},
        'species' : {type: GraphQLString},
        'gender' : {type: GraphQLString},
        'birthyear' : {type: GraphQLString},
        'homeworld' : {type: GraphQLString},
      },
      description: 'returns user object',
      resolve: (root,{name, species, gender, birthyear, homeworld})=>{
      //add to database
      //database returns userobject added
      var data;
      return User
        .findOrCreate({
          where: {
            'name' : {type: GraphQLString},
            'species' : {type: GraphQLString},
            'gender' : {type: GraphQLString},
            'birthyear' : {type: GraphQLString},
            'homeworld' : {type: GraphQLString},
          },
          defaults:{
            //age: age,
          }
        }).spread(function(user){return user}); //why spread instead of then?
    }
    },
    updateUser:{
      type: userType,
      description: 'finds user of Name, and updates his/her Age',
      args:{
        'name' : {type: GraphQLString},
        'species' : {type: GraphQLString},
        'gender' : {type: GraphQLString},
        'birthyear' : {type: GraphQLString},
        'homeworld' : {type: GraphQLString},
      },
      resolve: (root,{name, species, gender, birthyear, homeworld})=>{
        User.update(
          {age: age},
          {
            where : {
              name : name
            }
          }
        )
      }
    },
    deleteUser:{
      type: userType,
      description: 'finds user of Name and removes user object from the database',
      args:{
        'name' : {type: GraphQLString},
        'species' : {type: GraphQLString},
        'gender' : {type: GraphQLString},
        'birthyear' : {type: GraphQLString},
        'homeworld' : {type: GraphQLString},
      },
      resolve: (root, {name})=>{
        return User.destroy({
            where: {
              'name' : {type: GraphQLString},
              'species' : {type: GraphQLString},
              'gender' : {type: GraphQLString},
              'birthyear' : {type: GraphQLString},
              'homeworld' : {type: GraphQLString},
            }
          })
      }
    },
    addFriend:{
      type: GraphQLString,
      description: 'adds friendship between 2 users',
      args:{
        user1: {type: GraphQLString},
        user2: {type: GraphQLString}
      },
      resolve: (root, {user1, user2})=>{
        User.findOne({
            where: {
              name: user1
            }
          }).then(function(userone, created){
            User.findOne({
              where: {
                name: user2
              }
            }).then(function(usertwo, created){
              userone.addFriend(usertwo);
              usertwo.addFriend(userone);
            })
          });
      }
    },
    removeFriend:{
      type: GraphQLString,
      description: 'remove friendship between 2 users',
      args:{
        user1: {type: GraphQLString},
        user2: {type: GraphQLString}
      },
      resolve: (root, {user1, user2})=>{
        User.findOne({
            where: {
              name: user1
            }
          }).then(function(userone, created){
            User.findOne({
              where: {
                name: user2
              }
            }).then(function(usertwo, created){
              userone.removeFriend(usertwo);
              usertwo.removeFriend(userone);
            })
          });
      }
    }
  }
});

let schema = new GraphQLSchema({
   query : Query,
   mutation : Mutation
});

module.exports = schema;
