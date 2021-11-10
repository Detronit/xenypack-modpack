// priority: 0
const MODPACK = 'XenyPack';
var colors = [
    'white',
    'light_gray',
    'gray',
    'black',
    'red',
    'orange',
    'yellow',
    'lime',
    'green',
    'light_blue',
    'cyan',
    'blue',
    'purple',
    'magenta',
    'pink',
    'brown'
];

var refined = [
    'controller',
    'creative_controller',
    'grid',
    'crafting_grid',
    'pattern_grid',
    'fluid_grid',
    'network_receiver',
    'network_transmitter',
    'relay',
    'detector',
    'security_manager',
    'wireless_transmitter',
    'disk_manipulator',
    'crafter',
    'crafter_manager',
    'crafting_monitor'
];

onEvent('jei.hide.items', event => {
    // Hide items in JEI here
    event.hide([
        'mekanism:electric_bow',
        /appliedenergistics2:facade/,
        /industrialforegoing:infinity_.+/
    ])

    colors.forEach(color => {
        refined.forEach(refin => {
            event.hide([
                'refinedstorage:' + color + '_' + refin
            ]);
        });
    });
})


onEvent('item.tooltip', e => {

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
        /industrialforegoing:infinity_.+/
    ]

    refined.forEach(refin => {
        e.add('refinedstorage:' + refin, 'Right click or craft with a dye to color');
    });
    e.add('mekanism:atomic_disassembler', ['§6Recipe changed to creative only§r [modpack ' + MODPACK + ']']);
    e.add(TO_REMOVE_LIST, ['§6Recipe removed§r [modpack ' + MODPACK + ']']);
});