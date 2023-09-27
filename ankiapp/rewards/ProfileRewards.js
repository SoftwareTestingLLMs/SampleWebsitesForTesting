class ProfileRewards {
    constructor() {
        this.rewardMap = initializeRewardMap();
    }

    assignReward(rewardName) {
        this.rewardMap.set(rewardName, true);
    }

    get rewardMap() {
        return this.rewardMap;
    }
}

function initializeRewardMap() {
    const map = new Map();
    const rewardNames = Object.values(ProfileRewardNames);
    const rewardValues = Object.values(ProfileRewardValues);
    for (let i = 0; i < rewardNames.length; i++) {
        map.set(rewardNames[i],rewardValues[i]);
    }
    return map;
}

const ProfileRewardNames = {
    CHANGE_PROFILE: "Change Profile",
    RENAME_PROFILE: "Rename Profile",
    ADD_PROFILE: "Add Profile",
    DELETE_PROFILE: "Delete Profile",
    OPEN_PROFILE: "Open Profile",
};

const ProfileRewardValues = {
    CHANGE_PROFILE: [false, false, false, false, false],
    RENAME_PROFILE: [false, false],
    ADD_PROFILE: [false, false],
    DELETE_PROFILE: false,
    OPEN_PROFILE: false,
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