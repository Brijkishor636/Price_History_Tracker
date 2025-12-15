import passport from "passport";
import { OAuth2Strategy as GoogleStrategy } from "passport-google-oauth";
import { Strategy as GitHubStrategy } from "passport-github2";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

passport.serializeUser((user: any, done: (err: any, id?: number) => void) => done(null, user.id));
passport.deserializeUser(async (id: number, done: (err: any, user?: any) => void) => {
  const user = await prisma.user.findUnique({ where: { id } });
  done(null, user);
});

// Google OAuth
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID2!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET2!,
      callbackURL: "/auth/google/callback",
    },
    async (_accessToken: any, _refreshToken: any, profile: any, done: any) => {
      try {
        const oauthAccount = await prisma.oAuthAccount.findUnique({
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
        } else {
          const user = await prisma.user.create({
            data: {
              name: profile.displayName,
              email: profile.emails?.[0].value,
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
      } catch (err) {
        done(err, null);
      }
    }
  )
);

// GitHub OAuth
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      callbackURL: "/auth/github/callback",
    },
    async (_accessToken: any, _refreshToken: any, profile: any, done: any) => {
      try {
        const oauthAccount = await prisma.oAuthAccount.findUnique({
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
        } else {
          const user = await prisma.user.create({
            data: {
              name: profile.displayName || profile.username,
              email: profile.emails?.[0].value || "",
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
      } catch (err) {
        done(err, null);
      }
    }
  )
);

export default passport;
