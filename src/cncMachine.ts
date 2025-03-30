/**
 *  Define interface for CNC Machine Modal G-codes.
 */
export interface cncMachine {
    /**
     * Group 01: Motion Codes
     * G Codes:
     *      G00: Rapid Positioning Motion (X,Y,Z,A,B) (default)
     *      G01: Linear Interpolation Motion (X,Y,Z,A,B,F)
     *      G02: Circular Interpolation Motion Clockwise (X,Y,Z,A,I,J,K,R,F)
     *      G03: Circular Interpolation Motion Counterclockwise(X,Y,Z,A,I,J,K,R,F)
     */
    motionMode: string;

    /**
     * Group 02: Circular Motion Plane Selection
     * G Codes:
     *      G17: Circular Motion XY Plane Selection (default)
     *      G18: Circular Motion ZX Plane Selection
     *      G19: Circular Motion YZ Plane Selection
     */
    circularMotionPlaneSelection: string;
   
    /**
     * Group 03: Positioning Codes
     * G Codes:
     *      G90: Absolute Positioning (default)
     *      G91: Incremental Positioning
     */
    positionMode: string;
    
    /**
     * Group 05: Feed Mode
     * G Codes:
     *      G93: Inverse Time Feed Mode ON 
     *      G94: Inverse Time Feed Mode OFF / Feed Per Minute ON (default)
     *      G95: Feed Per Revolution
     */
    feedMode: string;

    /**
     * Group 06: Coordinate Positioning Mode
     * G Codes:
     *      G20: INCH Coordinate Positioning (default)
     *      G21: METRIC Coordinate Positioning
     */
    coordinatePositioningMode: string;
   
    /**
     * Group 07: Cutter Compensation
     * G Codes:
     *      G40: Cutter Compensation Cancel (X,Y) (default)
     *      G41: 2D Cutter Compensation Left (X,Y,D)
     *      G42: 2D Cutter Compensation Right (X,Y,D)
     *      G141: 3D+ Cutter Compensation (X,Y,Z,I,J,K,D,F)
     */
    cutterCompensationMode: string;

    /**
     * Group 08: Tool Length Compensation 
     * G Codes:
     *      G43: Tool Length Compensation + (H,Z)
     *      G44: Tool Length Compensation - (H,Z)
     *      G49: Tool Length Compensation Cancel (default)
     *      G143: 5 Axis Tool Length Compensation+ (X,Y,Z,A,B,H)
     */
    toolLengthCompensationMode: string;

    /**
     * Group 09: Canned Cycle
     * G Codes:
     *      G80: Cancel Canned Cycle (default)
     *      G81: Drill Canned Cycle (X,Y,A,B,Z,R,L,F)
     *      G82: Spot Drill / Counterbore Canned Cycle (X,Y,A,B,Z,P,R,L,F)
     *      G83: Peck Drill Deep Hole Canned Cycle (X,Y,A,B,Z,I,J,K,Q,P,R,L,F)
     *      G84: Tapping Canned Cycle (X,Y,A,B,Z,R,J,L,F)
     *      G85: Bore in-Bore out Canned Cycle (X,Y,A,B,Z,R,L,F)
     *      G86: Bore in-Stop-Rapid out Canned Cycle (X,Y,A,B,Z,R,L,F)
     *      G87: Bore in-Manual Retract Canned Cycle (X,Y,A,B,Z,R,L,F)
     *      G88: Bore-Dwell-Manual Retract Canned Cycle (X,Y,Z,B,Z,P,R,L,F)
     *      G89: Bore-Dwell-Bore out Canned Cycle (X,Y,A,B,Z,R,L,F)
     *      G153: 5 Axis High Speed Peck Drill Canned Cycle (X,Y,A,B,Z,I,J,K,Q,P,E,L,F)
     *      G154: Select Work Offset Positioning Coordinate P1-99
     *      G155: 5 Axis Reverse Tapping Canned Cycle (X,Y,A,B,Z,J,E,L,F)
     *      G161: 5 Axis Drill Canned Cycle (X,Y,A,B,Z,E,L,F)
     *      G162: 5 Axis Spot Drill/Counterbore Canned Cycle (X,Y,A,B,Z,P,E,L,F)
     *      G163: 5 Axis Peck Drill Canned Cycle (X,Y,A,B,Z,I,J,K,Q,E,L,F)
     *      G164: 5 Axis Tapping Canned Cycle (X,Y,A,B,Z,J,E,L,F)
     *      G165: 5 Axis Bore in, Bore out Canned Cycle (X,Y,A,B,Z,E,L,F)
     *      G166: 5 Axis Bore in, Stop, Rapid Out Canned Cycle (X,Y,A,B,Z,E,L,F)
     *      G169: 5 Axis Bore, Dwell, Bore out Canned Cycle (X,Y,A,B,Z,P,E,L,F)
     */
    cannedCycle: string;

