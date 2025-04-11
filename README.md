# gcode_web_parser
CNC G Code web-based parser


Quick documentation

install dependencies: 
`npm install typescript`

set up: `npm i -D tsconfig-paths`

compile: 

`npx tsc`

run parser node: 
`npx ts-node src/gcode_parser.ts`


## G Codes Reference 

The following G Codes are specific to Haas CNC machines and may not support other CNC machine manufacturer-specific codes. See also the [Haas CNC Website](https://www.haascnc.com/service.html) for detailed documentation on CNC G Codes.

Machine default codes are shown in bold. 

### Group 01: Motion Codes

| G Code  | Description                                    | Axes/Addresses            | 
|---------|------------------------------------------------|---------------------------|
| **G00** | Rapid Positioning Motion                       | X, Y, Z, A, B             |
| G01     | Linear Interpolation Motion                    | X, Y, Z, A, B, F          | 
| G02     | Circular Interpolation Motion Clockwise        | X, Y, Z, A, I, J, K, R, F |
| G03     | Circular Interpolation Motion Counterclockwise | X, Y, Z, A, I, J, K, R, F | 


### Group 02: Circular Motion Plane Selection Codes

| G Code   | Description                        |
|----------|------------------------------------|
| **G17**  | Circular Motion XY Plane Selection |
| G18      | Circular Motion ZX Plane Selection | 
| G19      | Circular Motion YZ Plane Selection |


### Group 03: Positioning Mode Codes

| G Code   | Description                    |
|----------|--------------------------------|
| **G90**  | Absolute Positioning           |
| G91      | Incremental Positioning        | 


### Group 05: Feed Mode Codes 

| G Code   | Description                                     |
|----------|-------------------------------------------------|
| G93      | Inverse Time Feed Mode ON                       |
| **G94**  | Inverse Time Feed Mode OFF / Feed Per Minute ON | 
| G95      | Feed Per Revolution                             |


### Group 06: Coordinate Positioning Mode Codes

| G Code   | Description                                     |
|----------|-------------------------------------------------|
| **G20**  | INCH Coordinate Positioning                     |
| G21      | METRIC Coordinate Positioning                   | 


### Group 07: Cutter Compensation Codes

| G Code  | Description                                    | Axes/Addresses            | 
|---------|------------------------------------------------|---------------------------|
| **G40** | Cutter Compensation Cancel                     | X, Y                      |
| G41     | 2D Cutter Compensation Left                    | X,Y,D                     |
| G42     | 2D Cutter Compensation Right                   | X,Y,D                     |
| G141    | 3D+ Cutter Compensation                        | X, Y, Z, I, J, K, D, F    |


### Group 08: Tool Length Compensation Codes

| G Code  | Description                                    | Axes/Addresses            | 
|---------|------------------------------------------------|---------------------------|
| G43     | Tool Length Compensation +                     | H, Z                      |
| G44     | Tool Length Compensation -                     | H, Z                      |
| **G49** | Tool Length Compensation Cancel                |                           |
| G143    | 5 Axis Tool Length Compensation+               | X, Y, Z, A, B, H          |


### Group 09: Canned Cycle Codes

| G Code  | Description                                     | Axes/Addresses                        | 
|---------|-------------------------------------------------|---------------------------------------|
| **G80** | Cancel Canned Cycle                             |                                       |
| G81     | Drill Canned Cycle                              | X, Y, A, B, Z, R, L, F                |
| G82     | Spot Drill / Counterbore Canned Cycle           | X, Y, A, B, Z, P, R, L, F             |
| G83     | Peck Drill Deep Hole Canned Cycle               | X, Y, A, B, Z, I, J, K, Q, P, R, L, F |
| G84     | Tapping Canned Cycle                            | X, Y, A, B, Z, R, J, L, F             |
| G85     | Bore in-Bore out Canned Cycle                   | X, Y, A, B, Z, R, L, F                |
| G86     | Bore in-Stop-Rapid out Canned Cycle             | X, Y, A, B, Z, R, L, F                |
| G87     | Bore in-Manual Retract Canned Cycle             | X, Y, A, B, Z, R, L, F                |
| G88     | Bore-Dwell-Manual Retract Canned Cycle          | X, Y, Z, B, Z, P, R, L, F             |
| G89     | Bore-Dwell-Bore out Canned Cycle                | X, Y, A, B, Z, R, L, F                |
| G153    | 5 Axis High Speed Peck Drill Canned Cycle       | X, Y, A, B, Z, I, J, K, Q, P, E, L, F |
| G154    | Select Work Offset Positioning Coordinate P1-99 |                                       |
| G155    | 5 Axis Reverse Tapping Canned Cycle             | X, Y, A, B, Z, J, E, L, F             |
| G161    | 5 Axis Drill Canned Cycle                       | X, Y, A, B, Z, E, L, F                |
| G162    | 5 Axis Spot Drill/Counterbore Canned Cycle      | X, Y, A, B, Z, P, E, L, F             |
| G163    | 5 Axis Peck Drill Canned Cycle                  | X, Y, A, B, Z, I, J, K, Q, E, L, F    |
| G164    | 5 Axis Tapping Canned Cycle                     | X, Y, A, B, Z, J, E, L, F             |
| G165    | 5 Axis Bore in, Bore out Canned Cycle           | X, Y, A, B, Z, E, L, F                |
| G166    | 5 Axis Bore in, Stop, Rapid Out Canned Cycle    | X, Y, A, B, Z, E, L, F                |
| G169    | 5 Axis Bore, Dwell, Bore out Canned Cycle       | X, Y, A, B, Z, P, E, L, F             |


### Group 10: Canned Cycle Return Codes 

| G Code   | Description                       |
|----------|-----------------------------------|
| **G98**  | Canned Cycle Initial Point Return |
| G99      | Canned Cycle "R" Plane Return     | 


### Group 11: Scaling Codes 

| G Code  | Description                           | Axes/Addresses             | 
|---------|---------------------------------------|----------------------------|
| **G50** | Scaling G51 Cancel                    |                            |
| G51     | Scaling                               | X, Y, Z, P                 |


### Group 12: Work Offset Register Codes 

| G Code    | Description                           | Coordinate Number          | 
|-----------|---------------------------------------|----------------------------|
| **G54**   | Work Offset Positioning Coordinate    | #1                         |
| G55-G59   | Work Offset Positioning Coordinate    | #2-#6                      |
| G110-G129 | Work Offset Positioning Coordinate    | #7-#26                     |


### Group 13: Exact Stop Codes

| G Code  | Description                          | Axes/Addresses             | 
|---------|--------------------------------------|----------------------------|
| G61     | Exact Stop, Modal                    | X, Y, Z, A, B              |
| **G64** | Exact Stop G61 Cancel                |                            |


### Group 16: Rotation Codes

| G Code  | Description                        |
|---------|------------------------------------|
| G68     | Exact Stop, Modal                  |
| **G69** | Rotation G68 Cancel                | 


## M Codes Documentation 

### Coolant Control Codes 

| M Code  | Description                        |
|---------|------------------------------------|
| M08     | Coolant ON                         |
| **M09** | Coolant OFF                        | 

### Spindle Control Codes

| M Code  | Description       | Direction        |
|---------|-------------------|------------------|
| M03     | Start Spindle CW  | CLOCKWISE        |
| M04     | Start Spindle CCW | COUNTERCLOCKWISE |
| **M05** | Stop Spindle      | OFF              |
