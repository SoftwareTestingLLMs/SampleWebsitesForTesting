var ProfileNames = {
    Alice: "Alice",
    Bob: "Bob",
    Carol: "Carol",
    Dennis: "Dennis",
    Eva: "Eva",
};

var DeckNames = {
    DeckName1: "Deck Name 1",
    DeckName2: "Deck Name 2",
    DeckName3: "Deck Name 3",
    DeckName4: "Deck Name 4",
    DeckName5: "Deck Name 5",
};

var AccountNames = {
    AccountName1: "Account Name 1",
    AccountName2: "Account Name 2",
    AccountName3: "Account Name 3",
    AccountName4: "Account Name 4",
    AccountName5: "Account Name 5",
};

var AccountPasswords = {
    Password1: "Password 1",
    Password2: "Password 2",
    Password3: "Password 3",
    Password4: "Password 4",
    Password5: "Password 5",
};

let total_reward = 0
let add_card_front_counter = 0
let add_card_back_counter = 0
let add_card_tag_counter = 0
let create_deck_index = 0
let current_profile_index = 0
let current_account_index = 0
let anki_login_username_index = 0
let anki_login_password_index = 0
let current_password_index = 0
let current_profiles = [{name: ProfileNames.Alice, decks:[{name: DeckNames.DeckName1, cards:[{front: "", back: "", tag:""}]}], deck_index: 0}, {name: ProfileNames.Bob, decks:[{name: DeckNames.DeckName1, cards:[{front: "", back: "", tag:""}]}], deck_index: 0}, {name: ProfileNames.Carol, decks:[{name: DeckNames.DeckName1, cards:[{front: "", back: "", tag:""}]}], deck_index: 0}]
let possible_account_passwords = Object.values(AccountPasswords)
let possible_account_names = Object.values(AccountNames)
let possible_deck_names = Object.values(DeckNames)
let possible_profiles = Object.values(ProfileNames)

get_shared.addEventListener("click", function () {
    leadsToExternalWebsitePopup.classList.add("show");
});

closeAtLeastOneDeckPopupButton.addEventListener("click", function() {
    atLeastOneDeckPopup.classList.remove("show")
})

closeLeadsToExternalWebsitePopup.addEventListener("click", function () {
    leadsToExternalWebsitePopup.classList.remove("show");
});

add_card.addEventListener("click", function () {
    addCardPopup.classList.add("show");
});

add_card_button.addEventListener("click", addCard);
document.getElementById('current_sum').innerHTML = current_profiles[current_profile_index].decks.length

close_add_card_popup.addEventListener("click", function () {
    addCardPopup.classList.remove("show");
});

create_deck.addEventListener("click", function () {
    createNewDeckPopup.classList.add("show");
});

create_new_deck_close_button.addEventListener("click", function () {
    createNewDeckPopup.classList.remove("show");
});

delete_deck.addEventListener("click", function () {
    deleteDeckPopup.classList.add("show");
});

anki_login.addEventListener("click", function () {
    ankiLoginPopup.classList.add("show");
});

delete_deck_yes_button.addEventListener("click", function () {
    if(current_profiles[current_profile_index].decks.length == 1){
        deleteDeckPopup.classList.remove("show");
        atLeastOneDeckPopup.classList.add("show");
        return;
    }
    current_profiles[current_profile_index].decks.splice(current_profiles[current_profile_index].deck_index, 1);
    current_profiles[current_profile_index].deck_index = 0
    document.getElementById('current_deck').innerHTML = "Current deck: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].name
    resetDecks();
    loadDecks();
    document.getElementById('current_sum').innerHTML = current_profiles[current_profile_index].decks.length
    deleteDeckPopup.classList.remove("show");
})

delete_deck_no_button.addEventListener("click", function () {
    deleteDeckPopup.classList.remove("show");
});

document.getElementById('total_reward').innerHTML = total_reward;
document.getElementById('add_card_row_1').innerHTML = "Front Side " + add_card_front_counter;
document.getElementById('add_card_row_2').innerHTML = "Back Side " + add_card_back_counter;
document.getElementById('add_card_row_3').innerHTML = "Tag Text " + add_card_tag_counter;        
document.getElementById('create_new_deck').innerHTML = possible_deck_names[create_deck_index];
document.getElementById('current_profile').innerHTML = "Current profile: " + current_profiles[current_profile_index].name;
document.getElementById('current_deck').innerHTML = "Current deck: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].name;
document.getElementById('current_account').innerHTML = "Current account: " + possible_account_names[current_account_index];
document.getElementById('anki_login_row_1').innerHTML = possible_account_names[anki_login_username_index]
document.getElementById('anki_login_row_2').innerHTML = possible_account_passwords[anki_login_password_index]


function loadDecks() {
    for (let i = 0; i < current_profiles[current_profile_index].decks.length; i++) {
        document.getElementById('deck_row_' + (i+1).toString()).innerHTML = current_profiles[current_profile_index].decks[i].name
    }
}

function resetDecks() {
    for (let i = 0; i < current_profiles[current_profile_index].decks.length + 1; i++) {
        document.getElementById('deck_row_' + (i+1).toString()).innerHTML = ""
    }
}

add_card_button_1.addEventListener("click", function () {
    add_card_front_counter += 1;
    document.getElementById('add_card_row_1').innerHTML = "Front Side " + add_card_front_counter;
});

add_card_button_2.addEventListener("click", function () {
    add_card_back_counter += 1;
    document.getElementById('add_card_row_2').innerHTML = "Back Side " + add_card_back_counter;
});

add_card_button_3.addEventListener("click", function () {
    add_card_tag_counter += 1;
    document.getElementById('add_card_row_3').innerHTML = "Tag Text " + add_card_tag_counter;
});

