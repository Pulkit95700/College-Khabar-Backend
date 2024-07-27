import { Router } from "express";
import auth from "../middlewares/auth.middleware.js";
import {
  getAllUserProfiles,
  getProfile,
  getUserGossipsDetails,
  getUserRoomDetails
} from "../controllers/profile.controller.js";

const router = Router();

router.use(auth);

router.route("/all-users").get(getAllUserProfiles);
router.route("/user-profile/:username").get(getProfile);
router.route("/get-gossips-details/:username").get(getUserGossipsDetails);
router.route("/get-user-rooms-details/:username").get(getUserRoomDetails);

export { router };
