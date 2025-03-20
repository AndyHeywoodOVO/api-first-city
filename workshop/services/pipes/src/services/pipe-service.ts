import { Pipe } from '../models/pipe';
import { CreatePipeRequest, UpdatePipeRequest } from '../models/requests';
import { PipeRepository } from '../repositories/pipe-repository';

export const PipeService = {
  // Get all resources
  getAll: (): Pipe[] => {
    return PipeRepository.findAll();
  },

  // Get a resource by ID
  getById: (id: string): Pipe | undefined => {
    return PipeRepository.findById(id);
  },

  // Create a new resource
  create: (resource: CreatePipeRequest): Pipe => {
    // Apply any business rules here

    return PipeRepository.create(resource);
  },

  // Update an existing resource
  update: (id: string, resource: UpdatePipeRequest): Pipe | undefined => {
    // Apply any business rules here

    return PipeRepository.update(id, resource);
  },

  // Delete a resource
  delete: (id: string): boolean => {
    return PipeRepository.delete(id);
  },

  // Add more business logic methods as needed
};
