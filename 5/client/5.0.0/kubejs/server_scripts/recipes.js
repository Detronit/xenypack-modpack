// priority: 10

console.info('Hello, World! (You will see this line every time server resources reload)')
const MID = 'xenypack'

ServerEvents.recipes(e => {
    var TO_REMOVE_LIST = [

        // mek
        'mekanism:electric_bow',
        'mekanism:cardboard_box',
        'mekanism:atomic_disassembler',

        // mek gen
        // 'mekanismgenerators:control_rod_assembly',
        // 'mekanismgenerators:electromagnetic_coil',
        // 'mekanismgenerators:fission_fuel_assembly',
        // 'mekanismgenerators:fission_reactor_casing',
        // 'mekanismgenerators:fission_reactor_logic_adapter',
        // 'mekanismgenerators:fission_reactor_port',
        // 'mekanismgenerators:fusion_fuel',
        // 'mekanismgenerators:fusion_reactor_controller',
        // 'mekanismgenerators:fusion_reactor_frame',
        // 'mekanismgenerators:fusion_reactor_logic_adapter',
        // 'mekanismgenerators:fusion_reactor_port',
        // 'mekanismgenerators:laser_focus_matrix',
        // 'mekanismgenerators:reactor_glass',
        // 'mekanismgenerators:rotational_complex',
        // 'mekanismgenerators:saturating_condenser',
        // 'mekanismgenerators:turbine_casing',
        // 'mekanismgenerators:turbine_rotor',
        // 'mekanismgenerators:turbine_valve',
        // 'mekanismgenerators:turbine_vent',
        // 'mekanismgenerators:hohlraum',
        'twilightforest:uncrafting_table',
        /industrialforegoing:infinity_.+/,
        /mekanismtools:(osmium|steel)_(pickaxe|axe|hoe|shovel|sword|helmet|boots|chestplate|leggings|shield)/,
        /mekanismtools:(lapis_lazuli)_(helmet|boots|chestplate|leggings)/,
        /extrastorage:(block|disk|storagepart)_.+/,

        // 'jaopca:mekanism.dust_to_ore.aluminum',
        // 'jaopca:mekanism.dust_to_ore.nickel',
        // 'jaopca:mekanism.dust_to_ore.amber',
        // 'jaopca:mekanism.dust_to_ore.silver',
        // 'jaopca:mekanism.dust_to_ore.zinc',
        // 'jaopca:mekanism.dust_to_ore.amethyst',
        // 'jaopca:mekanism.dust_to_ore.moonstone',
        // 'jaopca:mekanism.dust_to_ore.arcane_crystal',
        // 'jaopca:mekanism.dust_to_ore.quicksilver',
        // 'jaopca:mekanism.dust_to_ore.biotite',
        // 'jaopca:mekanism.dust_to_ore.fluorite',
        // 'mekanism:processing/copper/ore/from_dust',
        // 'mekanism:processing/lead/ore/from_dust',
        // 'mekanism:processing/gold/ore/from_dust',
        // 'mekanism:processing/gold/ore/nether_from_dust',
        // 'mekanism:processing/iron/ore/from_dust',
        // 'mekanism:processing/osmium/ore/from_dust',
        // 'mekanism:processing/tin/ore/from_dust',
        // 'mekanism:processing/uranium/ore/from_dust',
        // 'mekanism:processing/coal/to_ore',
        // 'mekanism:processing/diamond/to_ore',
        // 'mekanism:processing/emerald/to_ore',
        // 'mekanism:processing/fluorite/to_ore',
        // 'mekanism:processing/lapis_lazuli/to_ore',
        // 'mekanism:processing/netherite/dust_to_ancient_debris',
        // 'mekanism:processing/redstone/to_ore',
        // 'mekanism:processing/quartz/to_ore',
    ]

    // to remove
    TO_REMOVE_LIST.forEach(r => e.remove({output: r}))

    function shaped(result, pattern, ingredients, index) {
        e.remove({
            output: result,
        })
        e.shaped(result, pattern, ingredients).id(`${MID}_kubejs_${result}${index || ''}`)
    }

    function shapeless(result, ingredients, index) {
        e.remove({
            output: result,
            type: 'minecraft:crafting_shapeless'
        })
        e.shapeless(result, ingredients).id(`${MID}_kubejs_${result}${index || ''}`)
    }

    function shapedAdd(result, pattern, ingredients, index) {
        e.shaped(result, pattern, ingredients).id(`${MID}_kubejs_${result}${index || ''}`)
    }

    function shapelessAdd(result, ingredients, index) {
        e.shapeless(result, ingredients).id(`${MID}_kubejs_${result}${index || ''}`)
    }

    // function modifySmelt(result, ingridients) {
    // 	e.remove({
    // 		output: result,
    // 		type: 'minecraft:smelting'
    // 	})
    // 	e.smelting(result, ingridients).id(`${MID}_kubejs_${result}`)
    // }
    function crush(output, input) {
        e.recipes.mekanism.crushing((output), input)
    }

    function enrich(output, input) {
        e.recipes.mekanism.enriching((output), input)
    }


    function id(text) {
        return (text + '').replace(/[^\w\d]/g, '')
    }

    function toolsClear(suffix) {
        e.remove({output: `${suffix}_pickaxe`})
        e.remove({output: `${suffix}_axe`})
        e.remove({output: `${suffix}_shovel`})
        e.remove({output: `${suffix}_hoe`})
        e.remove({output: `${suffix}_sword`})
    }

    function tools(material, suffix) {
        const ingredients = {A: material, S: '#forge:rods/wooden'}
        shapedAdd(`${suffix}_pickaxe`, ['AAA', ' S ', ' S '], ingredients, '_b')
        shapedAdd(`${suffix}_axe`, ['AAA', 'AS ', ' S '], ingredients, '_b')
        shapedAdd(`${suffix}_shovel`, [' A ', ' S ', ' S '], ingredients, '_b')
        shapedAdd(`${suffix}_hoe`, ['AA ', ' S ', ' S '], ingredients, '_b')
        shapedAdd(`${suffix}_sword`, [' A ', ' A ', ' S '], ingredients, '_b')
    }

    function toolsWithAddition(material, suffix, additionalMaterial) {
        const ingredients = {A: material, S: '#forge:rods/wooden', X: additionalMaterial}
        shapedAdd(`${suffix}_pickaxe`, ['AAA', ' X ', ' S '], ingredients, id(additionalMaterial))
        shapedAdd(`${suffix}_axe`, ['AA ', 'AX ', ' S '], ingredients, id(additionalMaterial))
        shapedAdd(`${suffix}_shovel`, [' A ', ' X ', ' S '], ingredients, id(additionalMaterial))
        shapedAdd(`${suffix}_hoe`, ['AA ', ' X ', ' S '], ingredients, id(additionalMaterial))
        shapedAdd(`${suffix}_sword`, [' A ', ' A ', ' X '], {
            A: material,
            X: additionalMaterial
        }, id(additionalMaterial))
    }

    function armorClear(suffix) {
        e.remove({output: `${suffix}_chestplate`,})
        e.remove({output: `${suffix}_boots`,})
        e.remove({output: `${suffix}_leggings`,})
        e.remove({output: `${suffix}_helmet`,})
    }

    function armor(material, suffix) {
        const ingredients = {A: material};
        shapedAdd(`${suffix}_chestplate`, ['A A', 'AAA', 'AAA'], ingredients, '_b')
        shapedAdd(`${suffix}_boots`, ['   ', 'A A', 'A A'], ingredients, '_b')
        shapedAdd(`${suffix}_leggings`, ['AAA', 'A A', 'A A'], ingredients, '_b')
        shapedAdd(`${suffix}_helmet`, ['   ', 'AAA', 'A A'], ingredients, '_b')
    }

    function armorWithAddition(material, suffix, additionalMaterial) {
        const ingredients = {A: material, X: additionalMaterial};
        shapedAdd(`${suffix}_chestplate`, ['AXA', 'AAA', 'AAA'], ingredients, id(additionalMaterial))
        shapedAdd(`${suffix}_boots`, ['X  ', 'A A', 'A A'], ingredients, id(additionalMaterial))
        shapedAdd(`${suffix}_leggings`, ['AAA', 'AXA', 'A A'], ingredients, id(additionalMaterial))
        shapedAdd(`${suffix}_helmet`, ['X  ', 'AAA', 'A A'], ingredients, id(additionalMaterial))
    }

    armorWithAddition('#forge:ingots/copper', 'mekanismtools:bronze', '#forge:ingots/tin')
    toolsWithAddition('#forge:ingots/copper', 'mekanismtools:bronze', '#forge:ingots/tin')

    armorClear('mekanismtools:refined_glowstone')
    armorWithAddition('#forge:ingots/refined_glowstone', 'mekanismtools:refined_glowstone', '#forge:ingots/nickel')
    armorWithAddition('#forge:ingots/refined_glowstone', 'mekanismtools:refined_glowstone', '#forge:gems/emerald')
    toolsClear('mekanismtools:refined_glowstone')
    toolsWithAddition('#forge:ingots/refined_glowstone', 'mekanismtools:refined_glowstone', '#forge:ingots/nickel')
    toolsWithAddition('#forge:ingots/refined_glowstone', 'mekanismtools:refined_glowstone', '#forge:gems/emerald')

    shaped('mekanism:teleportation_core', [
        'ECE',
        'GDG',
        'ACA'
    ], {
        A: '#forge:gems/lapis',
        C: 'mekanism:alloy_atomic',
        D: '#forge:gems/diamond',
        E: 'minecraft:ender_eye',
        G: '#forge:ingots/gold',
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
        B: 'minecraft:blaze_powder'
    })

    shaped('waystones:warp_scroll', ['GDG', 'GEG', 'PBP'], {
        E: '#forge:ender_pearls',
        G: '#forge:nuggets/gold',
        P: '#forge:paper',
        D: '#forge:dyes/purple',
        B: 'minecraft:blaze_powder'
    })

    shaped('waystones:warp_stone', ['DED', 'ENE', 'DED'], {
        E: '#forge:ender_pearls',
        D: '#forge:dyes/purple',
        N: 'minecraft:netherite_scrap'
    })

    // shaped('buildinggadgets:gadget_building', [
    // 	'IRI',
    // 	'GRG',
    // 	'ILI'
    // ], {
    // 		L: '#forge:gems/lapis',
    // 		R: '#forge:dusts/redstone',
    // 		I: '#forge:ingots/iron',
    // 		G: '#forge:ingots/gold',
    // 	})

    // shaped('buildinggadgets:gadget_exchanging', [
    // 	'INI',
    // 	'DND',
    // 	'ILI'
    // ], {
    // 		D: '#forge:gems/diamond',
    // 		L: '#forge:gems/lapis',
    // 		I: '#forge:ingots/iron',
    // 		N: '#forge:ingots/netherite',
    // 	})

    // shaped('buildinggadgets:gadget_destruction', [
    // 	'INI',
    // 	'ENE',
    // 	'ILI'
    // ], {
    // 		E: '#forge:ender_pearls',
    // 		L: '#forge:gems/lapis',
    // 		I: '#forge:ingots/iron',
    // 		N: '#forge:ingots/netherite',
    // 	})

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
        D: '#forge:storage_blocks/diamond',
        O: '#forge:storage_blocks/onyx',
    })

    shapedAdd('rsinfinitybooster:dimension_card', [
        'ECE',
        'CRC',
        'DOD'
    ], {
        E: 'minecraft:ender_eye',
        C: 'rsinfinitybooster:infinity_card',
        R: '#forge:storage_blocks/redstone',
        D: '#forge:gems/diamond',
        O: '#forge:ingots/netherite',
    }, 2)


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

    // e.shaped('biomesoplenty:flesh', [
    // 	'FFF',
    // 	'FFF',
    // 	'FFF'
    // ], {
    // 		'F': 'minecraft:rotten_flesh',
    // 	}).id(`kubejs:bop_flesh`)


    shapelessAdd('4x minecraft:clay_ball', 'minecraft:clay')
    shapelessAdd('4x minecraft:quartz', 'minecraft:quartz_block')
    // e.shapeless('appliedenergistics2:interface', 'appliedenergistics2:cable_interface').id(`kubejs:ae_interface`)


    e.remove({id: 'minecraft:cake'})
    e.remove({id: 'minecraft:daylight_detector'})
    e.remove({id: 'minecraft:comparator'})
    e.remove({id: 'minecraft:beehive'})

    //special

    // modifySmelt('refinedstorage:silicon', '#appliedenergistics2:crystals/quartz')
    // e.remove({
    // 	id: 'appliedenergistics2:inscriber/silicon_print'
    // })
    // e.recipes.appliedenergistics2.inscriber({
    // 	mode: 'inscribe',
    // 	result: {
    // 		item: 'appliedenergistics2:printed_silicon'
    // 	},
    // 	ingredients: {
    // 		top: {
    // 			item: 'appliedenergistics2:silicon_press'
    // 		},
    // 		middle: {
    // 			tag: 'forge:silicon'
    // 		}
    // 	}
    // })

    e.recipes.industrialforegoing.dissolution_chamber({
        input: [{
            tag: 'minecraft:planks'
        }],
        inputFluid: '{FluidName:\'immersiveengineering:creosote\',Amount:125}',
        processingTime: 1,
        output: {
            item: 'immersiveengineering:treated_wood_horizontal',
            count: 1
        }
    })


    function energize(ingredient, result, power) {
        e.recipes.powah.energizing({
            ingredients: ingredient.map(i => Ingredient.of(i).toJson()),
            energy: power,
            result: Item.of(result).toResultJson()
        })
    }

    energize(['refinedstorage:wireless_grid'], 'refinedstorage:creative_wireless_grid', 2147483647)
    energize(['refinedstorage:wireless_fluid_grid'], 'refinedstorage:creative_wireless_fluid_grid', 2147483647)
    energize(['refinedstorage:wireless_crafting_monitor'], 'refinedstorage:creative_wireless_crafting_monitor', 2147483647)
    energize(['refinedstorageaddons:wireless_crafting_grid'], 'refinedstorageaddons:creative_wireless_crafting_grid', 2147483647)
    energize(['refinedstorage:portable_grid'], 'refinedstorage:creative_portable_grid', 2147483647)

    //Make bio fuel use tags instead of invidual items
    var bioFuels = [2, 4, 5, 7, 8]
    bioFuels.forEach(function (bioFuel) {
        e.recipes.mekanism.crushing(item.of('mekanism:bio_fuel', bioFuel), '#misctags:biofuel' + bioFuel)
    })


    crush(`4x minecraft:blaze_powder`, `#forge:rods/blaze`)
    enrich(`minecraft:blaze_rod`, `4x minecraft:blaze_powder`)

    /*
          function multicrush(output, input) {
              e.recipes.mekanism.crushing(output, input)
              e.recipes.create.crushing(output, input)
              e.recipes.immersiveengineering.crusher(output, input)
              e.recipes.thermal.pulverizer(output, input)
          }



          function unifyMetal(name, ingotItem, dustItem, blockItem, nuggetItem, dirtydustItem,
              dslurryFluid, cslurryFluid, crystalItem, shardItem, clumpItem
          ) {
              e.replaceOutput(`#forge:ingots/${name}`, ingotItem);
              e.replaceOutput(`#forge:dusts/${name}`, dustItem);
              e.replaceOutput(`thermal:${name}_dust`, dustItem);
              e.replaceOutput(`#forge:nuggets/${name}`, nuggetItem);
              e.replaceOutput(`#forge:storage_blocks/${name}`, blockItem);
              e.remove({
                  input: [`#forge:ores/${name}`, `#forge:dusts/${name}`],
                  output: `#forge:ingots/${name}`,
                  type: 'minecraft:smelting'
              });
              e.remove({
                  input: [`#forge:ores/${name}`, `#forge:dusts/${name}`],
                  output: `#forge:ingots/${name}`,
                  type: 'minecraft:blasting'
              });
              if (name !== 'iron' && name !== 'gold' && name !== 'azure_silver' && name !== 'crimson_iron') {
                  //console.log(`Removing enriching recipes for #forge:ores/${name} to mekanism:dust_${name}`);
                  e.remove({
                      input: `#forge:ores/${name}`,
                      output: `mekanism:dust_${name}`,
                      type: 'mekanism:enriching'
                  });
                  //console.log(`Removing enriching recipes for mekanism:dirty_dust_${name} to mekanism:dust_${name}`);
                  // e.remove({
                  // 	input: `mekanism:dirty_dust_${name}`,
                  // 	output: `mekanism:dust_${name}`,
                  // 	type: 'mekanism:enriching'
                  // });
                  e.remove({
                      input: dirtydustItem,
                      type: 'mekanism:enriching'
                  });
                  // e.shaped({
                  // 	input: dirtydustItem,
                  // 	output: dustItem,
                  // 	type: 'mekanism:enriching'
                  // });
                  // out, in
                  e.recipes.mekanism.enriching(dustItem, dirtydustItem)


                  //console.log(`Removing purifying recipes for #mekanism:clumps/${name} to mekanism:dirty_dust_${name}`);
                  e.remove({
                      input: `#mekanism:clumps/${name}`,
                      output: `mekanism:dirty_dust_${name}`,
                      type: 'mekanism:crushing'
                  });
                  //console.log(`Removing purifying recipes for #forge:ores/${name} to mekanism:clump_${name}`);
                  e.remove({
                      input: `#forge:ores/${name}`,
                      output: `mekanism:clump_${name}`,
                      type: 'mekanism:purifying'
                  });
                  //console.log(`Removing purifying recipes for mekanism:shard_${name} to mekanism:clump_${name}`);
                  e.remove({
                      input: `mekanism:shard_${name}`,
                      output: `mekanism:clump_${name}`,
                      type: 'mekanism:purifying'
                  });
                  //console.log(`Removing injecting recipes for #forge:ores/${name} to mekanism:shard_${name}`);
                  e.remove({
                      input: `#forge:ores/${name}`,
                      output: `mekanism:shard_${name}`,
                      type: 'mekanism:injecting'
                  });
                  //console.log("Removing injecting recipes for mekanism:crystals_" + name + " to mekanism:shard_" + name);
                  e.remove({
                      input: `#mekanism:crystals/${name}`,
                      output: `mekanism:shard_${name}`,
                      type: 'mekanism:injecting'
                  });
              }
              e.remove({
                  input: `#forge:ores/${name}`,
                  type: 'immersiveengineering:crusher'
              });
              e.remove({
                  input: `#forge:ingots/${name}`,
                  type: 'immersiveengineering:crusher'
              });
              e.recipes.minecraft.smelting(ingotItem, `#forge:dusts/${name}`).xp(0.5);
              e.recipes.minecraft.blasting(ingotItem, `#forge:dusts/${name}`).xp(0.5);
              // e.remove({
              // 	id: `appliedenergistics2:grinder/${name}_dust_ingot`
              // });
              // e.recipes.appliedenergistics2.grinder({
              // 	input: {
              // 		tag: `forge:ingots/${name}`
              // 	},
              // 	result: {
              // 		primary: {
              // 			item: dustItem,
              // 			count: 1
              // 		}
              // 	},
              // 	turns: 8
              // });
              e.recipes.immersiveengineering.crusher({
                  secondaries: [],
                  result: {
                      base_ingredient: {
                          item: dustItem
                      }
                  },
                  input: {
                      tag: `forge:ingots/${name}`
                  },
                  energy: 3000
              });

              if (!ingredient.of(`#forge:ores/${name}`).stacks.empty) {
                  e.recipes.minecraft.smelting(ingotItem, `#forge:ores/${name}`).xp(1);
                  e.recipes.minecraft.blasting(ingotItem, `#forge:ores/${name}`).xp(1);
                  e.recipes.mekanism.enriching(item.of(dustItem, 2), `#forge:ores/${name}`);
                  //This is here to stop crushing hammer recipes for modium from generating
                  e.recipes.immersiveengineering.crusher({
                      secondaries: [],
                      result: {
                          count: 2,
                          base_ingredient: {
                              item: dustItem
                          }
                      },
                      input: {
                          tag: `forge:ores/${name}`
                      },
                      energy: 3000
                  });
                  // e.remove({
                  // 	id: `appliedenergistics2:grinder/${name}_dust_ore`
                  // });
                  // e.recipes.appliedenergistics2.grinder({
                  // 	input: {
                  // 		tag: `forge:ores/${name}`
                  // 	},
                  // 	result: {
                  // 		primary: {
                  // 			item: dustItem,
                  // 			count: 2
                  // 		}
                  // 	},
                  // 	turns: 8
                  // });
              }
              e.replaceInput(nuggetItem, (`#forge:nuggets/${name}`));
              e.replaceInput(dustItem, (`#forge:dusts/${name}`));
              e.replaceInput(ingotItem, (`#forge:ingots/${name}`));
              e.replaceInput(blockItem, (`#forge:storage_blocks/${name}`));
          }

          function unifyCraftMetal(name, ingotItem, dustItem, blockItem, nuggetItem) {
              e.replaceInput(nuggetItem, (`#forge:nuggets/${name}`));
              e.replaceInput(dustItem, (`#forge:dusts/${name}`));
              e.replaceInput(ingotItem, (`#forge:ingots/${name}`));
              e.replaceInput(blockItem, (`#forge:storage_blocks/${name}`));
              e.replaceOutput(`#forge:ingots/${name}`, ingotItem);
              e.replaceOutput(`#forge:dusts/${name}`, dustItem);
              e.replaceOutput(`#forge:nuggets/${name}`, nuggetItem);
              e.replaceOutput(`#forge:storage_blocks/${name}`, blockItem);
          }

          function unifyDust(name, dustItem) {
              e.replaceInput(dustItem, (`#forge:dusts/${name}`));
              e.replaceOutput(`#forge:dusts/${name}`, dustItem);
          }

          unifyDust('diamond', 'mekanism:dust_diamond')
          unifyDust('emerald', 'mekanism:dust_emerald')
          unifyDust('lapis', 'mekanism:dust_lapis_lazuli')
          unifyDust('quartz', 'mekanism:dust_quartz')

          unifyCraftMetal('iron', 'minecraft:iron_ingot', 'mekanism:dust_iron', 'minecraft:iron_block', 'minecraft:iron_nugget');
          unifyCraftMetal('gold', 'minecraft:gold_ingot', 'mekanism:dust_gold', 'minecraft:gold_block', 'minecraft:gold_nugget');
          unifyCraftMetal('steel', 'mekanism:ingot_steel', 'mekanism:dust_steel', 'mekanism:block_steel', 'mekanism:nugget_steel');
          unifyCraftMetal('tin', 'mekanism:ingot_tin', 'mekanism:dust_tin', 'mekanism:block_tin', 'mekanism:nugget_tin');
          unifyCraftMetal('copper', 'mekanism:ingot_copper', 'mekanism:dust_copper', 'mekanism:block_copper', 'mekanism:nugget_copper');
          unifyCraftMetal('lead', 'mekanism:ingot_lead', 'mekanism:dust_lead', 'mekanism:block_lead', 'mekanism:nugget_lead');
      */
    // unifyMetal('nickel',
    // 	'immersiveengineering:ingot_nickel',
    // 	'immersiveengineering:dust_nickel',
    // 	'immersiveengineering:storage_nickel',
    // 	'immersiveengineering:nugget_nickel',
    // 	'jaopca:mekanism_dirty_dusts.nickel',
    // 	null,
    // 	null,
    // 	null,
    // 	null,
    // 	null,
    // );

    // unifyMetal('aluminum',
    // 	'immersiveengineering:ingot_aluminum',
    // 	'immersiveengineering:dust_aluminum',
    // 	'immersiveengineering:storage_aluminum',
    // 	'immersiveengineering:nugget_aluminum',
    // 	'jaopca:mekanism_dirty_dusts.aluminum',
    // 	null,
    // 	null,
    // 	null,
    // 	null,
    // 	null,
    // );

    // unifyMetal('silver',
    // 	'immersiveengineering:ingot_silver',
    // 	'immersiveengineering:dust_silver',
    // 	'immersiveengineering:storage_silver',
    // 	'immersiveengineering:nugget_silver',
    // 	'jaopca:mekanism_dirty_dusts.silver',
    // 	null, // 'alltheores:dirty_silver',
    // 	null, // 'alltheores:clean_silver',
    // 	'jaopca:mekanism_crystals.silver',
    // 	'jaopca:mekanism_shards.silver',
    // 	'jaopca:mekanism_clumps.silver',
    // );
    // 				(name, ingotItem, dustItem, blockItem, nuggetItem, dslurryFluid, cslurryFluid, crystalItem, shardItem, clumpItem, dirtydustItem)
    // unifyMetal('aluminum', 'alltheores:aluminum_ingot', 'alltheores:aluminum_dust', 'alltheores:aluminum_block', 'alltheores:aluminum_nugget', 'alltheores:dirty_aluminum', 'alltheores:clean_aluminum', 'alltheores:aluminum_crystal', 'alltheores:aluminum_shard', 'alltheores:aluminum_clump', 'dirty_aluminum_dust');
    // unifyMetal('copper', 'alltheores:copper_ingot', 'alltheores:copper_dust', 'alltheores:copper_block', 'alltheores:copper_nugget', 'alltheores:dirty_copper', 'alltheores:clean_copper', 'alltheores:copper_crystal', 'alltheores:copper_shard', 'alltheores:copper_clump', 'alltheores:dirty_copper_dust');
    // unifyMetal('lead', 'alltheores:lead_ingot', 'alltheores:lead_dust', 'alltheores:lead_block', 'alltheores:lead_nugget', 'alltheores:dirty_lead', 'alltheores:clean_lead', 'alltheores:lead_crystal', 'alltheores:lead_shard', 'alltheores:lead_clump', 'alltheores:dirty_lead_dust');

    // unifyMetal('platinum', 'alltheores:platinum_ingot', 'alltheores:platinum_dust', 'alltheores:platinum_block', 'alltheores:platinum_nugget', 'alltheores:dirty_platinum', 'alltheores:clean_platinum', 'alltheores:platinum_crystal', 'alltheores:platinum_shard', 'alltheores:platinum_clump', 'alltheores:dirty_platinum_dust');
    // unifyMetal('tin', 'alltheores:tin_ingot', 'alltheores:tin_dust', 'alltheores:tin_block', 'alltheores:tin_nugget', 'alltheores:dirty_tin', 'alltheores:clean_tin', 'alltheores:tin_crystal', 'alltheores:tin_shard', 'alltheores:tin_clump', 'alltheores:dirty_tin_dust');
    // unifyMetal('uranium', 'alltheores:uranium_ingot', 'alltheores:uranium_dust', 'alltheores:uranium_block', 'alltheores:uranium_nugget', 'alltheores:dirty_uranium', 'alltheores:clean_uranium', 'alltheores:uranium_crystal', 'alltheores:uranium_shard', 'alltheores:uranium_clump', 'alltheores:dirty_uranium_dust');
    // unifyMetal('zinc', 'alltheores:zinc_ingot', 'alltheores:zinc_dust', 'alltheores:zinc_block', 'alltheores:zinc_nugget', 'alltheores:dirty_zinc', 'alltheores:clean_zinc', 'alltheores:zinc_crystal', 'alltheores:zinc_shard', 'alltheores:zinc_clump', 'alltheores:dirty_zinc_dust');

});


ServerEvents.tags('block', event => {
    event.add('forge:storage_blocks/uraninite', 'powah:uraninite_block');
})

ServerEvents.tags('item', event => {
    // Get the #forge:cobblestone tag collection and add Diamond Ore to it
    // event.get('forge:cobblestone').add('minecraft:diamond_ore')
    // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
    // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
    event.add('forge:gems/dimensionalshard', 'rftoolsbase:dimensionalshard');
    // e.add('forge:seeds', ['immersiveengineering:seed']); //'bluepower:flax_seeds'
})
