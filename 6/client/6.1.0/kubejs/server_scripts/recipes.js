// priority: 10

const MID = 'xenypack'

ServerEvents.recipes(e => {
    var TO_REMOVE_LIST = [
        'twilightforest:uncrafting_table',
        'mekanism:cardboard_box',
        /extrastorage:(block|disk|storagepart)_.+/,
        /extrastorage:advanced_(importer|exporter)/,
        'extradisks:infinite_storage_disk',
        'extradisks:infinite_storage_part',
        'extradisks:infinite_storage_block',
        'immersive_aircraft:gyrodyne',

        // mek
        // 'mekanism:electric_bow',
        'mekanism:atomic_disassembler',
        'mekanism:meka_tool',
        /mekanism:mekasuit_.+/,
        // 'mekanism:nutritional_liquifier',
        // 'mekanism:nutritional_paste_bucket',
        // 'mekanism:canteen',

        /industrialforegoing:infinity_.+/,
        // /industrialforegoing:\w+_black_hole_tank/,
        // /industrialforegoing:\w+_black_hole_unit/,
        // 'industrialforegoing:black_hole_controller',
        'industrialforegoing:biofuel_generator',
        'industrialforegoing:biofuel_bucket',
        'industrialforegoing:bioreactor',
        // 'industrialforegoing:fermentation_station',
        // 'industrialforegoing:fermented_ore_meat_bucket',
        // 'industrialforegoing:fluid_sieving_machine',
        // 'industrialforegoing:material_stonework_factory',
        // 'industrialforegoing:marine_fisher',
        'industrialforegoing:meat_feeder',
        // /industrialforegoing:mycelial_\w+/,
        // 'industrialforegoing:ore_laser_base',
        'industrialforegoing:raw_ore_meat_bucket',
        // 'industrialforegoing:resourceful_furnace',
        // 'industrialforegoing:spores_recreator',
        // 'industrialforegoing:washing_factory',
        // 'industrialforegoing:potion_brewer',
        'immersive_aircraft:airship',
        'immersive_aircraft:cargo_airship',
        /mekanismtools:(osmium|steel)_(pickaxe|axe|hoe|shovel|sword|helmet|boots|chestplate|leggings|shield)/,
        /mekanismtools:refined_glowstone_(helmet|boots|chestplate|leggings|shield)/,
        'buildinggadgets2:gadget_cut_paste',
        'buildinggadgets2:gadget_destruction',
        'buildinggadgets2:gadget_exchanging',
        'wstweaks:blaze_blade',
        'wstweaks:lava_blade',

    ]

    const TO_REMOVE_IDS = [
        'industrialforegoing:dissolution_chamber/infinity_launcher',
        'industrialforegoing:dissolution_chamber/infinity_drill',
        'industrialforegoing:dissolution_chamber/infinity_saw',
        'industrialforegoing:dissolution_chamber/infinity_hammer',
        'industrialforegoing:dissolution_chamber/infinity_trident',
        'industrialforegoing:dissolution_chamber/infinity_backpack',
    ]

    // to remove
    // TO_REMOVE_LIST.forEach(r => e.remove({ output: r }))
    // TO_REMOVE_IDS.forEach(r => e.remove({ id: r }))

    function shaped(result, pattern, ingredients, index) {
        e.remove({
            output: result,
        })
        e.shaped(result, pattern, ingredients).id(`${MID}_kubejs_${result.replace(' ', '_')}${index || ''}`)
    }

    function shapeless(result, ingredients, index) {
        e.remove({
            output: result,
            type: 'minecraft:crafting_shapeless'
        })
        e.shapeless(result, ingredients).id(`${MID}_kubejs_${result.replace(' ', '_')}${index || ''}`)
    }

    function shapedAdd(result, pattern, ingredients, index) {
        e.shaped(result, pattern, ingredients).id(`${MID}_kubejs_${result.replace(' ', '_')}${index || ''}`)
    }

    function shapelessAdd(result, ingredients, index) {
        e.shapeless(result, ingredients).id(`${MID}_kubejs_${result.replace(' ', '_')}${index || ''}`)
    }


    function id(text) {
        return (text + '').replace(/[^\w\d]/g, '')
    }

    function toolsClear(prefix) {
        e.remove({ output: `${prefix}_pickaxe` })
        e.remove({ output: `${prefix}_axe` })
        e.remove({ output: `${prefix}_shovel` })
        e.remove({ output: `${prefix}_hoe` })
        e.remove({ output: `${prefix}_sword` })
    }

    function tools(material, handle, prefix) {
        const ingredients = { A: material, S: handle || '#forge:rods/wooden' }
        shapedAdd(`${prefix}_pickaxe`, ['AAA', ' S ', ' S '], ingredients)
        shapedAdd(`${prefix}_axe`, ['AAA', 'AS ', ' S '], ingredients)
        shapedAdd(`${prefix}_shovel`, [' A ', ' S ', ' S '], ingredients)
        shapedAdd(`${prefix}_hoe`, ['AA ', ' S ', ' S '], ingredients)
        shapedAdd(`${prefix}_sword`, [' A ', ' A ', ' S '], ingredients)
    }

    function toolsWithAddition(material, prefix, additionalMaterial) {
        const ingredients = { A: material, S: '#forge:rods/wooden', X: additionalMaterial }
        shapedAdd(`${prefix}_pickaxe`, ['AAA', ' X ', ' S '], ingredients, id(additionalMaterial))
        shapedAdd(`${prefix}_axe`, ['AA ', 'AX ', ' S '], ingredients, id(additionalMaterial))
        shapedAdd(`${prefix}_shovel`, [' A ', ' X ', ' S '], ingredients, id(additionalMaterial))
        shapedAdd(`${prefix}_hoe`, ['AA ', ' X ', ' S '], ingredients, id(additionalMaterial))
        shapedAdd(`${prefix}_sword`, [' A ', ' A ', ' X '], {
            A: material,
            X: additionalMaterial
        }, id(additionalMaterial))
    }

    function armorClear(prefix) {
        e.remove({ output: `${prefix}_chestplate`, })
        e.remove({ output: `${prefix}_boots`, })
        e.remove({ output: `${prefix}_leggings`, })
        e.remove({ output: `${prefix}_helmet`, })
    }

    function armor(material, prefix) {
        const ingredients = { A: material };
        shapedAdd(`${prefix}_chestplate`, ['A A', 'AAA', 'AAA'], ingredients, '_b')
        shapedAdd(`${prefix}_boots`, ['   ', 'A A', 'A A'], ingredients, '_b')
        shapedAdd(`${prefix}_leggings`, ['AAA', 'A A', 'A A'], ingredients, '_b')
        shapedAdd(`${prefix}_helmet`, ['   ', 'AAA', 'A A'], ingredients, '_b')
    }

    function armorWithAddition(material, prefix, additionalMaterial) {
        const ingredients = { A: material, X: additionalMaterial };
        shapedAdd(`${prefix}_chestplate`, ['AXA', 'AAA', 'AAA'], ingredients, id(additionalMaterial))
        shapedAdd(`${prefix}_boots`, ['X  ', 'A A', 'A A'], ingredients, id(additionalMaterial))
        shapedAdd(`${prefix}_leggings`, ['AAA', 'AXA', 'A A'], ingredients, id(additionalMaterial))
        shapedAdd(`${prefix}_helmet`, ['X  ', 'AAA', 'A A'], ingredients, id(additionalMaterial))
    }

    // armorWithAddition('#forge:ingots/copper', 'mekanismtools:bronze', '#forge:ingots/tin')
    // toolsWithAddition('#forge:ingots/copper', 'mekanismtools:bronze', '#forge:ingots/tin')

    // armorClear('mekanismtools:refined_glowstone')
    // armorWithAddition('#forge:ingots/refined_glowstone', 'mekanismtools:refined_glowstone', '#forge:ingots/nickel')
    // armorWithAddition('#forge:ingots/refined_glowstone', 'mekanismtools:refined_glowstone', '#forge:gems/emerald')
    toolsClear('mekanismtools:refined_glowstone')
    // toolsWithAddition('#forge:ingots/refined_glowstone', 'mekanismtools:refined_glowstone', '#forge:ingots/nickel')
    // toolsWithAddition('#forge:ingots/refined_glowstone', 'mekanismtools:refined_glowstone', '#forge:gems/emerald')
    tools('#forge:ingots/refined_glowstone', '#forge:rods/blaze', 'mekanismtools:refined_glowstone')

    shaped('mekanism:teleportation_core', [
        'ECE',
        'GDG',
        'ACA'
    ], {
        A: '#forge:gems/lapis',
        C: 'mekanism:alloy_atomic',
        D: '#forge:gems/diamond',
        E: '#forge:ender_pearls',
        G: '#forge:gems/quartz',
    })

    shaped('waystones:return_scroll', [' E ', 'GDG', 'PPP'], {
        E: '#forge:ender_pearls',
        G: '#forge:nuggets/gold',
        P: '#forge:paper',
        D: '#forge:dyes/purple'
    })

    shaped('waystones:bound_scroll', ['DDD', 'GEG', 'PBP'], {
        E: '#forge:ender_pearls',
        G: '#forge:nuggets/gold',
        P: '#forge:paper',
        D: '#forge:dyes/purple',
        B: 'minecraft:compass'
    })

    shaped('waystones:warp_scroll', ['IDI', 'GEG', 'PBP'], {
        E: '#forge:ender_pearls',
        G: '#forge:nuggets/gold',
        I: '#forge:ingots/gold',
        P: '#forge:paper',
        D: '#forge:dyes/purple',
        B: 'minecraft:compass'
    })

    shaped('waystones:warp_stone', ['DED', 'ENE', 'DED'], {
        E: '#forge:ender_pearls',
        D: '#forge:dyes/purple',
        N: '#forge:ingots/netherite'
    })

    shaped('rsinfinitybooster:infinity_card', [
        'ECE',
        'CBC',
        'DDD'
    ], {
        E: 'minecraft:ender_eye',
        B: '#forge:storage_blocks/emerald',
        D: '#forge:gems/diamond',
        C: 'refinedstorage:range_upgrade',
    })

    shaped('rsinfinitybooster:dimension_card', [
        'ECE',
        'CRC',
        'DOD'
    ], {
        E: 'minecraft:ender_eye',
        C: 'rsinfinitybooster:infinity_card',
        R: '#forge:storage_blocks/redstone',
        D: '#forge:gems/diamond',
        O: '#forge:ingots/netherite',
    })


    //utility
    shapedAdd('minecraft:hopper', [
        'ILI',
        'ILI',
        ' I '
    ], {
        'L': '#minecraft:logs',
        'I': '#forge:ingots/iron'
    })//.id(`kubejs:hopper`)
    shapedAdd('16x minecraft:stick', [
        'L',
        'L'
    ], {
        'L': '#minecraft:logs'
    })//.id(`kubejs:sticks`)


    shapelessAdd('4x minecraft:clay_ball', 'minecraft:clay')
    shapelessAdd('4x minecraft:quartz', 'minecraft:quartz_block')

    shaped('immersive_aircraft:engine', [
        ' M ',
        'PBP',
        'SCS'
    ], {
        'M': 'minecraft:magma_block',
        'P': 'minecraft:piston',
        'B': 'minecraft:blast_furnace',
        'S': 'minecraft:cobblestone',
        'C': 'immersive_aircraft:boiler',
    })

    shaped('immersive_aircraft:biplane', [
        ' D ',
        'HGP',
        'HHE'
    ], {
        'D': '#forge:gems/diamond',
        'P': 'immersive_aircraft:propeller',
        'E': '#forge:ender_pearls',
        'G': 'immersive_aircraft:engine',
        'H': 'immersive_aircraft:hull',
    })

    shapedAdd('mekanism:atomic_disassembler', [
        'APA',
        'ECU',
        ' I '
    ], {
        'A': 'mekanism:alloy_atomic',
        'P': 'mekanismtools:netherite_paxel',
        'C': 'mekanism:elite_energy_cube',
        'E': Item.of('minecraft:enchanted_book').enchant('efficiency', 3).strongNBT().toJson(),
        'U': Item.of('minecraft:enchanted_book').enchant('unbreaking', 1).strongNBT().toJson(),
        'I': '#forge:ingots/netherite'
    })

    shaped('mekanism:meka_tool', [
        'ECU',
        'ADA',
        'PSP'
    ], {
        'A': 'mekanism:hdpe_sheet',
        'D': 'mekanism:atomic_disassembler',
        'C': 'mekanism:advanced_induction_cell',
        'E': 'minecraft:calibrated_sculk_sensor',
        'U': 'mekanism:teleportation_core',
        'S': 'minecraft:nether_star',
        'P': 'mekanism:pellet_polonium'
    })


    function energize(ingredient, result, power) {
        e.recipes.powah.energizing({
            ingredients: ingredient.map(i => Ingredient.of(i).toJson()),
            energy: power,
            result: result
        })
    }


    energize(['pipez:ultimate_upgrade', 'powah:ender_core'], 'pipez:infinity_upgrade', 2147483647)


    e.replaceInput(
        { output: 'aeinfinitybooster:infinity_card' },
        'minecraft:nether_star',
        '#forge:storage_blocks/emerald'
    )
    e.replaceInput(
        { output: 'aeinfinitybooster:dimension_card' },
        'minecraft:nether_star',
        'minecraft:experience_bottle'
    )

    // e.custom(
    //     {
    //         type: "lychee:anvil_crafting",
    //         item_in: [
    //             {
    //                 item: "apple"
    //             },
    //             {
    //                 item: "gold_ingot"
    //             }
    //         ],
    //         item_out: {
    //             item: "golden_apple"
    //         },
    //         level_cost: 1,
    //         material_cost: 8,
    //         post: {
    //             type: "prevent_default"
    //         }
    //     }
    // )
});

