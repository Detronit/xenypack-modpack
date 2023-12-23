ServerEvents.tags('item', event => {
    // event.add('forge:plastic', 'pneumaticcraft:plastic')


    event.add('curios:back', ['mekanism:jetpack'])
    // event.add('curios:body', ['mekanism:free_runners'])

    event.add('forge:gems/dimensionalshard', 'rftoolsbase:dimensionalshard');
    // e.add('forge:seeds', ['immersiveengineering:seed']); //'bluepower:flax_seeds'
})

ServerEvents.tags('block', event => {
    // event.add('ae2:blacklisted/spatial','#forge:relocation_not_supported')
    event.add('forge:relocation_not_supported',
        [
            /productivebees:.+/,
            'minecraft:beehive',
            'minecraft:bee_nest',
            /cataclysm:.+/,
            /integrateddynamics:.+/,
            '@waystones'
        ])
    event.add('buildinggadgets:blacklist/generic', '#forge:relocation_not_supported')
    event.add('forge:storage_blocks/uraninite', 'powah:uraninite_block');

})

ServerEvents.tags('entity_type', event => {
    event.add('forge:bosses', [/cataclysm:.+/])
    event.add('kubejs:mob_blacklist', [/productivebees:.+/, '#forge:bosses'])
    event.add('mob_grinding_utils:no_swab', '#kubejs:mob_blacklist')
    event.add('mob_grinding_utils:no_spawn', '#kubejs:mob_blacklist')

    event.add('industrialforegoing:mob_duplicator_blacklist',
        ['#kubejs:mob_blacklist', 'minecraft:iron_golem', 'minecraft:villager', 'minecraft:wandering_trader', 'minecraft:evoker', 'minecraft:vindicator']
    )
    event.add('industrialforegoing:mob_crusher_blacklist', '#kubejs:mob_blacklist')
    event.add('industrialforegoing:mob_imprisonment_tool_blacklist', '#kubejs:mob_blacklist')
})



ServerEvents.tags('fluid', event => {
    event.remove('minecraft:water', [
        'createaddition:flowing_seed_oil', 'createaddition:seed_oil',
        'createaddition:flowing_bioethanol', 'createaddition:bioethanol'
    ])
})
