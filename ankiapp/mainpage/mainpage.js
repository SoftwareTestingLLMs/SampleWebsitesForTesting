import * as AddCardRewards from '../rewards/AddCardRewards.js';
import * as AnkiLoginRewards from '../rewards/AnkiLoginRewards.js';
import * as CreateDeckRewards from '../rewards/CreateDeckRewards.js';
import * as DeleteDeckRewards from '../rewards/DeleteDeckRewards.js';
import * as DropdownRewards from '../rewards/DropdownRewards.js';
import * as EditCardRewards from '../rewards/EditCardRewards.js';
import * as ExportDeckRewards from '../rewards/ExportDeckRewards.js';
import * as ImportDeckRewards from '../rewards/ImportDeckRewards.js';
import * as MainPageRewards from '../rewards/MainPageRewards.js';
import * as OpenClosePopupsRewards from '../rewards/OpenClosePopupsRewards.js';
import * as PreferencesPageRewards from '../rewards/PreferencesPageRewards.js';
import * as ProfileRewards from '../rewards/ProfileRewards.js';
import * as StudyDeckRewards from '../rewards/StudyDeckRewards.js';

import {AccountNames} from '../AccountNames.js';
import {AccountPasswords} from '../AccountPasswords.js';
import {Card} from '../Card.js';
import {Deck} from '../Deck.js';
import {DeckNames} from '../DeckNames.js';
import {Profile} from '../Profile.js';
import {ProfileNames} from '../ProfileNames.js';


//amount of reward collected by the agent
let total_sum_of_reward = 0

//incremental counters to provide seperate texts of card components
let add_card_front_counter = 0
let add_card_back_counter = 0
let add_card_tag_counter = 0

//indices in the range [0,4] to set seperate deck, anki account and profile names
let create_deck_index = 0
let current_profile_index = 0
let current_account_index = 0

//integer in the range [0,4] to provide seperate account names and passwords
let anki_login_username_index = 0
let anki_login_password_index = 0

//indices in the range [0,4] to determine which element has been chosen
let study_deck_temporary_index = 0
let deck_import_index = 0
let deck_export_index = 0
let switch_profile_index = 0

//integer in the range [0,4] to determine which profile name is to add/rename
let rename_profile_index = 0
let add_profile_index = 0

//preferences page counters
let preferences_page_counter_1 = 0
let preferences_page_counter_2 = 0
let preferences_page_counter_3 = 0
let preferences_page_counter_4 = 0
let preferences_page_counter_5 = 0


//default deck with name "Deck Name 1"
let default_deck_cards = [new Card("Front text","Back text","Some tag")]
let default_deck = new Deck(DeckNames.DECK_NAME_1, default_deck_cards, 0)

//predefined importable decks
let dutch_deck_cards = [new Card("0","nul",""), new Card("1","een",""), new Card("2","twee",""),
new Card("3","drie",""), new Card("4","vier",""), new Card("5","vijf",""), new Card("6","zes",""),
new Card("7","zeven",""), new Card("8","acht",""), new Card("9","negen",""), new Card("10","tien","")]
let dutch_deck = new Deck(DeckNames.DUTCH_DECK, dutch_deck_cards, 0)

let english_deck_cards = [new Card("0","zero",""), new Card("1","one",""), new Card("2","two",""),
new Card("3","three",""), new Card("4","four",""), new Card("5","five",""), new Card("6","six",""),
new Card("7","seven",""), new Card("8","eight",""), new Card("9","nine",""), new Card("10","ten","")]
let english_deck = new Deck(DeckNames.ENGLISH_DECK, english_deck_cards, 0)

let german_deck_cards = [new Card("0","null",""), new Card("1","eins",""), new Card("2","zwei",""),
new Card("3","drei",""), new Card("4","vier",""), new Card("5","fünf",""), new Card("6","sechs",""),
new Card("7","sieben",""), new Card("8","acht",""), new Card("9","neun",""), new Card("10","zehn","")]
let german_deck = new Deck(DeckNames.GERMAN_DECK, german_deck_cards, 0)

let alice = new Profile(ProfileNames.ALICE, [default_deck], 0)
let bob = new Profile(ProfileNames.BOB, [default_deck], 0)
let carol = new Profile(ProfileNames.CAROL, [default_deck], 0)

//array of the present profiles
let current_profiles = [alice,bob,carol]

let account_passwords = Object.values(AccountPasswords)
let account_names = Object.values(AccountNames)
let deck_names = Object.values(DeckNames)
let profile_names = Object.values(ProfileNames)

//importable decks as an array
const importable_decks = [dutch_deck, german_deck, english_deck]
let exported_decks = []

//rewards as map


const rewards = [AddCardRewards ,AnkiLoginRewards, CreateDeckRewards, DeleteDeckRewards,
    DropdownRewards, EditCardRewards, ExportDeckRewards, ImportDeckRewards, 
    MainPageRewards, OpenClosePopupsRewards, PreferencesPageRewards, ProfileRewards,
    StudyDeckRewards]

for(var i = 0; i < rewards.length; i++) {
    rewards[i].initializeRewardMap()
}


let addCardRewards = new AddCardRewards.default
let ankiLoginRewards = new AnkiLoginRewards.default
let createDeckRewards = new CreateDeckRewards.default 
let deleteDeckRewards = new DeleteDeckRewards.default 
let dropdownRewards = new DropdownRewards.default
let editCardRewards = new EditCardRewards.default
let exportDeckRewards = new ExportDeckRewards.default 
let importDeckRewards = new ImportDeckRewards.default 
let mainPageRewards = new MainPageRewards.default
let openClosePopupsRewards = new OpenClosePopupsRewards.default 
let preferencesPageRewards = new PreferencesPageRewards.default
let profileRewards = new ProfileRewards.default
let studyDeckRewards = new StudyDeckRewards.default


function increment_reward() {
    total_sum_of_reward += 1
    set_innerHTML(get_innerHTML('total_reward'),"Total sum of rewards:" + total_sum_of_reward)
}

function reset_reward() {
    total_sum_of_reward = 0
    set_innerHTML(get_innerHTML('total_reward'),"Total sum of rewards:" + total_sum_of_reward)
}

function get_innerHTML(identifier) {
    return get_element_by_id(identifier).innerHTML
}

function set_innerHTML(innerHTML, newString){
    innerHTML = newString
}

function make_visible(element) {
    element.classList.add("show")
}

function make_invisible(element) {
    element.classList.remove("show")
}

function set_index(indexName, newInteger) {
    indexName = newInteger
}

function modulo_index_increment(indexName, modulo) {
    return (indexName + 1) % modulo
}

function update_names(identifier, loop_length){
    //cleanExportableDeckNames
    //cleanStudyDeckNames
    //cleanMainPageDeckNames
    //cleanProfileNames
    //loadImportableDecks
    //loadExportableDecks
    //loadStudyPopupDecks
    //loadMainPageDecks
    for(let i = 0; i < loop_length; i++){
        set_innerHTML(get_innerHTML(identifier + (i+1).toString()),"");
    }
}

function provide_event_to_item(item, event) {
    item.addEventListener("click", event);
}

function get_element_by_id(identifier){
    return document.getElementById(identifier)
}

function set_display(identifier, newValue){
    get_element_by_id(identifier).style.display = newValue
}

//function to set the import popup
function importDeckPopupLoad() {
    if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.IMPORT_DECK), 0){
        openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.IMPORT_DECK, 0)
        increment_reward()
    }
    set_index(deck_import_index, 0)
    set_innerHTML(get_innerHTML('deck_to_import'), "Deck to import: " + importable_decks[deck_import_index].name)
    make_visible(importDeckPopup)
    loadImportableDecks()
}

//function to set the export popup
function exportDeckPopupLoad() {
    set_index(deck_export_index, 0)
    if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.EXPORT_DECK), 0) {
        openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.EXPORT_DECK, 0)
        increment_reward()
    }
    make_visible(exportDeckPopup)
    set_innerHTML(get_innerHTML('exported_decks_number'), "Number of exported decks: " + exported_decks.length)
    cleanExportableDeckNames()
    loadExportableDecks()
}

//function to set the profile popup
function switchProfilePopupLoad() {
    cleanProfileNames()
    loadProfileNames()
    if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.SWITCH_PROFILE, 0)) {
        openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.SWITCH_PROFILE, 0)
        increment_reward()
    }
    make_visible(switchProfilePopup)
}

function change_visible_items(items_to_hide, items_to_show){
    for(let i = 0; i < items_to_hide.length; i++){
        set_display(items_to_hide[i], "none")
    }
    
    for(let i = 0; i < items_to_show.length; i++){
        set_display(items_to_show[i], "block")
    }
}

