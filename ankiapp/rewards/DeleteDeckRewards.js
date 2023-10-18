export default class DeleteDeckRewards {
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
    const rewardNames = Object.values(DeleteDeckRewardNames);
    const rewardValues = Object.values(DeleteDeckRewardValues);
    for (let i = 0; i < rewardNames.length; i++) {
        map.set(rewardNames[i],rewardValues[i]);
    }
    return map;
}

export const DeleteDeckRewardNames = {
    DELETE_DECK: "Delete Deck",
};

export const DeleteDeckRewardValues = {
    DELETE_DECK: [false],
};

/*
const DeleteDeckRewards = {
    DeleteDeck: false
};
*/