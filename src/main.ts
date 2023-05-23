import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SingletonService } from './SingletonService';
import { ObserverService, Observer } from './ObserverService';
import { StrategyService, Strategy } from './StrategyService';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Ejemplo de uso del patrón Singleton
  const singletonService = SingletonService.getInstance();
  singletonService.doSomething();

  // Ejemplo de uso del patrón Observer
  const observerService = new ObserverService();
  const observerA: Observer = {
    update() {
      console.log('Observer A updated');
    },
  };
  const observerB: Observer = {
    update() {
      console.log('Observer B updated');
    },
  };
  observerService.addObserver(observerA);
  observerService.addObserver(observerB);
  observerService.notifyObservers();

  // Ejemplo de uso del patrón Strategy
  const strategyService = new StrategyService();
  const strategyA: Strategy = {
    execute() {
      console.log('Executing Strategy A');
    },
  };
  const strategyB: Strategy = {
    execute() {
      console.log('Executing Strategy B');
    },
  };
  strategyService.setStrategy(strategyA);
  strategyService.executeStrategy();

  strategyService.setStrategy(strategyB);
  strategyService.executeStrategy();

  await app.listen(3000);
}
bootstrap();
