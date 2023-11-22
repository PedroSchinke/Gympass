import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repositories'
import { RegisterService } from '../register'

export function makeRegisterService() {
  const usersRepository = new PrismaUsersRepository()
  const registerService = new RegisterService(usersRepository)

  return registerService
}
