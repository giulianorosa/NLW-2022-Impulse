import express from 'express';
import { SubmitFeedbackUseCase } from './useCases/submit-feedback-use-case';
import { PrismaFeedbacksRepostory } from './repositories/prisma/prisma-feedbacks-repositories';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';

export const routes = express.Router()


routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body

  try{
    const prismaFeedbacksRepostory = new PrismaFeedbacksRepostory()
    const nodemailerMailAdapter = new NodemailerMailAdapter()
  
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      prismaFeedbacksRepostory,
      nodemailerMailAdapter
    )
  
    await submitFeedbackUseCase.execute({
      type,
      comment,
      screenshot
    })
    
    return res.status(201).send();

  } catch(err) {
    console.log(err)

    return res.status(500).send()

  }

})
