import express from "express"
import passport from "passport";

const authRouter = express.Router();

authRouter.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
authRouter.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/signin" }),
  (req, res) => {
    res.redirect("/dashboard");
  }
);

authRouter.get("/github", passport.authenticate("github", { scope: ["user:email"] }));
authRouter.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/signin" }),
  (req, res) => {
    res.redirect("/dashboard");
  }
);

export default authRouter;