import { Router } from "express";
import { PotentialUser } from "../types";
import { login, register } from "../services/users";
const router = Router();

/* Register a user */
router.post("/register", (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("username" in body) ||
    !("password" in body) ||
    typeof body.username !== "string" ||
    typeof body.password !== "string" ||
    !body.username.trim() ||
    !body.password.trim()
  ) {
    return res.sendStatus(400);
  }

  const { username, password } = body as PotentialUser;

  const authenticatedUser = register(username, password);

  if (!authenticatedUser) {
    return res.sendStatus(409);
  }

  return res.json(authenticatedUser);
});

/* Login a user */
router.post("/login", (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("username" in body) ||
    !("password" in body) ||
    typeof body.username !== "string" ||
    typeof body.password !== "string" ||
    !body.username.trim() ||
    !body.password.trim()
  ) {
    return res.sendStatus(400);
  }

  const { username, password } = body as PotentialUser;

  const authenticatedUser = login(username, password);

  if (!authenticatedUser) {
    return res.sendStatus(401);
  }

  return res.json(authenticatedUser);
});

export default router;
