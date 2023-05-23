export class StrategyService {
    private strategy: Strategy;

    public setStrategy(strategy: Strategy): void {
        this.strategy = strategy;
    }

    public executeStrategy(): void {
        this.strategy.execute();
    }
}

export interface Strategy {
    execute(): void;
}
