var express = require('express');
var path = require('path'); //had to add
var router = express.Router();
var mongoose = require('mongoose');
var Recipe = require('../models/Recipes.js'); //recipe schema 
var Post = require('../models/Posts.js'); //post(blog) schema 
var User = require('../models/Users.js'); //user schema 

// load index page
router.get('/', function(req, res, next){
  res.render('index', {title: "Get Smokin'"})
});

// all recipe routes below: 

// api route connection
router.get('/api/recipes', function(req, res, next) {
  Recipe.find(function (err, recipes) {
    if (err) return next(err);
    res.json(recipes);
  });
});

// load recipe list order
router.get('/api/recipes/all', function(req, res, next) {
  Recipe.find(function (err, recipes) {
    if (err) return next(err);
    res.render('all', { title: 'All Recipes', recipes:recipes });
  });
});

// load individual detail page
router.get('/api/recipe/:id', function(req, res, next) {
  Recipe.findById(req.params.id, function (err, recipe) {
    if (err) return next(err);
    // res.json(recipe);
    res.render('details', { title: 'Recipe Details', recipe });

  });
});

// load only chicken recipes
router.get('/api/recipes/chicken', function(req, res, next) {
  Recipe.find({recipe_type: "chicken"}).exec(function (err, recipes) {
    if (err) return next(err);
    res.render('all', { title: 'Chicken Recipes', recipes:recipes });
  });
});

// load only beef recipes
router.get('/api/recipes/beef', function(req, res, next) {
  Recipe.find({recipe_type: "beef"}).exec(function (err, recipes) {
    if (err) return next(err);
    res.render('all', { title: 'Beef Recipes', recipes:recipes });
  });
});

// load only pork recipes
router.get('/api/recipes/pork', function(req, res, next) {
  Recipe.find({recipe_type: "pork"}).exec(function (err, recipes) {
    if (err) return next(err);
    res.render('all', { title: 'Pork Recipes', recipes:recipes });
  });
});

// load only fish recipes
router.get('/api/recipes/fish', function(req, res, next) {
  Recipe.find({recipe_type: "fish"}).exec(function (err, recipes) {
    if (err) return next(err);
    res.render('all', { title: 'Fish Recipes', recipes:recipes });
  });
});



// load all blog routes below: 

// api route connection for blog posts
router.get('/api/posts', function(req, res, next) {
  Post.find(function (err, posts) {
    if (err) return next(err);
    res.json(posts);
  });
});

// load blog posts list 
router.get('/api/posts/all', function(req, res, next) {
  Post.find(function (err, posts) {
    if (err) return next(err);
    res.render('blog', { title: 'All Blog Posts', posts:posts });
  });
});

// get recent blog posts
router.get('/api/posts/recent', function(req, res, next) {
  Post.find({postMonth: "december"}).exec(function (err, posts) {
    if (err) return next(err);
    res.render('blog', { title: 'Recent Posts', posts:posts });
  });
});

// get popular blog posts
router.get('/api/posts/popular', function(req, res, next) {
  Post.find({show: "popular"}).exec(function (err, posts) {
    if (err) return next(err);
    res.render('blog', { title: 'Popular Posts', posts:posts });
  });
});

// load individual post page
router.get('/api/post/:id', function(req, res, next) {
  Post.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    // res.json(recipe);
    res.render('post', { title: 'Full Post', post });
  });
});

// create the signup route 
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Sign Up'});
});

// create the user in the database
router.post('/api/user/new', function(req, res, next) {
  User.create(req.body, function (err, user) {
    if (err) return next(err);
    res.redirect('/completed');
  });
});


// get the completed page
// create the signup route 
router.get('/completed', function(req, res, next) {
  res.render('completed', { title: 'Success'});
});

module.exports = router;