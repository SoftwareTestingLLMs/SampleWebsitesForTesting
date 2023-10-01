export default class StudyDeckRewards {
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
    const rewardNames = Object.values(StudyDeckRewardNames);
    const rewardValues = Object.values(StudyDeckRewardValues);
    for (let i = 0; i < rewardNames.length; i++) {
        map.set(rewardNames[i],rewardValues[i]);
    }
    return map;
}

export const StudyDeckRewardNames = {
    STUDY_DECK: "Study Deck",
    STUDY: "Study",
};

export const StudyDeckRewardValues = {
    STUDY_DECK: [false, false, false, false, false],
    STUDY: [false],
};

/*
const StudyDeckRewards = {
    StudyDeck: [false, false, false, false, false],
    Study: false,
};
*/