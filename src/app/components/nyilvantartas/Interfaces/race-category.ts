export enum RaceCategories{
  TRAIL_KEZDO_GYEREK = 'Kezdő Gyerek',
  TRAIL_GYEREK = 'Gyerek',
  TRAIL_NOVICE_YOUTH = 'Novice Youth',
  TRAIL_YOUTH = 'Youth',
  TRAIL_AMATEUR = 'Amature',
  TRAIL_NOVICE_AMATEUR = 'Novice Amature',
  TRAIL_LIMITED_OPEN = 'Limited Open',
  TRAIL_OPEN = 'Open',

 PLEASURE_KEZDO_GYEREK = 'Kezdő Gyerek',
 PLEASURE_GYEREK = 'Gyerek',
 PLEASURE_NOVICE_YOUTH = 'Novice Youth',
 PLEASURE_YOUTH = 'Youth',
 PLEASURE_AMATEUR = 'Amature',
 PLEASURE_NOVICE_AMATEUR = 'Novice Amature',
 PLEASURE_LIMITED_OPEN = 'Limited Open',
 PLEASURE_OPEN = 'Open',

 HORSEMANSHIP_KEZDO_GYEREK = 'Kezdő Gyerek',
 HORSEMANSHIP_GYEREK = 'Gyerek',
 HORSEMANSHIP_NOVICE_YOUTH = 'Novice Youth',
 HORSEMANSHIP_YOUTH = 'Youth',
 HORSEMANSHIP_AMATEUR = 'Amature',
 HORSEMANSHIP_NOVICE_AMATEUR = 'Novice Amature',
 HORSEMANSHIP_LIMITED_OPEN = 'Limited Open',

 RANCHRIDING_KEZDO_GYEREK = 'Kezdő Gyerek',
 RANCHRIDING_GYEREK = 'Gyerek',
 RANCHRIDING_NOVICE_YOUTH = 'Novice Youth',
 RANCHRIDING_YOUTH = 'Youth',
 RANCHRIDING_AMATEUR = 'Amature',
 RANCHRIDING_NOVICE_AMATEUR = 'Novice Amature',
 RANCHRIDING_LIMITED_OPEN = 'Limited Open',
 RANCHRIDING_OPEN = 'Open',

 REINING_YOUTH = 'Youth',
 REINING_AMATEUR = 'Amature',
 REINING_LIMITED_OPEN = 'Limited Open',
 REINING_OPEN = 'Open',

 OTHER = 'Egyéb'

}


export interface RaceCategory {

  id : null,
  raceCategory: RaceCategories[];
}
