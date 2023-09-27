class ImportDeckRewards {
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
    const rewardNames = Object.values(ImportDeckRewardNames);
    const rewardValues = Object.values(ImportDeckRewardValues);
    for (let i = 0; i < rewardNames.length; i++) {
        map.set(rewardNames[i],rewardValues[i]);
    }
    return map;
}

const ImportDeckRewardNames = {
    CHANGE_DECK: "Change Deck",
    IMPORT_DECK: "Import Deck",
};

const ImportDeckRewardValues = {
    CHANGE_DECK: [false, false, false],
    IMPORT_DECK: false,
};

/*
//reward structure of import deck popup
const ImportDeckRewards = {
    ChangeDeck: [false, false, false],
    ImportDeck: false,
};
*/