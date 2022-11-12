ServerEvents.recipes(event => {
  event.remove({ id: 'buildinggadgets:gadget_exchanging' })
  event.shaped('buildinggadgets:gadget_exchanging', ['IRI', 'DLD', 'EAE'], {
    I: '#forge:ingots/iron',
    R: '#forge:dusts/redstone',
    L: '#forge:gems/lapis',
    D: '#forge:gems/diamond',
    E: '#forge:end_stones',
    A: '#forge:storage_blocks/netherite'
  }).id('kubejs:buildinggadgets/gadget_exchanging')
})
