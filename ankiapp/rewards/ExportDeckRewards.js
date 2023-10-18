export default class ExportDeckRewards {
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
    const rewardNames = Object.values(ExportDeckRewardNames);
    const rewardValues = Object.values(ExportDeckRewardValues);
    for (let i = 0; i < rewardNames.length; i++) {
        map.set(rewardNames[i], rewardValues[i]);
    }
    return map;
}

export const ExportDeckRewardNames = {
    EXPORT_DECK: "Export Deck",
    RESET: "Reset",
    EXPORT: "Export",
};

export const ExportDeckRewardValues = {
    EXPORT_DECK: [false, false, false, false, false],
    RESET: [false],
    EXPORT: [false],
};

/*
const ExportDeckRewards = {
    ExportDeck: [false, false, false, false, false],
    Reset: false,
    Export: false,
};
*/