create_new_deck_name_button.addEventListener("click", function () {
    create_deck_index += 1;
    create_deck_index %= 5;
    document.getElementById('create_new_deck').innerHTML = possible_deck_names[create_deck_index];
})

function addCard() {
    current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards.push({front: "Front Side " + add_card_front_counter, back: "Back Side " + add_card_back_counter, tag: "Tag Text " + add_card_tag_counter});
    addCardPopup.classList.remove("show")
}

create_new_deck_add_button.addEventListener("click", function () {
    if(current_profiles[current_profile_index].decks.length >= 5) {
        return;
    }
    for(let i = 0 ; i < current_profiles[current_profile_index].decks.length; i++) {
        if(current_profiles[current_profile_index].decks[i].name == Object.values(DeckNames)[create_deck_index]){
            return;
        }   
    }
    current_profiles[current_profile_index].decks.push({name: Object.values(DeckNames)[create_deck_index], cards:[{front: "", back: "", tag:""}]});
    document.getElementById('current_sum').innerHTML = current_profiles[current_profile_index].decks.length
    createNewDeckPopup.classList.remove("show");
    loadDecks()
})

anki_login_username_button.addEventListener("click", function () {
    anki_login_username_index += 1
    anki_login_username_index %= 5
    document.getElementById('anki_login_row_1').innerHTML = possible_account_names[anki_login_username_index]
})

anki_login_password_button.addEventListener("click", function () {
    anki_login_password_index += 1
    anki_login_password_index %= 5
    document.getElementById('anki_login_row_2').innerHTML = possible_account_passwords[anki_login_password_index]
})

anki_login_close_button.addEventListener("click", function () {
    ankiLoginPopup.classList.remove("show");
})

anki_login_ok_button.addEventListener("click", function () {
    if(anki_login_username_index != anki_login_password_index){
        return;
    }
    current_account_index = anki_login_username_index
    document.getElementById('current_account').innerHTML = "Current account: " + possible_account_names[current_account_index];
    ankiLoginPopup.classList.remove("show");
})

about_page_close_button.addEventListener("click", function (){
    aboutPagePopup.classList.remove("show");
})

deck_row_1.addEventListener("click", function () {
    if(0 < current_profiles[current_profile_index].decks.length) {
        current_profiles[current_profile_index].deck_index = 0
        document.getElementById('current_deck').innerHTML = "Current deck: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].name
    }
})

deck_row_2.addEventListener("click", function () {
    if(1 < current_profiles[current_profile_index].decks.length) {
        current_profiles[current_profile_index].deck_index = 1
        document.getElementById('current_deck').innerHTML = "Current deck: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].name
    }
})

deck_row_3.addEventListener("click", function () {
    if(2 < current_profiles[current_profile_index].decks.length) {
        current_profiles[current_profile_index].deck_index = 2
        document.getElementById('current_deck').innerHTML = "Current deck: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].name
    }
})

deck_row_4.addEventListener("click", function () {
    if(3 < current_profiles[current_profile_index].decks.length) {
        current_profiles[current_profile_index].deck_index = 3
        document.getElementById('current_deck').innerHTML = "Current deck: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].name
    }
})

deck_row_5.addEventListener("click", function () {
    if(4 < current_profiles[current_profile_index].decks.length) {
        current_profiles[current_profile_index].deck_index = 4
        document.getElementById('current_deck').innerHTML = "Current deck: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].name
    }
})

study_now.addEventListener("click", studyNow);
decks.addEventListener("click", studyNow);

function dropdown2Call() {  
    if(document.getElementById('book_logo').style.display == "none"){
        document.getElementById('book_logo').style.display = "block"
    } else {
        document.getElementById('book_logo').style.display = "none"
    }
}

function dropdown1Call() {
    var x = document.getElementById("dd1").value;
    switch(x) {
        case "exit":
        location.reload()
        break;
    }
}

function studyNow() {
    if(document.getElementById("create_deck").style.display == "none") {
        document.getElementById("create_deck").style.display = "block"
        document.getElementById("delete_deck").style.display = "block"
        document.getElementById("import_file").style.display = "block"
        document.getElementById("get_shared").style.display = "block"
        document.getElementById("current_profile").style.display = "block"
        document.getElementById("current_deck").style.display = "block"
        document.getElementById("current_account").style.display = "block"
        document.getElementById("study_now").style.display = "block"
        document.getElementById("edit").style.display = "none"
        document.getElementById("show_answer").style.display = "none"
        document.getElementById("remove").style.display = "none"
        document.getElementById("decks").style.display = "none"
        for(let i = 1;i <= 5;i++) {
            document.getElementById("deck_row_" + i).style.display = "block"
        }
    }else {
        document.getElementById("create_deck").style.display = "none"
        document.getElementById("delete_deck").style.display = "none"
        document.getElementById("import_file").style.display = "none"
        document.getElementById("get_shared").style.display = "none"
        document.getElementById("current_profile").style.display = "none"
        document.getElementById("current_deck").style.display = "none"
        document.getElementById("current_account").style.display = "none"
        document.getElementById("study_now").style.display = "none"
        document.getElementById("edit").style.display = "block"
        document.getElementById("show_answer").style.display = "block"
        document.getElementById("remove").style.display = "block"
        document.getElementById("decks").style.display = "block"
        for(let i = 1;i <= 5;i++) {
            document.getElementById("deck_row_" + i).style.display = "none"
        }
    }
}

function dropdown4Call() {
    var x = document.getElementById("dd4").value;
    switch(x) {
        case "guide":
        leadsToExternalWebsitePopup.classList.add("show");
        break;
        case "support":
        leadsToExternalWebsitePopup.classList.add("show");
        break;
        case "about_page":
        aboutPagePopup.classList.add("show");
        break;
    }
}
