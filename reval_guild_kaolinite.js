/*
***Общая информация***

Все боты работают в последних версиях Chrome. В других браузерах тесты не проводились.
Все боты работают только в активном окне. Лучший вариант запустить игру в отдельном окне с единственной вкладкой.
Окно может находится под окнами других программ, но не должно быть свернуто. Свертывание окна приводит
к сбою очередности операций, из-за чего ваш персонаж может влететь в агрессивного моба.
За каптчей надо следить самому.

***Запуск скрипта***

Выполнив все условия из описания конкретного бота (см. ниже), скопируйте текст файла скрипта полностью (Ctrl + A, Ctrl + C),
откройте консоль Chrome (F12), вставьте текст скрипта из буфера обмена в консоль (Ctrl + V) и нажмите Enter.
Бот начнет работу.

***Бот добычи каолинита в Ревале***

1. В инвентаре должны находится снаряженными кирка, пет и пропуск в гильдию ювелиров. Бот использует инвентарь пета. 
   Больше ничего в инвентаре находиться не должно.
2. Поместите персонажа рядом с сундуком Ревала.
3. Запустите скрипт.
*/

'use strict'

function timer(ms) {
    return new Promise(r => setTimeout(r, ms));
}

async function load() {

    var WALK_DELAY = 2100;
    var CHEST_DELAY = 2000;
    var SMALL_DELAY = 1300;
    var LONG_DELAY = 1500;

    var a;
    var b;
    var d;
    var e;


    while (true) {

        players[0].path = findPathFromTo(players[0], { i: 16, j: 22 }, players[0]);
        while (players[0].path.length != 0) {
            await timer(WALK_DELAY);
        }

        players[0].path = findPathFromTo(players[0], { i: 21, j: 17 }, players[0]);
        while (players[0].path.length != 0) {
            await timer(WALK_DELAY);
        }

        players[0].path = findPathFromTo(players[0], { i: 25, j: 20 }, players[0]);
        while (players[0].path.length != 0) {
            await timer(WALK_DELAY);
        }
        players[0].path = findPathFromTo(players[0], { i: 29, j: 30 }, players[0]);
        while (players[0].path.length != 0) {
            await timer(WALK_DELAY);
        }

        players[0].path = findPathFromTo(players[0], { i: 36, j: 30 }, players[0]);
        while (players[0].path.length != 0) {
            await timer(WALK_DELAY);
        }

        players[0].path = findPathFromTo(players[0], { i: 36, j: 41 }, players[0]);
        while (players[0].path.length != 0) {
            await timer(WALK_DELAY);
        }

        players[0].path = findPathFromTo(players[0], { i: 40, j: 41 }, players[0]);
        while (players[0].path.length != 0) {
            await timer(WALK_DELAY);
        }

        players[0].path = findPathFromTo(players[0], { i: 40, j: 43 }, players[0]);
        while (players[0].path.length != 0) {
            await timer(WALK_DELAY);
        }

        players[0].path = findPathFromTo(players[0], { i: 49, j: 43 }, players[0]);
        while (players[0].path.length != 0) {
            await timer(WALK_DELAY);
        }

        players[0].path = findPathFromTo(players[0], { i: 49, j: 50 }, players[0]);
        while (players[0].path.length != 0) {
            await timer(WALK_DELAY);
        }

        players[0].path = findPathFromTo(players[0], { i: 49, j: 56 }, players[0]);
        while (players[0].path.length != 0) {
            await timer(WALK_DELAY);
        }

        selected_object = obj_g(on_map[current_map][48][56]);
        ActionMenu.act(0);

        await timer(WALK_DELAY);

        players[0].path = findPathFromTo(players[0], { i: 41, j: 60 }, players[0]);
        while (players[0].path.length != 0) {
            await timer(WALK_DELAY);
        }

        selected_object = obj_g(on_map[current_map][41][61]);
        ActionMenu.act(0);
        while (players[0].temp.inventory.length < 40) {
            await timer(WALK_DELAY);
        }

        await timer(LONG_DELAY);

        Timers.running("pet_chest_load") || (!players[0].temp.busy && pets[players[0].pet.id].params.inventory_slots > players[0].pet.chest.length && Socket.send("pet_chest_load", {}),
            Timers.set("pet_chest_load", null_function, 250))

        await timer(WALK_DELAY);

        selected_object = obj_g(on_map[current_map][41][61]);
        ActionMenu.act(0);
        while (players[0].temp.inventory.length < 40) {
            await timer(WALK_DELAY);
        }

        players[0].path = findPathFromTo(players[0], { i: 46, j: 56 }, players[0]);
        while (players[0].path.length != 0) {
            await timer(WALK_DELAY);
        }

        selected_object = obj_g(on_map[current_map][47][56]);
        ActionMenu.act(0);

        await timer(WALK_DELAY);

        players[0].path = findPathFromTo(players[0], { i: 49, j: 50 }, players[0]);
        while (players[0].path.length != 0) {
            await timer(WALK_DELAY);
        }

        players[0].path = findPathFromTo(players[0], { i: 49, j: 43 }, players[0]);
        while (players[0].path.length != 0) {
            await timer(WALK_DELAY);
        }

        players[0].path = findPathFromTo(players[0], { i: 40, j: 43 }, players[0]);
        while (players[0].path.length != 0) {
            await timer(WALK_DELAY);
        }

        players[0].path = findPathFromTo(players[0], { i: 40, j: 41 }, players[0]);
        while (players[0].path.length != 0) {
            await timer(WALK_DELAY);
        }

        players[0].path = findPathFromTo(players[0], { i: 36, j: 41 }, players[0]);
        while (players[0].path.length != 0) {
            await timer(WALK_DELAY);
        }

        players[0].path = findPathFromTo(players[0], { i: 36, j: 30 }, players[0]);
        while (players[0].path.length != 0) {
            await timer(WALK_DELAY);
        }

        players[0].path = findPathFromTo(players[0], { i: 29, j: 30 }, players[0]);
        while (players[0].path.length != 0) {
            await timer(WALK_DELAY);
        }

        players[0].path = findPathFromTo(players[0], { i: 25, j: 20 }, players[0]);
        while (players[0].path.length != 0) {
            await timer(WALK_DELAY);
        }

        players[0].path = findPathFromTo(players[0], { i: 16, j: 22 }, players[0]);
        while (players[0].path.length != 0) {
            await timer(WALK_DELAY);
        }

        players[0].path = findPathFromTo(players[0], { i: 16, j: 22 }, players[0]);
        while (players[0].path.length != 0) {
            await timer(WALK_DELAY);
        }

        players[0].path = findPathFromTo(players[0], { i: 14, j: 31 }, players[0]);
        while (players[0].path.length != 0) {
            await timer(WALK_DELAY);
        }

        selected_object = obj_g(on_map[current_map][14][32]);
        ActionMenu.act(0);
        b = 3;
        a = 40;


        await timer(CHEST_DELAY);
        d = players[0].temp.inventory[b];
        if ("undefined" != typeof d) {
            a = Math.min(a, Inventory.get_item_count(players[0], d.id));
            e = Chest.player_find_item_index(0, d.id);
            "undefined" != typeof Mods && Mods.Chestm.tempChest && (e = Mods.Chestm.tempChest[d.id]);
            Socket.send("chest_deposit", {
                item_id: d.id,
                item_slot: e,
                target_id: chest_npc.id,
                target_i: chest_npc.i,
                target_j: chest_npc.j,
                amount: a
            });
        }

        await timer(WALK_DELAY);

        Timers.running("pet_chest_unload") || (!players[0].temp.busy && 0 < players[0].pet.chest.length && 40 > players[0].temp.inventory.length && Socket.send("pet_chest_unload", {}),
            Timers.set("pet_chest_unload", null_function, 250))

        await timer(WALK_DELAY);

        selected_object = obj_g(on_map[current_map][83][38]);
        ActionMenu.act(0);
        b = 3;
        a = 40;

        d = players[0].temp.inventory[b];
        if ("undefined" != typeof d) {
            a = Math.min(a, Inventory.get_item_count(players[0], d.id));
            e = Chest.player_find_item_index(0, d.id);
            "undefined" != typeof Mods && Mods.Chestm.tempChest && (e = Mods.Chestm.tempChest[d.id]);
            Socket.send("chest_deposit", {
                item_id: d.id,
                item_slot: e,
                target_id: chest_npc.id,
                target_i: chest_npc.i,
                target_j: chest_npc.j,
                amount: a
            });
        }
        await timer(CHEST_DELAY);

        d = players[0].temp.inventory[b];
        if ("undefined" != typeof d) {
            a = Math.min(a, Inventory.get_item_count(players[0], d.id));
            e = Chest.player_find_item_index(0, d.id);
            "undefined" != typeof Mods && Mods.Chestm.tempChest && (e = Mods.Chestm.tempChest[d.id]);
            Socket.send("chest_deposit", {
                item_id: d.id,
                item_slot: e,
                target_id: chest_npc.id,
                target_i: chest_npc.i,
                target_j: chest_npc.j,
                amount: a
            });
        }


    }

}

load();
