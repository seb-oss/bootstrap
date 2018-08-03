import { ExampleModule } from './example.module';

describe('ExampleModule', () => {
  let exampleModule: ExampleModule;

  beforeEach(() => {
    exampleModule = new ExampleModule();
  });

  it('should create an instance', () => {
    expect(exampleModule).toBeTruthy();
  });
});
