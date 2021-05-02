// priority: 10

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', e => {
	var TO_REMOVE_LIST = [

		// mek
		'mekanism:electric_bow',
		'mekanism:cardboard_box',

		// mek gen
		'mekanismgenerators:control_rod_assembly',
		'mekanismgenerators:electromagnetic_coil',
		'mekanismgenerators:fission_fuel_assembly',
		'mekanismgenerators:fission_reactor_casing',
		'mekanismgenerators:fission_reactor_logic_adapter',
		'mekanismgenerators:fission_reactor_port',
		'mekanismgenerators:fusion_fuel',
		'mekanismgenerators:fusion_reactor_controller',
		'mekanismgenerators:fusion_reactor_frame',
		'mekanismgenerators:fusion_reactor_logic_adapter',
		'mekanismgenerators:fusion_reactor_port',
		'mekanismgenerators:laser_focus_matrix',
		'mekanismgenerators:reactor_glass',
		'mekanismgenerators:rotational_complex',
		'mekanismgenerators:saturating_condenser',
		'mekanismgenerators:turbine_casing',
		'mekanismgenerators:turbine_rotor',
		'mekanismgenerators:turbine_valve',
		'mekanismgenerators:turbine_vent',
		'mekanismgenerators:hohlraum',
        'twilightforest:uncrafting_table',
	]

	// to remove
	e.remove({ output: TO_REMOVE_LIST });

	function shaped(result, count, pattern, ingridients) {
		e.remove({
			output: result,
		})
		e.shaped(item.of(result, count),
			pattern,
			ingridients
		).id(`${MID}_kubejs_${result}`)
	}
	function shapeless(result, count, ingridients) {
		e.remove({
			output: result,
			type: 'minecraft:crafting_shapeless'
		})
		e.shapeless(item.of(result, count), ingridients).id(`${MID}_kubejs_${result}`)
	}
	function modifySmelt(result, ingridients) {
		e.remove({
			output: result,
			type: 'minecraft:smelting'
		})
		e.smelting(result, ingridients).id(`${MID}_kubejs_${result}`)
	}
    function crush(output, input) {
        e.recipes.mekanism.crushing((output), input)
    }
    function enrich(output, input) {
        e.recipes.mekanism.enriching((output), input)
    }

	// recipes
	shaped('mekanism:atomic_disassembler', 1, [
		'ATA',
		'ACA',
		' B '
	], {
			A: 'mekanism:alloy_infused',
			T: 'mekanism:energy_tablet',
			C: 'mekanism:alloy_atomic',
			B: 'minecraft:bedrock',
		})

	shaped('mekanism:teleportation_core', 1, [
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

	shaped('buildinggadgets:gadget_building', 1, [
		'IRI',
		'GRG',
		'ILI'
	], {
			L: '#forge:gems/lapis',
			R: '#forge:dusts/redstone',
			I: '#forge:ingots/iron',
			G: '#forge:ingots/gold',
		})

	shaped('buildinggadgets:gadget_exchanging', 1, [
		'INI',
		'DND',
		'ILI'
	], {
			D: '#forge:gems/diamond',
			L: '#forge:gems/lapis',
			I: '#forge:ingots/iron',
			N: '#forge:ingots/netherite',
		})

	shaped('buildinggadgets:gadget_destruction', 1, [
		'INI',
		'ENE',
		'ILI'
	], {
			E: '#forge:ender_pearls',
			L: '#forge:gems/lapis',
			I: '#forge:ingots/iron',
			N: '#forge:ingots/netherite',
		})

	//utility
	e.shaped('minecraft:hopper', [
		'ILI',
		'ILI',
		' I '
	], {
			'L': '#minecraft:logs',
			'I': '#forge:ingots/iron'
		}).id(`kubejs:hopper`)
	e.shaped('16x minecraft:stick', [
		'L',
		'L'
	], {
			'L': '#minecraft:logs'
		}).id(`kubejs:sticks`)

	e.shaped('biomesoplenty:flesh', [
		'FFF',
		'FFF',
		'FFF'
	], {
			'F': 'minecraft:rotten_flesh',
		}).id(`kubejs:bop_flesh`)




	e.shapeless('4x minecraft:clay_ball', 'minecraft:clay').id(`kubejs:clay`)
	e.shapeless('4x minecraft:quartz', 'minecraft:quartz_block').id(`kubejs:quartz`)
    e.shapeless('appliedenergistics2:interface', 'appliedenergistics2:cable_interface').id(`kubejs:ae_interface`)


	//special

	modifySmelt('refinedstorage:silicon', '#appliedenergistics2:crystals/quartz')
	e.remove({
		id: 'appliedenergistics2:inscriber/silicon_print'
	})
	e.recipes.appliedenergistics2.inscriber({
		mode: 'inscribe',
		result: {
			item: 'appliedenergistics2:printed_silicon'
		},
		ingredients: {
			top: {
				item: 'appliedenergistics2:silicon_press'
			},
			middle: {
				tag: 'forge:silicon'
			}
		}
	})

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
    utils.listOf(bioFuels).forEach(function(bioFuel) {
        e.recipes.mekanism.crushing(item.of('mekanism:bio_fuel', bioFuel), '#misctags:biofuel' + bioFuel)
    })

	
    crush(`4x minecraft:blaze_powder`, `#forge:rods/blaze`)
    enrich(`minecraft:blaze_rod`, `4x minecraft:blaze_powder`)
});












onEvent('item.tags', e => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')
	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
	e.add('forge:gems/dimensionalshard', 'rftoolsbase:dimensionalshard');
    e.add('forge:storage_blocks/uraninite', 'powah:uraninite_block');
    e.add('forge:seeds', ['immersiveengineering:seed']); //'bluepower:flax_seeds'
})