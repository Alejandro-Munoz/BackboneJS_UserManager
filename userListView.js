/**
 * Created by Alejandro on 10/19/2015.
 */
var UserList = Backbone.View.extend({
    el : '.page',
    render : function () {
        var users = new Users();
        var that = this;
        users.fetch({
            success: function (users) {
                var template = _.template($('#user-list-template').html());
                that.$el.html(template({data: users.models}));
            }
        })
    }
});
var userList = new UserList();