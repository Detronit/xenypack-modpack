ServerEvents.recipes(event => {
    event.remove({type: 'mekanism:combining', id: /ore/})
})