    /**
     * Group 10: Canned Cycle Return
     * G Codes:
     *      G98: Canned Cycle Initial Point Return (default)
     *      G99: Canned Cycle "R" Plane Return
     */
    pointReturn: string;

    /**
     * Group 11: Scaling
     * G Codes:
     *      G50: Scaling G51 Cancel (default)
     *      G51: Scaling (X,Y,Z,P)
     */
    scalingMode: boolean;

    /**
     * Group 12: Work Offset
     * G Codes:
     *      G54: Work Offset Positioning Coordinate #1 (default)
     *      G55-G59: Work Offset Positioning Coordinate #2-#6
     *      G110-129: Work Offset Positioning Coordinate #7-#26
     */
    workOffset: number;

    /**
     * Group 13: Exact Stop
     * G Codes:
     *      G61: Exact Stop, Modal (X,Y,Z,A,B)
     *      G64: Exact Stop G61 Cancel (default)
     */
    exactStopMode: boolean;

    /**
     * Group 16: Rotation
     * G Codes:
     *      G68: Rotation
     *      G69: Rotation G68 Cancel (default)
     */
    rotationMode: boolean;

    /**
     * M Codes for controlling coolant:
     *      M08: Coolant ON
     *      M09: Coolant OFF (default)
     */
    coolantState: boolean;

    /**
     * M Codes for controlling spindle:
     *      M03: Start spindle CLOCKWISE (spindleState: 1)
     *      M04: Start spindle COUNTERCLOCKWISE (spindleState: -1)
     *      M05: STOP spindle (spindleState: 0) (default)
     */
    spindleState: number;

    /**
     * Spindle speed in RPM.
     * No default spindle speed on machine start-up.
     */
    spindleSpeed?: number;
    
    /**
     * Feed rate in IPM (inches per minute) (G21 not currently handled).
     * No default feed rate on machine start-up.
     */
    feedRate?: number;

    /**
     * Active tool number. 
     * No default tool on machine start-up.
     */
    toolNumberActive?: string;
}

/**
 * Default CNC machine state.
 * Uses Haas mill machine start-up defaults.
 */
let machineState: cncMachine = {
    motionMode: "G00",                          // Rapid Traverse Mode
    circularMotionPlaneSelection: "G17",        // X,Y Circular Plane Selection
    positionMode: "G91",                        // Absolute positioning programming
    coordinatePositioningMode: "G20",           // Verify INCH coordinate positioning mode
    cutterCompensationMode: "G40",              // Cutter compensation cancel
    toolLengthCompensationMode: "G49",          // Tool length compensation cancel
    scalingMode: false,                         // Scaling G51 Cancel
    workOffset: 1,                              // Work Coordinate Zero Register #1
    exactStopMode: false,                       // Exact Stop Cancel
    rotationMode: false,                        // Rotation G68 Cancel
    cannedCycle: "G80",                         // Canned Cycle Cancel
    feedMode: "G94",                            // Inverse Time Feed Deactivate
    pointReturn: "G98",                         // Initial Point Return
    coolantState: false,                        // Coolant OFF on start-up
    spindleState: 0                             // Spindle STOPPED on start-up
}
