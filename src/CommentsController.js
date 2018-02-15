const Router = require('express').Router();
const db = require('./dataStore/db');
const comment = require('./dataStore/CommentSchema');
const {baseUrl} = require('./config');


Router.get('/', async (req, res) => {
  const allComments = await getAllComments();

  if (allComments.length) return res.status(200).send(allComments);
  return res.status(500).send("There was a problem retrieving comments.");
});

Router.post('/', async (req, res) => {
  const allComments = await getAllComments();

  const lastComment = allComments[allComments.length - 1];

  const newComment = Object.assign({}, req.body, {id: lastComment.id + 1});

  comment.create(newComment, (error, comment) => {
    if (error) return res.status(500).send("There was an error when attempting to add the new comment.");
    return res.status(201).json(newComment);
  });
});

Router.get('/:id', (req, res) => {
  const id = checkForValidId(req.params.id);

  comment.find({id}, (error, comment) => {
    if (comment.length) return res.status(200).send(comment);
    return res.status(404).send("comment not found.");
    
  });
});

Router.put('/:id', (req, res) => {
  const id = checkForValidId(req.params.id);

  comment.findOne({id}, (error, comment) => {
    if (error) return res.status(404).send("comment not found.");
    else if (comment) { 
      updateComment(comment, req, res);
    }
  });
});

async function getAllComments() {  
  const allComments = await comment.find({}, (error, comments) => {
    if (error) {
      console.log('error: ', error);
      throw error;
    } else {
      return comments;
    }
  });
  
  return allComments;
}

function checkForValidId(id) {
  return parseInt(id) || 0;// checks to see if left side is truthy, if yes return it, otherwise return what is on the right
}

function updateComment(comment, req, res) {
  comment.findByIdAndUpdate(comment._id, req.body, {new: true}, (error, comment) => {
    if (error) return res.status(500).send("Unable to update comment.");
    res.status(200).send(comment);
  });
}

module.exports = Router;