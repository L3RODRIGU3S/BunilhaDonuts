<template>
    <div>
        <Picture />
    <p v-if="sou_cliente">Sou cliente!</p>
    <p v-else>Ainda não é premium? <a v-bind:href="assinar_premium" target="_blank">Assine aqui</a> e ganha uma caixa de donuts de brinde no primeiro pedido!</p>
</div>
</template>

<script>
import Picture from './Picture.vue'

export default {
    name: 'Info',
    components: {
    Picture
},
    data() {
        return {
            sou_cliente: false,
            assinar_premium: 'https://www.google.com/'
        }
    }
}
</script>
