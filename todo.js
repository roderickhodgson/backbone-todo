$(function() {

    // MODELS //
    //Project model
    Project = Backbone.Model.extend({
        initialize: function() {
            alert(this.get('name'));
        }
    });

    ProjectList = Backbone.Collection.extend({
        model: Project
    });

    //a simple test
    var p = new Project({"name":"test"});

});
