import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let contacts = [
            {
                id: 1,
                first_name: "Elizabeth",
                last_name: "Watson",
                email: "ewatson0@nytimes.com",
                phone: "1-(775)886-3623",
                address: "55 Dovetail Ave",
                city: "Reno",
                state: "Nevada",
                zip: 89510
            },
            {
                id: 2,
                first_name: "Thomas",
                last_name: "Watson",
                email: "twatson0@nytimes.com",
                phone: "1-(775)886-3623",
                address: "55 Dovetail Ave",
                city: "Reno",
                state: "Nevada",
                zip: 89510
            }
        ];
        return { contacts };
    }
}