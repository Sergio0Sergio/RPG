'use strict'

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
***Бот добычи серебра в Дорпате***
1. В инвентаре должны находится снаряженными стальная кирка и пет. Бот использует инвентарь пета. 
    Больше ничего в инвентаре находиться не должно.
2. Поместите персонажа рядом с сундуком аутпоста Дорпата.
3. Запустите скрипт.
*/

function timer(ms){
    return new Promise(r=>setTimeout(r,ms));
   }

async function load () {

   var WALK_DELAY = 1750;
   var CHEST_DELAY = 2000;
   var SMALL_DELAY = 1300;
   var LONG_DELAY = 1500;

   var a;
   var b;
   var d;
   var e;


    while(true){

        players[0].path = findPathFromTo(players[0],{i: 79, j: 37} , players[0]);
        while(players[0].path.length != 0){
            await timer (WALK_DELAY);
        }

        players[0].path = findPathFromTo(players[0],{i: 71, j: 50} , players[0]);
        while(players[0].path.length != 0){
            await timer (WALK_DELAY);
        }

        players[0].path = findPathFromTo(players[0],{i: 70, j: 58} , players[0]);
        while(players[0].path.length != 0){
            await timer (WALK_DELAY);
        }

        players[0].path = findPathFromTo(players[0],{i: 72, j: 67} , players[0]);
        while(players[0].path.length != 0){
            await timer (WALK_DELAY);
        }

        players[0].path = findPathFromTo(players[0],{i: 74, j: 67} , players[0]);
        while(players[0].path.length != 0){
            await timer (WALK_DELAY);
        }

        players[0].path = findPathFromTo(players[0],{i: 74, j: 75} , players[0]);
        while(players[0].path.length != 0){
            await timer (WALK_DELAY);
        }

        players[0].path = findPathFromTo(players[0],{i: 72, j: 77} , players[0]);
        while(players[0].path.length != 0){
            await timer (WALK_DELAY);
        }

        selected_object = obj_g(on_map[current_map][71][77]);
        ActionMenu.act(0);
        while(players[0].temp.inventory.length < 40){
            await timer (WALK_DELAY);
        }

        await timer (LONG_DELAY);

        Timers.running("pet_chest_load") || (!players[0].temp.busy && pets[players[0].pet.id].params.inventory_slots > players[0].pet.chest.length && Socket.send("pet_chest_load", {}),
        Timers.set("pet_chest_load", null_function, 250))

        await timer (WALK_DELAY);

        

        selected_object = obj_g(on_map[current_map][71][77]);
        ActionMenu.act(0);
        while(players[0].temp.inventory.length < 40){
            await timer (WALK_DELAY);
        }

        players[0].path = findPathFromTo(players[0],{i: 74, j: 75} , players[0]);
        while(players[0].path.length != 0){
            await timer (WALK_DELAY);
        }

        players[0].path = findPathFromTo(players[0],{i: 74, j: 67} , players[0]);
        while(players[0].path.length != 0){
            await timer (WALK_DELAY);
        }

        players[0].path = findPathFromTo(players[0],{i: 72, j: 67} , players[0]);
        while(players[0].path.length != 0){
            await timer (WALK_DELAY);
        }

        players[0].path = findPathFromTo(players[0],{i: 70, j: 58} , players[0]);
        while(players[0].path.length != 0){
            await timer (WALK_DELAY);
         }

        players[0].path = findPathFromTo(players[0],{i: 71, j: 50} , players[0]);
        while(players[0].path.length != 0){
            await timer (WALK_DELAY);
        }

        players[0].path = findPathFromTo(players[0],{i: 78, j: 45} , players[0]);
        while(players[0].path.length != 0){
            await timer (WALK_DELAY);
        }

        players[0].path = findPathFromTo(players[0],{i: 79, j: 37} , players[0]);
        while(players[0].path.length != 0){
            await timer (WALK_DELAY);
        }

        players[0].path = findPathFromTo(players[0],{i: 83, j: 37} , players[0]);
        while(players[0].path.length != 0){
            await timer (WALK_DELAY);
        }

        selected_object = obj_g(on_map[current_map][83][38]);
        ActionMenu.act(0);

       b = 2;
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
        await timer (CHEST_DELAY);

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
        await timer (CHEST_DELAY);
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

        await timer (SMALL_DELAY);

        Timers.running("pet_chest_unload") || (!players[0].temp.busy && 0 < players[0].pet.chest.length && 40 > players[0].temp.inventory.length && Socket.send("pet_chest_unload", {}),
        Timers.set("pet_chest_unload", null_function, 250))

        await timer (SMALL_DELAY);

        selected_object = obj_g(on_map[current_map][83][38]);
        ActionMenu.act(0);
       b = 2;
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
        await timer (CHEST_DELAY);

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
        await timer (CHEST_DELAY);
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