//function to hide the elements which are not in the preferences-scheduling tab and display the elements in preferences-scheduling tab
function switchToSchedulingTab() {
    if(!preferencesPageRewardMap.getReward(PreferencesPageRewardNames.TAB), 1){
        preferencesPageRewardMap.assignReward(PreferencesPageRewardNames.TAB, 1)
        increment_reward()
    }
    const items_to_hide = ['preferences_dd_1', 'preferences_dd_2', 'preferences_dd_3', 'preferences_dd_4', 'checkbox_1', 'checkbox_2', 'checkbox_3', 'checkbox_4', 'checkbox_5', 'increment_decrement_1', 'user_interface_size_text', 'preferences_page_box_5', 'preferences_page_text_button', 'checkbox_11', 'checkbox_12', 'checkbox_13', 'checkbox_14', 'increment_decrement_5', 'number_of_backups_text']
    const items_to_show = ['checkbox_6', 'checkbox_7', 'checkbox_8', 'checkbox_9', 'checkbox_10', 'increment_decrement_2', 'increment_decrement_3', 'increment_decrement_4', 'learn_ahead_text', 'timebox_time_text', 'next_day_text']
    change_visible_items(items_to_hide, items_to_show)
}

//function to hide the elements which are not in the preferences-basic tab and display the elements in preferences-basic tab
function switchToBasicTab() {
    if(!preferencesPageRewardMap.getReward(PreferencesPageRewardNames.TAB, 0) && get_display('preferences_dd_1') == 'none') {
        preferencesPageRewardMap.assignReward(PreferencesPageRewardNames.TAB, 0)
        increment_reward()
    }
    const items_to_hide = ['checkbox_6', 'checkbox_7', 'checkbox_8', 'checkbox_9', 'checkbox_10', 'checkbox_11', 'checkbox_12', 'checkbox_13', 'checkbox_14', 'increment_decrement_2', 'increment_decrement_3', 'increment_decrement_4', 'learn_ahead_text', 'timebox_time_text', 'next_day_text', 'increment_decrement_5', 'number_of_backups_text']
    const items_to_show = ['preferences_dd_1', 'preferences_dd_2', 'preferences_dd_3', 'preferences_dd_4', 'checkbox_1', 'checkbox_2', 'checkbox_3', 'checkbox_4', 'checkbox_5', 'increment_decrement_1', 'user_interface_size_text', 'preferences_page_box_5', 'preferences_page_text_button']
    change_visible_items(items_to_hide, items_to_show)
}

//function to hide the elements which are not in the preferences-network tab and display the elements in preferences-network tab
function switchToNetworkTab() {
    if(!preferencesPageRewardMap.getReward(PreferencesPageRewardNames.TAB, 2)){
        preferencesPageRewardMap.assignReward(PreferencesPageRewardNames.TAB, 2)
        increment_reward()
    }
    const items_to_hide = ['preferences_dd_1', 'preferences_dd_2', 'preferences_dd_3', 'preferences_dd_4', 'checkbox_1', 'checkbox_2', 'checkbox_3', 'checkbox_4', 'checkbox_5', 'increment_decrement_1', 'user_interface_size_text', 'preferences_page_box_5', 'preferences_page_text_button', 'checkbox_6', 'checkbox_7', 'checkbox_8', 'checkbox_9', 'checkbox_10', 'increment_decrement_2', 'increment_decrement_3', 'increment_decrement_4', 'learn_ahead_text', 'timebox_time_text', 'next_day_text', 'increment_decrement_5', 'number_of_backups_text']
    const items_to_show = ['checkbox_11', 'checkbox_12', 'checkbox_13', 'checkbox_14']
    change_visible_items(items_to_hide, items_to_show)
}

//function to hide the elements which are not in the preferences-backups tab and display the elements in preferences-backups tab
function switchToBackupsTab() {
    if(!preferencesPageRewardMap.getReward(PreferencesPageRewardNames.TAB, 3)){
        preferencesPageRewardMap.assignReward(PreferencesPageRewardNames.TAB, 3)
        increment_reward()
    }
    const items_to_hide = ['preferences_dd_1', 'preferences_dd_2', 'preferences_dd_3', 'preferences_dd_4', 'checkbox_1', 'checkbox_2', 'checkbox_3', 'checkbox_4', 'checkbox_5', 'increment_decrement_1', 'user_interface_size_text', 'preferences_page_box_5', 'preferences_page_text_button', 'checkbox_6', 'checkbox_7', 'checkbox_8', 'checkbox_9', 'checkbox_10', 'increment_decrement_2', 'increment_decrement_3', 'increment_decrement_4', 'learn_ahead_text', 'timebox_time_text', 'next_day_text', 'checkbox_11', 'checkbox_12', 'checkbox_13', 'checkbox_14']
    const items_to_show = ['increment_decrement_5', 'number_of_backups_text']
    change_visible_items(items_to_hide, items_to_show)
}

//function to load the present profile names to the rows of switch profile popup
function loadProfileNames() {
    for(let i = 0; i < current_profiles.length; i++) {
        set_innerHTML(get_innerHTML('switch_profile_popup_row_' + (i+1).toString()), current_profiles[i].name)
    }
    set_innerHTML(get_innerHTML('profile_to_open'), "Profile to open: " + current_profiles[switch_profile_index].name)
}

//function to switch between showing/not showing the answer of a question 
function showAnswer() {
    if(get_display('answer') == "none"){
        set_display('answer', "block");
        set_display('show_answer', "none");
        set_display('next_question', "block");
        if(!(MainPageRewards.default).getReward(MainPageRewardNames.SHOW_ANSWER_BUTTON, 0)) {
            (MainPageRewards.default).assignReward(MainPageRewardNames.SHOW_ANSWER_BUTTON, 0)
            increment_reward()
        }
    } else if(get_display('answer') == "block") {
        current_profile = current_profiles[current_profile_index]
        current_decks = current_profile.decks
        current_deck = current_decks[current_profile.deck_index]
        current_cards = current_decks[current_profile_deck_index].cards
        
        set_display('answer', "none")
        set_display('show_answer', "block");
        set_display('next_question', "none");
        modulo_index_increment(current_deck.current_study_index, current_cards.length)
        set_innerHTML(get_innerHTML('current_card_number_study'), "Current card number: " + (current_deck.current_study_index + 1))
        set_innerHTML(get_innerHTML('question'), "Question: " + current_cards[current_deck.current_study_index].front);
        set_innerHTML(get_innerHTML('answer'), "Answer: " + current_cards[current_deck.current_study_index].back);
        if(!mainPageRewardMap.getReward(MainPageRewardNames.SHOW_ANSWER_BUTTON, 1)) {
            mainPageRewardMap.assignReward(MainPageRewardNames.SHOW_ANSWER_BUTTON, 1)
            increment_reward()
        }
    }
}

//function to assign functions to the components of the first dropdown
function dropdown1Call() {
    var x = get_element_by_id("dd1").value;
    switch(x) {
        case "switch_profile":
        if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.SWITCH_PROFILE, 0)) {
            openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.SWITCH_PROFILE, 0)
            increment_reward()
        }        
        if(!dropdownRewardMap.getReward(DropdownRewardNames.DROPDOWN_1, 0)) {
            dropdownRewardMap.assignReward(DropdownRewardNames.DROPDOWN_1, 0)
            increment_reward()
        }
        switchProfilePopupLoad()
        break;
        case "import":
        if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.IMPORT_DECK, 0)) {
            openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.IMPORT_DECK, 0)
            increment_reward()
        }
        if(!dropdownRewardMap.getReward(DropdownRewardNames.DROPDOWN_1, 1)) {
            dropdownRewardMap.assignReward(DropdownRewardNames.DROPDOWN_1, 1)
            increment_reward()
        }
        importDeckPopupLoad()
        break;
        case "export_deck":
        if(!dropdownRewardMap.getReward(DropdownRewardNames.DROPDOWN_1, 2)) {
            dropdownRewardMap.assignReward(DropdownRewardNames.DROPDOWN_1, 2)
            increment_reward()
        }
        if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.EXPORT_DECK, 0)) {
            openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.EXPORT_DECK, 0)
            increment_reward()
        }
        exportDeckPopupLoad()
        break;
        case "exit":
        if(!dropdownRewardMap.getReward(DropdownRewardNames.DROPDOWN_1, 3)) {
            dropdownRewardMap.assignReward(DropdownRewardNames.DROPDOWN_1, 3)
            increment_reward()
        }
        //location.reload()
        break;
    }
}

//function to assign functions to the components of the second dropdown
function dropdown2Call() {
    if(!dropdownRewardMap.getReward(DropdownRewardNames.DROPDOWN_2, 0)) {
        dropdownRewardMap.assignReward(DropdownRewardNames.DROPDOWN_2, 0)
        increment_reward()
    }
    if(get_display('book_logo') == "none"){
        set_display(get_display('book_logo'), "block")
        if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.BOOK_LOGO, 0)){
            openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.BOOK_LOGO, 0)
            increment_reward()
        } 
    }else {
        set_display(get_display('book_logo'), "none")
        if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.BOOK_LOGO, 1)){
            openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.BOOK_LOGO, 1)
            increment_reward()
        } 
    }
}

