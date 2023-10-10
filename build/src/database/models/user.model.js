import { __decorate, __metadata } from "tslib";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, VersionColumn, } from 'typeorm';
let User = class User extends BaseEntity {
    id;
    first_name;
    last_name;
    email;
    password;
    t_and_c;
    status;
    created_at;
    updated_at;
    version;
    get user_signup_response() {
        return {
            id: this.id,
            full_name: `${this.first_name} ${this.last_name}`,
            email: this.email,
        };
    }
    get user_profile_view() {
        return {
            id: this.id,
            full_name: `${this.first_name} ${this.last_name}`,
            email: this.email,
            status: this.status,
            created_at: this.created_at,
            updated_at: this.updated_at,
            version: this.version,
        };
    }
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], User.prototype, "first_name", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], User.prototype, "last_name", void 0);
__decorate([
    Column({
        unique: true,
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    Column(),
    __metadata("design:type", Boolean)
], User.prototype, "t_and_c", void 0);
__decorate([
    Column({
        type: 'enum',
        enum: ['0', '1', '2'],
        default: '0',
    }),
    __metadata("design:type", String)
], User.prototype, "status", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", Date)
], User.prototype, "created_at", void 0);
__decorate([
    UpdateDateColumn(),
    __metadata("design:type", Date)
], User.prototype, "updated_at", void 0);
__decorate([
    VersionColumn(),
    __metadata("design:type", Number)
], User.prototype, "version", void 0);
User = __decorate([
    Entity()
], User);
export { User };
