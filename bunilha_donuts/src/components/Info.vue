<template>
    <div>
    <ul>
        <Li>Lima</Li>
        <Li>Limão</Li>
        <Li>Limoneto</Li>
     </ul>

    <p v-if="sou_cliente">Sou cliente!</p>
    <p v-else>Ainda não é premium? <a v-bind:href="assinar_premium" target="_blank">Assine aqui</a> e ganha uma caixa de donuts de brinde no primeiro pedido!</p>
</div>
</template>

<script>
export default {
    name: 'Info',
    data() {
        return {
            sou_cliente: false,
            assinar_premium: 'https://www.google.com/'
        }
    }
}
</script>