//function to assign functions to the components of the third dropdown
function dropdown3Call() {
    var x = get_element_by_id("dd3").value;
    switch(x) {
        case "check_media":
        if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.CHECK_MEDIA, 0)){
            openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.CHECK_MEDIA, 0)
            increment_reward()
        }
        if(!dropdownRewardMap.getReward(DropdownRewardNames.DROPDOWN_3, 0)) {
            dropdownRewardMap.assignReward(DropdownRewardNames.DROPDOWN_3, 0)
            increment_reward()
        } 
        make_visible(checkMediaPopup)
        break;
        case "study_deck":
        if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.STUDY_DECK, 0)){
            openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.STUDY_DECK, 0)
            increment_reward()
        }
        if(!dropdownRewardMap.getReward(DropdownRewardNames.DROPDOWN_3, 1)) {
            dropdownRewardMap.assignReward(DropdownRewardNames.DROPDOWN_3, 1)
            increment_reward()
        }
        set_index(study_deck_temporary_index, 0)
        set_innerHTML(get_innerHTML('deck_to_study'), "Deck to study: " + current_profiles[current_profile_index].decks[study_deck_temporary_index].name)
        make_visible(studyDeckPopup)
        cleanStudyDeckNames()
        loadStudyPopupDecks()
        break;
        case "preferences":
        if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.PREFERENCES_PAGE, 0)){
            openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.PREFERENCES_PAGE, 0)
            increment_reward()
        }
        if(!dropdownRewardMap.getReward(DropdownRewardNames.DROPDOWN_3, 2)) {
            dropdownRewardMap.assignReward(DropdownRewardNames.DROPDOWN_3, 2)
            increment_reward()
        }
        make_visible(preferencesPage)
        break;
    }
}

//function to assign functions to the components of the fourth dropdown
function dropdown4Call() {
    var x = get_element_by_id("dd4").value;
    switch(x) {
        case "guide":
        if(!dropdownRewardMap.getReward(DropdownRewardNames.DROPDOWN_4, 0)) {
            dropdownRewardMap.assignReward(DropdownRewardNames.DROPDOWN_4, 0)
            increment_reward()
        }
        if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.LEADS_TO_EXTERNAL_WEBSITE, 0)) {
            openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.LEADS_TO_EXTERNAL_WEBSITE, 0)
            increment_reward()
        }
        make_visible(leadsToExternalWebsitePopup)
        break;
        case "support":
        if(!dropdownRewardMap.getReward(DropdownRewardNames.DROPDOWN_4, 1)) {
            dropdownRewardMap.assignReward(DropdownRewardNames.DROPDOWN_4, 1)
            increment_reward()
        }
        if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.LEADS_TO_EXTERNAL_WEBSITE, 0)) {
            openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.LEADS_TO_EXTERNAL_WEBSITE, 0)
            increment_reward()
        }
        make_visible(leadsToExternalWebsitePopup)
        break;
        case "about_page":
        if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.ABOUT_PAGE, 0)) {
            openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.ABOUT_PAGE, 0)
            increment_reward()
        }
        if(!dropdownRewardMap.getReward(DropdownRewardNames.DROPDOWN_4, 2)) {
            dropdownRewardMap.assignReward(DropdownRewardNames.DROPDOWN_4, 2)
            increment_reward()
        }
        make_visible(aboutPagePopup)
        break;
    }
}

//function to show the components which are present on the main page and hide the other components
function openMainPage() {
    if(!mainPageRewardMap.getReward(MainPageRewardNames.STUDY_NOW, 1)){
        mainPageRewardMap.assignReward(MainPageRewardNames.STUDY_NOW, 1)
        increment_reward()
    }
    set_display("create_deck", "block")
    set_display("delete_deck", "block")
    set_display("import_file", "block")
    set_display("get_shared", "block")
    set_display("current_profile", "block")
    set_display("current_deck", "block")
    set_display("current_account", "block")
    set_display("study_now", "block")
    set_display("question", "none")
    set_display("answer", "none")
    set_display("edit", "none")
    set_display("show_answer", "none")
    set_display("next_question", "none")
    set_display("remove_card", "none")
    set_display("decks", "none")
    set_display("current_deck_study", "none")
    set_display("current_card_number_study", "none")
    set_display("number_of_cards_study", "none")

    for(let i = 1; i <= 5; i++) {
        set_display(get_innerHTML("deck_row_" + i), "block")
    }
}

//function to show the components which are present on the study page and hide the other components
function openStudyPage() {

    if(!mainPageRewards.getReward(MainPageRewards.MainPageRewardNames.STUDY_NOW, 0)){
        mainPageRewards.assignReward(MainPageRewards.MainPageRewardNames.STUDY_NOW, 0)
        increment_reward()
    }
    const current_profile = current_profiles[current_profile_index]
    const current_decks = current_profile.decks
    const current_deck = current_decks[current_profile.index]
    const current_profile_deck_index = current_profile.index
    const current_cards = current_decks[current_profile_deck_index].cards
    for(let i = 1;i <= 5;i++) {
        set_display("deck_row_" + i, "none")
    }
    set_innerHTML(get_innerHTML("current_deck_study"), "Current deck: " + current_deck.name)
    set_innerHTML(get_innerHTML("number_of_cards_study"), "Current number of cards: " + current_cards.length)
    set_innerHTML(get_innerHTML("current_card_number_study"), "Current card number: " + (current_deck.current_study_index + 1))
    
    set_display("create_deck","none")
    set_display("delete_deck","none")
    set_display("import_file","none")
    set_display("get_shared","none")
    set_display("current_profile","none")
    set_display("current_deck","none")
    set_display("current_account","none")
    set_display("study_now","none")
    set_display("question","block")
    set_display("answer","none")
    set_display("edit","block")
    set_display("show_answer","block")
    set_display("next_question","none")
    set_display("remove_card","block")
    set_display("decks","block")
    set_display("current_deck_study","block")
    set_display("current_card_number_study","block")
    set_display("number_of_cards_study","block")
    set_display("question","none")
    set_display("answer","none")
    set_innerHTML(get_innerHTML("question"), "Question: " + current_cards[current_profile_deck_index].front)
    set_innerHTML(get_innerHTML("answer"), "Answer: " + current_cards[current_profile_deck_index].back)

}

//function including the switch case of the first dropdown item
function preferencesdd1() {
    var x = get_element_by_id("preferences_dd_1").value;
    switch(x) {
        case "english_dd_item":
        if(!preferencesPageRewardMap.getReward(PreferencesPageRewardNames.DROPDOWN_1, 0)) {
            preferencesPageRewardMap.assignReward(PreferencesPageRewardNames.DROPDOWN_1, 0)
            increment_reward()
        }
        break;
        case "german_dd_item":
        if(!preferencesPageRewardMap.getReward(PreferencesPageRewardNames.DROPDOWN_1, 1)) {
            preferencesPageRewardMap.assignReward(PreferencesPageRewardNames.DROPDOWN_1, 1)
            increment_reward()
        }
        break;    
        case "spanish_dd_item":
        if(!preferencesPageRewardMap.getReward(PreferencesPageRewardNames.DROPDOWN_1, 2)) {
            preferencesPageRewardMap.assignReward(PreferencesPageRewardNames.DROPDOWN_1, 2)
            increment_reward()
        }
        break;
    }
}

//function including the switch case of the second dropdown item
function preferencesdd2() {
    var x = get_element_by_id("preferences_dd_2").value;
    switch(x) {
        case "open_gl_dd_item":
        if(!preferencesPageRewardMap.getReward(PreferencesPageRewardNames.DROPDOWN_2, 0)) {
            preferencesPageRewardMap.assignReward(PreferencesPageRewardNames.DROPDOWN_2, 0)
            increment_reward()
        }
        break;
        case "angle_dd_item":
        if(!preferencesPageRewardMap.getReward(PreferencesPageRewardNames.DROPDOWN_2, 1)) {
            preferencesPageRewardMap.assignReward(PreferencesPageRewardNames.DROPDOWN_2, 1)
            increment_reward()
        }
        break;    
        case "software_dd_item":
        if(!preferencesPageRewardMap.getReward(PreferencesPageRewardNames.DROPDOWN_2, 2)) {
            preferencesPageRewardMap.assignReward(PreferencesPageRewardNames.DROPDOWN_2, 2)
            increment_reward()
        }
        break;
    }
}

//function including the switch case of the third dropdown item
function preferencesdd3() {
    var x = get_element_by_id("preferences_dd_3").value;
    switch(x) {
        case "default_to_current_deck_dd_item":
            if(!preferencesPageRewardMap.getReward(PreferencesPageRewardNames.DROPDOWN_3, 0)) {
                preferencesPageRewardMap.assignReward(PreferencesPageRewardNames.DROPDOWN_3, 0)
                increment_reward()
            }
        break;
        case "change_according_to_deck_type_dd_item":
            if(!preferencesPageRewardMap.getReward(PreferencesPageRewardNames.DROPDOWN_3, 1)) {
                preferencesPageRewardMap.assignReward(PreferencesPageRewardNames.DROPDOWN_3, 1)
                increment_reward()
            }
        break;    
    }
}

//function including the switch case of the fourth dropdown item
function preferencesdd4() {
    var x = get_element_by_id("preferences_dd_4").value;
    switch(x) {
        case "py_audio_dd_item":
            if(!preferencesPageRewardMap.getReward(PreferencesPageRewardNames.DROPDOWN_4, 0)) {
                preferencesPageRewardMap.assignReward(PreferencesPageRewardNames.DROPDOWN_4, 0)
                increment_reward()
            }
        break;
        case "qt_dd_item":
            if(!preferencesPageRewardMap.getReward(PreferencesPageRewardNames.DROPDOWN_4, 1)) {
                preferencesPageRewardMap.assignReward(PreferencesPageRewardNames.DROPDOWN_4, 1)
                increment_reward()
            }
        break;    
    }
}
//adding functions, which have been used more than once, as attribute to buttons
import_file.addEventListener("click", importDeckPopupLoad)
study_now.addEventListener("click", openStudyPage);
decks.addEventListener("click", openMainPage);

