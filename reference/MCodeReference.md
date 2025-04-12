
## M Codes Reference 

Miscellaneous "M" codes cause an action to occur after every other code on a block has been executed. Only one M code is allowed per block. 

Codes in bold correspond to default machine state at start-up. 

| M Code  | Purpose         |  Description                       | Applicable Settings | 
|---------|-----------------|------------------------------------|---------------------|
| M00     | Program Control | Program Stop                       | Setting 39, 42      |
| M01     | Program Control | Optional Program Stop              | Setting 17, 39      | 
| M02     | Program Control | Program End                        | Setting 39          |
| M03     | Spindle Control | Start Spindle CLOCKWISE            | Setting 144         |
| M04     | Spindle Control | Start Spindle COUNTERCLOCKWISE     | Setting 144         |
| **M05** | Spindle Control | Stop Spindle                       |                     |
| M08     | Coolant Control | Coolant ON                         | Setting 32          |
| **M09** | Coolant Control | Coolant OFF                        |                     |
