class EditCardRewards {
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
    const rewardNames = Object.values(EditCardRewardNames);
    const rewardValues = Object.values(EditCardRewardValues);
    for (let i = 0; i < rewardNames.length; i++) {
        map.set(rewardNames[i],rewardValues[i]);
    }
    return map;
}

const EditCardRewardNames = {
    EDIT_FRONT: "Edit Front",
    EDIT_BACK: "Edit Back",
    EDIT_TAG: "Edit Tag",
};

const EditCardRewardValues = {
    EDIT_FRONT: false,
    EDIT_BACK: false,
    EDIT_TAG: false,
};

/*
//reward structure of edit card popup
const EditCardRewards = {
    EditFront: false,
    EditBack: false,
    EditTag: false,
}
*/