// priority: 0

// Visit the wiki for more info - https://kubejs.com/


WorldgenEvents.remove((event) => {
    console.warn('Xenypack startup')

    event.removeOres(props => {
        props.worldgenLayer = 'underground_ores';
        props.blocks = [
            // "railcraft:lead_ore",
            // "railcraft:deepslate_lead_ore",
            // "railcraft:nickel_ore",
            // "railcraft:deepslate_nickel_ore",
            // "railcraft:tin_ore",
            // "railcraft:deepslate_tin_ore",
            // "railcraft:silver_ore",
            // "railcraft:deepslate_silver_ore",
            // "railcraft:zinc_ore",
            // "railcraft:deepslate_zinc_ore",
            // "create:zinc_ore",
            // "create:deepslate_zinc_ore",
            // "occultism:silver_ore",
            // "occultism:silver_ore_deepslate",
            "biggerreactors:uranium_ore",
            "biggerreactors:deepslate_uranium_ore",
            // "eidolon:lead_ore",
            // "eidolon:deep_lead_ore",
            // "eidolon:silver_ore",
            // "eidolon:deep_silver_ore",
            // "immersiveengineering:ore_aluminum",
            // "immersiveengineering:deepslate_ore_aluminum"
        ]
    })
})

// StartupEvents.registry('item', event => {
//     event.create('power_spark').displayName('§bPower Spark').texture('xp:item/power_spark');
//     event.create('meka_spark').displayName('§bMeka Spark').texture('xp:item/machine');
// })
