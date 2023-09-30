class StudyDeckRewards {
    constructor() {
        this.rewardMap = initializeRewardMap();
    }

    assignReward(rewardName, index) {
        this.rewardMap.set(rewardName[index], true);
    }

    getReward(rewardName, index){
        return this.rewardMap.get(rewardName)[index]
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
    STUDY: [false],
};

/*
const StudyDeckRewards = {
    StudyDeck: [false, false, false, false, false],
    Study: false,
};
*/