/*
***Общая информация***

Все боты работают в последних версиях Chrome. В других браузерах тесты не проводились.
Все боты работают только в активном окне. Лучший вариант запустить игру в отдельном окне с единственной вкладкой.
Окно может находится под окнами других программ, но не должно быть свернуто. Свертывание окна приводит
к сбою очередности операций, из-за чего ваш персонаж может влететь в агрессивного моба.
За каптчей надо следить самому.

***Запуск скрипта***

Выполнив все условия из описания конкретного бота (см. ниже), скопируйте текст файла скрипта полностью (Ctrl + A, Ctrl + C),
откройте консоль Chrome (F12), вставьте текст скрипта из буфера обмена в консоль (Ctrl +) и нажмите Enter.
Бот начнет работу.

***Бот переплавки руды и продажи баров***

1. В инвентаре должны находится снаряженными: руда для переплавки (обязательно в первом слоте) и любой второй предмет 
   во втором слоте (я рекомендую пета или сапоги на скорость). Бот не использует инвентарь пета. 
   Больше ничего в инвентаре находиться не должно.
2. В скрипте необходимо правильно установить значения трех переменных:
    1. в переменную myResource - Id руды с которой будем работать.
    2. в переменную myOffer - Id бара который получится после переплавки.
    3. в переменную myOfferSlot - порядковый номер ячейки в магазине ювелира Дорпата, в котором находится наш бар.
        (Внимание, отсчет номера ячейки начинается с 0. Например, номер ячейки серебряного бара - 6 )
2. Поместите персонажа рядом с сундуком Дорпата.
3. Запустите скрипт.
*/

'use strict'

var SAND = 187;
var KAOLINITE_CLAY = 2913;

var TIN = 33;
var COPPER = 32;
var IRON = 31;
var COAL = 186;

var SILVER_CHUNK = 185;
var SILVER_BAR = 203;
var SILVER_BAR_SLOT = 6;
var GOLD_CHUNK = 184;
var WHITE_GOLD_CHUNK = 484;

var WALK_DELAY = 1350;
var CHEST_DELAY = 1350;
var SMALL_DELAY = 1250;

var a;
var b;
var d;
var e;

var myResource = SILVER_CHUNK;I    //Id руды с которой будем работать.
var myOffer = SILVER_BAR;          //Id бара который получится после переплавки.
var myOfferSlot = SILVER_BAR_SLOT; //Порядковый номер ячейки в магазине ювелира Дорпата.

function timer(ms) {
    return new Promise(r => setTimeout(r, ms));
}

async function load() {

    while (true) {



        selected_object = obj_g(on_map[current_map][22][17]);
        ActionMenu.act(0);
        await timer(SMALL_DELAY);

        b = players[0].temp.inventory[0];
        if ("undefined" != typeof b) {
            a = Math.min(40 - players[0].temp.inventory.length, Chest.player_chest_item_count(0, b.id));
            d = Math.min(InvMenu.last_withdraw_amount, a)
                , e = Chest.player_find_item_index(0, b.id);
            "undefined" != typeof Mods && Mods.Chestm.tempChest && (e = Mods.Chestm.tempChest[b.id]);
            Socket.send("chest_withdraw", {
                item_id: b.id,
                item_slot: e,
                target_id: chest_npc.id,
                target_i: chest_npc.i,
                target_j: chest_npc.j,
                amount: a
            })

        }

        players[0].path = findPathFromTo(players[0], { i: 22, j: 23 }, players[0]);
        while (players[0].path.length != 0) {
            await timer(WALK_DELAY);
        }

        selected_object = obj_g(on_map[current_map][22][24]);
        ActionMenu.act(0);
        while (players[0].temp.inventory[2].id == players[0].temp.inventory[0].id) {
            await timer(WALK_DELAY);
        }

        await timer(SMALL_DELAY);

        players[0].path = findPathFromTo(players[0], { i: 21, j: 17 }, players[0]);
        while (players[0].path.length != 0) {
            await timer(WALK_DELAY);
        }

        players[0].path = findPathFromTo(players[0], { i: 21, j: 12 }, players[0]);
        while (players[0].path.length != 0) {
            await timer(WALK_DELAY);
        }

       //await timer(SMALL_DELAY);

        selected_object = obj_g(on_map[current_map][21][11]);
        ActionMenu.act(0);

        
        Timers.running("shop_sell") || (Socket.send("shop_sell", {
            item_slot: myOfferSlot,
            target: shop_npc.id,
            all: true,
            item_id: myOffer
        }),

        Timers.set("shop_sell", null_function, 50))

        await timer(CHEST_DELAY);

        players[0].path = findPathFromTo(players[0], { i: 23, j: 17 }, players[0]);
        while (players[0].path.length != 0) {
            await timer(WALK_DELAY);
        }
    }
}        

load();