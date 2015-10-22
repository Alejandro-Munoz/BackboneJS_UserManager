/**
 * Created by Alejandro on 10/19/2015.
 */
$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
    options.url = 'http://backbone-beginner.herokuapp.com' + options.url;
});

var Users = Backbone.Collection.extend({
    url: '/users'
});

