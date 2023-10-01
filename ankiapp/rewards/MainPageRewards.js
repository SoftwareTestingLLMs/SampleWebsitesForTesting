export default class MainPageRewards {
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
    const rewardNames = Object.values(MainPageRewardNames);
    const rewardValues = Object.values(MainPageRewardValues);
    for (let i = 0; i < rewardNames.length; i++) {
        map.set(rewardNames[i],rewardValues[i]);
    }
    return map;
}

export const MainPageRewardNames = {
    STUDY_NOW: "Study Now",
    SHOW_ANSWER_BUTTON: "Show Answer Button",
    REMOVE_CARD: "Remove Card",
    CHANGE_DECK: "Change Deck",
};


export const MainPageRewardValues = {
    STUDY_NOW: [false,false],
    SHOW_ANSWER_BUTTON: [false, false],
    REMOVE_CARD: [false],
    CHANGE_DECK: [false, false, false, false, false],
};

/*
//reward structure of the actions from the main page
const MainPageRewards = {
    StudyNow: [false,false],
    ShowAnswerButton: [false, false],
    RemoveCard: false,
    ChangeDeck: [false, false, false, false, false],
};
*/