export const Rovers = {
  curiosity: true,
  opportunity: true,
  spirit: true,
  perseverance: true,
};

export type Rovers = keyof typeof Rovers;

export type AppContextState = {
  rovers?: RoverBaseApi[];
  selectedRover: Rovers; // todo: key by ID but this could impact typing of the bottom tab bar, which needs more work
  selectedRoverDetails?: RoverBaseApi;
  roverViewConfig?: Partial<RoverViewConfig>;
  images: Image[];
  fetchImages: (rover: Rovers, params?: URLSearchParams) => void;
  changeRover: (name: Rovers) => void;
  changeRoverViewConfig: (roverViewConfig: Partial<RoverViewConfig>) => void;
};

export interface RoverCamera {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
}

export interface RoverBaseApi {
  cameras: { id: number; name: string; rover_id: number; full_name: string }[];
  id: number;
  landing_date: Date;
  launch_date: Date;
  max_date: Date;
  max_sol: number;
  name: string;
  status: 'inactive' | 'active' | 'retired';
  total_photos: number;
}

export interface RoverViewConfig {
  camera: RoverCamera;
  dateType: 'date' | 'sol';
  date: Date;
  sol: number;
  page: number;
}

export interface Image {
  camera: RoverCamera;
  earth_date: Date;
  id: number;
  img_src: string;
  rover: Partial<RoverBaseApi>;
  sol: number;
}
