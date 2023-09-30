class DeleteDeckRewards {
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
    const rewardNames = Object.values(DeleteDeckRewardNames);
    const rewardValues = Object.values(DeleteDeckRewardValues);
    for (let i = 0; i < rewardNames.length; i++) {
        map.set(rewardNames[i],rewardValues[i]);
    }
    return map;
}

const DeleteDeckRewardNames = {
    DELETE_DECK: "Delete Deck",
};

const DeleteDeckRewardValues = {
    DELETE_DECK: [false],
};

/*
const DeleteDeckRewards = {
    DeleteDeck: false
};
*/