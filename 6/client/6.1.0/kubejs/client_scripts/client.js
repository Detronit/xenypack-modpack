const MODPACK = 'XenyPack';

const TO_REMOVE_LIST = [

    // mek
    'mekanism:electric_bow',
    'mekanism:cardboard_box',
    'mekanism:atomic_disassembler',
    'mekanism:meka_tool',
    /mekanism:mekasuit_.+/,
    'mekanism:nutritional_liquifier',
    'mekanism:nutritional_paste_bucket',
    'mekanism:canteen',

    'twilightforest:uncrafting_table',
    /industrialforegoing:\w+_black_hole_tank/,
    /industrialforegoing:\w+_black_hole_unit/,
    'industrialforegoing:black_hole_controller',
    'industrialforegoing:biofuel_generator',
    'industrialforegoing:biofuel_bucket',
    'industrialforegoing:bioreactor',
    'industrialforegoing:fermentation_station',
    'industrialforegoing:fermented_ore_meat_bucket',
    'industrialforegoing:fluid_sieving_machine',
    'industrialforegoing:material_stonework_factory',
    'industrialforegoing:marine_fisher',
    'industrialforegoing:meat_feeder',
    /industrialforegoing:mycelial_\w+/,
    'industrialforegoing:ore_laser_base',
    'industrialforegoing:raw_ore_meat_bucket',
    'industrialforegoing:resourceful_furnace',
    'industrialforegoing:spores_recreator',
    'industrialforegoing:washing_factory',
    'industrialforegoing:potion_brewer',
    'immersive_aircraft:airship',
    'immersive_aircraft:cargo_airship',
    'immersive_aircraft:gyrodyne',
    /mekanismtools:(osmium|steel)_(pickaxe|axe|hoe|shovel|sword|helmet|boots|chestplate|leggings|shield)/,
    /mekanismtools:refined_glowstone_(helmet|boots|chestplate|leggings|shield)/,
    /extrastorage:(block|disk|storagepart)_.+/,
    /extrastorage:advanced_(importer|exporter)/,
    'buildinggadgets2:gadget_cut_paste',
    'buildinggadgets2:gadget_destruction',
    'buildinggadgets2:gadget_exchanging',
    'wstweaks:blaze_blade',
    'wstweaks:lava_blade',
// infinity
    'industrialforegoing:infinity_launcher',
    'industrialforegoing:infinity_drill',
    'industrialforegoing:infinity_saw',
    'industrialforegoing:infinity_hammer',
    'industrialforegoing:infinity_trident',
    'industrialforegoing:infinity_backpack',
]


