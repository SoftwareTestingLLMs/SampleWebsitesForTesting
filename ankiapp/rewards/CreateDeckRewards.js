class CreateDeckRewards {
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
    const rewardNames = Object.values(CreateDeckRewardNames);
    const rewardValues = Object.values(CreateDeckRewardValues);
    for (let i = 0; i < rewardNames.length; i++) {
        map.set(rewardNames[i], rewardValues[i]);
    }
    return map;
}

const CreateDeckRewardNames = {
    EXPORT_DECK: "Export Deck",
    RESET: "Reset",
    EXPORT: "Export",
};

const CreateDeckRewardValues = {
    EXPORT_DECK: [false, false, false],
    RESET: false,
    EXPORT: false,
};

/*
//reward structure of create deck popup
const CreateDeckRewards = {
    ChangeDeck: false,
    CreateDeck: false,
};
*/