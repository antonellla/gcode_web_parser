# G Codes Reference 

The following G Codes are specific to Haas CNC machines and may not support other CNC machine manufacturer-specific codes. See also the [Haas CNC Website](https://www.haascnc.com/service.html) for detailed documentation on CNC G Codes.

Machine default codes for each group are shown in bold. 

## Non-Modal G-Codes

Group 00 G codes are non-modal, meaning that they are effective only in the calling block and are unset after the block finishes execution.

| G Code    | Group    | Description                                     | Applicable Axes/Addresses or Corresponding G Codes/Settings | 
|-----------|----------|-------------------------------------------------|---------------------------------------|
| G04       | Group 00 | Dwell (P)                                       | P = seconds.milliseconds              |
| G09       | Group 00 | Exact Stop, Non-Modal                           |                                       |
| G10       | Group 00 | Programmable Offset Setting                     | X, Y, Z, A, L, P, R                   |
| G12       | Group 00 | Circular Pocket Milling CW                      | X, Y, Z, A, I, J, K, R, F             |
| G13       | Group 00 | Circular Pocket Milling CCW                     | X, Y, Z, A, I, J, K, R, F             |
| G28       | Group 00 | Machine Zero Return Thru Reference Point        | X, Y, Z, A, B (Setting 108)           |
| G29       | Group 00 | Move to Location Thru G28 Reference Point       | X, Y, Z, A, B                         |
| G31       | Group 00 | Feed Until Skip Function                        | X, Y, Z, A, B, F                      |
| G35       | Group 00 | Automatic Tool Diameter Measurement             | D, H, Z, F                            |
| G36       | Group 00 | Automatic Work Offset Measurement               | X, Y, Z, A, B, I, J, K, F             |
| G37       | Group 00 | Automatic Tool Offset Measurement               | D, H, Z, F                            |


## Modal G-Codes 

All G code groups except for Group 00 are modal G codes, meaning that once they are called, they remain set until another G code from the same group is called.

| G Code    | Group    | Description                                     | Applicable Axes/Addresses or Corresponding G Codes/Settings | 
|-----------|----------|-------------------------------------------------|---------------------------------------|
| **G00**   | Group 01 | Rapid Positioning Motion                        | X, Y, Z, A, B                         |
| G01       | Group 01 | Linear Interpolation Motion                     | X, Y, Z, A, B, F                      | 
| G02       | Group 01 | Circular Interpolation Motion Clockwise         | X, Y, Z, A, I, J, K, R, F             |
| G03       | Group 01 | Circular Interpolation Motion Counterclockwise  | X, Y, Z, A, I, J, K, R, F             | 
| **G17**   | Group 02 | Circular Motion XY Plane Selection              | G02 or G03                            | 
| G18       | Group 02 | Circular Motion ZX Plane Selection              | G02 or G03                            |
| G19       | Group 02 | Circular Motion YZ Plane Selection              | G02 or G03                            |
| **G90**   | Group 03 | Absolute Positioning Command                    | Setting 56                            |
| G91       | Group 03 | Incremental Positioning Command                 | Setting 29                            |
| G93       | Group 05 | Inverse Time Feed Mode ON                       |                                       |
| **G94**   | Group 05 | Inverse Time Feed Mode OFF / Feed Per Minute ON | Setting 56                            |
| G95       | Group 05 | Feed Per Revolution                             |                                       |
| **G20**   | Group 06 | INCH Coordinate Positioning                     |                                       |
| G21       | Group 06 | METRIC Coordinate Positioning                   |                                       |
| **G40**   | Group 07 | Cutter Compensation Cancel                      | X, Y                                  |
| G41       | Group 07 | 2D Cutter Compensation Left                     | X,Y,D                                 |
| G42       | Group 07 | 2D Cutter Compensation Right                    | X,Y,D                                 |
| G141      | Group 07 | 3D+ Cutter Compensation                         | X, Y, Z, I, J, K, D, F                |
| G43       | Group 08 | Tool Length Compensation +                      | H, Z                                  |
| G44       | Group 08 | Tool Length Compensation -                      | H, Z                                  |
| **G49**   | Group 08 | Tool Length Compensation Cancel                 |                                       |
| G143      | Group 08 | 5 Axis Tool Length Compensation+                | X, Y, Z, A, B, H                      |
| **G80**   | Group 09 | Cancel Canned Cycle                             |                                       |
| G81       | Group 09 | Drill Canned Cycle                              | X, Y, A, B, Z, R, L, F                |
| G82       | Group 09 | Spot Drill / Counterbore Canned Cycle           | X, Y, A, B, Z, P, R, L, F             |
| G83       | Group 09 | Peck Drill Deep Hole Canned Cycle               | X, Y, A, B, Z, I, J, K, Q, P, R, L, F |
| G84       | Group 09 | Tapping Canned Cycle                            | X, Y, A, B, Z, R, J, L, F             |
| G85       | Group 09 | Bore in-Bore out Canned Cycle                   | X, Y, A, B, Z, R, L, F                |
| G86       | Group 09 | Bore in-Stop-Rapid out Canned Cycle             | X, Y, A, B, Z, R, L, F                |
| G87       | Group 09 | Bore in-Manual Retract Canned Cycle             | X, Y, A, B, Z, R, L, F                |
| G88       | Group 09 | Bore-Dwell-Manual Retract Canned Cycle          | X, Y, Z, B, Z, P, R, L, F             |
| G89       | Group 09 | Bore-Dwell-Bore out Canned Cycle                | X, Y, A, B, Z, R, L, F                |
| G153      | Group 09 | 5 Axis High Speed Peck Drill Canned Cycle       | X, Y, A, B, Z, I, J, K, Q, P, E, L, F |
| G154      | Group 09 | Select Work Offset Positioning Coordinate P1-99 |                                       |
| G155      | Group 09 | 5 Axis Reverse Tapping Canned Cycle             | X, Y, A, B, Z, J, E, L, F             |
| G161      | Group 09 | 5 Axis Drill Canned Cycle                       | X, Y, A, B, Z, E, L, F                |
| G162      | Group 09 | 5 Axis Spot Drill/Counterbore Canned Cycle      | X, Y, A, B, Z, P, E, L, F             |
| G163      | Group 09 | 5 Axis Peck Drill Canned Cycle                  | X, Y, A, B, Z, I, J, K, Q, E, L, F    |
| G164      | Group 09 | 5 Axis Tapping Canned Cycle                     | X, Y, A, B, Z, J, E, L, F             |
| G165      | Group 09 | 5 Axis Bore in, Bore out Canned Cycle           | X, Y, A, B, Z, E, L, F                |
| G166      | Group 09 | 5 Axis Bore in, Stop, Rapid Out Canned Cycle    | X, Y, A, B, Z, E, L, F                |
| G169      | Group 09 | 5 Axis Bore, Dwell, Bore out Canned Cycle       | X, Y, A, B, Z, P, E, L, F             |
| **G98**   | Group 10 | Canned Cycle Initial Point Return               | Setting 56                            |
| G99       | Group 10 | Canned Cycle "R" Plane Return                   |                                       |
| **G50**   | Group 11 | Scaling G51 Cancel                              | Setting 56                            |
| G51       | Group 11 | Scaling                                         | X, Y, Z, P                            |
| **G54**   | Group 12 |  Work Offset Positioning Coordinate             | #1                                    |
| G55-G59   | Group 12 | Work Offset Positioning Coordinate              | #2-#6                                 |
| G110-G129 | Group 12 | Work Offset Positioning Coordinate              | #7-#26                                |
| G61       | Group 13 | Exact Stop, Modal                               | X, Y, Z, A, B                         |
| **G64**   | Group 13 | Exact Stop G61 Cancel                           | Setting 56                            |
| G68       | Group 16 | Rotation                                        | G17,G18,G19,X,Y,Z,A,R (Setting 72, 73)|
| **G69**   | Group 16 | Rotation G68 Cancel                             | Setting 56                            |
