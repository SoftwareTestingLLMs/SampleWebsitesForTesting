
export default class AddCardRewards {
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
    const rewardNames = Object.values(AddCardRewardNames);
    const rewardValues = Object.values(AddCardRewardValues);
    for (let i = 0; i < rewardNames.length; i++) {
        map.set(rewardNames[i],rewardValues[i]);
    }
    return map;
}

export const AddCardRewardNames = {
    INCREMENT: "Increment",
    ADD_CARD: "Add Card",
};


export const AddCardRewardValues = {
    INCREMENT: [false, false, false],
    ADD_CARD: [false],
};

/*
const AddCardRewards = {
    Increment: [false, false, false],
    AddCard: false,
};
*/