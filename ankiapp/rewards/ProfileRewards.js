export default class ProfileRewards {
    constructor() {
        this.rewardMap = initializeRewardMap();
    }

    assignReward(rewardName, index) {
        const reward_array = this.rewardMap.get(rewardName)
        reward_array[index] = true
        this.rewardMap.set(rewardName, reward_array);
    }

    getReward(rewardName, index) {
        return this.rewardMap.get(rewardName)[index]
    }
}

export function initializeRewardMap() {
    const map = new Map();
    const rewardNames = Object.values(ProfileRewardNames);
    const rewardValues = Object.values(ProfileRewardValues);
    for (let i = 0; i < rewardNames.length; i++) {
        map.set(rewardNames[i],rewardValues[i]);
    }
    return map;
}

export const ProfileRewardNames = {
    CHANGE_PROFILE: "Change Profile",
    RENAME_PROFILE: "Rename Profile",
    ADD_PROFILE: "Add Profile",
    DELETE_PROFILE: "Delete Profile",
    OPEN_PROFILE: "Open Profile",
};

export const ProfileRewardValues = {
    CHANGE_PROFILE: [false, false, false, false, false],
    RENAME_PROFILE: [false, false],
    ADD_PROFILE: [false, false],
    DELETE_PROFILE: [false],
    OPEN_PROFILE: [false],
};

/*
//reward structure of profile popup
const ProfileRewards = {
    ChangeProfile: [false, false, false, false, false],
    RenameProfile: [false,false],
    AddProfile: [false,false],
    DeleteProfile: false,
    OpenProfile: false,
};
*/