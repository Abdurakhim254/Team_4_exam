import { statusCodes } from "../config/index.js";
import {
  getAllFeedbacksService,
  getFeedbackByIdService,
  createFeedbackService,
  updateFeedbackByIdService,
  deleteFeedbackByIdService,
} from "../services/index.js";
import { logger } from "../utils/index.js";

const ok = statusCodes.ok;
const not_found = statusCodes.not_found;
const medium = statusCodes.medium;
const bad = statusCodes.bad;
const created = statusCodes.created;

export const feedbackObj = {
  getAllFeedbacksCon: async function (req, res) {
    try {
      const result = await getAllFeedbacksService();

      res.status(ok).send(result);
    } catch (error) {
      logger.error(error);
      res.status(bad).send(error.message);
    }
  },

  getFeedbackByIdCon: async function (req, res) {
    try {
      const { id } = req.params;

      const result = await getFeedbackByIdService(id);

      res.status(ok).send(result);
    } catch (error) {
      logger.error(error);
      res.status(bad).send(error.message);
    }
  },

  createFeedbackCon: async function (req, res) {
    try {
      const { customer_id, submitted_at, feedback_type, content } = req.body;

      const result = await createFeedbackService({
        customer_id,
        submitted_at,
        feedback_type,
        content,
      });

      res.status(created).send(result);
    } catch (error) {
      logger.error(error);
      res.status(bad).send(error.message);
    }
  },

  updateFeedbackByIdCon: async function (req, res) {
    try {
      const { id } = req.params;
      const { customer_id, submitted_at, feedback_type, content } = req.body;
      const result = await updateFeedbackByIdService({
        id,
        customer_id,
        submitted_at,
        feedback_type,
        content,
      });

      res.status(ok).send(result);
    } catch (error) {
      logger.error(error);
      res.status(bad).send(error.message);
    }
  },

  deleteFeedbackByIdCon: async function (req, res) {
    try {
      const { id } = req.params;
      const result = await deleteFeedbackByIdService(id);

      res.status(ok).send(result);
    } catch (error) {
      logger.error(error);
      res.status(bad).send(error.message);
    }
  },
};
