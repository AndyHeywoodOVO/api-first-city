import { v4 as uuidv4 } from 'uuid';
import { Pipe } from '../models/pipe';
import { CreatePipeRequest, UpdatePipeRequest } from '../models/requests';

// In-memory storage
const resources: Record<string, Pipe> = {};

export const PipeRepository = {
  // Find all resources
  findAll: (): Pipe[] => {
    return Object.values(resources);
  },

  // Find a resource by ID
  findById: (id: string): Pipe | undefined => {
    return resources[id];
  },

  // Create a new resource
  create: (resource: CreatePipeRequest): Pipe => {
    const id = uuidv4();
    const newResource = {
      ...resource,
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
      pressure: 0,
    };
    resources[id] = newResource;
    return newResource;
  },

  // Update an existing resource
  update: (id: string, resource: UpdatePipeRequest): Pipe | undefined => {
    if (!resources[id]) return undefined;

    resources[id] = {
      ...resources[id],
      ...resource,
    };

    return resources[id];
  },

  // Delete a resource
  delete: (id: string): boolean => {
    if (!resources[id]) return false;

    delete resources[id];
    return true;
  },
};
