import {IKeyValueIcon} from "../structs/IKeyValueIcon";

export interface IMonsterStatus {
    level?:  string | undefined;
    race?:   string | undefined;
    size?:   string | undefined;
    isMvp?: boolean | undefined;
}

export function getKeyValueIcon(monsterStatus: IMonsterStatus) : IKeyValueIcon[]{
    return [
        {
            "key": "Level",
            "value": monsterStatus.level,
            "icon": require(`@/assets/level-icon.png`)
        },
        {
            "key": "Race",
            "value": monsterStatus.race,
            "icon": require(`@/assets/race-icon.png`)
        },
        {
            "key": "Size",
            "value": monsterStatus.size,
            "icon": require("@/assets/medium-icon.png")
        },
    ] as IKeyValueIcon[]
}


