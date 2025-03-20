import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import type { Pipe } from '../generated/types.gen';

/**
 * TypeORM entity representing a resource in the database.
 * Implements the Resource interface from the OpenAPI specification,
 * excluding the timestamp fields which are handled by TypeORM decorators.
 *
 * @class ResourceEntity
 * @implements {Omit<Resource, 'createdAt' | 'updatedAt'>}
 */
@Entity('resource')
export class PipeEntity implements Omit<Pipe, 'createdAt' | 'updatedAt'> {
  /**
   * Unique identifier for the resource.
   * Uses UUID v4 format.
   *
   * @type {string}
   */
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  /**
   * Name of the resource.
   * Required field that cannot be null.
   *
   * @type {string}
   */
  @Column()
  name!: string;

  @Column()
  capacity!: number;

  @Column()
  pressure!: number;

  @Column()
  allowedPressure!: number;

  @Column()
  location!: string;

  @Column()
  connectedTreatmentPlan!: string | undefined;

  @Column()
  connectedOutlets!: string[];

  /**
   * Timestamp of when the resource was created.
   * Automatically managed by TypeORM.
   *
   * @type {Date}
   */
  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt!: Date;

  /**
   * Timestamp of when the resource was last updated.
   * Automatically managed by TypeORM.
   *
   * @type {Date}
   */
  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updatedAt!: Date;
}
