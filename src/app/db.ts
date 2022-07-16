import Dexie, { Table } from 'dexie';
import { Npc } from './interfaces/database/npc.interface';

export class AppDB extends Dexie {
    npcs!: Table<Npc, number>;
    
    constructor() {
        super('drRellingCampaignPlannerDb');
        this.createSchema();
    }

    private createSchema () {
        this.version(1).stores({
            npcs: '++id, name, *tags'
        });
    }
}

export const db = new AppDB();