//initial values
const initial_profile_switch_name = current_profiles[0].name
const initial_profile = current_profiles[0]
const initial_decks = initial_profile.decks
const initial_deck_index = initial_profile.index
const initial_deck = initial_decks[initial_deck_index]
const initial_cards = initial_deck.cards
const initial_card = initial_cards[initial_deck_index]

//assigning the core textual components as initialization
set_innerHTML(get_innerHTML('rename_profile_popup_row'), profile_names[rename_profile_index])
set_innerHTML(get_innerHTML('add_profile_popup_row'), profile_names[rename_profile_index])
set_innerHTML(get_innerHTML('profile_to_open'), "Profile to open: " + initial_profile_switch_name)
set_innerHTML(get_innerHTML('add_card_row_1'), "Front Side " + add_card_front_counter)
set_innerHTML(get_innerHTML('add_card_row_2'),"Back Side " + add_card_back_counter)
set_innerHTML(get_innerHTML('add_card_row_3'),"Tag Text " + add_card_tag_counter)
set_innerHTML(get_innerHTML('create_new_deck'), deck_names[create_deck_index])
set_innerHTML(get_innerHTML('current_profile'), "Current profile: " + initial_profile.name)
set_innerHTML(get_innerHTML('current_deck'), "Current deck: " + initial_decks[initial_deck_index].name)
set_innerHTML(get_innerHTML('current_account'), "Current account: " + account_names[current_account_index])
set_innerHTML(get_innerHTML('anki_login_row_1'), account_names[anki_login_username_index])
set_innerHTML(get_innerHTML('anki_login_row_2'), account_passwords[anki_login_password_index])
set_innerHTML(get_innerHTML('current_deck_study'), "Current deck: " + initial_decks[initial_deck_index].name)
set_innerHTML(get_innerHTML('deck_to_study'), "Deck to study: " + initial_decks[0].name)
set_innerHTML(get_innerHTML('current_card_number_study'), "Current card number: " + (initial_deck.current_study_index + 1))
set_innerHTML(get_innerHTML('number_of_cards_study'), "Current number of cards: " + initial_cards.length)
set_innerHTML(get_innerHTML('question'), "Question: " + initial_cards[initial_deck.index].front)
set_innerHTML(get_innerHTML('answer'), "Answer: " + initial_cards[initial_deck.index].back)
set_innerHTML(get_innerHTML('deck_to_import'), "Deck to import: " + importable_decks[deck_import_index].name)
set_innerHTML(get_innerHTML('counter_1'), preferences_page_counter_1)
set_innerHTML(get_innerHTML('counter_2'), preferences_page_counter_2)
set_innerHTML(get_innerHTML('counter_3'), preferences_page_counter_3)
set_innerHTML(get_innerHTML('counter_4'), preferences_page_counter_4)
set_innerHTML(get_innerHTML('counter_5'), preferences_page_counter_5)
set_innerHTML(get_innerHTML('total_reward'), "Total sum of rewards:" + total_sum_of_reward)


//button to close the switch profile page and open the main page
switch_profile_popup_open_button.addEventListener("click", function () {
    const current_profile = current_profiles[current_profile_index]
    const current_decks = current_profile.decks


    if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.SWITCH_PROFILE, 1)) {
        openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.SWITCH_PROFILE, 1)
        increment_reward()
    }
    if(!profileRewardMap.getReward(ProfileRewardNames.OPEN_PROFILE, 0)) {
        profileRewardMap.assignReward(ProfileRewardNames.OPEN_PROFILE, 0)
        increment_reward()
    }
    make_invisible(switchProfilePopup)
    openMainPage()
    set_index(current_profile_index, switch_profile_index)
    cleanMainPageDeckNames()
    //loadMainPageDecks()
    set_innerHTML(get_innerHTML('current_profile'), "Current profile: " + current_profile.name)
    set_innerHTML(get_innerHTML('current_deck'), "Current deck: " + current_decks[current_profile.deck_index].name)
    set_innerHTML(get_innerHTML('current_account'), "Current account: " + account_names[current_account_index])
})

//button to add a card to the currently specified deck
add_card_button.addEventListener("click", function () {
    const new_card = new Card("Front Side " + add_card_front_counter, "Back Side " + add_card_back_counter, "Tag Text " + add_card_tag_counter)
    const current_profile = current_profiles[current_profile_index]
    const current_decks = current_profile.decks
    const current_deck = current_decks[current_profile.deck_index]
    const current_cards = current_deck.cards
    
    current_cards.push(new_card);
    set_innerHTML(get_innerHTML('number_of_cards_study'), "Current number of cards: " + current_cards.length)
    
    if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.ADD_CARD, 1)){
        openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.ADD_CARD, 1)
        increment_reward()
    }
    if(!addCardRewardMap.getReward(AddCardRewardNames.ADD_CARD, 0)){
        addCardRewardMap.assignReward(AddCardRewardNames.ADD_CARD, 0)
        increment_reward()
    }
    make_invisible(addCardPopup)
})

//add the chosen deck to the decks of the current profile
export_deck_popup_add_button.addEventListener("click", function () {
    const current_profile = current_profiles[current_profile_index]
    const current_decks = current_profile.decks

    if (exported_decks.includes(current_decks[deck_export_index].name)){
        make_invisible(exportDeckPopup)
        if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.DECK_ALREADY_EXISTS, 0)) {
            openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.DECK_ALREADY_EXISTS, 0)
            increment_reward()
        }
        make_visible(deckExistsPopup)
        return;
    }
    if (exported_decks.length >= 5) {
        make_invisible(exportDeckPopup)
        if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.ALREADY_FIVE_DECKS, 0)) {
            openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.ALREADY_FIVE_DECKS, 0)
            increment_reward()
        }
        make_visible(alreadyFiveDecksPopup)
        return;
    }
    if (!exportDeckRewardMap.getReward(ExportDeckRewardNames.EXPORT, 0)) {
        exportDeckRewardMap.assignReward(ExportDeckRewardNames.EXPORT, 0)
        increment_reward()
    }
    exported_decks.push(current_decks[deck_export_index].name)
    make_invisible(exportDeckPopup)
})

//help button which opens the leads to external website popup
study_deck_popup_help_button.addEventListener("click", function () {
    const current_profile = current_profiles[current_profile_index]
    const current_decks = current_profile.decks

    set_index(study_deck_temporary_index, 0)
    set_innerHTML(get_innerHTML('deck_to_study'), "Deck to study: " + current_decks[study_deck_temporary_index].name)
    make_invisible(studyDeckPopup)
    make_visible(leadsToExternalWebsitePopup)
    if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.LEADS_TO_EXTERNAL_WEBSITE, 0)) {
        openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.LEADS_TO_EXTERNAL_WEBSITE, 0)
        increment_reward()
    }
})

//button to switch to the study page
study_deck_popup_study_button.addEventListener("click", function () {
    current_profiles[current_profile_index].deck_index = study_deck_temporary_index
    
    const current_profile = current_profiles[current_profile_index]
    const current_decks = current_profile.decks
    
    set_index(study_deck_temporary_index, 0)
    if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.STUDY_DECK, 1)) {
        openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.STUDY_DECK, 1)
        increment_reward()
    }
    if(!studyDeckRewardMap.getReward(StudyDeckRewardNames.STUDY, 1)) {
        studyDeckRewardMap.assignReward(StudyDeckRewardNames.STUDY, 1)
        increment_reward()
    }
    set_innerHTML(get_innerHTML('deck_to_study'), "Deck to study: " + current_decks[study_deck_temporary_index].name)
    make_invisible(studyDeckPopup)
    openStudyPage()
})

//button to create a new deck
study_deck_popup_add_button.addEventListener("click", function () {
    const current_profile = current_profiles[current_profile_index]
    const current_decks = current_profile.decks
    
    if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.CREATE_DECK, 0)) {
        openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.CREATE_DECK, 0)
        increment_reward()
    }
    set_index(study_deck_temporary_index, 0)
    set_innerHTML(get_innerHTML('deck_to_study'), "Deck to study: " + current_decks[study_deck_temporary_index].name)
    make_invisible(studyDeckPopup)
    make_visible(createNewDeckPopup)
})

//button to close the at least one card popup
close_at_least_one_card_popup_button.addEventListener("click", function () {
    if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.AT_LEAST_ONE_CARD, 1)) {
        openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.AT_LEAST_ONE_CARD, 1)
        increment_reward()
    }
    make_invisible(atLeastOneCardPopup)
})

//button to show the leads to external website button
get_shared.addEventListener("click", function () {
    make_visible(leadsToExternalWebsitePopup)
    if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.LEADS_TO_EXTERNAL_WEBSITE, 1)) {
        openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.LEADS_TO_EXTERNAL_WEBSITE, 1)
        increment_reward()
    }
});

