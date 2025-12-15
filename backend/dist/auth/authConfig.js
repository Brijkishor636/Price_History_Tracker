"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth_1 = require("passport-google-oauth");
const passport_github2_1 = require("passport-github2");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
passport_1.default.serializeUser((user, done) => done(null, user.id));
passport_1.default.deserializeUser((id, done) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma.user.findUnique({ where: { id } });
    done(null, user);
}));
// Google OAuth
passport_1.default.use(new passport_google_oauth_1.OAuth2Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID2,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET2,
    callbackURL: "/auth/google/callback",
}, (_accessToken, _refreshToken, profile, done) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const oauthAccount = yield prisma.oAuthAccount.findUnique({
            where: {
                provider_providerId: {
                    provider: "google",
                    providerId: profile.id,
                },
            },
            include: { user: true },
        });
        if (oauthAccount) {
            done(null, oauthAccount.user);
        }
        else {
            const user = yield prisma.user.create({
                data: {
                    name: profile.displayName,
                    email: (_a = profile.emails) === null || _a === void 0 ? void 0 : _a[0].value,
                    password: "", // Not used for OAuth
                    accounts: {
                        create: {
                            provider: "google",
                            providerId: profile.id,
                            accessToken: _accessToken,
                        },
                    },
                },
            });
            done(null, user);
        }
    }
    catch (err) {
        done(err, null);
    }
})));
// GitHub OAuth
passport_1.default.use(new passport_github2_1.Strategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback",
}, (_accessToken, _refreshToken, profile, done) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const oauthAccount = yield prisma.oAuthAccount.findUnique({
            where: {
                provider_providerId: {
                    provider: "github",
                    providerId: profile.id,
                },
            },
            include: { user: true },
        });
        if (oauthAccount) {
            done(null, oauthAccount.user);
        }
        else {
            const user = yield prisma.user.create({
                data: {
                    name: profile.displayName || profile.username,
                    email: ((_a = profile.emails) === null || _a === void 0 ? void 0 : _a[0].value) || "",
                    password: "",
                    accounts: {
                        create: {
                            provider: "github",
                            providerId: profile.id,
                            accessToken: _accessToken,
                        },
                    },
                },
            });
            done(null, user);
        }
    }
    catch (err) {
        done(err, null);
    }
})));
exports.default = passport_1.default;
