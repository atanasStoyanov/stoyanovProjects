import controllers from '../controllers/index.js';

const app = Sammy('#root', function () {

    this.use('Handlebars', 'hbs');

    //Home
    this.get('#/home', controllers.home.get.home);

    //User
    this.get('#/user/login', controllers.user.get.login);
    this.get('#/user/register', controllers.user.get.register);

    this.post('#/user/login', controllers.user.post.login);
    this.post('#/user/register', controllers.user.post.register);
    this.get('#/user/logout', controllers.user.get.logout);

    //Entity
    this.get('#/entity/dashboard', controllers.entity.get.dashboard);
    this.get('#/entity/create', controllers.entity.get.create);
    this.get('#/entity/details/:entityId', controllers.entity.get.details);
    this.get('#/entity/close/:entityId', controllers.entity.del.close);
    this.get('#/entity/like/:entityId', controllers.entity.put.like);
    this.get('#/entity/edit/:entityId', controllers.entity.get.edit);

    // this.get('#/user/profile', controllers.user.get.profile);

    this.post('#/entity/create', controllers.entity.post.create);
    // this.post('#/entity/comment/:entityId', controllers.entity.put.comment);
    this.post('#/entity/edit/:entityId', controllers.entity.put.edit);



});

(() => {
    app.run('#/home');
})();