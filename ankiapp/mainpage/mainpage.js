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
let current_profiles = [{name: ProfileNames.Alice, decks:[{name: DeckNames.DeckName1, cards:[{front: "Front text", back: "Back text", tag:"Some tag"}]}], deck_index: 0, current_study_index: 0}, 
                        {name: ProfileNames.Bob, decks:[{name: DeckNames.DeckName1, cards:[{front: "Front text", back: "Back text", tag:"Some tag"}]}], deck_index: 0, current_study_index: 0}, 
                        {name: ProfileNames.Carol, decks:[{name: DeckNames.DeckName1, cards:[{front: "Front text", back: "Back text", tag:"Some tag"}]}], deck_index: 0, current_study_index: 0}]
let possible_account_passwords = Object.values(AccountPasswords)
let possible_account_names = Object.values(AccountNames)
let possible_deck_names = Object.values(DeckNames)
let possible_profiles = Object.values(ProfileNames)

get_shared.addEventListener("click", function () {
    leadsToExternalWebsitePopup.classList.add("show");
});

close_already_five_decks_popup_button.addEventListener("click", function() {
    alreadyFiveDecksPopup.classList.remove("show")
})

close_deck_exists_popup_button.addEventListener("click", function() {
    deckExistsPopup.classList.remove("show")
})



