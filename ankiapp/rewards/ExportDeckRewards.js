class ExportDeckRewards {
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
    const rewardNames = Object.values(ExportDeckRewardNames);
    const rewardValues = Object.values(ExportDeckRewardValues);
    for (let i = 0; i < rewardNames.length; i++) {
        map.set(rewardNames[i], rewardValues[i]);
    }
    return map;
}

const ExportDeckRewardNames = {
    EXPORT_DECK: "Export Deck",
    RESET: "Reset",
    EXPORT: "Export",
};

const ExportDeckRewardValues = {
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