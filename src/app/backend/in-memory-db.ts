import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDB extends InMemoryDbService {

  createDb() {
    const turkeys = [
      { id: 1, name: 'Sebastian' },
      { id: 2, name: 'Ricardo' },

    ];

    const thankfulFors = [
      { id: 1, description: 'Food' },
      { id: 2, description: 'Family' },
    ];

    return {
      turkeys,
      thankfulFors
    };
  }

}
