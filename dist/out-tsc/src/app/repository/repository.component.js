var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { RepositoryRequestService } from '../profile-http/profile-request.service';
var RepositoryComponent = /** @class */ (function () {
    function RepositoryComponent(profileService) {
        this.profileService = profileService;
    }
    RepositoryComponent.prototype.ngOnInit = function () {
        this.profileService.repositoryRequest();
        this.repos = this.profileService.repository;
    };
    RepositoryComponent = __decorate([
        Component({
            selector: 'app-repository',
            templateUrl: './repository.component.html',
            providers: [RepositoryRequestService],
            styleUrls: ['./repository.component.css']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof RepositoryRequestService !== "undefined" && RepositoryRequestService) === "function" && _a || Object])
    ], RepositoryComponent);
    return RepositoryComponent;
    var _a;
}());
export { RepositoryComponent };
//# sourceMappingURL=repository.component.js.map