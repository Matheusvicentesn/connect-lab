import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { localsEntity } from '../../../locals/entities/locals.entity';

export default class DeviceSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(localsEntity);
    const data = repository.create([
      { description: 'casa' },
      { description: 'fábrica' },
      { description: 'escritório' },
    ]);
    await repository.save(data);
  }
}
