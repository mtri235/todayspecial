define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = 'speciala';
            config.map([
                { route: ['', 'eat'], name: 'eat', moduleId: 'eat', title: 'eat', nav: true },
                { route: 'cook', name: 'cook', moduleId: 'cook', title: 'cook', nav: true },
                { route: 'me', name: 'me', moduleId: 'me', title: 'me', nav: true }
            ]);
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQTtRQUFBO1FBWUEsQ0FBQztRQVZDLDZCQUFlLEdBQWYsVUFBZ0IsTUFBMkIsRUFBRSxNQUFjO1lBQ3pELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ1QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRTtnQkFDNUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7Z0JBQzFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUMsSUFBSSxFQUFFO2FBQ2xFLENBQUMsQ0FBQztRQUVMLENBQUM7UUFDSCxVQUFDO0lBQUQsQ0FaQSxBQVlDLElBQUE7SUFaWSxrQkFBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdXRlckNvbmZpZ3VyYXRpb24sIFJvdXRlcn0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgcm91dGVyOiBSb3V0ZXI7XG4gIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24sIHJvdXRlcjogUm91dGVyKTogdm9pZHtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICBjb25maWcudGl0bGUgPSAnc3BlY2lhbGEnO1xuICAgIGNvbmZpZy5tYXAoW1xuICAgICAgeyByb3V0ZTogWycnLCAnZWF0J10sIG5hbWU6ICdlYXQnLCBtb2R1bGVJZDogJ2VhdCcsIHRpdGxlOidlYXQnLCBuYXY6IHRydWUgfSxcbiAgICAgIHsgcm91dGU6ICdjb29rJywgbmFtZTogJ2Nvb2snLCBtb2R1bGVJZDogJ2Nvb2snLCB0aXRsZTonY29vaycsIG5hdjogdHJ1ZSB9LFxuICAgICAgeyByb3V0ZTogJ21lJywgbmFtZTogJ21lJywgbW9kdWxlSWQ6ICdtZScsIHRpdGxlOidtZScsIG5hdjp0cnVlIH1cbiAgICBdKTtcblxuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('cook',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Cook = (function () {
        function Cook() {
        }
        return Cook;
    }());
    exports.Cook = Cook;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFBQTtRQUFrQixDQUFDO1FBQUQsV0FBQztJQUFELENBQWxCLEFBQW1CLElBQUE7SUFBTixvQkFBSSIsImZpbGUiOiJjb29rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvb2t7fSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('eat',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Eat = (function () {
        function Eat() {
        }
        return Eat;
    }());
    exports.Eat = Eat;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVhdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFDQTtRQUFBO1FBQWtCLENBQUM7UUFBRCxVQUFDO0lBQUQsQ0FBbEIsQUFBbUIsSUFBQTtJQUFOLGtCQUFHIiwiZmlsZSI6ImVhdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgY2xhc3MgRWF0IHt9Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('me',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Me = (function () {
        function Me() {
        }
        return Me;
    }());
    exports.Me = Me;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQUE7UUFBZ0IsQ0FBQztRQUFELFNBQUM7SUFBRCxDQUFoQixBQUFpQixJQUFBO0lBQUosZ0JBQUUiLCJmaWxlIjoibWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTWV7fSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNvdXJjZXMvZWxlbWVudHMvc2VnbWVudC10YWIuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiJzcmMifQ==

define("resources/elements/segment-tab", [],function(){});



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RlbHMvY29vay5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6InNyYyJ9

define("models/cook", [],function(){});

define('models/people',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var People = (function () {
        function People() {
        }
        return People;
    }());
    exports.People = People;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9wZW9wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBRUE7UUFBQTtRQUdBLENBQUM7UUFBRCxhQUFDO0lBQUQsQ0FIQSxBQUdDLElBQUE7SUFIWSx3QkFBTSIsImZpbGUiOiJtb2RlbHMvcGVvcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElkZW50aXR5IGZyb20gJy4vaWRlbnRpdHknO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBlb3BsZXtcclxuICAgIGlkZW50aXR5OiBJZGVudGl0eTtcclxuICAgIHJvbGVzOiBzdHJpbmc7XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('models/identification',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Identity = (function () {
        function Identity() {
        }
        return Identity;
    }());
    exports.Identity = Identity;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9pZGVudGlmaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUFBO1FBS0EsQ0FBQztRQUFELGVBQUM7SUFBRCxDQUxBLEFBS0MsSUFBQTtJQUxZLDRCQUFRIiwiZmlsZSI6Im1vZGVscy9pZGVudGlmaWNhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBJZGVudGl0eXtcclxuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gICAgbGFzdE5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBhZGRyZXNzOiBzdHJpbmc7XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('models/dish',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Dish = (function () {
        function Dish() {
        }
        return Dish;
    }());
    exports.default = Dish;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9kaXNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUVBO1FBQUE7UUFPQSxDQUFDO1FBQUQsV0FBQztJQUFELENBUEEsQUFPQyxJQUFBIiwiZmlsZSI6Im1vZGVscy9kaXNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBlcnNvbiBmcm9tICcuL3BlcnNvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNoe1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgaW1hZ2U6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBjb29rOiBQZXJzb247XHJcbiAgICBzZXJ2aW5nOiBOdW1iZXI7XHJcbiAgICBwcmljZTogTnVtYmVyO1xyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('models/person',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Role;
    (function (Role) {
        Role[Role["Cook"] = 1] = "Cook";
        Role[Role["Eater"] = 2] = "Eater";
    })(Role || (Role = {}));
    ;
    var Person = (function () {
        function Person() {
        }
        return Person;
    }());
    exports.default = Person;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9wZXJzb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBRUEsSUFBSyxJQUEyQjtJQUFoQyxXQUFLLElBQUk7UUFBRSwrQkFBUSxDQUFBO1FBQUUsaUNBQVMsQ0FBQTtJQUFDLENBQUMsRUFBM0IsSUFBSSxLQUFKLElBQUksUUFBdUI7SUFBQSxDQUFDO0lBRWpDO1FBQUE7UUFJQSxDQUFDO1FBQUQsYUFBQztJQUFELENBSkEsQUFJQyxJQUFBIiwiZmlsZSI6Im1vZGVscy9wZXJzb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSWRlbnRpdHkgZnJvbSAnLi9pZGVudGl0eSc7XHJcblxyXG5lbnVtIFJvbGV7IENvb2sgPSAxLCBFYXRlciA9IDIgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlcnNvbntcclxuICAgIGlkZW50aXR5OiBJZGVudGl0eTtcclxuICAgIGltYWdlOiBzdHJpbmc7XHJcbiAgICByb2xlczogU2V0PFJvbGU+O1xyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('models/identity',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Identity = (function () {
        function Identity() {
        }
        return Identity;
    }());
    exports.default = Identity;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9pZGVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUFBO1FBS0EsQ0FBQztRQUFELGVBQUM7SUFBRCxDQUxBLEFBS0MsSUFBQSIsImZpbGUiOiJtb2RlbHMvaWRlbnRpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBJZGVudGl0eXtcclxuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gICAgbGFzdE5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBhZGRyZXNzOiBzdHJpbmc7XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <header>\n    <h1>Today Special</h1>\n    <p>Food and Us</p>\n  </header>\n  <nav>\n    <section>\n      <a route-href=\"route: cook\">Cook</a>\n      <a route-href=\"route: eat\">Eat</a>\n    </section>\n    <section>\n      <header><h1>me</h1></header>\n      <a route-href=\"route: me\">Account Details</a>\n      <button>Logout</button>\n    </section>\n  </nav>\n  <router-view></router-view>\n</template>"; });
define('text!cook.html', ['module'], function(module) { module.exports = "<template>\r\n    cook\r\n\r\n</template>"; });
define('text!eat.html', ['module'], function(module) { module.exports = "<template>\r\n    Eat\r\n</template>"; });
define('text!me.html', ['module'], function(module) { module.exports = "<template>\r\nme\r\n\r\n</template>"; });
define('text!resources/elements/segment-tab.html', ['module'], function(module) { module.exports = "<template>\r\n    <ul>\r\n        <li repeat.for=\"link in links\">\r\n            <a href=\"{{ link.url }}\">{{ link.title }}</a>\r\n        </li>\r\n    </ul>\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map