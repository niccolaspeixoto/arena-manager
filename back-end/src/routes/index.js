import { Router } from "express";

const router = Router();

router.get("/health", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "API funcionando 🚀",
    version: "1.0.0",
  });
});

export default router;