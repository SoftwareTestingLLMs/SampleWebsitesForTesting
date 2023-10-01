export default class CreateDeckRewards {
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
    const rewardNames = Object.values(CreateDeckRewardNames);
    const rewardValues = Object.values(CreateDeckRewardValues);
    for (let i = 0; i < rewardNames.length; i++) {
        map.set(rewardNames[i], rewardValues[i]);
    }
    return map;
}

export const CreateDeckRewardNames = {
    CHANGE_DECK: "Export Deck",
    CREATE_DECK: "Reset",
};

export const CreateDeckRewardValues = {
    CHANGE_DECK: [false],
    CREATE_DECK: [false],
};

/*
//reward structure of create deck popup
const CreateDeckRewards = {
    ChangeDeck: false,
    CreateDeck: false,
};
*/