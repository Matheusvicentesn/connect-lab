import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { DeviceEntity } from '../../../devices/entities/device.entity';

export default class DeviceSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(DeviceEntity);
    const data = repository.create([
      {
        info: {
          virtual_id: 'abcd4321',
          ip_address: '127.0.0.1',
          mac_address: '127.0.0.1',
          signal: '-40dBm',
        },
        name: 'Interruptor conector inteligente',
        type: 'Energia',
        madeBy: 'Intelbras',
        photoUrl: 'https://iili.io/LDBxlS.png',
      },
      {
        info: {
          virtual_id: 'dbcd4321',
          ip_address: '127.0.0.1',
          mac_address: '127.0.0.1',
          signal: '-80dBm',
        },
        name: 'Interruptor inteligente soquete',
        type: 'Energia',
        madeBy: 'Intelbras',
        photoUrl: 'https://iili.io/LDBzU7.png',
      },
      {
        info: {
          virtual_id: '3icr9829',
          ip_address: '127.0.0.1',
          mac_address: '127.0.0.1',
          signal: '-40dBm',
        },
        name: 'Sensor de Movimento smart',
        type: 'Segurança eletrônica',
        madeBy: 'Intelbras',
        photoUrl: 'https://iili.io/LDBaiQ.png',
      },
      {
        info: {
          virtual_id: '5icr9829',
          ip_address: '127.0.0.1',
          mac_address: '127.0.0.1',
          signal: '-40dBm',
        },
        name: 'Luminária de emergência autônoma',
        type: 'Segurança eletrônica',
        madeBy: 'Intelbras',
        photoUrl: 'https://iili.io/LDB7xj.png',
      },
      {
        info: {
          virtual_id: 'ypcr9829',
          ip_address: '127.0.0.1',
          mac_address: '127.0.0.1',
          signal: '-40dBm',
        },
        name: 'Fechadura smart de sobrepor',
        type: 'Controle de Acesso',
        madeBy: 'Intelbras',
        photoUrl: 'https://iili.io/LDBof2.png',
      },
      {
        info: {
          virtual_id: 'adcd4321',
          ip_address: '127.0.0.1',
          mac_address: '127.0.0.1',
          signal: '-90dBm',
        },
        name: 'Interruptor smart Wi-Fi ',
        type: 'Energia',
        madeBy: 'Intelbras',
        photoUrl:
          'https://intelbras.vteximg.com.br/arquivos/ids/162215-1000-1000/ews_1003-front.png?v=637684466424530000',
      },
      {
        info: {
          virtual_id: 'fdcd9820',
          ip_address: '127.0.0.1',
          mac_address: '127.0.0.1',
          signal: '-40dBm',
        },
        name: 'Hub de automação',
        type: 'Segurança eletrônica',
        madeBy: 'Intelbras',
        photoUrl: 'https://iili.io/LDBCil.png',
      },
      {
        info: {
          virtual_id: 'fdcd9824',
          ip_address: '127.0.0.1',
          mac_address: '127.0.0.1',
          signal: '-40dBm',
        },
        name: 'Câmera veicular',
        type: 'Segurança eletrônica',
        madeBy: 'Intelbras',
        photoUrl: 'https://iili.io/LDBFNs.png',
      },
      {
        info: {
          virtual_id: 'hdcd9824',
          ip_address: '127.0.0.1',
          mac_address: '127.0.0.1',
          signal: '-40dBm',
        },
        name: 'Sensor de abertura',
        type: 'Segurança eletrônica',
        madeBy: 'Intelbras',
        photoUrl: 'https://iili.io/LDBYWx.png',
      },
      {
        info: {
          virtual_id: 'yicd9829',
          ip_address: '127.0.0.1',
          mac_address: '127.0.0.1',
          signal: '-40dBm',
        },
        name: 'Bloco de iluminação autônomo',
        type: 'Segurança eletrônica',
        madeBy: 'Intelbras',
        photoUrl: 'https://iili.io/LDB3Rn.png',
      },
      {
        info: {
          virtual_id: '3icd9829',
          ip_address: '127.0.0.1',
          mac_address: '127.0.0.1',
          signal: '-40dBm',
        },
        name: 'Sirene smart ISI',
        type: 'Segurança eletrônica',
        madeBy: 'Intelbras',
        photoUrl: 'https://iili.io/LDB1UP.png',
      },
      {
        info: {
          virtual_id: 'ticr9829',
          ip_address: '127.0.0.1',
          mac_address: '127.0.0.1',
          signal: '-40dBm',
        },
        name: 'Smart box Android TV',
        type: 'Comunicação',
        madeBy: 'Intelbras',
        photoUrl: 'https://iili.io/LDB00B.png',
      },
      {
        info: {
          virtual_id: 'ypcr9829',
          ip_address: '127.0.0.1',
          mac_address: '127.0.0.1',
          signal: '-40dBm',
        },
        name: 'Alto falante inteligente',
        type: 'Comunicação',
        madeBy: 'Intelbras',
        photoUrl: 'https://iili.io/LDB2HX.png',
      },
      {
        info: {
          virtual_id: 'abcd1234',
          ip_address: '127.0.0.1',
          mac_address: '127.0.0.1',
          signal: '-70dBm',
        },
        name: 'Lâmpada LED',
        type: 'Energia',
        madeBy: 'Intelbras',
        photoUrl: 'https://iili.io/LDBRDb.png',
      },
      {
        info: {
          virtual_id: 'sdcd4321',
          ip_address: '127.0.0.1',
          mac_address: '127.0.0.1',
          signal: '90dBm',
        },
        name: 'Interruptor sensor de presença para iluminação',
        type: 'Energia',
        madeBy: 'Intelbras',
        photoUrl: 'https://iili.io/LDBTJ9.png',
      },
      {
        info: {
          virtual_id: 'fdcd9321',
          ip_address: '127.0.0.1',
          mac_address: '127.0.0.1',
          signal: '-40dBm',
        },
        name: 'Câmera de vídeo iM4 C',
        type: 'Segurança eletrônica',
        madeBy: 'Intelbras',
        photoUrl: 'https://iili.io/LDBHlI.png',
      },
      {
        info: {
          virtual_id: 'fdcd9320',
          ip_address: '127.0.0.1',
          mac_address: '127.0.0.1',
          signal: '-40dBm',
        },
        name: 'Câmera de vídeo iME 360',
        type: 'Segurança eletrônica',
        madeBy: 'Intelbras',
        photoUrl: 'https://iili.io/LDBJSt.png',
      },
      {
        info: {
          virtual_id: 'ydcd9829',
          ip_address: '127.0.0.1',
          mac_address: '127.0.0.1',
          signal: '-40dBm',
        },
        name: 'Sensor de temperatura e umidade',
        type: 'Segurança eletrônica',
        madeBy: 'Intelbras',
        photoUrl: 'https://iili.io/LDBlfV.png',
      },
      {
        info: {
          virtual_id: 'ypcr9857',
          ip_address: '127.0.0.1',
          mac_address: '127.0.0.1',
          signal: '-40dBm',
        },
        name: 'Fechadura smart de embutir c/ maçaneta',
        type: 'Controle de Acesso',
        madeBy: 'Intelbras',
        photoUrl: 'https://iili.io/LDBKDG.png',
      },
      {
        info: {
          virtual_id: 'decd4321',
          ip_address: '127.0.0.1',
          mac_address: '127.0.0.1',
          signal: '80dBm',
        },
        name: 'Interruptor sensor de presença para iluminação',
        type: 'Energia',
        madeBy: 'Intelbras',
        photoUrl: 'https://iili.io/LDBuRe.png',
      },
      {
        info: {
          virtual_id: 'ldcd9829',
          ip_address: '127.0.0.1',
          mac_address: '127.0.0.1',
          signal: '-40dBm',
        },
        name: 'Detector de fumaça',
        type: 'Segurança eletrônica',
        madeBy: 'Intelbras',
        photoUrl: 'https://iili.io/LDBqxf.png',
      },
      {
        info: {
          virtual_id: 'ticr9829',
          ip_address: '127.0.0.1',
          mac_address: '127.0.0.1',
          signal: '-40dBm',
        },
        name: 'Smart controle universal infravermelho',
        type: 'Comunicação',
        madeBy: 'Intelbras',
        photoUrl: 'https://iili.io/LDBGJ1.png',
      },
      {
        info: {
          virtual_id: 'ugcr9857',
          ip_address: '127.0.0.1',
          mac_address: '127.0.0.1',
          signal: '-40dBm',
        },
        name: 'Fechadura digital de pressão',
        type: 'Controle de Acesso',
        madeBy: 'Intelbras',
        photoUrl: 'https://iili.io/LDBBV4.png',
      },
    ]);
    await repository.save(data);
  }
}
