import { prisma } from "../../prisma";
import { FeedbacksRepository, FeedbackCreateData } from "../feedbacks-repositories";

export class PrismaFeedbacksRepostory implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    })
  }
}