//button to close the already five decks popup
close_already_five_decks_popup_button.addEventListener("click", function() {
    if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.ALREADY_FIVE_DECKS, 1)) {
        openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.ALREADY_FIVE_DECKS, 1)
        increment_reward()
    }
    make_invisible(alreadyFiveDecksPopup)
})

//button to close the deck exists popup
close_deck_exists_popup_button.addEventListener("click", function() {
    if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.DECK_ALREADY_EXISTS, 1)) {
        openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.DECK_ALREADY_EXISTS, 1)
        increment_reward()
    }
    make_invisible(deckExistsPopup)
})

/*
//button to close the check media popup
check_media_close_button.addEventListener("click", function() {
    if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.CHECK_MEDIA, 1)) {
        openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.CHECK_MEDIA, 1)
        increment_reward()
    }
    make_invisible(checkMediaPopup)
})
*/

//button to close the leads to external website popup
closeLeadsToExternalWebsitePopup.addEventListener("click", function () {
    if(!openClosePopupsRewards.getReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.LEADS_TO_EXTERNAL_WEBSITE, 1)) {
        openClosePopupsRewards.assignReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.LEADS_TO_EXTERNAL_WEBSITE, 1)
        increment_reward()
    }
    make_invisible(leadsToExternalWebsitePopup)
});

//button to open the add card popup
add_card.addEventListener("click", function () {
    if(!openClosePopupsRewards.getReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.ADD_CARD, 0)){
        openClosePopupsRewards.assignReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.ADD_CARD, 0)
        increment_reward()
    }
    make_visible(addCardPopup)
});

//button to refresh the page
switch_profile_popup_open_backup_button.addEventListener("click", function () {
    if(!openClosePopupsRewards.getReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.SWITCH_PROFILE, 1)){
        openClosePopupsRewards.assignReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.SWITCH_PROFILE, 1)
        increment_reward()
    }
    make_invisible(switchProfilePopup)
    //location.reload();
});

//button to close the downgrade popup
close_downgrade_popup_button.addEventListener("click", function () {
    if(!openClosePopupsRewards.getReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.DOWNGRADE, 1)) {
        openClosePopupsRewards.assignReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.DOWNGRADE, 1)
        increment_reward()
    }
    make_invisible(downgradePopup)
    make_visible(switchProfilePopup)
});

//button to open the rename popup
switch_profile_popup_rename_button.addEventListener("click", function () {
    if(!openClosePopupsRewards.getReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.RENAME_PROFILE, 0)) {
        openClosePopupsRewards.assignReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.RENAME_PROFILE, 0)
        increment_reward()
    }
    make_visible(renameProfilePopup)
})

//button to open the downgrade popup
switch_profile_popup_downgrade_button.addEventListener("click", function () {
    make_invisible(switchProfilePopup)
    if(!openClosePopupsRewards.getReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.DOWNGRADE, 0)) {
        openClosePopupsRewards.assignReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.DOWNGRADE, 0)
        increment_reward()
    }
    make_visible(downgradePopup)
});

//button to close the add card popup
close_add_card_popup.addEventListener("click", function () {
    if(!openClosePopupsRewards.getReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.ADD_CARD, 1)){
        openClosePopupsRewards.assignReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.ADD_CARD, 1)
        increment_reward()
    }
    make_invisible(addCardPopup)
});

//button to open the create new deck popup
create_deck.addEventListener("click", function () {
    if(!openClosePopupsRewards.getReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.CREATE_DECK, 0)) {
        openClosePopupsRewards.assignReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.CREATE_DECK, 0)
        increment_reward()
    }
    make_visible(createNewDeckPopup)
});

//button to close the create new deck popup
create_new_deck_close_button.addEventListener("click", function () {
    if(!openClosePopupsRewards.getReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.CREATE_DECK, 1)) {
        openClosePopupsRewards.assignReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.CREATE_DECK, 1)
        increment_reward()
    }
    make_invisible(createNewDeckPopup)
});

//button to open the delete deck popup
delete_deck.addEventListener("click", function () {
    if(!openClosePopupsRewards.getReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.DELETE_DECK, 0)) {
        openClosePopupsRewards.assignReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.DELETE_DECK, 0)
        increment_reward()
    }
    make_visible(deleteDeckPopup)
});

//button to open the anki login popup
anki_login.addEventListener("click", function () {
    if(!openClosePopupsRewards.getReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.ANKI_LOGIN, 0)){
        openClosePopupsRewards.assignReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.ANKI_LOGIN, 0)
        increment_reward()
    }
    make_visible(ankiLoginPopup)
});

//button to delete a deck iff there is more than one deck present
delete_deck_yes_button.addEventListener("click", function () {
    const current_profile = current_profiles[current_profile_index]
    const current_decks = current_profile.decks
    
    if(current_profiles[current_profile_index].decks.length == 1){
        make_invisible(deleteDeckPopup)
        if(!openClosePopupsRewards.getReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.AT_LEAST_ONE_DECK, 0)) {
            openClosePopupsRewards.assignReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.AT_LEAST_ONE_DECK, 0)
            increment_reward()
        }
        make_visible(atLeastOneDeckPopup)
        return;
    }
    current_decks.splice(current_profile.deck_index, 1);
    set_index(current_profile.deck_index, 0)
    set_innerHTML(get_innerHTML('current_deck'), "Current deck: " + current_decks[current_profile.deck_index].name)
    cleanMainPageDeckNames();
    //loadMainPageDecks();
    if(!openClosePopupsRewards.getReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.DELETE_DECK, 1)) {
        openClosePopupsRewards.assignReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.DELETE_DECK, 1)
        increment_reward()
    }
    if(!deleteDeckRewardMap.getReward(DeleteDeckRewards.DeleteDeckRewardNames.DELETE_DECK, 0)){
        deleteDeckRewardMap.assignReward(DeleteDeckRewards.DeleteDeckRewardNames.DELETE_DECK, 0)
        increment_reward()
    }
    make_invisible(deleteDeckPopup)
})

//button to close the delete deck popup
delete_deck_no_button.addEventListener("click", function () {
    if(!openClosePopupsRewards.getReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.DELETE_DECK, 1)) {
        openClosePopupsRewards.assignReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.DELETE_DECK, 1)
        increment_reward()
    }
    make_invisible(deleteDeckPopup)
});

//button to reset the exported decks
export_deck_popup_reset_button.addEventListener("click", function(){
    if(!exportDeckRewards.getReward(ExportDeckRewards.ExportDeckRewardNames.EXPORT_DECK, 0)) {
        exportDeckRewards.assignReward(ExportDeckRewards.ExportDeckRewardNames.EXPORT_DECK, 0)
        increment_reward()
    }
    exported_decks = []
    set_innerHTML(get_innerHTML('exported_decks_number'), "Number of exported decks: " + exported_decks.length)
})

//button to edit the front side of a card iff the length of the front side does not exceed 50
edit_front_side_button.addEventListener("click", function (){
    const current_profile = current_profiles[current_profile_index]
    const current_decks = current_profile.decks
    const current_deck = current_decks[current_profile.deck_index]
    const current_cards = current_deck.cards
    const current_card = current_cards[current_deck.current_study_index]

    current_card.front += " edited"
    
    if(get_innerHTML('question').length <= 50) {
        if(!editCardRewards.getReward(EditCardRewards.EditCardRewardNames.EDIT_FRONT, 0)) {
            editCardRewards.assignReward(EditCardRewards.EditCardRewardNames.EDIT_FRONT, 0)
            increment_reward()
        }
        set_innerHTML(get_innerHTML('question'), "Question: " + current_card.front)
        set_innerHTML(get_innerHTML('edit_card_row_1'), current_card.front)  
    }
})

//button to edit the back side of a card iff the length of the back side does not exceed 50
edit_back_side_button.addEventListener("click", function (){
    const current_profile = current_profiles[current_profile_index]
    const current_decks = current_profile.decks
    const current_deck = current_decks[current_profile.deck_index]
    const current_cards = current_deck.cards
    const current_card = current_cards[current_deck.current_study_index]
    
    current_card.back += " edited"

    if(get_innerHTML('answer').length <= 50) {
        if(!editCardRewards.getReward(EditCardRewards.EditCardRewardNames.EDIT_BACK, 0)) {
            editCardRewards.assignReward(EditCardRewards.EditCardRewardNames.EDIT_BACK, 0)
            increment_reward()
        }
        set_innerHTML(get_innerHTML('answer'), "Question: " + current_card.back)
        set_innerHTML(get_innerHTML('edit_card_row_2'), current_card.back)  
    }
})

//button to edit the tag of a card iff the length of the tag does not exceed 50
edit_tag_button.addEventListener("click", function (){
    const current_profile = current_profiles[current_profile_index]
    const current_decks = current_profile.decks
    const current_deck = current_decks[current_profile.deck_index]
    const current_cards = current_deck.cards
    const current_card = current_cards[current_deck.current_study_index]
    
    current_card.tag += " edited"

    if(get_innerHTML('edit_card_row_3').length <= 50) {
        if(!openClosePopupsRewards.getReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.EDIT_CARD, 2)) {
            openClosePopupsRewards.assignReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.EDIT_CARD, 2)
            increment_reward()
        }
        set_innerHTML(get_innerHTML('edit_card_row_3'), current_card.tag)  
    }
})

