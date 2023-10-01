export default class EditCardRewards {
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
    const rewardNames = Object.values(EditCardRewardNames);
    const rewardValues = Object.values(EditCardRewardValues);
    for (let i = 0; i < rewardNames.length; i++) {
        map.set(rewardNames[i],rewardValues[i]);
    }
    return map;
}

export const EditCardRewardNames = {
    EDIT_FRONT: "Edit Front",
    EDIT_BACK: "Edit Back",
    EDIT_TAG: "Edit Tag",
};

export const EditCardRewardValues = {
    EDIT_FRONT: [false],
    EDIT_BACK: [false],
    EDIT_TAG: [false],
};

/*
//reward structure of edit card popup
const EditCardRewards = {
    EditFront: false,
    EditBack: false,
    EditTag: false,
}
*/