class StudyDeckRewards {
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
    const rewardNames = Object.values(StudyDeckRewardNames);
    const rewardValues = Object.values(StudyDeckRewardValues);
    for (let i = 0; i < rewardNames.length; i++) {
        map.set(rewardNames[i],rewardValues[i]);
    }
    return map;
}

const StudyDeckRewardNames = {
    STUDY_DECK: "Study Deck",
    STUDY: "Study",
};

const StudyDeckRewardValues = {
    STUDY_DECK: [false, false, false, false, false],
    STUDY: false,
};

/*
const StudyDeckRewards = {
    StudyDeck: [false, false, false, false, false],
    Study: false,
};
*/