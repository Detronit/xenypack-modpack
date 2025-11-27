// priority: 10

ServerEvents.recipes(e => {
    // to remove
    global.removedItems.forEach(r => e.remove({output: r}))

    function shaped(result, pattern, ingredients, index) {
        e.remove({
            output: result,
        })
        e.shaped(result, pattern, ingredients).id(`kubejs_${result.replace(' ', '_')}${index || ''}`)
    }

    function shapeless(result, ingredients, index) {
        e.remove({
            output: result,
            type: 'minecraft:crafting_shapeless'
        })
        e.shapeless(result, ingredients).id(`kubejs_${result.replace(' ', '_')}${index || ''}`)
    }

    function shapedAdd(result, pattern, ingredients, index) {
        e.shaped(result, pattern, ingredients).id(`kubejs_${result.replace(' ', '_')}${index || ''}`)
    }

    function shapelessAdd(result, ingredients, index) {
        e.shapeless(result, ingredients).id(`kubejs_${result.replace(' ', '_')}${index || ''}`)
    }


    function id(text) {
        return (text + '').replace(/[^\w\d]/g, '')
    }

    function toolsClear(prefix) {
        e.remove({output: `${prefix}_pickaxe`})
        e.remove({output: `${prefix}_axe`})
        e.remove({output: `${prefix}_shovel`})
        e.remove({output: `${prefix}_hoe`})
        e.remove({output: `${prefix}_sword`})
    }

    function tools(material, handle, prefix) {
        const ingredients = {A: material, S: handle || '#forge:rods/wooden'}
        shapedAdd(`${prefix}_pickaxe`, ['AAA', ' S ', ' S '], ingredients)
        shapedAdd(`${prefix}_axe`, ['AAA', 'AS ', ' S '], ingredients)
        shapedAdd(`${prefix}_shovel`, [' A ', ' S ', ' S '], ingredients)
        shapedAdd(`${prefix}_hoe`, ['AA ', ' S ', ' S '], ingredients)
        shapedAdd(`${prefix}_sword`, [' A ', ' A ', ' S '], ingredients)
    }

    function toolsWithAddition(material, prefix, additionalMaterial) {
        const ingredients = {A: material, S: '#forge:rods/wooden', X: additionalMaterial}
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
        e.remove({output: `${prefix}_chestplate`,})
        e.remove({output: `${prefix}_boots`,})
        e.remove({output: `${prefix}_leggings`,})
        e.remove({output: `${prefix}_helmet`,})
    }

    function armor(material, prefix) {
        const ingredients = {A: material};
        shapedAdd(`${prefix}_chestplate`, ['A A', 'AAA', 'AAA'], ingredients, '_b')
        shapedAdd(`${prefix}_boots`, ['   ', 'A A', 'A A'], ingredients, '_b')
        shapedAdd(`${prefix}_leggings`, ['AAA', 'A A', 'A A'], ingredients, '_b')
        shapedAdd(`${prefix}_helmet`, ['   ', 'AAA', 'A A'], ingredients, '_b')
    }

    function armorWithAddition(material, prefix, additionalMaterial) {
        const ingredients = {A: material, X: additionalMaterial};
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
    // toolsWithAddition('#forge:ingots/refined_glowstone', 'mekanismtools:refined_glowstone', '#forge:ingots/nickel')
    // toolsWithAddition('#forge:ingots/refined_glowstone', 'mekanismtools:refined_glowstone', '#forge:gems/emerald')

    toolsClear('mekanismtools:refined_glowstone')
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
        'DRD'
    ], {
        E: 'minecraft:ender_eye',
        B: 'powah:spirited_crystal_block',
        D: '#forge:gems/diamond',
        C: 'refinedstorage:range_upgrade',
        R: 'powah:blazing_crystal_block',
    })

    shaped('rsinfinitybooster:dimension_card', [
        'BNB',
        'EPE',
        'BNB'
    ], {
        E: 'minecraft:ender_eye',
        B: 'rsinfinitybooster:infinity_card',
        N: '#forge:ingots/netherite',
        P: '#forge:ingots/end_steel',
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
    shapelessAdd('minecraft:ender_pearl', '#endermanoverhaul:ender_pearls')
    shapelessAdd('4x ae2:fluix_covered_cable', 'ae2:fluix_covered_dense_cable')
    shapelessAdd('4x ae2:fluix_smart_cable', 'ae2:fluix_smart_dense_cable')

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
        'HH '
    ], {
        'D': '#forge:gems/diamond',
        'P': 'immersive_aircraft:propeller',
        'G': 'immersive_aircraft:engine',
        'H': 'immersive_aircraft:hull',
    })

    shaped('mekanism:atomic_disassembler', [
        'APA',
        'ECU',
        ' I '
    ], {
        'A': 'mekanism:alloy_atomic',
        'P': 'mekanismtools:netherite_paxel',
        'C': 'mekanism:elite_energy_cube',
        'E': Item.of('minecraft:enchanted_book').enchant('efficiency', 4).strongNBT().toJson(),
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

    shaped('entangled:block', [
        'EOE',
        'OSO',
        'TOT'
    ], {
        'E': 'minecraft:ender_eye',
        'O': '#forge:obsidian',
        'T': 'mekanism:teleportation_core',
        'S': 'ae2:singularity'
    })


    shaped('buildinggadgets2:gadget_cut_paste', [
        'IPI',
        'ESE',
        'ILI'
    ], {
        L: '#forge:gems/lapis',
        I: '#forge:ingots/iron',
        S: '#forge:tools/shears',
        E: '#forge:gems/emerald',
        P: '#forge:ender_pearls',
    })

    shaped('aeinfinitybooster:dimension_card', [
        'BNB',
        'EPE',
        'BNB'
    ], {
        E: 'minecraft:ender_eye',
        B: 'aeinfinitybooster:infinity_card',
        N: '#forge:ingots/netherite',
        P: 'powah:blazing_crystal_block',
    })

    shaped('aeinfinitybooster:infinity_card', [
        'EBE',
        'BSB',
        'DND'
    ], {
        E: 'minecraft:ender_eye',
        B: 'ae2:wireless_booster',
        D: '#forge:gems/diamond',
        N: 'powah:spirited_crystal_block',
        S: 'ae2:singularity',
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
        {output: 'buildinggadgets2:gadget_exchanging'},
        'minecraft:redstone',
        '#forge:ender_pearls'
    )

    e.custom({
        type: 'create:filling',
        ingredients: [
          {
            'tag': 'minecraft:planks'
          },
          {
            'fluidTag': 'forge:creosote',
            'amount': 125
          }
        ],
        results: [
          {
            'item': 'immersiveengineering:treated_wood_horizontal'
          }
        ]
      }).id(`kubejs:create/filling/treated_wood`)

    e.custom({
        "type": "industrialforegoing:fluid_extractor",
        "input": {
            "item": "integrateddynamics:menril_log"
        },
        "result": "integrateddynamics:menril_log_stripped",
        "breakChance": 0.010,
        "output": "{FluidName:\"integrateddynamics:menril_resin\",Amount:2}",
        "defaultRecipe": false
    }).id(`kubejs:industrialforegoing/fluid_extractor/menril`)
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

// EntityEvents.drops(event => {
//     var ind = event.drops.indexOf(d=>d.item == Item.of('minecraft:beef'))

//     console.info(`To drop from ${event.entity}: ${event.drops}`)
//     if (ind >= 0) {
//         event.drop.remove(ind)
//         console.info(`Dropped from ${event.entity} | ${event.drops.map(d=>d.item)} | ${beef} | ${Object.keys(event)}`)
//     }
// });
