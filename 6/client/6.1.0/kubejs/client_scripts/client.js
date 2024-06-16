const MODPACK = 'XenyPack';

const TO_REMOVE_LIST = [
    'twilightforest:uncrafting_table',
    'mekanism:cardboard_box',
    /^extrastorage:(block|disk|storagepart)_.+/,
    /^extrastorage:advanced_(importer|exporter)/,
    'extradisks:infinite_storage_disk',
    'extradisks:infinite_storage_part',
    'extradisks:infinite_storage_block',
    'immersive_aircraft:gyrodyne',
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
    TO_REMOVE_LIST.forEach(r => event.hide(r))
    event.hide(/enderio:(clear_glass|fused_quartz)_[dpnmea]+_.*/)
    event.hide('enderio:filled_soul_vial')


    Color.DYE.forEach(color => {
        ['controller', 'creative_controller', 'grid', 'crafting_grid', 'pattern_grid', 'fluid_grid', 'network_receiver', 'network_transmitter', 'relay', 'detector', 'security_manager', 'wireless_transmitter', 'disk_manipulator', 'crafter', 'crafter_manager', 'crafting_monitor'].forEach(machine => {
            event.hide(`refinedstorage:${color}_${machine}`)
        })
    })
})


REIEvents.groupEntries(event => {
    const suffixes = {
        '': '',
        'Iron': 'iron_',
        'Gold': 'gold_',
        'Diamond': 'diamond_',
        'Netherite': 'netherite_',
        'Copper': 'copper_',
    }

    const counterSymbols = {
        1: 'I', 2: 'II', 3: 'III', 4: 'IV'
    }

    for (let name in suffixes) {
        if (name) {
            let code = suffixes[name];

            event.groupSameItem(`kubejs:rei_groups/${MODPACK}/storage_${code}barrels`,
                (name ? `${name} ` : '') + 'Barrels',
                Item.of(`sophisticatedstorage:${code}barrel`),
            )

            event.groupSameItem(`kubejs:rei_groups/${MODPACK}/storage_${code}chests`,
                (name ? `${name} ` : '') + 'Chests',
                Item.of(`sophisticatedstorage:${code}chest`),
            )

            event.groupSameItem(`kubejs:rei_groups/${MODPACK}/storage_${code}shulker_boxes`,
                (name ? `${name} ` : '') + 'Shulker Box',
                Item.of(`sophisticatedstorage:${code}shulker_box`),
            )
        }
    }

    for (let count of [1, 2, 3, 4]) {
        for (let name in suffixes) {
            event.groupSameItem(`kubejs:rei_groups/${MODPACK}/storage_limited_${suffixes[name]}barrels_${count}`,
                `Limited ${name ? `${name} ` : ''}Barrels ${counterSymbols[count]}`,
                Item.of(`sophisticatedstorage:limited_${suffixes[name]}barrel_${count}`),
            )
        }
    }

    event.groupSameItem(`kubejs:rei_groups/${MODPACK}/quark_seed_pouch`, 'Seed Pouches', Item.of('quark:seed_pouch'))

    event.groupSameItem(`kubejs:rei_groups/${MODPACK}/suspicious_stew`, 'Suspicious Stews', Item.of('suspicious_stew'))

    event.groupItems(`kubejs:rei_groups/${MODPACK}/security_reinforced_blocks`, 'Reinforced Blocks', [
        /^securitycraft:reinforced_.*/,
    ])
})
