export type CreatePipeRequest = {
  capacity: number;
  allowedPressure: number;
  location: string;
  connectedOutlets: string[];
};

export type UpdatePipeRequest = {
  capacity?: number;
  allowedPressure?: number;
  location?: string;
  connectedOutlets?: string[];
};
