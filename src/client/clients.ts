import { Transport, ClientProxyFactory, ClientProxy } from '@nestjs/microservices';

export const userProfileService = ClientProxyFactory.create({
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 8877,
    }});

export const productService = ClientProxyFactory.create({
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 8877,
        }});
