export default class ImportDeckRewards {
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
    const rewardNames = Object.values(ImportDeckRewardNames);
    const rewardValues = Object.values(ImportDeckRewardValues);
    for (let i = 0; i < rewardNames.length; i++) {
        map.set(rewardNames[i],rewardValues[i]);
    }
    return map;
}

export const ImportDeckRewardNames = {
    CHANGE_DECK: "Change Deck",
    IMPORT_DECK: "Import Deck",
};

export const ImportDeckRewardValues = {
    CHANGE_DECK: [false, false, false],
    IMPORT_DECK: [false],
};

/*
//reward structure of import deck popup
const ImportDeckRewards = {
    ChangeDeck: [false, false, false],
    ImportDeck: false,
};
*/