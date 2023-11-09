// priority: 0
const MODPACK = 'XenyPack';


const TO_REMOVE_LIST = [

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
    /industrialforegoing:infinity_.+/
]

JEIEvents.hideItems(event => {
    // event.hide(/appliedenergistics2:facade/)
    event.hide(TO_REMOVE_LIST)
})

ItemEvents.tooltip(event => {
    Color.DYE.forEach(d => {
        event.add('refinedstorage:' + d, 'Right click or craft with a dye to color');
    })

    TO_REMOVE_LIST.forEach(r => event.add(r, ['§6Recipe removed§r [modpack ' + MODPACK + ']']))

    event.add('immersiveengineering:capacitor_lv', [
        [Text.of('Capacity:'), ' ', Text.of('100,000').aqua(), ' ', Text.of('FE')],
        [Text.of('Transfer rate:'), ' ', Text.of('256').gold(), ' ', Text.of('FE/t')]
    ])
    event.add('immersiveengineering:capacitor_mv', [
        [Text.of('Capacity:'), ' ', Text.of('1,000,000').aqua(), ' ', Text.of('FE')],
        [Text.of('Transfer rate:'), ' ', Text.of('1,024').gold(), ' ', Text.of('FE/t')]
    ])
    event.add('immersiveengineering:capacitor_hv', [
        [Text.of('Capacity:'), ' ', Text.of('4,000,000').aqua(), ' ', Text.of('FE')],
        [Text.of('Transfer rate:'), ' ', Text.of('4,096').gold(), ' ', Text.of('FE/t')]
    ])
    event.add('immersiveengineering:wirecoil_copper', [
        [Text.of('Transfer rate:'), ' ', Text.of('512').gold(), ' ', Text.of('FE/t')]
    ])
    event.add('immersiveengineering:wirecoil_steel', [
        [Text.of('Transfer rate:'), ' ', Text.of('32,768').gold(), ' ', Text.of('FE/t')]
    ])
    event.add('immersiveengineering:wirecoil_electrum', [
        [Text.of('Transfer rate:'), ' ', Text.of('4,096').gold(), ' ', Text.of('FE/t')]
    ])


    event.add('powah:energy_cell_starter', [
        [Text.of('Capacity:'), ' ', Text.of('100,000').aqua(), ' ', Text.of('FE')]
    ])
    event.add('powah:energy_cell_basic', [
        [Text.of('Capacity:'), ' ', Text.of('1,000,000').aqua(), ' ', Text.of('FE')]
    ])
    event.add('powah:energy_cell_hardened', [
        [Text.of('Capacity:'), ' ', Text.of('4,000,000').aqua(), ' ', Text.of('FE')]
    ])
    event.add('powah:energy_cell_blazing', [
        [Text.of('Capacity:'), ' ', Text.of('10,000,000').aqua(), ' ', Text.of('FE')]
    ])
    event.add('powah:energy_cell_niotic', [
        [Text.of('Capacity:'), ' ', Text.of('25,000,000').aqua(), ' ', Text.of('FE')]
    ])
    event.add('powah:energy_cell_spirited', [
        [Text.of('Capacity:'), ' ', Text.of('60,000,000').aqua(), ' ', Text.of('FE')]
    ])
    event.add('powah:energy_cell_nitro', [
        [Text.of('Capacity:'), ' ', Text.of('140,000,000').aqua(), ' ', Text.of('FE')]
    ])
})
