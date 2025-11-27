// priority: 0

// Visit the wiki for more info - https://kubejs.com/

global.modpack = 'XenyPack'
global.removedItems = [
    'twilightforest:uncrafting_table',
    'mekanism:cardboard_box',
    /^extrastorage:(block|disk|storagepart)_.+/,
    /^extrastorage:advanced_(importer|exporter)/,
    /^scalinghealth:.*/,
    'advanced_ae:quantum_chestplate',
    'advanced_ae:quantum_leggings',
    'advanced_ae:quantum_boots',
    'advanced_ae:quantum_helmet',
    'extradisks:infinite_storage_disk',
    'extradisks:infinite_storage_part',
    'extradisks:infinite_storage_block',
    'immersive_aircraft:gyrodyne',
    'ars_nouveau:glyph_animate_block',
    'utilitix:mob_yoinker',
    "expatternprovider:infinity_cell",
    'ae2:facade',
    /mysticalagriculture:.*augment/,
    /mysticalagriculture:(inferium|prudentium|tertium|imperium|supremium|awakened_supremium)_(sword|axe|pickaxe|hoe|shovel|bow|crossbow|sickle|scythe|helmet|chestplate|leggings|boots|shears|fishing_rod)/
]

global.hiddenItems = [
    {name: "enderio:soul_vials", hidden: 'enderio:filled_soul_vial', tagged: 'enderio:empty_soul_vial'},
    {name: "enderio:broken_spawners", hidden: 'enderio:broken_spawner', tagged: 'enderio:powered_spawner'},
    {name: "enderio:glass", hidden: /enderio:(clear_glass|fused_quartz)_[dpnmea]+_.*/, tagged: /enderio:(clear_glass|fused_quartz).*/},
    {name: "securitycraft:reinforced_blocks", hidden: /^securitycraft:reinforced_.*/, tagged: /^securitycraft:universal_block_reinforcer_lvl.*/}
]

WorldgenEvents.remove((event) => {
    console.info(global.modpack + ' startup')

    event.removeOres(props => {
        props.worldgenLayer = 'underground_ores';
        props.blocks = [
            "railcraft:lead_ore",
            "railcraft:deepslate_lead_ore",
            "railcraft:nickel_ore",
            "railcraft:deepslate_nickel_ore",
            "railcraft:tin_ore",
            "railcraft:deepslate_tin_ore",
            "railcraft:silver_ore",
            "railcraft:deepslate_silver_ore",
            "railcraft:zinc_ore",
            "railcraft:deepslate_zinc_ore",
            // "create:zinc_ore",
            // "create:deepslate_zinc_ore",
            "occultism:silver_ore",
            "occultism:silver_ore_deepslate",
            "bigreactors:yellorite_ore",
            "bigreactors:deepslate_yellorite_ore",
            "biggerreactors:uranium_ore",
            "biggerreactors:deepslate_uranium_ore",
            // "immersiveengineering:ore_aluminum",
            // "immersiveengineering:deepslate_ore_aluminum"
        ]
    })
})

// StartupEvents.registry('item', event => {
//     event.create('power_spark').displayName('§bPower Spark').texture('xp:item/power_spark');
//     event.create('meka_spark').displayName('§bMeka Spark').texture('xp:item/machine');
// })
