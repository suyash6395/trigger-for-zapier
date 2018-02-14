  var url = require ('url');
  var https = require('https');   //important modules
  var path = require('path');

  var arr = [];

  module.exports = {
    key: 'post',
    noun: 'Newpost',
    display: {
    label: 'Post',
    description: 'Triggers when a new post is added.'
    },
    operation: {

  perform: (z,bundle) => {

  const promise = z.request({
  url:'https://siddee.engageexpress.com/api/posts.json',
  method:'GET',
  params:{
      conversation_id:'479364',
      all_post:'T',
      _token:'5dd05770b4dd55c649ec4872e434a1b6',   //session id obtained using postman
      _secret:'a650c9b8c5c1fcbb4f6adde6a5b3b95d0939ad1eb78b4424b4d0f24a2c2949c4', // session hash
      _user_id:'903646',
        },

  headers: {
    'content-type':'application/json'
          },
  });

  return promise.then((response) => {
    z.console.log (response);
    return response["json"]["ms_response"]["posts"]; //moving inside the ms_response to get the array as a result
  });

  }, //z,bundle

  sample: {
   "id": 479364   //sample data
   },

  },
  };
