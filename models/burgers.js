var orm = require("../config/orm.js");

var burger = {
    all: function (callBack) {
        orm.all("burgers", function (res) {
            callBack(res);
        });
    },
    create: function (name, callBack) {
        orm.create("burgers", [
            "burger_name", "devoured"
        ], [
                name, false
            ], callBack);
    },
    update: function (id, callBack) {
        var condition = "id=" + id;
        orm.update("burgers", {
            devoured: true
        }, condition, callBack);
    }
};

module.exports = burger;