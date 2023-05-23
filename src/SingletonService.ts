export class SingletonService {
    private static instance: SingletonService;

    private constructor() {
        // Constructor privado para evitar instanciación directa
    }

    public static getInstance(): SingletonService {
        if (!SingletonService.instance) {
            SingletonService.instance = new SingletonService();
        }
        return SingletonService.instance;
    }

    public doSomething(): void {
        // Lógica de la funcionalidad del Singleton
    }
}
