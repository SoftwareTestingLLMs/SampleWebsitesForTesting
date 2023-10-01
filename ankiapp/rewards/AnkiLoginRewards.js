export default class AnkiLoginRewards {
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
    const rewardNames = Object.values(AnkiLoginRewardNames);
    const rewardValues = Object.values(AnkiLoginRewardValues);
    for (let i = 0; i < rewardNames.length; i++) {
        map.set(rewardNames[i],rewardValues[i]);
    }
    return map;
}

export const AnkiLoginRewardNames = {
    INCREMENT: "Increment",
    LOGIN: "Login",
};

export const AnkiLoginRewardValues = {
    INCREMENT: [false, false],
    LOGIN: [false],
};

/*
const AnkiLoginRewards = {
    Increment: [false, false],
    Login: false,
};
*/