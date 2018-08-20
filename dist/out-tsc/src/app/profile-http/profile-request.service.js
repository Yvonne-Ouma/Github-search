var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user';
import { Repository } from '../repository';
var ProfileRequestService = /** @class */ (function () {
    function ProfileRequestService(http) {
        this.http = http;
        this.profile = new User("", "");
        this.repository = new Repository("", "");
    }
    ProfileRequestService.prototype.profileRequest = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(environment.apiUrl).toPromise().then(function (response) {
                _this.profile.avatar_url = response.avatar_url;
                _this.profile.login = response.login;
                console.log(response);
                resolve();
            }, function (error) {
                _this.profile.avatar_url = "Dont worry, keep trying.";
                _this.profile.login = "Sorry!! try again";
                reject(error);
            });
        });
        return promise;
    };
    ProfileRequestService.prototype.repositoryRequest = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get("https://api.github.com/users/Yvonne-Ouma/repos?access_token=" + environment.apiUrl).toPromise().then(function (response) {
                console.log(response);
                resolve();
            }, function (error) {
                reject(error);
            });
        });
        return promise;
    };
    ProfileRequestService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], ProfileRequestService);
    return ProfileRequestService;
}());
export { ProfileRequestService };
//# sourceMappingURL=profile-request.service.js.map