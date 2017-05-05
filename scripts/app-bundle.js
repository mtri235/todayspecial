define('app',["require", "exports", "./services/local-data-source"], function (require, exports, local_data_source_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.dataSource = new local_data_source_1.default();
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFLQTtRQUdFO1lBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLDJCQUFlLEVBQUUsQ0FBQztRQUMxQyxDQUFDO1FBQ0QsNkJBQWUsR0FBZixVQUFnQixNQUEyQixFQUFFLE1BQWM7WUFDekQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckIsTUFBTSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7WUFDMUIsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDVCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFO2dCQUM1RSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRTtnQkFDMUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBQyxJQUFJLEVBQUU7YUFDbEUsQ0FBQyxDQUFDO1FBRUwsQ0FBQztRQUNILFVBQUM7SUFBRCxDQWhCQSxBQWdCQyxJQUFBO0lBaEJZLGtCQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um91dGVyQ29uZmlndXJhdGlvbiwgUm91dGVyfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kYXRhLXNvdXJjZSc7XG5pbXBvcnQgTG9jYWxEYXRhU291cmNlIGZyb20gJy4vc2VydmljZXMvbG9jYWwtZGF0YS1zb3VyY2UnO1xuaW1wb3J0IERpc2ggZnJvbSAnLi9tb2RlbHMvZGlzaCc7XG5cbmV4cG9ydCBjbGFzcyBBcHAge1xuICByb3V0ZXI6IFJvdXRlcjtcbiAgZGF0YVNvdXJjZTogRGF0YVNvdXJjZTxEaXNoPjtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTG9jYWxEYXRhU291cmNlKCk7XG4gIH1cbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZzogUm91dGVyQ29uZmlndXJhdGlvbiwgcm91dGVyOiBSb3V0ZXIpOiB2b2lke1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIGNvbmZpZy50aXRsZSA9ICdzcGVjaWFsYSc7XG4gICAgY29uZmlnLm1hcChbXG4gICAgICB7IHJvdXRlOiBbJycsICdlYXQnXSwgbmFtZTogJ2VhdCcsIG1vZHVsZUlkOiAnZWF0JywgdGl0bGU6J2VhdCcsIG5hdjogdHJ1ZSB9LFxuICAgICAgeyByb3V0ZTogJ2Nvb2snLCBuYW1lOiAnY29vaycsIG1vZHVsZUlkOiAnY29vaycsIHRpdGxlOidjb29rJywgbmF2OiB0cnVlIH0sXG4gICAgICB7IHJvdXRlOiAnbWUnLCBuYW1lOiAnbWUnLCBtb2R1bGVJZDogJ21lJywgdGl0bGU6J21lJywgbmF2OnRydWUgfVxuICAgIF0pO1xuXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('cook',["require", "exports", "./models/dish", "./services/local-data-source", "aurelia-framework"], function (require, exports, dish_1, local_data_source_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Cook = (function () {
        function Cook(dataSource) {
            var _this = this;
            this.dishes = new Map();
            this.newDish = new dish_1.default(null, null, null, null, null, 0, 0);
            var self = this;
            this.userEmail = "nick@home.com";
            this.dataSource = dataSource;
            this.dataSource.items
                .filter(function (dish) { return dish.cook.identity.email == _this.userEmail; })
                .subscribe(function (dish) { return self.dishes.set(dish.id, dish); });
        }
        Cook.prototype.createNewDish = function () {
            this.dataSource.add(this.newDish);
        };
        return Cook;
    }());
    Cook = __decorate([
        aurelia_framework_1.inject(local_data_source_1.default),
        __metadata("design:paramtypes", [Object])
    ], Cook);
    exports.Cook = Cook;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBTUEsSUFBYSxJQUFJO1FBTWIsY0FBWSxVQUE0QjtZQUF4QyxpQkFPQztZQVpNLFdBQU0sR0FBc0IsSUFBSSxHQUFHLEVBQWdCLENBQUM7WUFDcEQsWUFBTyxHQUFTLElBQUksY0FBSSxDQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBSzVELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztZQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQztZQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUs7aUJBQ2hCLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxLQUFJLENBQUMsU0FBUyxFQUExQyxDQUEwQyxDQUFDO2lCQUMxRCxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUM7UUFDM0QsQ0FBQztRQUVELDRCQUFhLEdBQWI7WUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUNMLFdBQUM7SUFBRCxDQWxCQSxBQWtCQyxJQUFBO0lBbEJZLElBQUk7UUFEaEIsMEJBQU0sQ0FBQywyQkFBZSxDQUFDOztPQUNYLElBQUksQ0FrQmhCO0lBbEJZLG9CQUFJIiwiZmlsZSI6ImNvb2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlzaCBmcm9tICcuL21vZGVscy9kaXNoJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4vc2VydmljZXMvZGF0YS1zb3VyY2UnO1xyXG5pbXBvcnQgTG9jYWxEYXRhU291cmNlIGZyb20gJy4vc2VydmljZXMvbG9jYWwtZGF0YS1zb3VyY2UnO1xyXG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnOyBcclxuXHJcbkBpbmplY3QoTG9jYWxEYXRhU291cmNlKVxyXG5leHBvcnQgY2xhc3MgQ29va3tcclxuICAgIHB1YmxpYyBkaXNoZXM6IE1hcDxzdHJpbmcsIERpc2g+ID0gbmV3IE1hcDxzdHJpbmcsIERpc2g+KCk7XHJcbiAgICBwdWJsaWMgbmV3RGlzaDogRGlzaCA9IG5ldyBEaXNoKG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCwgMCwgMCk7XHJcbiAgICBwcml2YXRlIHVzZXJFbWFpbDogc3RyaW5nO1xyXG4gICAgZGF0YVNvdXJjZTogRGF0YVNvdXJjZTxEaXNoPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhU291cmNlOiBEYXRhU291cmNlPERpc2g+KXtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy51c2VyRW1haWwgPSBcIm5pY2tAaG9tZS5jb21cIjtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBkYXRhU291cmNlO1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5pdGVtc1xyXG4gICAgICAgICAgICAuZmlsdGVyKGRpc2ggPT4gZGlzaC5jb29rLmlkZW50aXR5LmVtYWlsID09IHRoaXMudXNlckVtYWlsKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRpc2ggPT4gc2VsZi5kaXNoZXMuc2V0KGRpc2guaWQsIGRpc2gpKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVOZXdEaXNoKCl7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmFkZCh0aGlzLm5ld0Rpc2gpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('eat',["require", "exports", "./services/local-data-source", "aurelia-framework"], function (require, exports, local_data_source_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Eat = (function () {
        function Eat(dataSource) {
            this.dishes = new Map();
            this.skip = 0;
            this.take = 10;
            var self = this;
            var dataSource = dataSource;
            dataSource.items.subscribe(function (dish) { return self.dishes.set(dish.id, dish); });
        }
        return Eat;
    }());
    Eat = __decorate([
        aurelia_framework_1.inject(local_data_source_1.default),
        __metadata("design:paramtypes", [Object])
    ], Eat);
    exports.Eat = Eat;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVhdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFPQSxJQUFhLEdBQUc7UUFLWixhQUFZLFVBQTRCO1lBSnhDLFdBQU0sR0FBdUIsSUFBSSxHQUFHLEVBQWdCLENBQUM7WUFFckQsU0FBSSxHQUFXLENBQUMsQ0FBQztZQUNqQixTQUFJLEdBQVcsRUFBRSxDQUFDO1lBRWQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2hCLElBQUksVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUM1QixVQUFVLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQztRQUN2RSxDQUFDO1FBQ0wsVUFBQztJQUFELENBVkEsQUFVQyxJQUFBO0lBVlksR0FBRztRQURmLDBCQUFNLENBQUMsMkJBQWMsQ0FBQzs7T0FDVixHQUFHLENBVWY7SUFWWSxrQkFBRyIsImZpbGUiOiJlYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlzaCBmcm9tICcuL21vZGVscy9kaXNoJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4vc2VydmljZXMvZGF0YS1zb3VyY2UnO1xyXG5pbXBvcnQgTG9jYWxEYXRhU3RvcmUgZnJvbSAnLi9zZXJ2aWNlcy9sb2NhbC1kYXRhLXNvdXJjZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeCc7XHJcbmltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7IFxyXG5cclxuQGluamVjdChMb2NhbERhdGFTdG9yZSlcclxuZXhwb3J0IGNsYXNzIEVhdCB7XHJcbiAgICBkaXNoZXM6IE1hcDxzdHJpbmcsIERpc2g+ID0gIG5ldyBNYXA8c3RyaW5nLCBEaXNoPigpO1xyXG4gICAgcXVlcnk6IHN0cmluZztcclxuICAgIHNraXA6IE51bWJlciA9IDA7XHJcbiAgICB0YWtlOiBOdW1iZXIgPSAxMDtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGFTb3VyY2U6IERhdGFTb3VyY2U8RGlzaD4pe1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgZGF0YVNvdXJjZSA9IGRhdGFTb3VyY2U7XHJcbiAgICAgICAgZGF0YVNvdXJjZS5pdGVtcy5zdWJzY3JpYmUoZGlzaCA9PiBzZWxmLmRpc2hlcy5zZXQoZGlzaC5pZCwgZGlzaCkpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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

define('models/dish',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Dish = (function () {
        function Dish(id, name, image, description, cook, serving, price) {
            this.id = id;
            this.name = name;
            this.image = image;
            this.description = description;
            this.cook = cook;
            this.serving = serving;
            this.price = price;
        }
        Dish.prototype.with = function (cook) {
            return new Dish(this.id, this.name, this.image, this.description, cook, this.serving, this.price);
        };
        return Dish;
    }());
    exports.default = Dish;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9kaXNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUVBO1FBU0ksY0FBWSxFQUFVLEVBQUUsSUFBWSxFQUFFLEtBQWEsRUFBRSxXQUFtQixFQUFFLElBQVksRUFBRSxPQUFlLEVBQUUsS0FBWTtZQUNqSCxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1lBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUM7UUFFTSxtQkFBSSxHQUFYLFVBQVksSUFBWTtZQUNwQixNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEcsQ0FBQztRQUNMLFdBQUM7SUFBRCxDQXRCQSxBQXNCQyxJQUFBIiwiZmlsZSI6Im1vZGVscy9kaXNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGVyc29uIH0gZnJvbSAnLi9wZXJzb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzaHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGltYWdlOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgY29vazogUGVyc29uO1xyXG4gICAgc2VydmluZzogTnVtYmVyO1xyXG4gICAgcHJpY2U6IE51bWJlcjtcclxuICAgIGlkOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBpbWFnZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nLCBjb29rOiBQZXJzb24sIHNlcnZpbmc6IE51bWJlciwgcHJpY2U6TnVtYmVyKXtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuY29vayA9IGNvb2s7XHJcbiAgICAgICAgdGhpcy5zZXJ2aW5nID0gc2VydmluZztcclxuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdpdGgoY29vazogUGVyc29uKXtcclxuICAgICAgICByZXR1cm4gbmV3IERpc2godGhpcy5pZCwgdGhpcy5uYW1lLCB0aGlzLmltYWdlLCB0aGlzLmRlc2NyaXB0aW9uLCBjb29rLCB0aGlzLnNlcnZpbmcsIHRoaXMucHJpY2UpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('models/identity',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Identity = (function () {
        function Identity(firstName, lastName, email, address) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.address = address;
        }
        return Identity;
    }());
    exports.default = Identity;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9pZGVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQU1JLGtCQUFZLFNBQWlCLEVBQUUsUUFBZ0IsRUFBRSxLQUFhLEVBQUUsT0FBZTtZQUMzRSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUMzQixDQUFDO1FBQ0wsZUFBQztJQUFELENBWkEsQUFZQyxJQUFBIiwiZmlsZSI6Im1vZGVscy9pZGVudGl0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIElkZW50aXR5e1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgZW1haWw6IHN0cmluZztcclxuICAgIHB1YmxpYyByZWFkb25seSBhZGRyZXNzOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcsIGFkZHJlc3M6IHN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWU7XHJcbiAgICAgICAgdGhpcy5sYXN0TmFtZSA9IGxhc3ROYW1lO1xyXG4gICAgICAgIHRoaXMuZW1haWwgPSBlbWFpbDsgXHJcbiAgICAgICAgdGhpcy5hZGRyZXNzID0gYWRkcmVzcztcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('models/person',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Role;
    (function (Role) {
        Role[Role["Cook"] = 1] = "Cook";
        Role[Role["Eater"] = 2] = "Eater";
    })(Role = exports.Role || (exports.Role = {}));
    ;
    var Person = (function () {
        function Person(identity, image, roles) {
            this.identity = identity;
            this.image = image;
            this.roles = roles;
        }
        return Person;
    }());
    exports.Person = Person;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9wZXJzb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBRUEsSUFBWSxJQUEyQjtJQUF2QyxXQUFZLElBQUk7UUFBRSwrQkFBUSxDQUFBO1FBQUUsaUNBQVMsQ0FBQTtJQUFDLENBQUMsRUFBM0IsSUFBSSxHQUFKLFlBQUksS0FBSixZQUFJLFFBQXVCO0lBQUEsQ0FBQztJQUV4QztRQUtJLGdCQUFZLFFBQWlCLEVBQUUsS0FBYSxFQUFFLEtBQWdCO1lBQzFELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBRSxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUM7UUFDTCxhQUFDO0lBQUQsQ0FWQSxBQVVDLElBQUE7SUFWWSx3QkFBTSIsImZpbGUiOiJtb2RlbHMvcGVyc29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElkZW50aXR5IGZyb20gJy4vaWRlbnRpdHknO1xyXG5cclxuZXhwb3J0IGVudW0gUm9sZXsgQ29vayA9IDEsIEVhdGVyID0gMiB9O1xyXG5cclxuZXhwb3J0IGNsYXNzIFBlcnNvbntcclxuICAgIHB1YmxpYyByZWFkb25seSBpZGVudGl0eTogSWRlbnRpdHk7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgaW1hZ2U6IHN0cmluZztcclxuICAgIHB1YmxpYyByZWFkb25seSByb2xlczogU2V0PFJvbGU+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkZW50aXR5OklkZW50aXR5LCBpbWFnZTogc3RyaW5nLCByb2xlczogU2V0PFJvbGU+KXtcclxuICAgICAgICB0aGlzLmlkZW50aXR5ID0gaWRlbnRpdHk7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICAgICAgIHRoaXMuIHJvbGVzID0gcm9sZXM7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('services/data-source-interface',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlcy9kYXRhLXNvdXJjZS1pbnRlcmZhY2UuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('services/local-data-source',["require", "exports", "../models/dish", "../models/person", "../models/identity", "rx"], function (require, exports, dish_1, person_1, identity_1, rx_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LocalDataSource = (function () {
        function LocalDataSource() {
            this.nick = new person_1.Person(new identity_1.default("Nickyboo", "Dovey", "nick@home.com", "Somewhere in the world"), "http://google.com/cat", new Set().add(person_1.Role.Cook));
            var tri = new person_1.Person(new identity_1.default("Trickydoo", "doNickyboo", "tri@home.com", "Somewhere in the world"), "http://google.com/cat", new Set().add(person_1.Role.Cook));
            this.people = rx_1.Observable.from([tri, this.nick]);
            this.subject = new rx_1.Subject();
            this.items = rx_1.Observable.from([
                new dish_1.default("1", "Chicken dish", "http://data.whicdn.com/images/11976179/original.jpg", "Yummy", tri, 15, 15.5),
                new dish_1.default("2", "Duck dish", "http://data.whicdn.com/images/11976179/original.jpg", "Yummy", tri, 15, 15.5),
                new dish_1.default("3", "Beef dish", "http://data.whicdn.com/images/11976179/original.jpg", "Yummy", tri, 15, 15.5),
                new dish_1.default("4", "Terrible dish", "http://occ144datkn3vrjlq7r63p19.wpengine.netdna-cdn.com/wp-content/uploads/2014/06/dog-1.jpg", "ergh..", this.nick, 15, 15.5),
            ]).concat(this.subject);
        }
        LocalDataSource.prototype.add = function (item) {
            this.subject.next(item.with(this.nick));
        };
        return LocalDataSource;
    }());
    exports.default = LocalDataSource;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xvY2FsLWRhdGEtc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQU1BO1FBS0k7WUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksZUFBTSxDQUNsQixJQUFJLGtCQUFRLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsd0JBQXdCLENBQUMsRUFDNUUsdUJBQXVCLEVBQ3ZCLElBQUksR0FBRyxFQUFRLENBQUMsR0FBRyxDQUFDLGFBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRXBDLElBQUksR0FBRyxHQUFHLElBQUksZUFBTSxDQUNoQixJQUFJLGtCQUFRLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsd0JBQXdCLENBQUMsRUFDakYsdUJBQXVCLEVBQ3ZCLElBQUksR0FBRyxFQUFRLENBQUMsR0FBRyxDQUFDLGFBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRXBDLElBQUksQ0FBQyxNQUFNLEdBQUcsZUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUVoRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksWUFBTyxFQUFRLENBQUM7WUFFbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxlQUFVLENBQUMsSUFBSSxDQUFDO2dCQUN6QixJQUFJLGNBQUksQ0FBQyxHQUFHLEVBQUMsY0FBYyxFQUFFLHFEQUFxRCxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQztnQkFDM0csSUFBSSxjQUFJLENBQUMsR0FBRyxFQUFDLFdBQVcsRUFBRSxxREFBcUQsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUM7Z0JBQ3hHLElBQUksY0FBSSxDQUFDLEdBQUcsRUFBQyxXQUFXLEVBQUUscURBQXFELEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDO2dCQUN4RyxJQUFJLGNBQUksQ0FBQyxHQUFHLEVBQUMsZUFBZSxFQUFFLDhGQUE4RixFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUM7YUFDL0osQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUVELDZCQUFHLEdBQUgsVUFBSSxJQUFVO1lBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBQ0wsc0JBQUM7SUFBRCxDQS9CQSxBQStCQyxJQUFBIiwiZmlsZSI6InNlcnZpY2VzL2xvY2FsLWRhdGEtc291cmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpc2ggZnJvbSAnLi4vbW9kZWxzL2Rpc2gnO1xyXG5pbXBvcnQgeyBQZXJzb24sIFJvbGUgfSBmcm9tICcuLi9tb2RlbHMvcGVyc29uJztcclxuaW1wb3J0IElkZW50aXR5IGZyb20gJy4uL21vZGVscy9pZGVudGl0eSc7XHJcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeCc7XHJcbmltcG9ydCB7IERhdGFTb3VyY2V9IGZyb20gJy4vZGF0YS1zb3VyY2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYWxEYXRhU291cmNle1xyXG4gICAgcHVibGljIGl0ZW1zOiBPYnNlcnZhYmxlPERpc2g+O1xyXG4gICAgcHJpdmF0ZSBwZW9wbGU6IE9ic2VydmFibGU8UGVyc29uPjtcclxuICAgIHByaXZhdGUgc3ViamVjdDogU3ViamVjdDxEaXNoPjtcclxuICAgIHB1YmxpYyBuaWNrOiBQZXJzb247XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMubmljayA9IG5ldyBQZXJzb24oXHJcbiAgICAgICAgICAgIG5ldyBJZGVudGl0eShcIk5pY2t5Ym9vXCIsIFwiRG92ZXlcIiwgXCJuaWNrQGhvbWUuY29tXCIsIFwiU29tZXdoZXJlIGluIHRoZSB3b3JsZFwiKSxcclxuICAgICAgICAgICAgXCJodHRwOi8vZ29vZ2xlLmNvbS9jYXRcIixcclxuICAgICAgICAgICAgbmV3IFNldDxSb2xlPigpLmFkZChSb2xlLkNvb2spKTtcclxuXHJcbiAgICAgICAgdmFyIHRyaSA9IG5ldyBQZXJzb24oXHJcbiAgICAgICAgICAgIG5ldyBJZGVudGl0eShcIlRyaWNreWRvb1wiLCBcImRvTmlja3lib29cIiwgXCJ0cmlAaG9tZS5jb21cIiwgXCJTb21ld2hlcmUgaW4gdGhlIHdvcmxkXCIpLFxyXG4gICAgICAgICAgICBcImh0dHA6Ly9nb29nbGUuY29tL2NhdFwiLFxyXG4gICAgICAgICAgICBuZXcgU2V0PFJvbGU+KCkuYWRkKFJvbGUuQ29vaykpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucGVvcGxlID0gT2JzZXJ2YWJsZS5mcm9tKFt0cmksIHRoaXMubmlja10pO1xyXG5cclxuICAgICAgICB0aGlzLnN1YmplY3QgPSBuZXcgU3ViamVjdDxEaXNoPigpO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1zID0gT2JzZXJ2YWJsZS5mcm9tKFtcclxuICAgICAgICAgICAgbmV3IERpc2goXCIxXCIsXCJDaGlja2VuIGRpc2hcIiwgXCJodHRwOi8vZGF0YS53aGljZG4uY29tL2ltYWdlcy8xMTk3NjE3OS9vcmlnaW5hbC5qcGdcIiwgXCJZdW1teVwiLCB0cmksIDE1LCAxNS41KSxcclxuICAgICAgICAgICAgbmV3IERpc2goXCIyXCIsXCJEdWNrIGRpc2hcIiwgXCJodHRwOi8vZGF0YS53aGljZG4uY29tL2ltYWdlcy8xMTk3NjE3OS9vcmlnaW5hbC5qcGdcIiwgXCJZdW1teVwiLCB0cmksIDE1LCAxNS41KSxcclxuICAgICAgICAgICAgbmV3IERpc2goXCIzXCIsXCJCZWVmIGRpc2hcIiwgXCJodHRwOi8vZGF0YS53aGljZG4uY29tL2ltYWdlcy8xMTk3NjE3OS9vcmlnaW5hbC5qcGdcIiwgXCJZdW1teVwiLCB0cmksIDE1LCAxNS41KSxcclxuICAgICAgICAgICAgbmV3IERpc2goXCI0XCIsXCJUZXJyaWJsZSBkaXNoXCIsIFwiaHR0cDovL29jYzE0NGRhdGtuM3ZyamxxN3I2M3AxOS53cGVuZ2luZS5uZXRkbmEtY2RuLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wNi9kb2ctMS5qcGdcIiwgXCJlcmdoLi5cIiwgdGhpcy5uaWNrLCAxNSwgMTUuNSksXHJcbiAgICAgICAgXSkuY29uY2F0KHRoaXMuc3ViamVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKGl0ZW06IERpc2gpe1xyXG4gICAgICAgIHRoaXMuc3ViamVjdC5uZXh0KGl0ZW0ud2l0aCh0aGlzLm5pY2spKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('services/data-source',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlcy9kYXRhLXNvdXJjZS5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6InNyYyJ9

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <header>\n    <h1>Today Special</h1>\n    <p>Food and Us</p>\n  </header>\n  <nav>\n    <section>\n      <a route-href=\"route: cook\">Cook</a>\n      <a route-href=\"route: eat\">Eat</a>\n    </section>\n    <section>\n      <header><h1>me</h1></header>\n      <a route-href=\"route: me\">Account Details</a>\n      <button>Logout</button>\n    </section>\n  </nav>\n  <router-view></router-view>\n</template>"; });
define('text!cook.html', ['module'], function(module) { module.exports = "<template>\r\n    <ul>\r\n        <li repeat.for=\"[id, dish] of dishes\">\r\n            <img alt=\"${dish.name}\" src=\"${dish.image}\" />\r\n            <button>Update image</button>\r\n            <h1><input type=\"text\" value.bind=\"dish.name\" /></h1>\r\n            <textarea value.bind=\"dish.description\"></textarea>\r\n            Serving: <input type=\"number\" value.bind=\"dish.serving\" />\r\n            <input type=\"number\" value.bind=\"dish.price\" />\r\n        </li>\r\n    </ul>\r\n    <button click.delegate=\"add\">Add</button>\r\n\r\n    <form submit.delegate=\"createNewDish()\">\r\n        <img alt=\"${newDish.name}\" src=\"${newDish.image}\" />\r\n        <button>Update image</button>\r\n        <h1><input type=\"text\" value.bind=\"newDish.name\" /></h1>\r\n        <textarea value.bind=\"newDish.description\"></textarea>\r\n        Serving: <input type=\"number\" value.bind=\"newDish.serving\" />\r\n        <input type=\"number\" value.bind=\"newDish.price\" />\r\n        <input type=\"submit\" value=\"create\" />\r\n    </form>\r\n</template>"; });
define('text!eat.html', ['module'], function(module) { module.exports = "<template>\r\n    <form>\r\n        <input type=\"text\" placeholder=\"What do you feel like today?\" bi />\r\n    </form>\r\n\r\n    <ul>\r\n        <li repeat.for=\"[id, dish] of dishes\">\r\n            <img alt=\"${dish.name}\" src=\"${dish.image}\" />\r\n            <h1>${dish.name}</h1>\r\n            <h2>${dish.cook.identity.firstName}</h2>\r\n            <p>${dish.description}</p>\r\n            <p>Serving: ${dish.serving}</p>\r\n            <button>${dish.price}</button>\r\n        </li>\r\n    </ul>\r\n    <button click.delegate=\"add\">Add</button>\r\n</template>"; });
define('text!me.html', ['module'], function(module) { module.exports = "<template>\r\nme\r\n\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map