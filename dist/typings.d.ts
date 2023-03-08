/** @type {[number, number]}
 * Provide an array with longitude and latitude [$longitude, $latitude]
 */
export declare type Coordinate = [number, number];
export declare type OnLocationChangeEvent = {
    nativeEvent?: {
        latitude: number;
        longitude: number;
    };
};
export declare type OnRouteProgressChangeEvent = {
    nativeEvent?: {
        distanceTraveled: number;
        durationRemaining: number;
        fractionTraveled: number;
        distanceRemaining: number;
        maneuvers: string[];
    };
};
export declare type OnErrorEvent = {
    nativeEvent?: {
        message?: string;
    };
};
export declare type Maneuver = {
    drivingSide?: string
    text: string
    modifier?: string
    type?: string
    degrees?: number
    stepDistanceRemaining?: number
    stepTotalDistance: number
  }
export interface IMapboxNavigationProps {
    origin: Coordinate;
    destination: Coordinate;
    shouldSimulateRoute?: boolean;
    onLocationChange?: (event: OnLocationChangeEvent) => void;
    onRouteProgressChange?: (event: OnRouteProgressChangeEvent) => void;
    onError?: (event: OnErrorEvent) => void;
    onCancelNavigation?: () => void;
    onArrive?: () => void;
    showsEndOfRouteFeedback?: boolean;
    hideStatusView?: boolean;
    mute?: boolean;
}
export {};