//button to close the edit card popup
close_edit_card_popup_button.addEventListener("click", function (){
    if(!openClosePopupsRewards.getReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.EDIT_CARD, 1)) {
        openClosePopupsRewards.assignReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.EDIT_CARD, 1)
        increment_reward()
    }
    make_invisible(editCardPopup)
})

//button to open the edit card popup
edit.addEventListener("click", function (){
    const current_profile = current_profiles[current_profile_index]
    const current_decks = current_profile.decks
    const current_deck = current_decks[current_profile.deck_index]
    const current_cards = current_deck.cards
    const current_card = current_cards[current_deck.current_study_index]
    
    if(!openClosePopupsRewards.getReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.EDIT_CARD, 0)) {
        openClosePopupsRewards.assignReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.EDIT_CARD, 0)
        increment_reward()
    }
    make_visible(editCardPopup)
    set_innerHTML(get_innerHTML('edit_card_row_1'), current_card.front)
    set_innerHTML(get_innerHTML('edit_card_row_2'), current_card.back)
    set_innerHTML(get_innerHTML('edit_card_row_3'), current_card.tag)
})

//button to close the at least one deck popup
close_at_least_one_deck_popup_button.addEventListener("click", function (){
    if(!openClosePopupsRewards.getReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.AT_LEAST_ONE_DECK, 0)) {
        openClosePopupsRewards.assignReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.AT_LEAST_ONE_DECK, 0)
        increment_reward()
    }
    make_invisible(atLeastOneDeckPopup)
})

//button to increment the counter of the front side of a card by 1
add_card_button_1.addEventListener("click", function () {
    if(!addCardRewards.getReward(AddCardRewards.AddCardRewardNames.INCREMENT, 0)) {
        addCardRewards.assignReward(AddCardRewards.AddCardRewardNames.INCREMENT, 0)
        increment_reward()
    }
    increment_counter(add_card_front_counter, 1)
    set_innerHTML(get_innerHTML('add_card_row_1'), "Front Side " + add_card_front_counter)
});

//button to increment the counter of the back side of a card by 1
add_card_button_2.addEventListener("click", function () {
    if(!addCardRewards.getReward(AddCardRewards.AddCardRewardNames.INCREMENT, 1)) {
        addCardRewards.assignReward(AddCardRewards.AddCardRewardNames.INCREMENT, 1)
        increment_reward()
    }
    increment_counter(add_card_back_counter, 1)
    set_innerHTML(get_innerHTML('add_card_row_2'), "Back Side " + add_card_back_counter)
});

//button to increment the counter of the tag of a card by 1
add_card_button_3.addEventListener("click", function () {
    if(!addCardRewards.getReward(AddCardRewards.AddCardRewardNames.INCREMENT, 2)) {
        addCardRewards.assignReward(AddCardRewards.AddCardRewardNames.INCREMENT, 2)
        increment_reward()
    }
    increment_counter(add_card_tag_counter, 1)
    set_innerHTML(get_innerHTML('add_card_row_3'), "Tag Text " + add_card_tag_counter)
});

//button to increment the counter for creating a deck by 1
create_new_deck_name_button.addEventListener("click", function () {
    if(!createDeckRewards.getReward(CreateDeckRewards.CreateDeckRewardNames.CHANGE_DECK, 0)) {
        createDeckRewards.assignReward(CreateDeckRewards.CreateDeckRewardNames.CHANGE_DECK, 0)
        increment_reward()
    }
    modulo_index_increment(create_deck_index, 5)
    set_innerHTML(get_innerHTML('create_new_deck'), deck_names[create_deck_index])
})

//button to close the export deck popup
export_deck_popup_cancel_button.addEventListener("click", function () {
    if(!openClosePopupsRewards.getReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.EXPORT_DECK, 1)) {
        openClosePopupsRewards.assignReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.EXPORT_DECK, 1)
        increment_reward()
    }
    make_invisible(exportDeckPopup)
})

//button to close the add profile popup
close_add_profile_popup_button.addEventListener("click", function () {
    if(!openClosePopupsRewards.getReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.ADD_PROFILE, 1)) {
        openClosePopupsRewards.assignReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.ADD_PROFILE, 1)
        increment_reward()
    }
    make_invisible(addProfilePopup)
    set_index(add_profile_index, 0)
    set_innerHTML(get_innerHTML('add_profile_popup_row'), profile_names[rename_profile_index])
})

//button the close the rename profile popup
close_rename_profile_popup_button.addEventListener("click", function () {
    if(!openClosePopupsRewards.getReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.RENAME_PROFILE, 1)) {
        openClosePopupsRewards.assignReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.RENAME_PROFILE, 1)
        increment_reward()
    }
    make_invisible(renameProfilePopup)
    set_index(rename_profile_index, 0)
    set_innerHTML(get_innerHTML('rename_profile_popup_row'), profile_names[rename_profile_index])
})

//button to close the profile exists popup and open the switch profile popup
close_profile_exists_popup_button.addEventListener("click", function () {
    if(!openClosePopupsRewards.getReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.PROFILE_EXISTS, 1)) {
        openClosePopupsRewards.assignReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.PROFILE_EXISTS, 1)
        increment_reward()
    }
    make_invisible(profileExistsPopup)
    make_visible(switchProfilePopup)
})

//button to rename a present profile iff the name to set is not present
rename_profile_popup_ok_button.addEventListener("click", function () {
    for(let i = 0; i < current_profiles.length; i++){
        if(current_profiles[i].name == profile_names[rename_profile_index]){
            if(!openClosePopupsRewards.getReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.PROFILE_EXISTS, 0)) {
                openClosePopupsRewards.assignReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.PROFILE_EXISTS, 0)
                increment_reward()
            }
            make_invisible(renameProfilePopup)
            make_invisible(switchProfilePopup)
            make_visible(profileExistsPopup)
            return
        }
    }  
    if(!profileRewards.getReward(ProfileRewards.ProfileRewardNames.RENAME_PROFILE, 0)) {
        profileRewards.assignReward(ProfileRewards.ProfileRewardNames.RENAME_PROFILE, 0)
        increment_reward()
    }
    current_profiles[switch_profile_index].name = profile_names[rename_profile_index]
    switchProfilePopupLoad()
    if(!openClosePopupsRewards.getReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.RENAME_PROFILE, 1)) {
        openClosePopupsRewards.assignReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.RENAME_PROFILE, 1)
        increment_reward()
    }
    make_invisible(renameProfilePopup)
})

//button to add a profile of an index iff the name of the profile is not present and the length of the current profiles does not exceed 5
add_profile_popup_ok_button.addEventListener("click", function () {
    if(current_profiles.length == 5){
        if(!openClosePopupsRewards.getReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.PROFILE_EXISTS, 0)) {
            openClosePopupsRewards.assignReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.PROFILE_EXISTS, 0)
            increment_reward()
        }
        make_visible(profileExistsPopup)
        return
    }
    for(let i = 0; i < current_profiles.length; i++){
        if(current_profiles[i].name == profile_names[add_profile_index]){
            if(!openClosePopupsRewards.getReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.PROFILE_EXISTS, 0)) {
                openClosePopupsRewards.assignReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.PROFILE_EXISTS, 0)
                increment_reward()
            }
            make_invisible(addProfilePopup)
            make_invisible(switchProfilePopup)
            make_visible(profileExistsPopup)
            return
        }
    }
    if(!profileRewards.getReward(ProfileRewards.ProfileRewardNames.ADD_PROFILE, 0)) {
        profileRewards.assignReward(ProfileRewards.ProfileRewardNames.ADD_PROFILE, 0)
        increment_reward()
    }
    const new_profile = new Profile(profile_names[add_profile_index], default_deck, 0)
    
    current_profiles.push(new_profile)
    switchProfilePopupLoad()
    make_invisible(addProfilePopup)
    if(!openClosePopupsRewards.getReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.ADD_PROFILE, 1)) {
        openClosePopupsRewards.assignReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.ADD_PROFILE, 1)
        increment_reward()
    }
})

//button to close the at least one profile popup and open the switch profile popup
close_at_least_one_profile_popup_button.addEventListener("click", function () {
    if(!openClosePopupsRewards.getReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.AT_LEAST_ONE_PROFILE, 1)) {
        openClosePopupsRewards.assignReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.AT_LEAST_ONE_PROFILE, 1)
        increment_reward()
    }
    make_invisible(atLeastOneProfilePopup)
    make_visible(switchProfilePopup)
})

//button to delete a profile in the switch profile popup
switch_profile_popup_delete_button.addEventListener("click", function () {
    if(current_profiles.length == 1){
        if(!openClosePopupsRewards.getReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.AT_LEAST_ONE_PROFILE, 0)) {
            openClosePopupsRewards.assignReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.AT_LEAST_ONE_PROFILE, 0)
            increment_reward()
        }
        make_visible(atLeastOneProfilePopup)
        make_invisible(switchProfilePopup)
        return
    }    
    if(!profileRewards.getReward(ProfileRewards.ProfileRewardNames.DELETE_PROFILE, 0)) {
        profileRewards.assignReward(ProfileRewards.ProfileRewardNames.DELETE_PROFILE, 0)
        increment_reward()
    }
    current_profiles.splice(switch_profile_index, 1)
    set_index(switch_profile_index, 0)
    cleanProfileNames()
    loadProfileNames()
})

