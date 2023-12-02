// priority: 0

// Visit the wiki for more info - https://kubejs.com/


WorldgenEvents.remove((event) => {
  // May be one of the decoration types/levels described in worldgen.add docs
  // But ores are *most likely* to be generated in this one
    console.warn('xenypack startup')
    // event.printFeatures('underground_ores')
    event.removeFeatureById('underground_ores', 'bigreactors:yellorite_ore')
    event.removeFeatureById('underground_ores', 'bigreactors:yellorite_deepslate_ore')
    // minecraft:worldgen/placed_feature / bigreactors:yellorite_ore
    // minecraft:worldgen/placed_feature / bigreactors:yellorite_deepslate_ore

  })