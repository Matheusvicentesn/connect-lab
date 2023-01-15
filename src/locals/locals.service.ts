import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { localsEntity } from './entities/locals.entity';

@Injectable()
export class LocalsService {
  constructor(
    @Inject('LOCALS_REPOSITORY')
    private localsRepository: Repository<localsEntity>,
  ) {}

  findAll() {
    return this.localsRepository.find();
  }
}
