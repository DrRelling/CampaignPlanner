import { Injectable } from '@angular/core';
import { db } from '../db';
import { Npc } from '../interfaces/database/npc.interface';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private db = db;

  constructor() {}

  public async getNpcById(id: number): Promise<Npc | null> {
    return await this.db.npcs.where('id').equals(id).first() ?? null;
  }

  public async getAllNpcs(tags?: string[]): Promise<Npc[]> {
    if (tags != null) {
      return await this.db.npcs.where('tags').anyOfIgnoreCase(tags).toArray();
    } else {
      return await this.db.npcs.toArray();
    }
  }
}
