import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreatePostDto } from './dto/create-post.dto';

const prisma = new PrismaClient();

@Injectable()
export class PostsService {
  async findAll() {
    return prisma.post.findMany({});
  }

  async create(createPostDto: CreatePostDto) {
    return prisma.post.create({
      data: {
        ...createPostDto,
      },
    });
  }

  async remove(id: number) {
    return prisma.post.delete({
      where: { id },
    });
  }
}