//button to remove a card in the study page iff there is more than one card
remove_card.addEventListener("click", function() {
    const current_profile = current_profiles[current_profile_index]
    const current_decks = current_profile.decks
    const current_deck = current_decks[current_profile.deck_index]
    const current_cards = current_deck.cards

    if(current_cards.length == 1) {
        if(!openClosePopupsRewards.getReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.AT_LEAST_ONE_CARD, 0)) {
            openClosePopupsRewards.assignReward(OpenClosePopupsRewards.OpenClosePopupsRewardNames.AT_LEAST_ONE_CARD, 0)
            increment_reward()
        }
        make_visible(atLeastOneCardPopup)
        return;
    }
    if(!mainPageRewardMap.getReward(MainPageRewardNames.REMOVE_CARD, 0)){
        mainPageRewardMap.assignReward(MainPageRewardNames.REMOVE_CARD, 0)
        increment_reward()
    }
    current_cards.splice(current_decks[current_decks.deck_index].current_study_index, 1)
    current_decks[current_profile.deck_index].current_study_index > 0 ? current_decks[current_profile.deck_index].current_study_index -= 1 : 0 
    set_innerHTML(get_innerHTML('current_card_number_study'), "Current card number: " + (current_deck.current_study_index + 1))
    set_innerHTML(get_innerHTML('number_of_cards_study'), "Current number of cards: " + current_cards.length)
    set_innerHTML(get_innerHTML('question'), "Question: " + current_cards[current_deck.current_study_index].front)
    set_innerHTML(get_innerHTML('answer'), current_cards[current_deck.current_study_index].back)
})

//button to open the add profile popup
switch_profile_popup_add_button.addEventListener("click", function () {
    make_visible(addProfilePopup)
    if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.RENAME_PROFILE, 0)) {
        openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.RENAME_PROFILE, 0)
        increment_reward()
    }
})

//button to close the add profile popup
close_add_profile_popup_button.addEventListener("click", function () {
    make_invisible(addProfilePopup)
    if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.RENAME_PROFILE, 1)) {
        openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.RENAME_PROFILE, 1)
        increment_reward()
    }
})

//button to create a new deck iff the number of the current decks does not exceed 5 and the name of the deck is not present in the current decks
create_new_deck_add_button.addEventListener("click", function () {
    const current_profile = current_profiles[current_profile_index]
    const current_decks = current_profile.decks
    
    if(current_decks.length >= 5) {
        make_invisible(createNewDeckPopup)
        if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.ALREADY_FIVE_DECKS, 0)) {
            openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.ALREADY_FIVE_DECKS, 0)
            increment_reward()
        }
        make_visible(alreadyFiveDecksPopup)
        return;
    }
    for(let i = 0 ; i < current_decks.length; i++) {
        if(current_decks[i].name == Object.values(DeckNames)[create_deck_index]){
            if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.DECK_ALREADY_EXISTS, 0)) {
                openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.DECK_ALREADY_EXISTS, 0)
                increment_reward()
            }
            make_invisible(createNewDeckPopup)
            make_visible(deckExistsPopup)
            return;
        }   
    }
    const new_deck = new Profile(Object.values(DeckNames)[create_deck_index], default_deck, 0)
    current_profiles[current_profile_index].decks.push(new_deck)
    if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.CREATE_DECK, 1)) {
        openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.CREATE_DECK, 1)
        increment_reward()
    }
    make_invisible(createNewDeckPopup)
    //loadMainPageDecks()
})

//button to close the study deck popup
study_deck_popup_cancel_button.addEventListener("click", function () {
    const current_profile = current_profiles[current_profile_index]
    const current_decks = current_profile.decks
    if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.STUDY_DECK, 1)){
        openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.STUDY_DECK, 1)
        increment_reward()
    }
    set_index(study_deck_temporary_index, 0)
    set_innerHTML(get_innerHTML('deck_to_study'), "Deck to study: " + current_decks[study_deck_temporary_index].name)
    make_invisible(studyDeckPopup)
})

//button to increment the index of login username by 1 and update the temporary account name
anki_login_username_button.addEventListener("click", function () {
    if(!ankiLoginRewardMap.getReward(AnkiLoginRewardNames.INCREMENT, 0)) {
        ankiLoginRewardMap.assignReward(AnkiLoginRewardNames.INCREMENT, 0)
        increment_reward()
    }
    modulo_index_increment(anki_login_username_index, 5)
    set_innerHTML(get_innerHTML('anki_login_row_1'), account_names[anki_login_username_index])
})

//button to increment the index of login password by 1 and update the temporary account name
anki_login_password_button.addEventListener("click", function () {
    if(!ankiLoginRewardMap.getReward(AnkiLoginRewardNames.INCREMENT, 1)) {
        ankiLoginRewardMap.assignReward(AnkiLoginRewardNames.INCREMENT, 1)
        increment_reward()
    }
    modulo_index_increment(anki_login_password_index, 5)
    set_innerHTML(get_innerHTML('anki_login_row_2'), account_passwords[anki_login_password_index])
})

//button to close the anki login popup
anki_login_close_button.addEventListener("click", function () {
    if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.ANKI_LOGIN, 0)){
        openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.ANKI_LOGIN, 0)
        increment_reward()
    }
    make_invisible(ankiLoginPopup)
})

//button to change the current anki account iff the indices for username and password match
anki_login_ok_button.addEventListener("click", function () {
    if(anki_login_username_index != anki_login_password_index){
        make_visible(failedLoginPopup)
        if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.UNSUCCESSFUL_LOGIN, 0)) {
            openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.UNSUCCESSFUL_LOGIN, 0)
            increment_reward()
        }
        make_invisible(ankiLoginPopup)
        return;
    }
    if(!ankiLoginRewardMap.getReward(AnkiLoginRewardNames.LOGIN, 0)) {
        ankiLoginRewardMap.assignReward(AnkiLoginRewardNames.LOGIN, 0)
        increment_reward()
    }
    set_index(current_account_index, anki_login_username_index)
    set_innerHTML(get_innerHTML('current_account'), "Current account: " + account_names[current_account_index])
    make_invisible(ankiLoginPopup)
    if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.ABOUT_PAGE, 1)) {
        openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.ABOUT_PAGE, 1)
        increment_reward()
    }
})

//button to close the about page
about_page_close_button.addEventListener("click", function (){
    if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.ABOUT_PAGE, 1)) {
        openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.ABOUT_PAGE, 1)
        increment_reward()
    }
    make_invisible(aboutPagePopup)
})

//button to close the failed login popup
close_failed_login_popup.addEventListener("click", function (){
    if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.UNSUCCESSFUL_LOGIN, 1)) {
        openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.UNSUCCESSFUL_LOGIN, 1)
        increment_reward()
    }
    make_invisible(failedLoginPopup)
})

function main_page_row_event(index){
    const current_profile = current_profiles[current_profile_index]
    const current_decks = current_profile.decks
    if(index < current_decks.length) {
        if(!mainPageRewardMap.getReward(MainPageRewardNames.CHANGE_DECK, index) && current_profiles[current_profile_index].deck_index != index) { 
            mainPageRewardMap.assignReward(MainPageRewardNames.CHANGE_DECK, index)
            increment_reward()
        }
        set_index(current_profiles[current_profile_index].deck_index, index)
        set_innerHTML(get_innerHTML('current_deck'), "Current deck: " + current_decks[current_profile.deck_index].name)
    }
}

function import_deck_popup_row_event(index){
    if(!importDeckRewardMap.getReward(ImportDeckRewardNames.CHANGE_DECK, index) && deck_import_index != index) {
        importDeckRewardMap.assignReward(ImportDeckRewardNames.CHANGE_DECK, index)
        increment_reward()
    }
    set_index(deck_import_index, index)
    set_innerHTML(get_innerHTML('deck_to_import'), "Deck to import: " + importable_decks[deck_import_index].name)
}

function export_deck_click_event(index) {
    const current_profile = current_profiles[current_profile_index]
    const current_decks = current_profile.decks
    if(!exportDeckRewardMap.getReward(ExportDeckRewardNames.EXPORT, index) && deck_export_index != index) {
        exportDeckRewardMap.assignReward(ExportDeckRewardNames.EXPORT, index)
        increment_reward()
    }
    if(current_decks.length > index){
        set_index(deck_export_index, 0)
        set_innerHTML(get_innerHTML('deck_to_export'), "Deck to export: " + current_decks[deck_export_index].name)
    }
}

function switch_profile_popup_click_event(index){
    if(current_profiles.length > index){
        if(!profileRewardMap.getReward(ProfileRewardNames.CHANGE_PROFILE, index) && switch_profile_index != index) {
            profileRewardMap.assignReward(ProfileRewardNames.CHANGE_PROFILE, index)
            increment_reward()
        }
        set_index(switch_profile_index, index)
        set_innerHTML(get_innerHTML('profile_to_open'), "Profile to open: " + current_profiles[switch_profile_index].name)
    }
}