ItemEvents.tooltip(event => {

	//pipes
	event.add('pipez:item_pipe', [
		[Text.of('Default:'), ' ', Text.of('4'), ' ', Text.of('items/20t')],
		[Text.of('Basic:'), ' ', Text.of('8'), ' ', Text.of('items/15t')],
		[Text.of('Improved:').gold(), ' ', Text.of('16').yellow(), ' ', Text.of('items/10t').gold()],
		[Text.of('Advanced:').darkAqua(), ' ', Text.of('32').aqua(), ' ', Text.of('items/5t').darkAqua()],
		[Text.of('Ultimate:').darkGray(), ' ', Text.of('64').gray(), ' ', Text.of('items/t').darkGray()],
		[Text.of('Infinity:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('items/t').darkPurple()],
	])
	event.add('pipez:fluid_pipe', [
		[Text.of('Default:'), ' ', Text.of('50'), ' ', Text.of('mB/t')],
		[Text.of('Basic:'), ' ', Text.of('100'), ' ', Text.of('mB/t')],
		[Text.of('Improved:').gold(), ' ', Text.of('500').yellow(), ' ', Text.of('mB/t').gold()],
		[Text.of('Advanced:').darkAqua(), ' ', Text.of('2,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
		[Text.of('Ultimate:').darkGray(), ' ', Text.of('10,000').gray(), ' ', Text.of('mB/t').darkGray()],
		[Text.of('Infinity:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('mB/t').darkPurple()],
	])
	event.add('pipez:gas_pipe', [
		[Text.of('Default:'), ' ', Text.of('200'), ' ', Text.of('mB/t')],
		[Text.of('Basic:'), ' ', Text.of('400'), ' ', Text.of('mB/t')],
		[Text.of('Improved:').gold(), ' ', Text.of('2,000').yellow(), ' ', Text.of('mB/t').gold()],
		[Text.of('Advanced:').darkAqua(), ' ', Text.of('8,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
		[Text.of('Ultimate:').darkGray(), ' ', Text.of('40,000').gray(), ' ', Text.of('mB/t').darkGray()],
		[Text.of('Infinity:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('mB/t').darkPurple()],
	])
	event.add('pipez:energy_pipe', [
		[Text.of('Default:'), ' ', Text.of('256'), ' ', Text.of('FE/t')],
		[Text.of('Basic:'), ' ', Text.of('1,024'), ' ', Text.of('FE/t')],
		[Text.of('Improved:').gold(), ' ', Text.of('8,192').yellow(), ' ', Text.of('FE/t').gold()],
		[Text.of('Advanced:').darkAqua(), ' ', Text.of('32,768').aqua(), ' ', Text.of('FE/t').darkAqua()],
		[Text.of('Ultimate:').darkGray(), ' ', Text.of('131,072').gray(), ' ', Text.of('FE/t').darkGray()],
		[Text.of('Infinity:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('FE/t').darkPurple()],
	])

	//upgrades
	event.add('pipez:basic_upgrade', [
		[Text.of('Item:'), ' ', Text.of('8'), ' ', Text.of('items/t')],
		[Text.of('Fluid:'), ' ', Text.of('100'), ' ', Text.of('mB/t')],
		[Text.of('Gas:'), ' ', Text.of('400'), ' ', Text.of('mB/t')],
		[Text.of('Energy:'), ' ', Text.of('1,024'), ' ', Text.of('FE/t')],
	])
	event.add('pipez:improved_upgrade', [
		[Text.of('Item:').gold(), ' ', Text.of('16').yellow(), ' ', Text.of('items/t').gold()],
		[Text.of('Fluid:').gold(), ' ', Text.of('500').yellow(), ' ', Text.of('mB/t').gold()],
		[Text.of('Gas:').gold(), ' ', Text.of('2,000').yellow(), ' ', Text.of('mB/t').gold()],
		[Text.of('Energy:').gold(), ' ', Text.of('8,192').yellow(), ' ', Text.of('FE/t').gold()],
	])
	event.add('pipez:advanced_upgrade', [
		[Text.of('Item:').darkAqua(), ' ', Text.of('32').aqua(), ' ', Text.of('items/t').darkAqua()],
		[Text.of('Fluid:').darkAqua(), ' ', Text.of('2,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
		[Text.of('Gas:').darkAqua(), ' ', Text.of('8,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
		[Text.of('Energy:').darkAqua(), ' ', Text.of('32,768').aqua(), ' ', Text.of('FE/t').darkAqua()],
	])
	event.add('pipez:ultimate_upgrade', [
		[Text.of('Item:').darkGray(), ' ', Text.of('64').gray(), ' ', Text.of('items/t').darkGray()],
		[Text.of('Fluid:').darkGray(), ' ', Text.of('10,000').gray(), ' ', Text.of('mB/t').darkGray()],
		[Text.of('Gas:').darkGray(), ' ', Text.of('40,000').gray(), ' ', Text.of('mB/t').darkGray()],
		[Text.of('Energy:').darkGray(), ' ', Text.of('131,072').gray(), ' ', Text.of('FE/t').darkGray()],
	])
	event.add('pipez:infinity_upgrade', [
		[Text.of('Item:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('items/t').darkPurple()],
		[Text.of('Fluid:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('mB/t').darkPurple()],
		[Text.of('Gas:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('mB/t').darkPurple()],
		[Text.of('Energy:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('FE/t').darkPurple()],
	])


    Color.DYE.forEach(d => {
        event.add('refinedstorage:' + d, 'Right click or craft with a dye to color');
    })

    TO_REMOVE_LIST.forEach(r => event.add(r, ['§6Recipe removed§r [modpack ' + MODPACK + ']']))

    event.add('immersiveengineering:capacitor_lv', [
        [Text.of('Capacity:'), ' ', Text.of('500').aqua(), ' ', Text.of('kFE')],
        [Text.of('Transfer rate:'), ' ', Text.of('2').gold(), ' ', Text.of('kFE/t')]
    ])
    event.add('immersiveengineering:capacitor_mv', [
        [Text.of('Capacity:'), ' ', Text.of('4').aqua(), ' ', Text.of('MFE')],
        [Text.of('Transfer rate:'), ' ', Text.of('8').gold(), ' ', Text.of('kFE/t')]
    ])
    event.add('immersiveengineering:capacitor_hv', [
        [Text.of('Capacity:'), ' ', Text.of('20').aqua(), ' ', Text.of('MFE')],
        [Text.of('Transfer rate:'), ' ', Text.of('32').gold(), ' ', Text.of('kFE/t')]
    ])
    event.add('immersiveengineering:wirecoil_copper', [
        [Text.of('Transfer rate:'), ' ', Text.of('2,048').gold(), ' ', Text.of('FE/t')]
    ])
    event.add('immersiveengineering:wirecoil_steel', [
        [Text.of('Transfer rate:'), ' ', Text.of('32,768').gold(), ' ', Text.of('FE/t')]
    ])
    event.add('immersiveengineering:wirecoil_electrum', [
        [Text.of('Transfer rate:'), ' ', Text.of('8,192').gold(), ' ', Text.of('FE/t')]
    ])


    event.add('powah:energy_cell_starter', [
        [Text.of('Capacity:'), ' ', Text.of('250').darkAqua(), ' ', Text.of('kFE')]
    ])
    event.add('powah:energy_cell_basic', [
        [Text.of('Capacity:'), ' ', Text.of('1').aqua(), ' ', Text.of('MFE')]
    ])
    event.add('powah:energy_cell_hardened', [
        [Text.of('Capacity:'), ' ', Text.of('4').aqua(), ' ', Text.of('MFE')]
    ])
    event.add('powah:energy_cell_blazing', [
        [Text.of('Capacity:'), ' ', Text.of('16').aqua(), ' ', Text.of('MFE')]
    ])
    event.add('powah:energy_cell_niotic', [
        [Text.of('Capacity:'), ' ', Text.of('50').aqua(), ' ', Text.of('MFE')]
    ])
    event.add('powah:energy_cell_spirited', [
        [Text.of('Capacity:'), ' ', Text.of('250').aqua(), ' ', Text.of('MFE')]
    ])
    event.add('powah:energy_cell_nitro', [
        [Text.of('Capacity:'), ' ', Text.of('1').gold(), ' ', Text.of('BFE')]
    ])

})


JEIEvents.hideItems(event => {
    event.hide(/extrastorage:advanced_(importer|exporter)/)
    event.hide('twilightforest:uncrafting_table')
    Color.DYE.forEach(color => {
        ['controller', 'creative_controller', 'grid', 'crafting_grid', 'pattern_grid', 'fluid_grid', 'network_receiver', 'network_transmitter', 'relay', 'detector', 'security_manager', 'wireless_transmitter', 'disk_manipulator', 'crafter', 'crafter_manager', 'crafting_monitor'].forEach(machine => {
            event.hide(`refinedstorage:${color}_${machine}`)
        })
    })
})
