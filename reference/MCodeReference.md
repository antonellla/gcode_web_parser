
## M Codes Reference 

Miscellaneous "M" codes cause an action to occur after every other code on a block has been executed. Only one M code is allowed per block. 

Codes in bold correspond to default machine state at start-up. 

| M Code  | Category    |  Description                       | Applicable Settings   | 
|---------|-------------|------------------------------------|-----------------------|
| M00     | Program     | Program Stop                       | Setting 39, 42        |
| M01     | Program     | Optional Program Stop              | Setting 17, 39        | 
| M02     | Program     | Program End                        | Setting 39            |
| M03     | Spindle     | Start Spindle CLOCKWISE            | Setting 144           |
| M04     | Spindle     | Start Spindle COUNTERCLOCKWISE     | Setting 144           |
| **M05** | Spindle     | Stop Spindle                       |                       |
| M06     | Tool Turret | Tool Change (T)                    | Setting 42, 87, 155   |
| M08     | Coolant     | Coolant ON                         | Setting 32            |
| **M09** | Coolant     | Coolant OFF                        |                       |
| M10     | Brake       | 4th Axis Brake ON                  |                       | 
| M11     | Brake       | 4th Axis Brake Release             |                       |
| M12     | Brake       | 5th Axis Brake ON                  |                       |
| M13     | Brake       | 5th Axis Brake Release             |                       | 
| M16     | Tool Turret | Tool Change (T) (Same as M06)      |                       |
| M17     | Pallet      | APC Pallet Unclamp and Open APC Door |                     |
| M18     | Pallet      | APC Pallet Clamp and Close APC Door  |                     | 
| M19     | Spindle     | Orient Spindle                     | P, R values optional  |
| M21-M28 |             | Optional User M Code Interface with M-Fin Signals |        |
| M30     | Program     | Program End and Reset              | Setting 2, 39, 56, 83 |
| M31     | Chip Auger  | Chip Auger Forward                 | Setting 114, 115      |
| M33     | Chip Auger  | Chip Auger Stop                    |                       |
| M34     | Coolant     | Coolant Spigot Position Down, Increment (+1) |             |
| M35     | Coolant     | Coolant Spigot Position Up, Decrement (-1)   |             |
| M36     | Pallet      | Pallet Part Ready (P)              |                       |
| M39     | Tool Turret | Rotate Tool Turret (T#)            | Setting 86            |
| M41     | Spindle     | Spindle Low Gear Override          |                       |
| M42     | Spindle     | Spindle High Gear Override         |                       |
| M50     | Pallet      | Execute Pallet Change (P)          | Settings 121-129      |
| M51-M58 |             | Optional User M Code Set           |                       |
| M59     |             | Output Relay Set (N)               |                       |
| M61-M68 |             | Optional User M Code Clear         |                       |
| M69     |             | Output Relay Clear (N)             |                       |
| M75     |             | Set G35 or G136 Reference Point    |                       |
| M76     | Display     | Control Display Inactive           |                       |
| M77     | Display     | Control Display Active             |                       |
| M78     | Alarm       | Alarm if Skip Signal Found         |                       |
| M79     | Alarm       | Alarm if Skip Signal Not Found     |                       |
| M80     | Door        | Automatic Door Open                | Setting 131           |
| M81     | Door        | Automatic Door Close               | Setting 131           |
| M82     | Tool Turret | Tool Unclamp                       |                       | 
| M83     | Air Jet     | Auto Air Jet ON                    |                       |
| M84     | Air Jet     | Auto Air Jet OFF                   |                       |
| M86     | Tool Turret | Tool Clamp                         |                       |
| M88     | Coolant     | Coolant Through the Spindle ON     | Setting 32            |
| M89     | Coolant     | Coolant Through the Spindle OFF    | Setting 32            |
| M93     |             | Axis POS Capture Start             | P, Q                  |
| M94     |             | Axis POS Capture Stop              |                       |
| M95     |             | Sleep Mode                         |                       |
| M96     |             | Jump if No Input                   | P, Q                  |
| M97     | Program     | Local Sub-Program Call             | P, L                  |
| M98     | Program     | Sub-Program Call                   | P, L                  |
| M99     | Program     | M97 Local Sub-Program or M98 Sub-Program Return or Loop Program | Setting 118 |
| M101    | MOM         | MOM (Minimum Oil Machining) Canned Cycle Mode | I          |
| M102    | MOM         | MOM (Minimum Oil Machining) Mode              | I, J       |
| M103    | MOM         | MOM (Minimum Oil Machining) Mode Cancel       |            |
| M109    |             | Interactive User Input                        | P          |