function study_deck_popup_row_event(index){
    const current_profile = current_profiles[current_profile_index]
    const current_decks = current_profile.decks
    
    if(index < current_decks.length) {
        if(!studyDeckRewardMap.getReward(StudyDeckRewardNames.STUDY_DECK, index) && study_deck_temporary_index != index) {
            studyDeckRewardMap.assignReward(StudyDeckRewardNames.STUDY_DECK, index)
            increment_reward()
        }
        set_index(study_deck_temporary_index, index)
        set_innerHTML(get_innerHTML('deck_to_study'), current_decks[study_deck_temporary_index].name)
    }
}

for(let i = 0; i < 3; i++) {
    const import_deck_popup_rows = [import_deck_popup_row_1, import_deck_popup_row_2, import_deck_popup_row_3]
    provide_event_to_item(import_deck_popup_rows[i], function() {return import_deck_popup_row_event(i)})
}

for(let i = 0; i < 5; i++) {
    const export_deck_rows = [export_deck_popup_row_1, export_deck_popup_row_2, export_deck_popup_row_3,
        export_deck_popup_row_4, export_deck_popup_row_5]
    provide_event_to_item(export_deck_rows[i], function() {return export_deck_click_event(i)})
    const switch_profile_popup_rows = [switch_profile_popup_row_1, switch_profile_popup_row_2, switch_profile_popup_row_3,
        switch_profile_popup_row_4, switch_profile_popup_row_5]
    provide_event_to_item(switch_profile_popup_rows[i], function() {return switch_profile_popup_click_event(i)})
    const study_deck_popup_rows = [study_deck_popup_row_1,study_deck_popup_row_2,study_deck_popup_row_3,
        study_deck_popup_row_4,study_deck_popup_row_5]
    provide_event_to_item(study_deck_popup_rows[i], function() {return study_deck_popup_row_event(i)})
    const  main_page_rows = [deck_row_1, deck_row_2, deck_row_3, deck_row_4, deck_row_5]
    provide_event_to_item(main_page_rows[i], function() {return main_page_row_event(i)})
}

function import_deck_popup_cancel_button_event(){
    if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.IMPORT_DECK, 1)) {
        openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.IMPORT_DECK, 1)
        increment_reward()
    }
    make_invisible(importDeckPopup)
}

provide_event_to_item(import_deck_popup_cancel_button, import_deck_popup_cancel_button_event)

function import_deck_popup_help_button_event() {
    make_invisible(importDeckPopup)
    make_visible(leadsToExternalWebsitePopup)
    if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.LEADS_TO_EXTERNAL_WEBSITE, 0)) {
        openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.LEADS_TO_EXTERNAL_WEBSITE, 0)
        increment_reward()
    }
}

provide_event_to_item(import_deck_popup_help_button, import_deck_popup_help_button_event)

function export_deck_popup_help_button_event() {
    make_invisible(exportDeckPopup)
    make_visible(leadsToExternalWebsitePopup)
    if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.LEADS_TO_EXTERNAL_WEBSITE, 0)) {
        openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.LEADS_TO_EXTERNAL_WEBSITE, 0)
        increment_reward()
    }
}

provide_event_to_item(export_deck_popup_help_button, export_deck_popup_help_button_event)

function import_deck_popup_add_button_event() {
    const current_profile = current_profiles[current_profile_index]
    const current_decks = current_profile.decks
    if(current_decks.length == 5) {
        if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.AT_LEAST_ONE_DECK, 0)) {
            openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.AT_LEAST_ONE_DECK, 0)
            increment_reward()
        }
        make_visible(alreadyFiveDecksPopup)
        make_invisible(importDeckPopup)
        return
    }
    if(current_decks.includes(importable_decks[deck_import_index])) {
        if(!importDeckRewardMap.getReward(OpenClosePopupsRewardNames.DECK_ALREADY_EXISTS, 0)) {
            importDeckRewardMap.assignReward(OpenClosePopupsRewardNames.DECK_ALREADY_EXISTS, 0)
            increment_reward()
        }
        make_visible(deckExistsPopup)
        make_invisible(importDeckPopup)
        return
    }
    current_profiles[current_profile_index].decks.push(importable_decks[deck_import_index])
    if(!importDeckRewardMap.getReward(ImportDeckRewardNames.IMPORT_DECK, 0)) {
        importDeckRewardMap.assignReward(ImportDeckRewardNames.IMPORT_DECK, 0)
        increment_reward()
    }
    make_invisible(importDeckPopup)
    //loadMainPageDecks();
}

provide_event_to_item(import_deck_popup_add_button, import_deck_popup_add_button_event)

function rename_profile_button_event() {
    if(!profileRewardMap.getReward(ProfileRewardNames.RENAME_PROFILE, 1)) {
        profileRewardMap.assignReward(ProfileRewardNames.RENAME_PROFILE, 1)
        increment_reward()
    }
    modulo_index_increment(rename_profile_index, 5)
    set_innerHTML(get_innerHTML('rename_profile_popup_row'), profile_names[rename_profile_index])
}

provide_event_to_item(rename_profile_button, rename_profile_button_event)

function add_profile_button_event() {
    if(!profileRewardMap.getReward(ProfileRewardNames.ADD_PROFILE, 1)) {
        profileRewardMap.assignReward(ProfileRewardNames.ADD_PROFILE, 1)
        increment_reward()
    }
    modulo_index_increment(add_profile_index, 5)
    set_innerHTML(get_innerHTML('add_profile_popup_row'), profile_names[add_profile_index])
}

provide_event_to_item(add_profile_button, add_profile_button_event)

function preferences_page_help_button_event(){
    if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.LEADS_TO_EXTERNAL_WEBSITE, 0)) {
        openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.LEADS_TO_EXTERNAL_WEBSITE, 0)
        increment_reward()
    }
    make_invisible(preferencesPage)
    make_visible(leadsToExternalWebsitePopup)
}

provide_event_to_item(preferences_page_help_button, preferences_page_help_button_event)

function preferences_page_close_button_event() {
    if(!openClosePopupRewardMap.getReward(OpenClosePopupsRewardNames.PREFERENCES_PAGE, 1)) {
        openClosePopupRewardMap.assignReward(OpenClosePopupsRewardNames.PREFERENCES_PAGE, 1) 
        increment_reward()
    }
    make_invisible(preferencesPage)
}

provide_event_to_item(preferences_page_close_button, preferences_page_close_button_event)

function increment_counter(variable, value) {
    return variable += value
}

function click_counter(variable, increment, identifier){
    const newValue = increment_counter(variable, increment)
    set_innerHTML(get_innerHTML(identifier), newValue)
}

provide_event_to_item(increment_1, function() {return click_counter(preferences_page_counter_1, 1, 'counter_1')})
provide_event_to_item(decrement_1, function() {return increment_counter(preferences_page_counter_1, -1, 'counter_1')})
provide_event_to_item(increment_2, function() {return click_counter(preferences_page_counter_2, 1, 'counter_2')})
provide_event_to_item(decrement_2, function() {return increment_counter(preferences_page_counter_2, -1, 'counter_2')})
provide_event_to_item(increment_3, function() {return click_counter(preferences_page_counter_3, 1, 'counter_3')})
provide_event_to_item(decrement_3, function() {return increment_counter(preferences_page_counter_3, -1, 'counter_3')})
provide_event_to_item(increment_4, function() {return click_counter(preferences_page_counter_4, 1, 'counter_4')})
provide_event_to_item(decrement_4, function() {return increment_counter(preferences_page_counter_4, -1, 'counter_4')})
provide_event_to_item(increment_5, function() {return click_counter(preferences_page_counter_5, 1, 'counter_5')})
provide_event_to_item(decrement_5, function() {return increment_counter(preferences_page_counter_5, -1, 'counter_5')})

function loadMainPageDecks () {

}

//assign (de)selecting functionalities to the checkboxes
for (let i = 1; i <= 14; i++) {
        const checkboxes = [checkbox_1, checkbox_2, checkbox_3, checkbox_4, checkbox_5, checkbox_6, checkbox_7,
            checkbox_8, checkbox_9, checkbox_10, checkbox_11, checkbox_12, checkbox_13, checkbox_14]
        checkboxes[i-1].addEventListener("change", 
        (event) => {
            if(!preferencesPageRewardMap.getReward(PreferencesPageRewardNames.TAB, 0) && event.target.checked){
                preferencesPageRewardMap.assignReward(PreferencesPageRewardNames.CHECKBOX_ + ("i+1"), 0)
                increment_reward()
                return
            }
            else if(!preferencesPageRewardArray[i][1]){
                preferencesPageRewardMap.assignReward(PreferencesPageRewardNames.CHECKBOX_ + ("i+1"), 1)
                increment_reward()
                return
            }
        }
    )
}

function preferences_page_text_button_event(){
    if(!preferencesPageRewardMap.getReward(PreferencesPageRewardNames.TEXT_BUTTON, 0)) {
        preferencesPageRewardMap.assignReward(PreferencesPageRewardNames.TEXT_BUTTON, 0)
        increment_reward()
    }
    set_innerHTML(get_innerHTML('preferences_page_box_5'), "Text")
}

provide_event_to_item(preferences_page_text_button, preferences_page_text_button_event)