check_media_close_button.addEventListener("click", function() {
    checkMediaPopup.classList.remove("show")
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
        document.getElementById('deleteDeckPopup').classList.remove("show")
        document.getElementById('atLeastOneDeckPopup').classList.add("show")
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

document.getElementById('add_card_row_1').innerHTML = "Front Side " + add_card_front_counter;
document.getElementById('add_card_row_2').innerHTML = "Back Side " + add_card_back_counter;
document.getElementById('add_card_row_3').innerHTML = "Tag Text " + add_card_tag_counter;        
document.getElementById('create_new_deck').innerHTML = possible_deck_names[create_deck_index];
document.getElementById('current_profile').innerHTML = "Current profile: " + current_profiles[current_profile_index].name;
document.getElementById('current_deck').innerHTML = "Current deck: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].name;
document.getElementById('current_account').innerHTML = "Current account: " + possible_account_names[current_account_index];
document.getElementById('anki_login_row_1').innerHTML = possible_account_names[anki_login_username_index]
document.getElementById('anki_login_row_2').innerHTML = possible_account_passwords[anki_login_password_index]
document.getElementById('current_deck_study').innerHTML = "Current deck: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].name;
document.getElementById('current_card_number_study').innerHTML = "Current card number: " + (current_profiles[current_profile_index].current_study_index + 1);
document.getElementById('number_of_cards_study').innerHTML = "Current number of cards: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards.length
document.getElementById('question').innerHTML = "Question: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].current_study_index].front 
document.getElementById('answer').innerHTML = "Answer: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].current_study_index].back


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



close_at_least_one_deck_popup_button.addEventListener("click", function (){
    atLeastOneDeckPopup.classList.remove("show")
})

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

function showAnswer() {
    if(document.getElementById('answer').style.display == "none"){
        document.getElementById('answer').style.display = "block"
        document.getElementById('show_answer').style.display = "none"
        document.getElementById('next_question').style.display = "block"
    } else if(document.getElementById('answer').style.display == "block") {
        document.getElementById('answer').style.display = "none"
        document.getElementById('show_answer').style.display = "block"
        document.getElementById('next_question').style.display = "none"
        current_profiles[current_profile_index].current_study_index += 1
        current_profiles[current_profile_index].current_study_index %= current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards.length
        document.getElementById('current_card_number_study').innerHTML = "Current card number: " + (current_profiles[current_profile_index].current_study_index + 1);
        document.getElementById('question').innerHTML = "Question: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].current_study_index].front 
        document.getElementById('answer').innerHTML = "Answer: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].current_study_index].back
    }
}

function addCard() {
    current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards.push({front: "Front Side " + add_card_front_counter, back: "Back Side " + add_card_back_counter, tag: "Tag Text " + add_card_tag_counter});
    document.getElementById('current_sum').innerHTML = current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards.length
    document.getElementById('number_of_cards_study').innerHTML = "Current number of cards: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards.length
    addCardPopup.classList.remove("show")
}

remove_card.addEventListener("click", function() {
    if(current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards.length == 1) {
        return;
    }
    current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards.pop()
    current_profiles[current_profile_index].current_study_index > 0 ? current_profiles[current_profile_index].current_study_index -= 1 : 0 
    document.getElementById('current_card_number_study').innerHTML = "Current card number: " + (current_profiles[current_profile_index].current_study_index + 1);
    document.getElementById('number_of_cards_study').innerHTML = "Current number of cards: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards.length
    document.getElementById('question').innerHTML = "Question: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].current_study_index].front 
    document.getElementById('answer').innerHTML = "Answer: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].current_study_index].back
})

create_new_deck_add_button.addEventListener("click", function () {
    if(current_profiles[current_profile_index].decks.length >= 5) {
        document.getElementById('createNewDeckPopup').classList.remove("show")
        document.getElementById('alreadyFiveDecksPopup').classList.add("show")
        return;
    }
    for(let i = 0 ; i < current_profiles[current_profile_index].decks.length; i++) {
        if(current_profiles[current_profile_index].decks[i].name == Object.values(DeckNames)[create_deck_index]){
            document.getElementById('createNewDeckPopup').classList.remove("show")
            document.getElementById('deckExistsPopup').classList.add("show")
            return;
        }   
    }
    current_profiles[current_profile_index].decks.push({name: Object.values(DeckNames)[create_deck_index], cards:[{front: "Front text", back: "Back text", tag:"Tag text"}]});
    document.getElementById('current_sum').innerHTML = current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards.length
    createNewDeckPopup.classList.remove("show");
    loadDecks()
})

study_deck_popup_cancel_button.addEventListener("click", function () {
    studyDeckPopup.classList.remove("show")
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
        failedLoginPopup.classList.add("show")
        ankiLoginPopup.classList.remove("show")
        return;
    }
    current_account_index = anki_login_username_index
    document.getElementById('current_account').innerHTML = "Current account: " + possible_account_names[current_account_index];
    ankiLoginPopup.classList.remove("show");
})

about_page_close_button.addEventListener("click", function (){
    aboutPagePopup.classList.remove("show");
})

close_failed_login_popup.addEventListener("click", function (){
    failedLoginPopup.classList.remove("show");
})

deck_row_1.addEventListener("click", function () {
    if(0 < current_profiles[current_profile_index].decks.length) {
        current_profiles[current_profile_index].deck_index = 0
        document.getElementById('current_deck').innerHTML = "Current deck: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].name
    }
    document.getElementById('current_sum').innerHTML = current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards.length
})

deck_row_2.addEventListener("click", function () {
    if(1 < current_profiles[current_profile_index].decks.length) {
        current_profiles[current_profile_index].deck_index = 1
        document.getElementById('current_deck').innerHTML = "Current deck: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].name
    }
    document.getElementById('current_sum').innerHTML = current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards.length
})

deck_row_3.addEventListener("click", function () {
    if(2 < current_profiles[current_profile_index].decks.length) {
        current_profiles[current_profile_index].deck_index = 2
        document.getElementById('current_deck').innerHTML = "Current deck: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].name
    }
    document.getElementById('current_sum').innerHTML = current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards.length
})

deck_row_4.addEventListener("click", function () {
    if(3 < current_profiles[current_profile_index].decks.length) {
        current_profiles[current_profile_index].deck_index = 3
        document.getElementById('current_deck').innerHTML = "Current deck: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].name
    }
    document.getElementById('current_sum').innerHTML = current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards.length
})

deck_row_5.addEventListener("click", function () {
    if(4 < current_profiles[current_profile_index].decks.length) {
        current_profiles[current_profile_index].deck_index = 4
        document.getElementById('current_deck').innerHTML = "Current deck: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].name
    }
    document.getElementById('current_sum').innerHTML = current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards.length
})

study_now.addEventListener("click", studyNow);
decks.addEventListener("click", studyNow);

function dropdown1Call() {
    var x = document.getElementById("dd1").value;
    switch(x) {
        case "exit":
        location.reload()
        break;
    }
}

function dropdown2Call() {  
    if(document.getElementById('book_logo').style.display == "none"){
        document.getElementById('book_logo').style.display = "block"
    } else {
        document.getElementById('book_logo').style.display = "none"
    }
}

function dropdown3Call() {
    var x = document.getElementById("dd3").value;
    switch(x) {
        case "check_media":
        checkMediaPopup.classList.add("show")
        break;
        case "study_deck":
        studyDeckPopup.classList.add("show")
        break;
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
        document.getElementById("question").style.display = "none"
        document.getElementById("answer").style.display = "none"
        document.getElementById("edit").style.display = "none"
        document.getElementById("show_answer").style.display = "none"
        document.getElementById("next_question").style.display = "none"
        document.getElementById("remove_card").style.display = "none"
        document.getElementById("decks").style.display = "none"
        document.getElementById("current_deck_study").style.display = "none"
        document.getElementById("current_card_number_study").style.display = "none"
        document.getElementById("number_of_cards_study").style.display = "none"
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
        document.getElementById("question").style.display = "block"
        document.getElementById("answer").style.display = "none"
        document.getElementById("edit").style.display = "block"
        document.getElementById("show_answer").style.display = "block"
        document.getElementById("next_question").style.display = "none"
        document.getElementById("remove_card").style.display = "block"
        document.getElementById("decks").style.display = "block"
        document.getElementById("current_deck_study").style.display = "block"
        document.getElementById("current_card_number_study").style.display = "block"
        document.getElementById("number_of_cards_study").style.display = "block"
        for(let i = 1;i <= 5;i++) {
            document.getElementById("deck_row_" + i).style.display = "none"
        }
    }
}
